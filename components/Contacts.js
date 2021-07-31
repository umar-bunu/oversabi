import {useState, useEffect, useRef} from 'react'
import firebase from '../lib/firebase'
import firebase2 from 'firebase' 
import {useAuthState} from "react-firebase-hooks/auth";
import FlipMove from 'react-flip-move'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';
import styles from '../styles/contacts.module.css'

function Contacts() {
    const messageToSend = useRef('')
    const [messages, setmessages] = useState([])
    const [selectedChat, setselectedChat] = useState(null)
    const [singleMessages, setsingleMessages] = useState([])
    const [user, loading, error] = useAuthState(firebase.auth());
    var isloading = false;
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    async function getContacts() {
        try {
            
       firebase.firestore().collection("messages").where('users','array-contains',user.email).orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
                setmessages(Array.from(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))))
            setsingleMessages(Array.from(snapshot.docs.map(doc => doc.data().project)).filter(unique))
            
        if(isloading == false){
            isloading= true;
          
            setselectedChat((Array.from(snapshot.docs.map(doc => ({data: doc.data()})))[0]))}    
            })
        } catch (e) {
            console.log("get contacts error " + e)
           alert(e.message)
        }
    }
    useEffect(() => {
        if (!loading && user != null && user != undefined) 
            getContacts()

        

        return() => {}
    }, [user])

    const hangleSendMessage = async()=>{
        try{
            
            if(messageToSend.current.value){
                await firebase.firestore().collection('messages').add({
                    message:messageToSend.current.value,
                    sender:user.email,
                    receiver: selectedChat.data.receiver==user.email? selectedChat.data.sender:selectedChat.data.receiver,
                    project: selectedChat.data.project,
                    timeStamp:firebase2.firestore.FieldValue.serverTimestamp(),
                    users:[user.email,(selectedChat.data.receiver==user.email)? selectedChat.data.sender:selectedChat.data.receiver]
                })
}
          
        }
        catch(e){
            console.log(e)
        }
    }

    return (
       user!=null && user!=undefined? <div className={
        styles.main__div
    }>
        <div className={styles.secondary__div}>{singleMessages.map((doc, index)=><button key={index} className={styles.btn} onClick={()=>{setselectedChat({data:messages.filter(item=>item.data.project==doc && item.data.sender==user.email)[0].data})}}>{doc}</button>)}
      </div>
           <div style={{width:'100%'}}><div style={{width:'100%'}}>
               <FlipMove  className={styles.message__box}>
               {
              selectedChat &&  messages.filter(item=>item.data.project==selectedChat.data.project).map(singleItem=><div className={singleItem.data.sender ==user.email?styles.sender__div:styles.receiver__div} key={singleItem.id}>{singleItem.data.message}</div>)}
               </FlipMove>
              <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>  
                    <input ref={messageToSend} className={styles.input__text} type="text"  />
                   <IconButton onClick={hangleSendMessage} className={styles.send__icon}> <SendRoundedIcon style={{ fontSize: 40 }}  color="primary"/></IconButton>
                   </div>
                   
         </div></div>

    </div>: <div>Loading.... Please wait</div>
    )
}

export default Contacts

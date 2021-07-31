import {useRouter} from "next/router";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useState, useEffect, useRef} from "react";
import firebase2 from 'firebase' 

import firebase from '../lib/firebase'
import styles from '../styles/adminPanel.module.css'

function adminPanel(props) {
        const [isAdmin, setisAdmin] = useState('')
        const router = useRouter();
        const [works, setworks] = useState([])
        const [user, loading, error] = useAuthState(firebase.auth())
        const [selectedItem, setselectedItem] = useState('')
        const [workers, setworkers] = useState([])
        if (!loading && (user == undefined || user == null)) {

            router.push('/404')
        }
        const getUser = async () => {
            try {

                const workerDocs = await firebase.firestore().collection('admins').where('email', '==', user.email).get()
                setisAdmin((workerDocs.docs.filter(item => item.data().email == user.email).length >= 1) ? true : false);

                if (!(workerDocs.docs.filter(item => item.data().email == user.email).length >= 1)) 
                    router.push('/404')
            } catch (e) {
                router.push('/404')
                console.log(e.message)
            }
        }

        const getData = async () => {
        try{
              firebase.firestore().collection('works').onSnapshot(snapshot=>{
                setworks(Array.from(snapshot.docs.map(item=>({id:item.id, data:item.data()}))))
            })
            // const works = await firebase.firestore().collection('works').get()
            // setworks(Array.from(works.docs.map(item => ({id: item.id, data: item.data()}))))
          }
        catch(e){
            alert(e.message)
            console.log(e)}   
        }
        const getWorkers = async() => {
            try{
                const workerDocs = await firebase.firestore().collection('workers').get()
                setworkers(Array.from(workerDocs.docs.map(item => ({email: item.data().email}))))
              }
            catch(e){
                alert(e.message)
                console.log(e)}   
            
        }
        useEffect(() => {
            if (user) {
                getUser()
                getData()
                getWorkers()
            }
            return() => {}
        }, [user])
        const handleSave = async(id, customer, projectName)=>{
          if(selectedItem.length>=6){
            try{
           
                firebase.firestore().collection('works').doc(id).set({
                    Worker:selectedItem
                }, {merge: true})
                firebase.firestore().collection('messages').add({
                    message:'hi',
                    sender:customer,
                    receiver: selectedItem,
                    project: projectName,
                    timeStamp:firebase2.firestore.FieldValue.serverTimestamp(),
                    users:[customer,selectedItem]
                
                }) 
                firebase.firestore().collection('messages').add({
                    message:'hi',
                    sender: selectedItem,
                    receiver: customer,
                    project: projectName,
                    timeStamp:firebase2.firestore.FieldValue.serverTimestamp(),
                    users:[customer,selectedItem]
                
                }) 
               }
               catch(e){
                   alert(e.message)
               }
          }
        }

        const handleConfirm = (docId) =>{
          try{
                firebase.firestore().collection('works')
                .doc(docId).set({
                        isPaid: true
                }, {merge: true})     
                }
                catch(e){
                    alert(e.message)
                   }
            
        }

        return isAdmin ? (<div className={
            styles.main__div
        }>
            <div className={styles.workers__list}>
                 <strong>List of Workers</strong>
                 {workers.map(worker=><div><a href={"mailto:"+worker.email}>{worker.email}</a><br /></div>)}
                 </div>
            <div className={styles.body__div}><div className={styles.section__header}>Projects awaiting confirmation</div>
                <div className={styles.grid__container}>
                {
                works.filter(work => work.data.isPaid==false).map(singleWork =>
                            < div className={styles.grid__item} key={singleWork.id}>
                                <div className={styles.grid__item__title}>{singleWork.data.title}</div>
                                  Customer email: {singleWork.data.customer} <br />
                                  Phone: {singleWork.data.phoneNo} <br />
                                  receipt: <a className={styles.a__tag} href={singleWork.data.paymentReceipt}>Click to view</a>&nbsp; <button onClick={()=>{handleConfirm(singleWork.id)}} className={styles.confirm__btn}>Confirm Payment</button> <br />
                                  Due date: {singleWork.data.dueDate} <br />
                                  Project detail: <a className={styles.a__tag} href={singleWork.data.customerDoc}>Click to view</a> <br />
                                  Domain: {singleWork.data.domain} <br />
                                  Tools: {singleWork.data.tools} <br />
                                  Service type: {singleWork.data.serviceType} <br />
                                  {singleWork.data.Worker.length>=1? <>Assigned worker: {singleWork.data.Worker}</>:
                                  <><input onChange={(e)=>{setselectedItem(e.target.value)}} onFocus={(e)=>{ setselectedItem(e.target.value) }} type="email" placeholder="enter worker email" /> &nbsp; <button onClick={()=>{handleSave(singleWork.id, singleWork.data.customer,singleWork.data.title)}}>save</button></>}
                                  </div>
                )
            } 
                </div>
                <div className={styles.section__header}>Paid projects</div>
               
                <div className={styles.grid__container}>
                {
                works.filter(work => work.data.isPaid==true).map(singleWork =>
                            < div className={styles.grid__item} key={singleWork.id}>
                                <div className={styles.grid__item__title}>{singleWork.data.title}</div>
                                  Customer email: {singleWork.data.customer} <br />
                                  Phone: {singleWork.data.phoneNo} <br />
                                  receipt: <a className={styles.a__tag} href={singleWork.data.paymentReceipt}>Click to view</a> <br />
                                  Due date: {singleWork.data.dueDate} <br />
                                  Project detail: <a className={styles.a__tag} href={singleWork.data.customerDoc}>Click to view</a> <br />
                                  Domain: {singleWork.data.domain} <br />
                                  Tools: {singleWork.data.tools} <br />
                                  Service type: {singleWork.data.serviceType} <br />
                                  {singleWork.data.Worker.length>=1? <>Assigned worker: {singleWork.data.Worker}</>:
                                  <><input onChange={(e)=>{setselectedItem(e.target.value)}} onFocus={(e)=>{ setselectedItem(e.target.value) }} type="email" placeholder="enter worker email" /> &nbsp; <button onClick={()=>{handleSave(singleWork.id, singleWork.data.customer, singleWork.data.title)}}>save</button></>}
                                  </div>
                )
            } 
                </div>
            </div>
        </div>
    )
    : (
        <div className={
            styles.loading__div
        }>
            Loading...
            <br/>
            Please wait
        </div>
    )
}


export default adminPanel

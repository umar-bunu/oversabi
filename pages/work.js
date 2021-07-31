import router from 'next/router';
import {useRouter} from "next/router";
import {useState, useEffect} from 'react'
import {useAuthState} from "react-firebase-hooks/auth";

import firebase from '../lib/firebase'
import styles from '../styles/work.module.css'


function work() {
    const [user, loading, error] = useAuthState(firebase.auth());
    const [terms, setterms] = useState([])
    const [isWorker, setisWorker] = useState('')
    const [isLoading, setisLoading] = useState(true)
    const router = useRouter()

    const getTermsAndConditions = async () => {
        if(!user) router.push('/login')
        if(user){
            setisLoading(true)
            const admin = firebase.firestore().collection('admins').where('email','==',user.email).get()
            if( (await admin).docs.length>=1) router.push('/')
            const worker = firebase.firestore().collection('workers').where('email','==',user.email).get()
            if( (await worker).docs.length>=1) setisWorker(true)
            if( (await worker).docs.length>=1) router.push('/')
            const terms = firebase.firestore().collection('privacyPolicy').get()
            setterms(Array.from((await terms).docs.map(item => ({id: item.id, data: item.data()}))))
            setisLoading(false)
        }
    }

    useEffect(() => {
        if(!loading)    getTermsAndConditions()
        return() => {}
    }, [loading])
    const addWorker =async (event) => {
    try{
        var cv = Date().toString()
        var upload1 = await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/credentials/' + cv).put(event.target.cv.files[0])
        upload1 =  await firebase.storage().refFromURL('gs://oversabi-321f7.appspot.com/credentials/' + cv).getDownloadURL() 
        firebase.firestore().collection('workers').add({email: user.email, isVerified: false, cv: upload1})
    
    }  
    catch(e){
        alert(e.message)
    }
    }

    return user && !loading && !isLoading && !isWorker ? (
        <div className={
            styles.main__div
        }>
            <form action="" method="get"
                onSubmit={addWorker}>
                <div className={
                    styles.privacy__policy
                }>
                    <h4>Privacy Policy</h4>
                    {terms.map(item=><>{item.data.terms}</>)}
                </div>
                <br />
                Upload CV:
                <input required type="file" name="cv" id="cv"/>
                <br/>
                <button className={styles.submit__btn} type="submit">I agree</button>
            </form>
        </div>
    ) : user && !loading && isWorker?(<div className={styles.error__div}>
   <div>     You are already a worker and will not be able to enrol again. <br />
        <a href="/index">Back to home</a></div>
    </div>) :(
        <div className={styles.error__div}>
           <div>
           Loading....
            <br/>
            Please wait
           </div>
        </div>
    )
}

export default work

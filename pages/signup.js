import Link from 'next/link'
import router, {useRouter} from 'next/router';
import {useState} from 'react';

import styles from '../styles/signup.module.css'

import firebase from '../lib/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

<<<<<<< HEAD
import 'firebaseui/dist/firebaseui.css'
=======
    const {createUserWithEmailAndPassword} = useAuth();
    const router = useRouter()
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false)
    const createUser = async (event) => {
        try {

            event.preventDefault();
            seterror('')
            if (loading) 
                return;
            
>>>>>>> origin/newer_branch

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
}

<<<<<<< HEAD
function signup() {

    const router = useRouter()
    
    
=======
            if (event.target.password.value !== event.target.confirmPassword.value) {
                seterror('Passwords do not match')
                setloading(false)
                return;
            }
            setloading(true)
            seterror(event.target.email.value)
             createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
            console.log('yo')
            setloading(false)
            router.push('/login')
            setTimeout(() => {
                
            }, timeout);
        } catch (e) {
            setloading(false)
            seterror(e.message)
            console.log(e)
          
        }
    }
>>>>>>> origin/newer_branch


    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:'144px'
            }
        }>
            
          <div style={{minWidth:"500px", padding:'30px'}}>
          <StyledFirebaseAuth  uiConfig={uiConfig}
                firebaseAuth={
                    firebase.auth()
                }/>
          </div>
        </div>
    )
}

export default signup

import {useRouter} from "next/router";

import styles from "../styles/signup.module.css";

import {useState, useRef} from "react";

import firebase from "../lib/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
function signup() {
    const [loginError, setloginError] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const userEmail = useRef('')
    const userPassword = useRef('')
    const userConfirmPassword = useRef()

    const router = useRouter();
    
    const [user, loading, error] = useAuthState(firebase.auth());
    
    if(user) firebase.auth().signOut()

    const handleUserLogin = async (event) => {
        event.preventDefault()
        try {
            setisLoading(true)
            setloginError('')
            if (userPassword.current.value != userConfirmPassword.current.value) {
                setloginError('Passwords do not match')
                return;
            }
            await firebase.auth().createUserWithEmailAndPassword(userEmail.current.value, userPassword.current.value)
            setisLoading(false)
            router.push('/')
        } catch (e) {
            
            setisLoading(false)
            setloginError(e.message)
            console.log(e)
        }
    }
    return (
        <div className={
            styles.container
        }>
            <div className={
                styles.container__body
            }>
                <div className={
                    styles.normal
                }>

                    <h1 className={
                        styles.loginh1
                    }>Welcome to Oversabi</h1>


                </div>

                {
                error && (
                    <div style={
                        {
                            textAlign: "center",
                            color: "red"
                        }
                    }>
                        {error}
                        {" "} </div>
                )
            }

                <div className={
                    styles.signInDiv
                }>
                    <div>
                        <form action=""
                            onSubmit={handleUserLogin}>
                            <div className={
                                styles.signInDiv
                            }>
                                <input placeholder='Enter your email'
                                    ref={userEmail}
                                    required
                                    type="email"/>
                                <input placeholder='Enter your password'
                                    ref={userPassword}
                                    required
                                    type="password"/>
                                <input placeholder='Confirm password'
                                    ref={userConfirmPassword}
                                    required
                                    type="password"/> {
                                loginError && <p className={
                                    styles.errorDiv
                                }>
                                    {loginError}</p>
                            }

                                <button disabled={isLoading}
                                    type="submit">Login</button>
                            </div>
                        </form>

                        {/* <StyledFirebaseAuth 
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            /> */} </div>
                </div>

            </div>

        </div>
    );

}

export default signup

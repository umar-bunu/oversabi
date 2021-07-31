import { useRouter } from "next/router";

import styles from "../styles/login.module.css";

import { useState, useRef } from "react";

import firebase from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "firebaseui/dist/firebaseui.css";

const uiConfig = {
  signInSuccessUrl: "/work",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function login() {
  const [loginError, setloginError] = useState('')
  const userEmail = useRef('')
  const userPassword = useRef('')
  const router = useRouter();
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log(loading);
  console.log(user);
  const handleUserLogin =async(event)=>{
    event.preventDefault()
    try{
      var isSignedIn = await firebase.auth().signInWithEmailAndPassword(userEmail.current.value, userPassword.current.value)
     
      router.push('/')
    }
    catch(e){
      
      setloginError(e.message)
      console.log(e)
    }
      }
  return (
    <div
     className={styles.container}
    >
      <div className={styles.container__body}>
        <div className={styles.normal}>
           
                <h1 className={styles.loginh1}>Welcome back to Oversabi</h1>
           

        </div>

        {error && (
          <div
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            {error}{" "}
          </div>
        )}

       <div className={styles.signInDiv}>
       <div >
         <form action="" onSubmit={handleUserLogin}>
          <div className={styles.signInDiv}>
          <input placeholder='Enter your email' ref={userEmail} required type="email" />
           <input placeholder='Enter your password' ref={userPassword} required type="password" />
           {loginError && <p className={styles.errorDiv}>{loginError}</p>}
       
           <button type="submit">Login</button>
           </div>
         </form>

          {/* <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          /> */}
        </div>
       </div>
      <div className={styles.switchDiv}>
      <button className={styles.newToOverSabi}>new to oversabi? register</button>
      </div>  
      </div>
      
    </div>
  );
  origin / newer_branch;
}

export default login;

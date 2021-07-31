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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        marginBottom: "5rem",
        height: "60vh",
        
      }}
    >
      <div className={styles.main_body}>
        <div className={styles.normal}>
            <div>
                <h1 className={styles.loginh1}>Welcome back to Oversabi</h1>
            </div>
          
          <div style={{ color: "black", fontSize: "16px"}}>
            If you are a new user, fill in the form and you will be
            redirected accordingly
          </div>
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
         <form action="" method="get" onSubmit={handleUserLogin}>
           <input ref={userEmail} required type="email" />
           <input ref={userPassword} required type="password" />
           <button type="submit">Login</button>
           {loginError && <div>{loginError}</div>}
         </form>
          {/* <StyledFirebaseAuth 
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          /> */}
        </div>
       </div>
      </div>
    </div>
  );
  origin / newer_branch;
}

export default login;

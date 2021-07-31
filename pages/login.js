import { useRouter } from "next/router";

import styles from "../styles/login.module.css";

import firebase from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "firebaseui/dist/firebaseui.css";

const uiConfig = {
  signInSuccessUrl: "/work",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function login() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log(loading);
  console.log(user);
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

        <div style={{ width: "100%"}}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </div>
  );
  origin / newer_branch;
}

export default login;

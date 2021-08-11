import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import {Navbar, Nav} from 'react-bootstrap'
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

import styles from "../styles/navbarstyles.module.css";
import oversabi from "../public/OVERSABI_LOGO_BLACK.png";
import firebase from "../lib/firebase";


const NavigationBar = () => {
    const [isWorker, setisWorker] = useState("none");
    const { initialising, user } = useAuthState(firebase.auth());
    useEffect(() => {
     console.log(firebase.auth().currentUser)
       getdata();
        return() => {};
    }, [firebase.auth().currentUser]);

    const router = useRouter();
    const getdata = async () => {
        console.log(firebase.auth().currentUser)
        if (firebase.auth().currentUser) {
            try {
                const workers = await firebase.firestore().collection("workers").get();
                setisWorker(workers.docs.filter((item) => item.data().email == firebase.auth().currentUser.email).length >= 1 ? "worker" : "none");
                if (workers.docs.filter((item) => item.data().email == firebase.auth().currentUser.email).length >= 1) {

                    return;
                }

                const admins = await firebase.firestore().collection("admins").get();
                setisWorker(admins.docs.filter((item) => item.data().email == firebase.auth().currentUser.email).length >= 1 ? "admin" : "none");
            } catch (e) {
                console.log("fetch data " + e.message);
            }
        }
    };
    return (
        <div className={
            styles.main__div
        }>
            <Navbar fixed='top'
                className={
                    styles.main__navbar
                }
                fluid='md'
                expand="md"
                variant="light">
                <Navbar.Brand href="/">
                    <Image src={oversabi}
                        width={90}
                        height={50}
                        alt="oversabi"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={
                        "mr-auto w-100 " + styles.mininavbar__container
                    }>
                        <Nav.Link href="/"
                            className={
                                styles.NavigationBar__navlink
                        }>Home</Nav.Link>
                        
                        
                        
                      
                       
                        {firebase.auth().currentUser &&<Nav.Link className={
                                styles.NavigationBar__navlink
                            }
                            href={
                                isWorker == "admin" ? "/adminPanel" : "/workerDashBoard"
                        }>
                            Dashboard

                        </Nav.Link>}
                       
                        <Nav.Link className={
                                'floatRigth ' + styles.NavigationBar__navlink
                            }
                            href="/blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link className={ styles.NavigationBar__navlink
                            }
                            href="/contact">
                            Contact us
                        </Nav.Link>
                        <Nav.Link className={
                                styles.logout__btn
                            }
                            href="/login">
                            {
                             ( firebase.auth().currentUser != null) ? <div>Log out</div> : <div>
                                Log in</div>
                        } </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )

};
export default NavigationBar;

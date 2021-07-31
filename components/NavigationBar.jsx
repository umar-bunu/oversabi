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

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
};

const NavigationBar = () => {
    const [isWorker, setisWorker] = useState("none");
    const [user, loading, error] = useAuthState(firebase.auth());

    useEffect(() => {
        getdata();
        return() => {};
    }, [user]);

    const router = useRouter();
    const getdata = async () => {
        if (user) {
            try {
                const workers = await firebase.firestore().collection("workers").get();
                setisWorker(workers.docs.filter((item) => item.data().email == user.email).length >= 1 ? "worker" : "none");
                if (workers.docs.filter((item) => item.data().email == user.email).length >= 1) {

                    return;
                }

                const admins = await firebase.firestore().collection("admins").get();
                setisWorker(admins.docs.filter((item) => item.data().email == user.email).length >= 1 ? "admin" : "none");
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
                variant="dark">
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
                        <Nav.Link href="/" className={
                            styles.NavigationBar__navlink
                        }>Home</Nav.Link>
                        <Nav.Link className={
                                styles.NavigationBar__navlink
                            }
                            href={
                                isWorker == "admin" ? "/adminPanel" : "/workerDashBoard"
                            }>
                                Dashboard
                           
                        </Nav.Link>
                        <Nav.Link className={
                                'floatRigth ' + styles.NavigationBar__navlink
                            }
                            href="/blog">
                            Blog
                        </Nav.Link>
                        <Nav.Link>
                        {
                            !loading && user != undefined ? (
                                <button className={
                                        styles.logout__btn
                                    }
                                    onClick={
                                        () => {
                                            router.push("/login");
                                            firebase.auth().signOut();
                                        }
                                }>
                                    Log out
                                </button>
                            ) : (
                                <> { <li>
                                <Link href= "/login">
                                    Login
                                </Link>
                            </li> } </>)}
                             
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
    // return (
    //     <div>
    //         <nav className={
    //             styles.nav__parent
    //         }>
    //             <div className={
    //                 styles.nav__body
    //             }>
    //                 <div className={
    //                     styles.nav__logo
    //                 }>
    //                     <Image src={oversabi}
    //                         width={90}
    //                         height={50}
    //                         alt="oversabi"/>
    //                 </div>
    //                 <div className={
    //                     styles.nav__links
    //                 }>
    //                     <ul className={
    //                         styles.nav__list
    //                     }>
    //                         <li>
    //                             <Link href="/">
    //                                 <a>Home</a>
    //                             </Link>
    //                         </li>
    //                         {
    //                         !loading && user && (
    //                             <li>
    //                                 <Link href={
    //                                     isWorker == "admin" ? "/adminPanel" : "/workerDashBoard"
    //                                 }>
    //                                     Dashboard
    //                                 </Link>
    //                             </li>
    //                         )
    //                     }

    //                         <li>
                                // <Link href="/blog">
                                //     <a>Blog</a>
                                // </Link>
    //                         </li>
    //                         <li>
    //                             <Link href="/contact">
    //                                 <a>Contact us</a>
    //                             </Link>
    //                         </li>
    //                         {
    //                         !loading && user != undefined ? (
    //                             <button className={
    //                                     styles.logout__btn
    //                                 }
    //                                 onClick={
    //                                     () => {
    //                                         router.push("/login");
    //                                         firebase.auth().signOut();
    //                                     }
    //                             }>
    //                                 Log out
    //                             </button>
    //                         ) : (
    //                             <> {/* <li>
    //                             <Link href= "/login">
    //                                 Login
    //                             </Link>
    //                         </li> */}
    //                                 <li>
    //                                     <Link href="/login">
    //                                         <div className={
    //                                             styles.signup__btn
    //                                         }>Login</div>
    //                                     </Link>
    //                                 </li>
    //                             </>
    //                         )
    //                     } </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //         <div className={
    //                 styles.popup
    //             }
    //             id="popup">
    //             <div className={
    //                 styles.popup__content
    //             }>
    //                 <div className={
    //                     styles.popup__left
    //                 }>
    //                     <Image src="/login.png" alt="login-picture"
    //                         width={500}
    //                         height={500}
    //                         className={
    //                             styles.img
    //                         }/>
    //                 </div>
    //                 <div className={
    //                     styles.popup__right
    //                 }>
    //                     <a className={
    //                             styles.popup__close
    //                         }
    //                         href="#home">
    //                         &times;
    //                     </a>
    //                     <h2>Welcome back! to Oversabi</h2>
    //                     {
    //                     error && <div style={
    //                         {color: "red"}
    //                     }>
    //                         {error}</div>
    //                 }
    //                     {/* <input ref={emailRef}
    //                         placeholder="Email address"
    //                         type="email"
    //                         required/>
    //                     <input ref={passwordRef}
    //                         placeholder="Password"
    //                         type="password"
    //                         required/> */}
    //                     {/* <Link href="/">
    //                         <a>Forgot password ?</a>
    //                     </Link>
    //                     <a href="#popupsign">Dont have an account?</a>
    //                     <button onClick={handleLogin}
    //                         className={
    //                             styles.signup__btn
    //                     }>Log in</button> */} </div>
    //             </div>
    //         </div>

    //         <div className={
    //                 styles.popup
    //             }
    //             id="popupsign">
    //             <div className={
    //                 styles.popup__content
    //             }>
    //                 <div className={
    //                     styles.popup__left
    //                 }>
    //                     <h1>
    //                         A world class education for anyone, anywhere our results are 100%
    //                     </h1>
    //                     <p>
    //                         By signing up for Oversabi, you agree to our Terms of use and
    //                                                                   Privacy Policy.
    //                     </p>
    //                 </div>
    //                 <div className={
    //                     styles.popup__right
    //                 }>
    //                     <a className={
    //                             styles.popup__close
    //                         }
    //                         href="#home">
    //                         &times;
    //                     </a>
    //                     <h2>Join Oversabi as a</h2>
    //                     <div className={
    //                         styles.sign__nav
    //                     }>
    //                         <button className={
    //                             styles.signup__btn
    //                         }>Student</button>
    //                         <button className={
    //                             styles.student__btn
    //                         }>
    //                             <a href="#popupworker">Worker</a>
    //                         </button>
    //                     </div>
    //                     {/* <input placeholder="Full name" type="text" required/>
    //                     <input placeholder="Email address" type="email" required/>
    //                     <input placeholder="Password" type="password" required/>
    //                     <input placeholder="Repeat password" type="password" required/>

    //                     <a href="#popup">already have an account?</a>
    //                     <button className={
    //                         styles.signup__btn
    //                     }>Sign up</button> */}
    //                     {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    //          */} </div>
    //             </div>
    //         </div>

    //         <div className={
    //                 styles.popupwork
    //             }
    //             id="popupworker">
    //             <div className={
    //                 styles.popup__content
    //             }>
    //                 <div className={
    //                     styles.popup__left
    //                 }>
    //                     <h1>
    //                         Help every student succeed with personalized practice. 100%
    //                                                                   results is what matters to us.
    //                     </h1>
    //                     <ul>
    //                         <li>
    //                             <h3>Find standards-aligned content</h3>
    //                         </li>
    //                         <li>
    //                             <h3>Assign Progess to customers and articles</h3>
    //                         </li>
    //                         <li>
    //                             <h3>Tracking student reports</h3>
    //                         </li>
    //                         <li>
    //                             <h3>Join Thousands of Oversabi users in the world</h3>
    //                         </li>
    //                     </ul>
    //                     <p>
    //                         By signing up for Oversabi, you agree to our Terms of use and
    //                         Privacy Policy.
    //                     </p>
    //                 </div>
    //                 <div className={
    //                     styles.popup__right
    //                 }>
    //                     <a className={
    //                             styles.popup__close
    //                         }
    //                         href="#home">
    //                         &times;
    //                     </a>
    //                     <h2>Join Oversabi as a</h2>
    //                     <div className={
    //                         styles.sign__nav
    //                     }>
    //                         <button className={
    //                             styles.student__btn
    //                         }>
    //                             <a href="#popupsign">Student</a>
    //                         </button>
    //                         <button className={
    //                             styles.signup__btn
    //                         }>Worker</button>
    //                     </div>
    //                     <input placeholder="Full name" type="text" required/>
    //                     <input placeholder="Email address" type="email" required/>
    //                     <input placeholder="Password" type="password" required/>
    //                     <input placeholder="Repeat password" type="password" required/>

    //                     <a href="#popup">already have an account?</a>
    //                     <button className={
    //                         styles.signup__btn
    //                     }>Sign up</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};
export default NavigationBar;

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/contactstyles.module.css";
import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";
import firebase from "../lib/firebase";

export default function contact() {
  const userName = useRef("");
  const userEmail = useRef("");
  const message = useRef("");
  const [resumePdf, setresumePdf] = useState(null);
  var isLoading = false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    isLoading = true;
    if (resumePdf == null) {
      try {
        await emailjs.send("service_iz4k1pf", "template_m5rmccc", {
          to_name: userName.current.value,
          to_email: userEmail.current.value,
          from_name: "Oversabi",
          message: message.current.value,
        });
      } catch (e) {
        alert("Something went wrong, please try again later.");
      }
      isLoading = false;
    } else {
      try {
        const whatToPut = firebase
          .storage()
          .ref()
          .child(userEmail.current.value);
        const put = whatToPut.put(resumePdf.data);

        put.on(
          "state_changed",
          function progress(snapshot) {},
          function error(err) {},
          function completed() {
            put.snapshot.ref.getDownloadURL().then(async (urlTemp) => {
              await firebase.firestore().collection("workers").add({
                name: userName.current.value,
                email: userEmail.current.value,
                resume: urlTemp,
                isVerified: false,
              });
              alert(
                "We have received your application,\n" +
                  "one of our representatives will get back to you shortly."
              );
              isLoading = false;
            });
          }
        );
      } catch (e) {
        console.log(e);
        alert("Something went wrong. Please try again later");
        isLoading = false;
        return;
      }
      await emailjs.send("service_iz4k1pf", "template_m5rmccc", {
        to_name: userName.current.value,
        to_email: userEmail.current.value,
        from_name: "Oversabi",
        message: message.current.value,
      });
    }
  };

  useEffect(() => {
    emailjs.init("user_W34Y0z8uuchKmjxKGOigq");
    return () => {};
  }, []);
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__body}>
        <div className={styles.contact__body_text}>
          <h1 className={styles.header__heading1}>
            Do you have a Question? Contact Us!
          </h1>
          <p className={styles.header__paragraph}>
            Oversabi is here to help get through any difficulty you have using
            the app.
          </p>
        </div>
        <div className={styles.contact__body2}>
          <form action="" method="get" onSubmit={handleSubmit}>
            <div className={styles.contact__body_form}>
              <div className={styles.contact_body_form_group}>
                <div className={styles.inputspace}>
                  <input
                    ref={userName}
                    required
                    name="userName"
                    placeholder="Your name"
                    type="text"
                    className={styles.inputstyle}
                  />
                  <input
                    ref={userEmail}
                    required
                    name="userEmail"
                    placeholder="Email"
                    type="email"
                    className={styles.inputstyle}
                  />
                  <textarea
                    ref={message}
                    required
                    name="userMessage"
                    rows="4"
                    cols="50"
                    className={styles.inputmessage}
                  >
                    Type your message here. How can we help?
                  </textarea>
                  <label htmlFor="cvFile" className={styles.cvMessage}>
                    Work with us? Submit your Resume
                  </label>
                  <input
                    type="file"
                    onChange={(e) => {
                      setresumePdf({
                        data: e.target.files[0],
                        path: URL.createObjectURL(e.target.files[0]),
                      });
                    }}
                    name="cvFile"
                    accept="application/pdf"
                  />
                  <p className={styles.contact__paragraph}>
                    By submitting this form, I confirm that I have read and
                    understood the Oversabi Privacy Statement.
                  </p>
                  <button type="submit" className={styles.header__btn}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

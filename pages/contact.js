import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/contactstyles.module.css";
import emailjs from "emailjs-com";
import { useEffect, useRef } from "react";
export default function contact() {
  const userName = useRef("");
  const userEmail = useRef("");
  const message = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send("service_iz4k1pf", "template_m5rmccc", {
        to_name: userName.current.value,
        to_email: userEmail.current.value,
        from_name: "Oversabi",
        message: message.current.value,
      });
      alert(
        "we have received your email. Kindly check your email box and we shall reply you shortly"
      );
    } catch (e) {
      alert(e.message);
      console.log(e);
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

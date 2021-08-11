import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import styles from "../styles/Home.module.css";

import firebase from '../lib/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


export default function Home() {
  const [user, loading] = useAuthState(firebase.auth())
  return (
      <div className={styles.container}>
        <div className={styles.header__content}>
          <div className={styles.header__body}>
            <div className={styles.header__body_content}>
              <h1 className={styles.header__heading1}>
                Oversabi Dissertation & Coursework Writing Company,
                
              </h1>
              <p className={styles.header__paragraph}>
                We are so good that the results of our works speak for
                themselves as more than 82% of our clients have bagged for
                themselves Merits and Distinctions.
              </p>
              <Link href= "/course">
                <a className={styles.header__btn}>Find Dissertation & Coursework</a>
              </Link>
            </div>
            <div className={styles.header__body_image}>
              <Image
                src="/Learning-bro.png"
                width={400}
                height={400}
                className={styles.headerimage}
                alt="learning"
              />
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.section1__body}>
            <div>
              <h1 className={styles.header__heading1}>
                Why you should choose Oversabi
              </h1>
              <p className={styles.header__paragraph}>
                We believe in goals and our main goal is our quality work that
                can get our clients top marks and absolute satisfaction.{" "}
              </p>
            </div>

            <div className={styles.section1__card_body}>
              <div className={styles.section1__card}>
                <Image
                  src="/book.svg"
                  width={50}
                  height={50}
                  className={styles.svg__icon}
                  alt="book"
                />
                <h2 className={styles.header__heading2}>
                  {" "}
                  Merits and Distinctions
                </h2>
                <p className={styles.header__paragraph}>
                  Ask any 5 of your Own Classmates & we bet at least 3 of them
                  would already be our clients!
                </p>
              </div>
              <div className={styles.section1__card}>
                <Image
                  src="/clipboard.svg"
                  width={50}
                  height={50}
                  className={styles.svg__icon}
                  alt="clipboard"
                />
                <h2 className={styles.header__heading2}>
                  Professional Approach
                </h2>
                <p className={styles.header__paragraph}>
                  Over 96% of our clients have scored Merits & Distinctions
                  Since we get started
                </p>
              </div>

              <div className={styles.section1__card}>
                <Image
                  src="/time.svg"
                  width={50}
                  height={50}
                  className={styles.svg__icon}
                  alt="time"
                />
                <h2 className={styles.header__heading2}>Punctuality</h2>
                <p className={styles.header__paragraph}>
                  100% Confidentiality, we handle our client work with punctiuality and submit their projects in time.
                </p>
              </div>
              <div className={styles.section1__card}>
                <Image
                  src="/Medal.svg"
                  width={50}
                  height={50}
                  className={styles.svg__icon}
                  alt="medal"
                />
                <h2 className={styles.header__heading2}>Ultimate work</h2>
                <p className={styles.header__paragraph}>
                  100% Confidentiality, 0% Plagiarism on turnitin, Get Ready for
                  Submission Work
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header__content}>
          <div className={styles.header__body}>
            <div className={styles.header__body_image}>
              <Image
                src="/studying.png"
                width={500}
                height={500}
                className={styles.headerimage}
                alt="studying picture"
              />
            </div>
            <div className={styles.header__body_content}>
              <Link href="#">
                <a className={styles.learnmore__btn}>Career</a>
              </Link>
              <h1 className={styles.header__heading1}>
                Start a career with Oversabi
              </h1>
              <p className={styles.header__paragraph}>
                Differentiate your ideas and engage every student. We
                empower Freelancers to support their entire clients. 90% of
                students .who have used Oversabi have found us effective.
              </p>
              <Link href="/work">
                <a className={styles.header__btn}>Find Work</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.header__content}>
          <div className={styles.header__body}>
            <div className={styles.header__body_content}>
              <Link href="#">
                <a className={styles.learnmore__btn}>Blog</a>
              </Link>
              <h1 className={styles.header__heading1}>
                Oversabi gives tips and prepare you for exams and projects
              </h1>
              <p className={styles.header__paragraph}>
                We prepare and give tips for project and how to defend it and
                also we prepare you to face any upcoming projects and guide you
                how get distinctions.
              </p>
              <Link href="/blog">
                <a className={styles.header__btn}>View blog!</a>
              </Link>
            </div>
            <div className={styles.header__body_image}>
              <Image
                src="/online.png"
                width={500}
                height={500}
                className={styles.headerimage}
                alt="Online picture"
              />
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2__body}>
            <div className={styles.section2__header}>
              <h1 className={styles.header__heading1}> What we do</h1>
              <p className={styles.header__paragraph}>
                When it comes to hiring any type of Dissertation Writing Service, particularly online services for any type of work,
                particularly online academic writing services, trust becomes one
                of the major issues on the part of students.
              </p>
            </div>
            <div className={styles.section2__card_body}>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Dissertation MSc</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Coureswork</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Essay</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Dissertation PhD</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Journal Research</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Assignment</h2>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
       
        <div className={styles.section4}>
          <div className={styles.section4__quotes}>
            <div>
              <h1 className={styles.header__heading1}>About Us</h1>
              <h2 className={styles.header__heading2}>Who we are?</h2>
              <p>Oversabi boasts a highly experienced team of specialists in various fields of academic and business research.</p>
            </div>
            <div className={styles.quote}>
              <div className={styles.quote__text}>
                <h2 className={styles.header__heading2}>
                  What we do?
                </h2>
                <p className={styles.header__paragraph}>
                  From natural sciences to business/management and the humanities, our expert editors and researchers guarantee clients a stress-free research process. We provide guidance and support on assignments, dissertations, projects, and much more!
                </p>
              </div>
             
            </div>
            <div className={styles.quote}>
              <div className={styles.quote__text}>
                <h2 className={styles.header__heading2}>
                  Why us?
                </h2>
                <p className={styles.header__paragraph}>
                  We are a team dedicated to building dependable long-term relationships that cater to the unique needs of our clients whilst guaranteeing 100% anonymity.
                </p>
              </div>
            </div>
          </div>
        </div>
      
        
      </div>
  );
}

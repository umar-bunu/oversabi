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
                Proudly The UKs No. 1 Dissertation & Coursework Writing Company,
                Since 2001!{" "}
              </h1>
              <p className={styles.header__paragraph}>
                We are so good that the results of our works speak for
                themselves as more than 82% of our clients have bagged for
                themselves Merits and Distinctions.
              </p>
              <Link href= {!loading &&user!=null? "/course":'/login'}>
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
                  Since 2001, Its effortless now!
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
                  100% Confidentiality, 0% Plagiarism on turnitin, Get Ready for
                  Submission Work
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
                <h2 className={styles.header__heading2}>ultimate work</h2>
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
                Proudly The UKs No. 1 Dissertation & Coursework Writing Company,
                Since 2001!{" "}
              </h1>
              <p className={styles.header__paragraph}>
                Differentiate your classroom and engage every student. We
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
                When it comes to hiring any type of Dissertation Writing Service
                in London, particularly online services for any type of work,
                particularly online academic writing services, trust becomes one
                of the major issues on the part of students.
              </p>
            </div>
            <div className={styles.section2__card_body}>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Dissertation</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Coures Work</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Essay Writing</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>PhD Proposal</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>PhD Thesis</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Assignment</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
              <div className={styles.section2__card}>
                <h2 className={styles.header__heading2}>Thesis Writing</h2>
                <p className={styles.section2__paragraph}>
                  particularly online services for any type of work,
                  particularly
                </p>
                <Link href="/">
                  <a className={styles.learnmore__btn}>Learn more &#8594;</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.section3__content}>
            <div className={styles.section3__text}>
              <h1 className={styles.header__heading1}>
                Oversabi is Proudly Supported by
              </h1>
              <p className={styles.header__paragraph}>
                We are glad that we have large numbers of companies that
                supports us and also welcomes us to the educational world
              </p>
            </div>

            <div className={styles.section3__support}>
              <Image
                src="/alisa.png"
                width={100}
                height={100}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/organic.png"
                width={128}
                height={80}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/mockup.png"
                width={127}
                height={57}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/jamie.png"
                width={88}
                height={84}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/newwave.png"
                width={130}
                height={67}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/mockup.png"
                width={128}
                height={80}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/oversabi.png"
                width={88}
                height={84}
                className={styles.section3__image}
                alt="brand logo"
              />
              <Image
                src="/organic.png"
                width={130}
                height={67}
                className={styles.section3__image}
                alt="brand logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.section4__quotes}>
            <div className={styles.quote}>
              <div className={styles.quote__text}>
                <h2 className={styles.header__heading2}>
                  <span className={styles.text__comma}>&#786;</span> This is
                  best and biggest unified platform
                </h2>
                <p className={styles.header__paragraph}>
                  The client booking software makes it super easy for my clients
                  to use and book with me. I especially love their customer
                  service, they always respond in a timely manner at all hours!
                  Before the trial was even complete, I had clients scheduled
                  for my service, pay me through Paypal (linked easily) and
                  connect via Zoom (also linked easily).
                </p>
              </div>
              <div className={styles.sub__text}>
                <p>-Emmanuel Oladimeji-</p>
                <p>University Student</p>
              </div>
            </div>
            <div className={styles.quote}>
              <div className={styles.quote__text}>
                <h2 className={styles.header__heading2}>
                  <span className={styles.text__comma}>&#786;</span> We can
                  easily take admission for any course
                </h2>
                <p className={styles.header__paragraph}>
                  Appointy’s appointment booking app is easy to use and also
                  available for free! I loved the integrations with multiple
                  platforms like Google analytics, adding a book now on
                  Instagram and especially a schedule directly from Google My
                  Business.
                </p>
              </div>
              <div className={styles.sub__text}>
                <p>-Umar Bunu-</p>
                <p>University Student</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section5}>
          <div className={styles.header__body}>
            <div className={styles.header__body_image}>
              <Image
                src="/join.png"
                width={500}
                height={500}
                className={styles.headerimage}
                alt="join image"
              />
            </div>
            <div className={styles.header__body_content}>
              <Link href="#">
                <a className={styles.learnmore__btn}>Sign Up</a>
              </Link>
              <h1 className={styles.header__heading1}>Join Oversabi Today.</h1>
              <p className={styles.header__paragraph}>
                Differentiate your classroom and engage every student. We
                empower Freelancers to support their entire clients. 90% of
                students .who have used Oversabi have found us effective.
              </p>
              <Link href="#">
                <a className={styles.header__btn}>Submit Assignment</a>
              </Link>
              <Link href="#">
                <a className={styles.header__btn}>Find work</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.section6}>
          <div className={styles.section6__body}>
            <div className={styles.section6__body_text}>
              <h1 className={styles.header__heading1}>Subscribe to our Blog</h1>
              <p className={styles.header__paragraph}>
                With our Experienced and Dependable Managers and Professional
                Research Experts it becomes so much easier... we OWN the
                responsibility of your work. Just Mail & Consider it Done!
              </p>
            </div>
            <div className={styles.section6__body_form}>
              <input
                placeholder="youremail@example.com"
                type="email"
                className={styles.inputform}
              />
              <Link href="#">
                <a className={styles.header__btn}>Subscribe</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

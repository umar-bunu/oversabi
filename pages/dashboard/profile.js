import Link from "next/dist/client/link";
import styles from "../../styles/profilestyles.module.css";

const course = () => (
  <div>
    <div className={styles.course__container}>
      <div className={styles.course__body}>
        <div className={styles.course__link}>
          <nav className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
              <h2 className={styles.header__heading2}>My Project</h2>
              <Link href="/dashboard/work">
                <a className={styles.link__btn}>Assignments</a>
              </Link>
              <h2 className={styles.header__heading2}>My Account</h2>
              <Link href="/dashboard/chat">
                <a className={styles.link__btn}>Chat</a>
              </Link>
              <Link href="/dashboard/profile">
                <a className={(styles.link__btn, styles.active)}>Profile</a>
              </Link>
              <Link href="/dashboard/account">
                <a className={styles.link__btn}>Payment Details</a>
              </Link>
            </ul>

            <div className={styles.over__hook}>
              <p>Oversabi is here for you</p>
            </div>
          </nav>
          <main className={styles.course__link_container}>
            <h1>Hello is somebody there ?</h1>
          </main>
        </div>
      </div>
    </div>
  </div>
);

export default course;

import Link from "next/dist/client/link";
import styles from "../../styles/accountstyles.module.css";

const course = () => {
  return (
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
                <Link href="/dashboard/account">
                  <a className={(styles.link__btn, styles.active)}>
                    Payment Details
                  </a>
                </Link>
              </ul>

              <div className={styles.over__hook}>
                <p>Oversabi is here for you</p>
              </div>
            </nav>
            <main className={styles.course__link_container}>
              <div className={styles.course__space}>
                <div className={styles.course_header}>
                  <h2 className={styles.header__heading2}>
                    Phd Admission Proposal
                  </h2>
                </div>

                <div className={styles.header__pay}>
                  <table>
                    <tr>
                      <th>Work</th>
                      <th>Progress</th>
                      <th>Payment</th>
                    </tr>
                    <tr>
                      <td>1st Instalment</td>
                      <td>50%</td>
                      <td>
                        <button className={styles.edit__btn}>Paid</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default course;

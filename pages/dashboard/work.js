import Link from "next/dist/client/link";
import Dashboardheader from "../../components/Dashboardheader";
import styles from "../../styles/workstyles.module.css";

const course = () => (
  <div>
    <Dashboardheader />
    <div className={styles.course__container}>
      <div className={styles.course__body}>
        <div className={styles.course__link}>
          <nav className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
              <h2 className={styles.header__heading2}>My Project</h2>
              <Link href="/dashboard/work">
                <a className={(styles.link__btn, styles.active)}>Assignments</a>
              </Link>
              <h2 className={styles.header__heading2}>My Account</h2>
              <Link href="/dashboard/account">
                <a className={styles.link__btn}>Payment Details</a>
              </Link>
            </ul>

            <div className={styles.over__hook}>
              <p>Oversabi is here for you</p>
            </div>
          </nav>
          <main className={styles.course__link_container}>
            <div className={styles.course__body_header}>
              <h1 className={styles.header__heading1}>My Assignments</h1>
              <button className={styles.edit__btn}>Edit Assignment</button>
            </div>
            <div className={styles.course__placeholder}>
              <div className={styles.course__area}>
                <div className={styles.course__space}>
                  <div className={styles.course_header}>
                    <h2 className={styles.header__heading2}>
                    Phd Admission Proposal
                  </h2>
                  </div>
                  
                  <div className={styles.header__pay}>
                    <table>
                      <tr>
                        <th>Stage</th>
                        <th>Progress</th>
                        <th>Payment</th>
                      </tr>
                      <tr>
                        <td>1st Instalment</td>
                        <td>50%</td>
                        <td>
                          <button className={styles.edit__btn}>Review</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2nd Instalment</td>
                        <td>Directly after 1749 words</td>
                        <td>
                          <Link href="/payment">
                            <button className={styles.edit__btn}>
                              Pay Now!
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </div>

                </div>
                <div className={styles.new__course}>
                  <div className={styles.new__coursebtn}>
                    <Link href="/course">
                    <a className={styles.add__btn}>+</a>
                  </Link>
                  <p className={styles.header__paragraph}>Add new assignment</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
);

export default course;

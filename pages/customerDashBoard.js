import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

import firebase from "../lib/firebase";
// import Dashboardheader from "../components/DashboardHeader";
import styles from "../styles/customerDashboard.module.css";
import Contacts from "../components/Contacts";

function customerDashBoard() {
  const [selectedSection, setselectedSection] = useState(1)
  const [givenWorks, setgivenWorks] = useState([]);

  const [dataError, setdataError] = useState("");
  const router = useRouter();
  const [user, loading, error] = useAuthState(firebase.auth());
  if (!loading && (user == undefined || user == null)) {
    console.log("yo");
    router.push("/404");
  }
  
  const getData = async () => {
    try {
      console.log(user.email);
      var givenWorks2 = [];
      const works = await firebase
        .firestore()
        .collection("works")
        .where("customer", "==", user.email)
        .get();
      works.docs.forEach((item) => {
        givenWorks2.push(item.data());
      });
      setgivenWorks(givenWorks2);
      
    } catch (e) {
      console.log(e.message);
      setdataError(e.message);
    }
  };
  useEffect(() => {
    if (user != null && user != undefined) getData();

    return () => {};
  }, [user]);

  return !loading && user ? (
    <div>
      {/* <Dashboardheader /> */}
      <div className={styles.course__container}>
        <div className={styles.course__body}>
          <div className={styles.course__link}>
            <nav className={styles.sidebar}>
              <ul className={styles.sidebar__list}>
                <h2 className={styles.header__heading2}>My Project</h2>
               
                  <button onClick={()=>{setselectedSection(1)}}  className={(selectedSection==1 ? styles.active:styles.link__btn)}>
                    <div  style={{textAlign:'left'}}>Assignments</div>
                  </button>
            
                <h2 className={styles.header__heading2}>My Account</h2>
               
                  <button onClick={()=>{setselectedSection(2)}} className={(selectedSection==2 ? styles.active:styles.link__btn)}> <div
                  style={{textAlign:'left'}}>Chat</div> </button>
              </ul>
            </nav>

            <main className={styles.course__link_container}>
              {selectedSection==1 && <div className={styles.course__placeholder}>
                <div className={styles.course__area}>
                  <div>
                    <div className={styles.course__body_header}>
                      <h1 className={styles.header__heading1}>
                        Unfinished Projects
                      </h1>
                    </div>
                    <div className={styles.course__space}>
                      {givenWorks.filter((item) => item.isDone == false)
                        .length == 0 && (
                        <div>
                          <h2 className={styles.header__heading2}>
                            you have no unfinished works, check the finished
                            works segment below
                          </h2>
                        </div>
                      )}

                      <div className={styles.course_inwork}>
                        {givenWorks
                          .filter((item) => item.isDone == false)
                          .map((singleWork, index) => (
                            <div key={index} className={styles.workspacing}>
                              <div className={styles.course_header}>
                                <h2 className={styles.header__heading2}>
                                  {singleWork.title}
                                </h2>
                              </div>
                              <div className={styles.header__pay}>
                                <table>
                                <tbody>  <tr>
                                    <th>Project description</th>
                                    <th>Worker email</th>
                                    <th>Domain</th>
                                    <th>Tools to use</th>
                                    <th>Project type</th>
                                    <th>Due date</th>
                                    <th>Project receipt</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.customerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td>
                                    <td>{singleWork.worker}</td>
                                    <td>{singleWork.domain}</td>
                                    <td>{singleWork.tools}</td>
                                    <td>{singleWork.serviceType}</td>
                                    <td>{singleWork.dueDate}</td>
                                    <td>
                                      {
                                        <a
                                          href={singleWork.paymentReceipt}
                                          download
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td>
                                  </tr></tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className={styles.course__body_header}>
                      <h1 className={styles.header__heading1}>
                        Projects we have done for you
                      </h1>
                    </div>

                    <div className={styles.course__space}>
                      {givenWorks.filter((item) => item.isDone == true)
                        .length == 0 && (
                        <div>
                          <h2 className={styles.header__heading2}>
                            You have no finished projects yet
                          </h2>
                        </div>
                      )}

                      <div className={styles.course_inwork}>
                        {givenWorks
                          .filter((item) => item.isDone == true)
                          .map((singleWork, index) => (
                            <div key={index} className={styles.workspacing}>
                              <div className={styles.course_header}>
                                <h2 className={styles.header__heading2}>
                                  Work number {index + 1}
                                </h2>
                              </div>
                              <div className={styles.header__pay}>
                                <table>
                                 <tbody> <tr>
                                    <th>Project</th>
                                    
                                    <th>Domain</th>
                                    <th>Tools to use</th>
                                    <th>Project type</th>
                                    <th>Due date</th>
                                    <th>Finished Work</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.customerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td><td>{singleWork.domain}</td>
                                    <td>{singleWork.tools}</td>
                                    <td>{singleWork.serviceType}</td>
                                    <td>{singleWork.dueDate}</td>
                                    <td>
                                      {
                                        <a
                                          className={styles.edit__btn}
                                          href={singleWork.workerDoc}
                                        >
                                          Click to view
                                        </a>
                                      }
                                    </td></tr></tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.new__coursebtn}>
                    <button
                      className={styles.add__btn}
                      onClick={() => {
                        router.push("/course");
                      }}
                    >
                      +
                    </button>
                    <p className={styles.header__paragraph}>
                      Add new assignment
                    </p>
                  </div>
                </div>
              </div>}
            
            </main>
          </div>
        </div>
      </div>
    </div>
  ) : dataError ? (
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        color: "red",
      }}
    >
      Could not fetch data
      <br />
      Please refresh page again.
    </div>
  ) : (
    <div
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
      }}
    >
      Loading...
      <br />
      Please wait
    </div>
  );
}

export default customerDashBoard;

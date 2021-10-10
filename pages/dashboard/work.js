import Link from "next/dist/client/link";
import styles from "../../styles/workstyles.module.css";
import { AdminContext } from "../../components/Layout";
import firebase from "../../lib/firebase";
import { useContext, useEffect, useState } from "react";
const course = () => {
  const adminContext = useContext(AdminContext);
  const [docs, setdocs] = useState([]);
  const getData = async () => {
    try {
      firebase
        .firestore()
        .collection("works")
        .orderBy("dueDate", "asc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setdocs(
            snapshot.docs.map((eachDoc) => ({
              id: eachDoc.id,
              data: eachDoc.data(),
            }))
          );
        });
    } catch (e) {
      alert("Could not load assignments data");
    }
  };
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  // !adminContext.adminState ? (
  //   <div style={{ height: "100vh" }}></div>
  // ) :
  return (
    <div>
      <div className={styles.course__container}>
        <div className={styles.course__body}>
          <div className={styles.course__link}>
            <main className={styles.course__link_container}>
              <div className={styles.course__body_header}>
                <h1 className={styles.header__heading1}>
                  Unfinished Assignments
                </h1>
              </div>
              <div className={styles.course__placeholder}>
                <div className={styles.course__area}>
                  <div className={styles.course__space}>
                    <div className={styles.course_header}></div>

                    <div className={styles.header__pay}>
                      <table>
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Type</th>
                            <th>Due date</th>
                            <th>Worker</th>
                            <th>Is Completed</th>
                          </tr>
                          {docs
                            .filter((eachDoc) => eachDoc.data.isDone == false)
                            .map((eachDoc) => (
                              <tr
                                style={{ backgroundColor: "black" }}
                                key={eachDoc.id}
                              >
                                <td>{eachDoc.id}</td>
                                <td>{eachDoc.data.customer}</td>
                                <td>{eachDoc.data.serviceType}</td>
                                <td>{`${eachDoc.data.dueDate
                                  .toDate()
                                  .getDate()}/${eachDoc.data.dueDate
                                  .toDate()
                                  .getMonth()}/${eachDoc.data.dueDate
                                  .toDate()
                                  .getFullYear()}`}</td>
                                <td>
                                  {eachDoc.data.worker == null ||
                                  eachDoc.data.worker == "" ? (
                                    <span>
                                      <input
                                        style={{
                                          color: "white",
                                          width: "80px",
                                        }}
                                        type="text"
                                        onBlur={async (e) => {
                                          await firebase
                                            .firestore()
                                            .collection("works")
                                            .doc(eachDoc.id)
                                            .update({
                                              worker:
                                                e.target.value === ""
                                                  ? null
                                                  : e.target.value,
                                            });
                                        }}
                                      />
                                    </span>
                                  ) : (
                                    <span>{eachDoc.data.worker}</span>
                                  )}
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    defaultChecked={eachDoc.data.isDone}
                                    onChange={async (e) => {
                                      await firebase
                                        .firestore()
                                        .collection("works")
                                        .doc(eachDoc.id)
                                        .update({
                                          isDone: e.target.checked,
                                        });
                                    }}
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className={styles.new__course}>
                    <div className={styles.new__coursebtn}></div>
                  </div>
                </div>
              </div>
              <div className={styles.course__body_header}>
                <h1 className={styles.header__heading1}>
                  Finished Assignments
                </h1>
              </div>
              <div className={styles.course__placeholder}>
                <div className={styles.course__area}>
                  <div className={styles.course__space}>
                    <div className={styles.course_header}></div>

                    <div className={styles.header__pay}>
                      <table>
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Type</th>
                            <th>Due date</th>
                            <th>Worker</th>
                            <th>Is Completed</th>
                          </tr>
                          {docs
                            .filter((eachDoc) => eachDoc.data.isDone == true)
                            .map((eachDoc) => (
                              <tr
                                style={{ backgroundColor: "black" }}
                                key={eachDoc.id}
                              >
                                <td>{eachDoc.id}</td>
                                <td>{eachDoc.data.customer}</td>
                                <td>{eachDoc.data.serviceType}</td>
                                <td>{`${eachDoc.data.dueDate
                                  .toDate()
                                  .getDate()}/${eachDoc.data.dueDate
                                  .toDate()
                                  .getMonth()}/${eachDoc.data.dueDate
                                  .toDate()
                                  .getFullYear()}`}</td>
                                <td>
                                  {eachDoc.data.worker == null ||
                                  eachDoc.data.worker == "" ? (
                                    <span>
                                      <input
                                        style={{
                                          color: "white",
                                          width: "80px",
                                        }}
                                        type="text"
                                        onBlur={async (e) => {
                                          await firebase
                                            .firestore()
                                            .collection("works")
                                            .doc(eachDoc.id)
                                            .update({
                                              worker:
                                                e.target.value === ""
                                                  ? null
                                                  : e.target.value,
                                            });
                                        }}
                                      />
                                    </span>
                                  ) : (
                                    <span>{eachDoc.data.worker}</span>
                                  )}
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    defaultChecked={eachDoc.data.isDone}
                                    onChange={async (e) => {
                                      await firebase
                                        .firestore()
                                        .collection("works")
                                        .doc(eachDoc.id)
                                        .update({
                                          isDone: e.target.checked,
                                        });
                                    }}
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className={styles.new__course}>
                    <div className={styles.new__coursebtn}></div>
                  </div>
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

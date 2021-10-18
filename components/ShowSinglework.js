import React from "react";
import styles from "../styles/showSingleWork.module.css";
function ShowSinglework({ selectedWork, setSelectedWork }) {
  return (
    <div className={styles.main__div}>
      <div className={styles.headerDiv}>
        <h4>{selectedWork.id}</h4>
        <span
          onClick={() => {
            setSelectedWork(null);
          }}
        >
          X
        </span>
      </div>
      <div className={styles.body__div}>
        <table>
          <tbody>
            <tr>
              <td>Domain:</td>
              <td>{selectedWork.data.domain}</td>
            </tr>
            <tr>
              <td>due date:</td>
              <td>
                {" "}
                {`${selectedWork.data.dueDate
                  .toDate()
                  .getDate()}/${selectedWork.data.dueDate
                  .toDate()
                  .getMonth()}/${selectedWork.data.dueDate
                  .toDate()
                  .getFullYear()}`}
              </td>
            </tr>
            <tr>
              <td>Phone no:</td>
              <td> {selectedWork.data.phoneNo}</td>
            </tr>
            <tr>
              <td>Service type:</td>
              <td> {selectedWork.data.serviceType}</td>
            </tr>
            <tr>
              <td>Tools:</td>
              <td> {selectedWork.data.tools}</td>
            </tr>
            <tr>
              <td> Worker:</td>
              <td> {selectedWork.data.worker}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowSinglework;

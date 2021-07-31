import Image from "next/dist/client/image";
import styles from "../styles/dashheaderstyles.module.css";

export default function Dashboardheader() {
  return (
    <div className={styles.dash__container}>
      <div className={styles.dash__parent}>
        <div className={styles.dash__body}>
          <h1 className={styles.header__heading1}>Yemi Codes</h1>
          <button className={styles.edit__btn}> Edit Profile</button>
        </div>
        <div className={styles.edit__profile}>
          <button className={styles.underline__btn}>Pick a your name</button> {" "}-{" "}
          <button className={styles.underline__btn}>Add bio</button>
        </div>
      </div>
    </div>
  );
}

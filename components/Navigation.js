import styles from "../styles/navbarstyles.module.css";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import "firebase/firestore";

const Navigation = () => {
  return (
    <div className={styles.main__div}>
      <div className={styles.nav__body}>
        <div className={styles.logo}>
          <Image
            src="/oversabilogo.png"
            width={35}
            height={30}
            alt="oversabi"
            className="logoimage"
          />
          <Link href="/">
            <h1 className={styles.optionlogo}>OVERsabi</h1>
          </Link>
        </div>
        <div className={styles.nav__link_middle}>
          <Link href="/dashboard/work">
            <p className={styles.option}> Dashboard</p>
          </Link>
          <Link href="/blog">
            <p className={styles.option}>Blog</p>
          </Link>
        </div>
        <div className={styles.nav__link_right}>
          <Link href="/contact">
            <p className={styles.options}>LETS TALK</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
//  <Image src={oversabi} width={90} height={50} alt="oversabi" />

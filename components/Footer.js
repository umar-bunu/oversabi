import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/footerstyles.module.css";
import facebook from "../public/facebook.svg";
import twitter from "../public/twitter.svg";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import whatsapp from "../public/whatsapp.svg";

const Footer = () => {
  return (
    <div className={styles.footer__parent}>
      <div className={styles.footer__body}>
        <div className={styles.footer__sub_body}>
          <div className={styles.footer__mission}>
            <h1 className={styles.header__heading1}>
              Our Mission Dissertation service to the world
            </h1>
          </div>
          <div className={styles.nav__links}>
            <h2 className={styles.header__heading2}>Navigation</h2>
            <div className={styles.nav__list}>
              <Link href="/">
                <p className={styles.option}> Home</p>
              </Link>

              <Link href="/blog">
                <p className={styles.option}> Blog</p>
              </Link>

              <Link href="/contact">
                <p className={styles.option}> Contact us</p>
              </Link>
            </div>
          </div>
          <div className={styles.nav__links}>
            <h2 className={styles.header__heading2}>What we do</h2>
            <div className={styles.nav__list}>
              <p className={styles.option}> Dissertation MSc</p>
              <p className={styles.option}> Coursework</p>
              <p className={styles.option}> Essay</p>
              <p className={styles.option}> Dissertation PhD</p>
              <p className={styles.option}> Journal Research</p>
              <p className={styles.option}> Assignment</p>
            </div>
          </div>
        </div>

        <div className={styles.footer__social_link}>
          <div className={styles.footer__privacy}>
            <p className={styles.option}>© 2021 Oversabi</p>
            <p className={styles.option}>Terms of use</p>
            <p className={styles.option}>Privacy Policy</p>
          </div>
          <div className={styles.footer__social_list}>
            <h2 className={styles.header__head}>Follow us on</h2>
            <div className={styles.social__icon}>
              <Link href="/">
                <Image src={facebook} width={32} height={20} alt="facebook" />
              </Link>
              <Link href="/">
                <Image src={instagram} width={32} height={20} alt="instagram" />
              </Link>
              <Link href="/">
                <Image src={whatsapp} width={32} height={20} alt="whatsapp" />
              </Link>
              <Link href="/">
                <Image src={twitter} width={32} height={20} alt="twitter" />
              </Link>
              <Link href="/">
                <Image src={linkedin} width={32} height={20} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

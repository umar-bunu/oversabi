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
            <ul className={styles.nav__list}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Sign up</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav__links}>
            <h2 className={styles.header__heading2}>What we do</h2>
            <ul className={styles.nav__list}>
              <li>Dissertation</li>
              <li>Coures Work</li>
              <li>Essay Writing</li>
              <li>Phd Proposal</li>
              <li>Phd Thesis</li>
              <li>Assignment Writing</li>
              <li>Thesis Writing</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__social_link}>
          <div className={styles.footer__privacy}>
            <p className={styles.header__paragraph}>© 2021 Oversabi</p>
            <p className={styles.header__paragraph}>Terms of use</p>
            <p className={styles.header__paragraph}>Privacy Policy</p>
          </div>
          <div className={styles.footer__social_list}>
            <h2 className={styles.header__heading2}>Follow us on</h2>
            <div className={styles.social__icon}>
              <Link href="/">
                <a>
                  <Image src={facebook} width={32} height={20} alt="facebook" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src={instagram}
                    width={32}
                    height={20}
                    alt="instagram"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image src={whatsapp} width={32} height={20} alt="whatsapp" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image src={twitter} width={32} height={20} alt="twitter" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image src={linkedin} width={32} height={20} alt="linkedin" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

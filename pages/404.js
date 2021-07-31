import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/notfoundstyles.module.css";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className={styles.not__found}>
      <div className={styles.not__found_body}>
        <Image
          src="/pagenotfound.png"
          width={500}
          height={500}
          className={styles.headerimage}
          alt="404"
        />
        <div className={styles.header__body_content}>
          <h1 className={styles.header__heading1}>Page cannot be found :(</h1>
          <p className={styles.header__paragraph}>
            Redirecting to <Link href="/"> Oversabi home page</Link> for better
            directions.
          </p>
        </div>
      </div>
    </div>
  );
}

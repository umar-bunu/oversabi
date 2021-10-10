import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import styles from "../styles/blogliststyles.module.css";

export default function BlogList({ blog }) {
  const { title, slug, thumbnail, subTItle } = blog.fields;

  return (
    <div>
      <div className={styles.bloglist__body}>
        <Image
          className={styles.naimage}
          src={"https:" + thumbnail.fields.file.url}
          width={640}
          height={426}
          alt="laptop picture"
        />
        <div className={styles.blogcard__body_text}>
          <h2 className={styles.header__heading2}>{title}</h2>
          <div className={styles.pstyle}>
            <p className={styles.header__paragraph}>{subTItle}</p>
          </div>

          <Link href={"/blog-details/" + slug}>
            <a className={styles.continue__reading_btn}>
              Continue reading &#8594;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../styles/blogcardstyles.module.css";

export default function BlogCard({ blog }) {
  const { title, subTItle, slug, thumbnail } = blog.fields;

  return (
    <div className={styles.blogcard__body}>
      <div className={styles.featured__image}>
        <Image
          className={styles.naimage}
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="laptop picture"
        />
      </div>
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
  );
}

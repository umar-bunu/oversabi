import Link from "next/dist/client/link";
import styles from "../styles/blogliststyles.module.css"

export default function BlogList({ blog }) {
    const { title, slug} = blog.fields

  return (
    <div>
      <div className={styles.bloglist__body}>
        <h2 className={styles.bloglist__heading2}>{title}</h2>
        {/* <div className={styles.bloglist__author_details}>
          <p className={styles.bloglist__paragraph}>{authors}</p>
          <p className={styles.bloglist__paragraph}>{date}</p>
        </div> */}

        <Link href={"/blog-details/" + slug}>
          <a className={styles.readnow__btn}>Read now &#8594;</a>
        </Link>
      </div>
    </div>
  );
}

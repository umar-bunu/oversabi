import Link from "next/dist/client/link";
import styles from "../styles/blogstyles.module.css";
import BlogCard from "../components/BlogCard";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  };
}

export default function Blog({ blogs }) {
  return (
    <div className={styles.page__content}>
      <div className={styles.blog__container}>
        {blogs.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog}/>
        ))}
      </div>

      <div className={styles.section6}>
        <div className={styles.section6__body}>
          <div className={styles.section6__body_text}>
            <h1 className={styles.header__heading1}>Subscribe to our Blog</h1>
            <p className={styles.header__paragraph}>
              With our Experienced and Dependable Managers and Professional
              Research Experts it becomes so much easier... we OWN the
              responsibility of your work. Just Mail & Consider it Done!
            </p>
          </div>
          <div className={styles.section6__body_form}>
            <input
              placeholder="youremail@example.com"
              type="email"
              className={styles.inputform}
            />
            <Link href="/">
              <a className={styles.header__btn}>Subscribe</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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

      
    </div>
  );
}

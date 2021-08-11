import { createClient } from "contentful";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BlogList from "../../components/BlogList";
import Skeleton from "../../components/Skeleton";
import styles from "../../styles/slugstyles.module.css";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blog: items[0],
      bloglists: res.items,
    },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "blog" });

//   return {
//     props: {
//       blogs: res.items,
//     },
//   };
// }

export default function BlogDetails({ blog, bloglists }) {
  if (!blog) return <Skeleton />;
  const { featuredImage, title, authors, method, date } = blog.fields;
  return (
    <div className={styles.slug__container}>
      <div className={styles.slug__parent}>
        <div className={styles.slug__container_otherblogs}>
          <div className={styles.slug__container_otherblogs_card}>
            {bloglists.map((blog) => (
              <BlogList key={blog.sys.id} blog={blog} />
            ))}
          </div>
        </div>
        <div className={styles.slug__container_data}>
          <div className={styles.slug__container_data_info}>
            <Image
              src={"https:" + featuredImage.fields.file.url}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
              alt="featured image"
            />
            <h2 className={styles.slug__header_2}>{title}</h2>
            <div className={styles.method__styles}>
              {documentToReactComponents(method)}
            </div>
            <div className={styles.author__date}>
              <h2 className={styles.header__paragraph}>Author:</h2>
              {authors.map((aut) => (
                <span key={aut} className={styles.header__paragraph}>
                  {aut}
                </span>
              ))}
            </div>
            <p className={styles.slug__paragraph}>{date}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

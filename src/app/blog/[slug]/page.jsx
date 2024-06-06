import Image from "next/image";
import styles from "./singlePost.module.css";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  console.log(slug);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            post.img ||
            `https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg`
          }
          alt="Post Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt && post.createdAt.toString().slice(4, 16)}
              {!post.createdAt && "6-6-2024"}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

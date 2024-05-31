import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

// Nội dung tĩnh để thay thế API
const samplePost = {
  img: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg",
  createdAt: new Date().toString(),
  title: "Sample Post Title",
  body: "This is a sample post description. It provides a brief summary of the post content.",
  slug: "sample-post",
};

const PostCard = ({ post = samplePost }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt="Post Image"
              fill
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

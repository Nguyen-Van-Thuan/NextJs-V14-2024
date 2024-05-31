import styles from "./postUser.module.css";
import Image from "next/image";

// Dữ liệu tĩnh mẫu
const sampleUser = {
  img: "https://via.placeholder.com/50",
  username: "SampleUser",
};

// // FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  // const user = await getUser(userId);

  // Sử dụng dữ liệu tĩnh
  const user = sampleUser;

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt="User Avatar"
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;

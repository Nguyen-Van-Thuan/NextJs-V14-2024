import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>FULLSTACK</div>
      <div className={styles.text}>
        NEXT.JS 14 BY THUAN.VN © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

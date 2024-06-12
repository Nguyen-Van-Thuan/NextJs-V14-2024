import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>THUAN.NV</div>
      <div className={styles.text}>
        NEXT.JS 14 FULLSTACK © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

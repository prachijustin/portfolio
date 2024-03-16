import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prachi</h1>
        <p className={styles.description}>
          I'm a Full-Stack Senior Software Engineer with 4+ years of experience
          in service-based organizations working in Agile environment.
          Background in working with Healthcare, Media and E-Commerce domains.
        </p>
        <a
          href="mailto:prachi.sharma01sep@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pic.png")}
        alt="prachi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

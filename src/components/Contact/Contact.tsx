import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:prachi.sharma01sep@gmail.com">
            prachi.sharma01sep@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin-icon"
          />
          <a href="https://www.linkedin.com/in/prachi-sharma-b13085bb/">
            linkedin.com/prachi-sharma-b13085bb
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/prachijustin">github.com/prachijustin</a>
        </li>
      </ul>
    </footer>
  );
};

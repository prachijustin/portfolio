import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer with experience in developing fast and
                optimized backend systems and APIS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I also have experience on frontend in building pages and
                components of a site.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>DevOps</h3>
              <p>I have also worked a little on deployments.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

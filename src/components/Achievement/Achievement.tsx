import styles from "./Achievement.module.css";
import achievements from "../../data/achievements.json";

export const Achievement = () => {
  return (
    <section id="achievements" className={styles.container}>
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <ul className={styles.achievement}>
          {achievements.map((ach, id) => {
            return (
              <li key={id} className={styles.achievementItem}>
                <div className={styles.achievementItemDetails}>
                  <p>
                    <b>{ach.title}</b>
                    {ach.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

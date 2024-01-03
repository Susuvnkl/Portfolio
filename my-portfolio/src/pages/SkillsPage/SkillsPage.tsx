import styles from "./SkillsPage.module.scss";
import LogosGrid from "../../components/LogosGrid/LogosGrid";

function SkillsPage() {
  return (
    <div id="skills" className={styles.PageSection}>
      <div className={styles.SkillsPage}>
        <h1>My Skills</h1>
        <div className={styles.Content}>
          <p>
            With a keen eye for design, I seamlessly merge my expertise in both graphic design and
            web development. With a passion for creating visually appealing and highly functional
            digital experiences, I bring a unique blend of creativity and technical proficiency to
            every project.
          </p>
          <p>
            My skills span across the entire development stack, from crafting intuitive user
            interfaces to implementing robust back-end solutions.
          </p>
        </div>
        {/* <div className={styles.LogosContainer}> */}
        <LogosGrid />
        {/* </div> */}
      </div>
    </div>
  );
}

export default SkillsPage;

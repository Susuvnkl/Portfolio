import styles from "./SkillsPage.module.scss";

function SkillsPage() {
  return (
    <div id="skills" className={styles.PageSection}>
      <div className={styles.SkillsPage}>
        <h1>My Skills</h1>
        <h2>
          • HTML • CSS • JavaScript • TypeScript • ReactJS • Redux toolkit • NodeJS • Express • SQL
          / NoSQL • Firebase • FitBit SDK • Git • Jira • Figma • Linux • Adobe Photoshop, Premiere,
          Lightroom
        </h2>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SkillsPage;

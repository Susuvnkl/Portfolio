import TestMotion from "../../components/TestMoation/TestMoation";
import styles from "./ProjectsPage.module.scss";

function ProjectsPage() {
  return (
    <div id="projects" className={styles.PageSection}>
      Projects Content
      <div className={styles.testContainer}>
        <TestMotion />
      </div>
    </div>
  );
}

export default ProjectsPage;

import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
// import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import SkillsPage from "../SkillsPage/SkillsPage";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.MainPage}>
      {/* <section>
        <HomePage />
      </section> */}
      <section>
        <AboutPage />
      </section>
      <section>
        <ProjectsPage />
      </section>
      <section>
        <SkillsPage />
      </section>
      <section>
        <ContactPage />
      </section>
    </div>
  );
}

export default MainPage;

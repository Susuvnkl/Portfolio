import BinaryMatrix from "../../components/common/BinaryMouseTrack/BinaryMouseTrack";
import styles from "./HomePage.module.scss";

function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home" className={styles.PageSection}>
      <div className={styles.HomePage}>
        <div className={styles.content}>
          <div>
            <h1>Welcome to my digital space! I'm David Web Developer</h1>
          </div>
        </div>
        <div className={styles.BinaryMouseTrackContainer}>
          <BinaryMatrix textSize={14} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

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
          <div>
            <p>
              Passionate and self-driven full-stack developer ready to bring innovation to life.
            </p>
            <p>
              With a tireless work ethic and a natural curiosity for all things tech, I thrive on
              challenges and am dedicated to creating seamless user experiences.
            </p>
            <p>
              {/* Whether it's coding on the front end to captivate users or optimizing */}
              {/* server performance on the back end, I embrace each aspect of web development.  */}
              My journey is fueled by a love for learning, a meticulous attention to detail, and an
              eagerness to contribute to cutting-edge projects.
            </p>
            <p>
              Join me as I navigate the ever-evolving world of technology, constantly evolving, and
              turning ideas into reality. Let's build something extraordinary together!
            </p>
            <p>
              <button className={styles.contactMeButton} onClick={() => scrollToSection("contact")}>
                Contact me
              </button>{" "}
              and lets build something extraordinary together!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

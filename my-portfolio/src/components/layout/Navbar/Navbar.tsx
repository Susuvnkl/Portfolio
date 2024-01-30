import styles from "./Navbar.module.scss";

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.Navbar}>
      <div className={styles.ButtonsContainer}>
        {/* <button onClick={() => scrollToSection("home")}>Home</button> */}
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;

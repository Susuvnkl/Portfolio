import styles from "./Navbar.module.scss";

// interface NavbarProps {
//   setPage: (e: number) => void;
//   numberOfPages: number;
// }

function Navbar() {
  // const { setPage, numberOfPages } = props;
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  // const handlePageChange = (clickedPage: number) => {
  //   setPage(clickedPage);
  //   setCurrentPage(clickedPage);
  // };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.Navbar}>
      {/* {pages.map((page) => (
        <button
          key={page}
          className={cc(styles.button, currentPage === page && styles.currentPage)}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))} */}
      <button onClick={() => scrollToSection("home")}>Home</button>
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </div>
  );
}

export default Navbar;

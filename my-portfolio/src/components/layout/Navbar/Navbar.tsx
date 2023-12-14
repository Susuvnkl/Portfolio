import { useState } from "react";
import styles from "./Navbar.module.scss";
import { cc } from "../../../utils/Classnames";

interface NavbarProps {
  setPage: (e: number) => void;
  numberOfPages: number;
}

function Navbar(props: NavbarProps) {
  const { setPage, numberOfPages } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const handlePageChange = (clickedPage: number) => {
    setPage(clickedPage);
    setCurrentPage(clickedPage);
  };

  return (
    <div className={styles.Navbar}>
      {pages.map((page) => (
        <button
          key={page}
          className={cc(styles.button, currentPage === page && styles.currentPage)}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

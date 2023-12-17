// import MatrixRain from "../../components/layout/MatrixRain/MatrixRain";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.MainPage}>
      {/* <MatrixRain /> */}
      <section>
        <HomePage />
      </section>
      <section>
        <AboutPage />
      </section>
      <section>
        <ContactPage />
      </section>
    </div>
  );
}

export default MainPage;

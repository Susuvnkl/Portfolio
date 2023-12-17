import MatrixRain from "../../components/layout/MatrixRain/MatrixRain";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div id="home" className={styles.PageSection}>
      <MatrixRain />
      <Symbol
        key={i}
        x={x}
        y={y - i * 16}
        speed={speed}
        changeRate={i * 5 + 20}
        colour={[120, 100, (1 - i / length) * 100]}
      />
      Home Content
    </div>
  );
}

export default HomePage;

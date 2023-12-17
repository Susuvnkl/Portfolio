// MatrixRain.tsx
import React from "react";
import Streams from "./Streams";
import styles from "./MatrixRain.module.scss";

const MatrixRain: React.FC = () => {
  const streams = Array.from({ length: Math.floor(window.innerWidth / 16) }, (_, i) => ({
    x: i * 16,
    y: Math.round(Math.random() * -1000),
    speed: Math.round(Math.random() * (7 - 3) + 3),
    length: Math.round(Math.random() * (window.innerHeight / 16 - 1) + 1),
  }));

  return (
    <div className={styles.MatrixRain}>
      <Streams streams={streams} />;
    </div>
  );
};

export default MatrixRain;

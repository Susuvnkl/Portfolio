import React from "react";
import Symbol from "./Symbol";
import styles from "./Stream.module.scss";

interface StreamProps {
  x: number;
  y: number;
  speed: number;
  length: number;
}

const Stream: React.FC<StreamProps> = ({ x, y, speed, length }) => {
  const symbols = Array.from({ length }, (_, i) => (
    <Symbol
      key={i}
      x={x}
      y={y - i * 16}
      speed={speed}
      changeRate={i * 5 + 20}
      colour={[120, 100, (1 - i / length) * 100]}
    />
  ));

  return <div className={styles.stream}>{symbols}</div>;
};

export default Stream;

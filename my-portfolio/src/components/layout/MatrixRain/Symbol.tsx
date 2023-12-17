import React, { useEffect, useRef } from "react";
import styles from "./Symbol.module.scss";

interface SymbolProps {
  x: number;
  y: number;
  speed: number;
  changeRate: number;
  colour: number[];
}

const Symbol: React.FC<SymbolProps> = ({ x, y, speed, changeRate, colour }) => {
  const characterRef = useRef<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      characterRef.current = String.fromCharCode(
        Math.floor(Math.random() * (65440 - 65381 + 1)) + 65381
      );
    }, changeRate);

    return () => clearInterval(interval);
  }, [changeRate]);

  const newY = y > window.innerHeight + 16 ? 0 : y + speed;

  return (
    <span
      className={styles.symbol}
      style={{ color: `hsl(${colour[0]}, ${colour[1]}%, ${colour[2]}%)`, top: newY, left: x }}
    >
      {characterRef.current}
    </span>
  );
};

export default Symbol;

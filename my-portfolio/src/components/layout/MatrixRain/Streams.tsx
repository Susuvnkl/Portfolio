import React from "react";
import Stream from "./Stream";
import styles from "./Streams.module.scss";

interface StreamsProps {
  streams: { x: number; y: number; speed: number; length: number }[];
}

const Streams: React.FC<StreamsProps> = ({ streams }) => {
  return (
    <div className={styles.streams}>
      {streams.map((stream, index) => (
        <Stream key={index} {...stream} />
      ))}
    </div>
  );
};

export default Streams;

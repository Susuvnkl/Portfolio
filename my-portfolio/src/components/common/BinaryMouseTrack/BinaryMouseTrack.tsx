// BinaryMatrix.tsx

import { useState, useEffect, useRef } from "react";
import styles from "./BinaryMouseTrack.module.scss";

// wrapper must be in size that divides by 13

interface BinaryMatrixProps {
  textSize: number;
}

function BinaryMatrix(props: BinaryMatrixProps) {
  const { textSize } = props;

  const [binaryString, setBinaryString] = useState<string>("");
  const [componentSize, setComponentSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateComponentSize = () => {
      const element = componentRef.current;
      if (element) {
        const { width, height } = element.getBoundingClientRect();
        setComponentSize({ width, height });
      }
    };
    // Initial size check
    updateComponentSize();

    // Attach resize event listener to update size on window resize
    window.addEventListener("resize", updateComponentSize);

    // Cleanup: Remove the resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateComponentSize);
    };
  }, []);

  useEffect(() => {
    // Function to generate a random binary string based on component size and textSize
    const generateBinaryString = () => {
      // const binaryStringLength = componentSize.width * (componentSize.height / 12);
      const charactersPerLine = Math.floor(componentSize.width / 6); //componentSize.width /  ~ character width
      const charactersPerColumn = Math.floor(componentSize.height / 13); //componentSize.height /  line-height property
      // console.log(binaryStringLength);
      const newBinaryString = Array.from({ length: charactersPerColumn * charactersPerLine }, () =>
        Math.round(Math.random())
      ).join("");
      setBinaryString(newBinaryString);
    };

    generateBinaryString();
  }, [componentSize.width, componentSize.height, textSize]);

  return (
    <div ref={componentRef} className={styles.binaryMatrix}>
      <p className={styles.binaryString}>{binaryString}</p>
    </div>
  );
}

export default BinaryMatrix;

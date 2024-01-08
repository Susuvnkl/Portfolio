import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../../hooks/useFollowPointer";
import BinaryMatrix from "../common/BinaryMouseTrack/BinaryMouseTrack";

export default function TestMotion() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      {/* <div> */}
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 9,
          stiffness: 60,
          restDelta: 0.001,
        }}
      />
      {/* <div className="test"></div> */}
      <div className="BinaryMouseTrackContainer">
        <BinaryMatrix textSize={14} />
      </div>
      {/* </div> */}
    </>
  );
}

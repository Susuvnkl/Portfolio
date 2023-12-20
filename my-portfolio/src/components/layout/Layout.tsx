import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import useActivePage from "../../hooks/useActivePage";
import useScrollToSection from "../../hooks/useScrollToSection";
import { cc } from "../../utils/Classnames";
import { motion, useScroll, useSpring } from "framer-motion";

const Layout = () => {
  const { width } = useWindowSize();
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const [isSmoothScroll, setIsSmoothScroll] = useState<boolean>(false);
  const [showNavbarPopup, setShowNavbarPopup] = useState<boolean>(false);
  useActivePage();
  useScrollToSection();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!width) {
      return;
    } else {
      if (width < 500) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    }
  }, [width]);

  return (
    <div className={cc(styles.Layout, !isSmoothScroll && styles.ScrollSnap)}>
      {/* <div className={styles.LayoutContent}> */}
      <div className={styles.Toggle}>
        {!smallScreen && (
          <ToggleSwitch
            isOn={isSmoothScroll}
            handleToggle={() => setIsSmoothScroll(!isSmoothScroll)}
          />
        )}
        {/* </div> */}
      </div>
      <main>
        <Outlet />
      </main>
      <div className={styles.progressBar}>
        {showNavbarPopup && (
          <div className={styles.NavbarContainer}>{!smallScreen && <Navbar />}</div>
        )}
        <button onClick={() => setShowNavbarPopup(!showNavbarPopup)}>^^</button>
        <motion.div className={styles.progress} style={{ scaleX }} />
      </div>
    </div>
  );
};

export default Layout;

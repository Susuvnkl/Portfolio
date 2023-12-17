import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import useActivePage from "../../hooks/useActivePage";
import useScrollToSection from "../../hooks/useScrollToSection";
import { cc } from "../../utils/Classnames";

const Layout = () => {
  const { width } = useWindowSize();
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const [isSmoothScroll, setIsSmoothScroll] = useState<boolean>(false);
  useActivePage();
  useScrollToSection();

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
      <div className={styles.Navbar}>
        {!smallScreen && <Navbar numberOfPages={6} setPage={() => {}} />}
      </div>
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
    </div>
  );
};

export default Layout;

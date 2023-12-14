import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

const Layout = () => {
  const { width } = useWindowSize();
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const [isSmoothScroll, setIsSmoothScroll] = useState<boolean>(true);

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

  useEffect(() => {
    if (isSmoothScroll) {
      document.documentElement.style.scrollBehavior = "smooth";
    } else {
      document.documentElement.style.scrollBehavior = "auto";
    }
  }, [isSmoothScroll]);

  return (
    <div className={styles.Layout}>
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
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

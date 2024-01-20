import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import useActivePage from "../../hooks/useActivePage";
import useScrollToSection from "../../hooks/useScrollToSection";
import { cc } from "../../utils/Classnames";
import { motion, useScroll, useSpring } from "framer-motion";
import { useDropdown } from "../../hooks/useDropdown";
import Logo from "./Logo/Logo";
import ScrollToggleSwitch from "./ScrollToggleSwitch/ScrollToggleSwitch";
import SendMessageIcon from "../common/SendMessageIcon/SendMessageIcon";

const Layout = () => {
  const { width } = useWindowSize();
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const [isSmoothScroll, setIsSmoothScroll] = useState<boolean>(false);
  const { ref, visible, toggleDropdown } = useDropdown(false);
  useActivePage();
  useScrollToSection();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!width) {
      return;
    } else {
      if (width < 1000) {
        setSmallScreen(true);
        setIsSmoothScroll(true);
      } else {
        setSmallScreen(false);
        setIsSmoothScroll(false);
      }
    }
  }, [width]);

  return (
    <div className={cc(styles.Layout, !isSmoothScroll && styles.ScrollSnap)}>
      <div className={styles.Toggle}>
        {!smallScreen && (
          <>
            <ScrollToggleSwitch
              Theme="Dark"
              isOn={isSmoothScroll}
              handleToggle={() => setIsSmoothScroll(!isSmoothScroll)}
            />
          </>
        )}
      </div>
      <div className={styles.TopBar}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        {!smallScreen && (
          <SendMessageIcon size="small" onClick={() => scrollToSection("contact")} />
        )}
        {smallScreen && <div>=</div>}
      </div>
      <main>
        <Outlet />
      </main>
      <div ref={ref} className={styles.progressBar}>
        {visible && (
          <div className={styles.NavbarContainer}>
            <Navbar />
          </div>
        )}
        {!smallScreen && (
          <button className={styles.NavbarButton} onClick={toggleDropdown}>
            <svg
              width="60"
              height="37"
              viewBox="0 0 60 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="60" height="37" fill="url(#pattern2)" />
              <defs>
                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_20_12" transform="scale(0.0166667 0.027027)" />
                </pattern>
                <image
                  id="image0_20_12"
                  width="60"
                  height="37"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAlCAYAAAAeJYohAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAIvGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMi0yNFQyMzoxOTowOCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0xMi0yNFQyMzoxOToyOSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTItMjRUMjM6MTk6MjkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0ZjBjZjg3LWQxMGQtNmI0NS1hNzYwLTQ2NjViOTlmYmY1OCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI1NWJhMmY1LTJjYWMtMGE0YS1iMTdlLWEwMzNjYmM2YTlhNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE0YTRmMDRkLTlhYWItOTY0Mi04ZTAxLWVkYjYyZmM4YzQyNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNGE0ZjA0ZC05YWFiLTk2NDItOGUwMS1lZGI2MmZjOGM0MjciIHN0RXZ0OndoZW49IjIwMjMtMTItMjRUMjM6MTk6MDgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Nzc2ZTE3NTQtNTMzOC0zNTQwLTk2NzQtNzUzYmQ4ZDAwNDMyIiBzdEV2dDp3aGVuPSIyMDIzLTEyLTI0VDIzOjE5OjI5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0ZjBjZjg3LWQxMGQtNmI0NS1hNzYwLTQ2NjViOTlmYmY1OCIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0yNFQyMzoxOToyOSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzZlMTc1NC01MzM4LTM1NDAtOTY3NC03NTNiZDhkMDA0MzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YTRhNGYwNGQtOWFhYi05NjQyLThlMDEtZWRiNjJmYzhjNDI3IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTRhNGYwNGQtOWFhYi05NjQyLThlMDEtZWRiNjJmYzhjNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PgT6sQAAAmFJREFUaIHlms9u00AQxmcTO9BCH4RngUBVceGA6A2EhCpxAG7wALxAb3DgwgUpCKknDrwEVySOKbQNcWzvn/k4YEuxGxd7s7uOlE8aKVntfjM/zezBcQQA2iYN+i4gtKLQCf8o+VayuUVEPBoOv+9Foxch84uQI50aLXeGUby8ttAq343i66FqCDLSBrhPRKjDEhHtRvE1IgII4xC1eO8wCGNBYtJy711B4rPPerx2uAssEZEgMfHdaW/ADBx0gS0lSEwY2PdQ0j9/HyPdtbMNHl7G23mHXcAS+Rtvp8CuYEv5gHYGzMC+S9hSgsQEwD1nfi7usOvONuRwcqfX7nAIWCJ3471Wh0PB1nSHiL7YHrYGXgc20eoNAzt78eilVXIiYXmOCEDnYPAYlpor+br0KT7byqr23mDRE3Qw2IVWr5p8Q0L3DltGscdWXjpspTawCAi9MbAIBO0NNtPqqE0Bq8In9MbBllF42MoK2EouYOER2ilsqtWzpkS2kWr13LaeVX6XFk6zxU8b59zoxzZAbaLw7qxplvyoe1W+GOYDG+NM66c+QJejmB4b3UYT8O88/dDVTRnzyBdkPWw6fZan75Y9Ks/DILr0Q/lV0syH0WDw3vrJpaNGg+GxZPOkyxkmqrzVqADfiOJvbY1Cw5YaDYbHmvmw7f6bUfy1slAfm5nKk/+NiWbzINQYN0Vxla7Uhcxm9XNNd0WtMmCAlTEP+4ZdhmaAV9W60EquOtNodpotPp3L7AIAZjKfT7PkpG/ApphmyclM5nMAOJPZ+a88/di0N+jr0k3Q1v0DYOuA/wJQF1tsdMJBdAAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </button>
        )}
        <motion.div className={styles.progress} style={{ scaleX }} />
      </div>
    </div>
  );
};

export default Layout;

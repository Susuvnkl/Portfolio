import styles from "./BackgroundLayout.module.scss";
import React from "react";

type BackgroundLayoutProps = {
  children: React.ReactNode;
};

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  return <div className={styles.BackgroundLayout}>{children}</div>;
};

export default BackgroundLayout;

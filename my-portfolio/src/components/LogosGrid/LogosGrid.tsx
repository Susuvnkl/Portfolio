import LogoItem from "../LogoItem/LogoItem";
import styles from "./LogosGrid.module.scss";

const Logos = [
  "Html",
  "Css",
  "JS",
  "TypeScript",
  "React",
  "Redux",
  "Node.Js",
  "No-SQL",
  "SQL",
  "Bash",
  "FireBase",
  "Jira",
  "Git",
  "Sass",
  "Figma",
  "Premiere",
  "Photoshop",
  "Lightroom",
];

function LogosGrid() {
  return (
    <div className={styles.LogosGrid}>
      {Logos.map((Logo: string) => (
        <div>
          <LogoItem LogoName={Logo} />
        </div>
      ))}
    </div>
  );
}

export default LogosGrid;

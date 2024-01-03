import LogoItem from "../LogoItem/LogoItem";
import styles from "./LogosGrid.module.scss";

const Logos = [
  "Html",
  "Css",
  "JS",
  "TypeScript",
  "React",
  "Redux",
  "Sass",
  "Node.Js",
  "No-SQL",
  "SQL",
  "Bash",
  "FireBase",
  "Jira",
  "Git",
  "Figma",
  "Premier",
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

import { ReactNode } from "react";
import styles from "./ExperienceItem.module.scss";

export type ExperienceItemProps = {
  index: string;
  id: string;
  media: ReactNode;
  company_name: string;
  logo?: ReactNode;
  position: string;
  description: string[];
  skills: string;
  web_link: string;
  experience_primary_color: string;
};

function ExperienceItem(props: ExperienceItemProps) {
  const {
    index,
    media,
    company_name,
    logo,
    position,
    description,
    skills,
    web_link,
    experience_primary_color,
  } = props;

  const openUrl = () => {
    window.open(web_link, "_blank");
  };
  return (
    <div className={styles.ExperienceItem} key={index}>
      <div className={styles.Square}>
        <div className={styles.Media}>{media}</div>
      </div>
      <div className={styles.Square}>
        <div className={styles.Content}>
          <div className={styles.LogoContainer}>
            <h1>{logo || company_name}</h1>
          </div>
          <h2>{position}</h2>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}

          <p>
            <strong>Skills:</strong> {""}
            {skills}
          </p>
          <p
            className={styles.WebsiteLink}
            style={{ color: `#${experience_primary_color}` }}
            onClick={openUrl}
          >
            Visit {company_name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;

import { ReactNode } from "react";
import styles from "./ProjectItem.module.scss";

export type ProjectItemProps = {
  index: string;
  id: string;
  media: ReactNode;
  logo: ReactNode;
  project_type: string;
  description: string;
  technologies: string;
  project_link: string;
  deploy_location: string;
  project_primary_color: string;
};

function ProjectItem(props: ProjectItemProps) {
  const {
    index,
    media,
    logo,
    project_type,
    description,
    technologies,
    project_link,
    deploy_location,
    project_primary_color,
  } = props;

  const openPetAdoptionUrl = () => {
    window.open(project_link, "_blank");
  };

  return (
    <div className={styles.ProjectItem} key={index}>
      <div className={styles.Square}>
        <div className={styles.Media}>{media}</div>
      </div>
      <div className={styles.Square}>
        <div className={styles.Content}>
          <div className={styles.LogoContainer}>{logo}</div>
          <p>{project_type}</p>
          <p>{description}</p>
          <p>
            <strong>Build with:</strong> {""}
            {technologies}, Deployed with {""}
            {deploy_location}.
          </p>
          <p
            className={styles.WebsiteLink}
            style={{ color: `#${project_primary_color}` }}
            onClick={openPetAdoptionUrl}
          >
            Visit the app
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

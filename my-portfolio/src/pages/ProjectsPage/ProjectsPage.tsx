import styles from "./ProjectsPage.module.scss";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import ProjectItem, { ProjectItemProps } from "./Projects/ProjectItem";
// import PetAdoptionMedia from "./Projects/PetAdoptionMedia/PetAdoptionMedia";
import LetsPetLogo from "../../components/common/Icons/LetsPetLogo/LetsPetLogo";

const projects: ProjectItemProps[] = [
  {
    index: "0",
    id: "pet_adoption",
    media: "Test",
    // media: <PetAdoptionMedia />,

    logo: <LetsPetLogo />,
    project_type: "Full stack project",
    description:
      "Demo pet adoption system with users, admin dashboard, likes, adopting and fostering methods",
    technologies: "React, Node.js, MySQL, Bootstrap, NotiStack, Figma, Adobe Photoshop",
    project_link: "https://petadoption-client.vercel.app/",
    deploy_location: "Vercel",
    project_primary_color: "ffe294",
  },
  {
    index: "1",
    id: "string",
    media: "string",
    logo: "ReactNode",
    project_type: "string",
    description: "string",
    technologies: "string",
    project_link: "string",
    deploy_location: "string",
    project_primary_color: "string",
  },
];

function ProjectsPage() {
  return (
    <div id="projects" className={styles.PageSection}>
      {/* <div className={styles.SliderWrapper}> */}
      <SlickSlider>
        {projects.map((project) => (
          <ProjectItem
            id={project.id}
            index={project.index}
            media={project.media}
            logo={project.logo}
            project_type={project.project_type}
            description={project.description}
            technologies={project.technologies}
            project_link={project.project_link}
            deploy_location={project.deploy_location}
            project_primary_color={project.project_primary_color}
          />
        ))}
      </SlickSlider>
      {/* </div> */}
    </div>
  );
}

export default ProjectsPage;

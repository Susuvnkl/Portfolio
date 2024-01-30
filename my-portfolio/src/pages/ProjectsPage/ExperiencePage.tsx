import styles from "./ExperiencePage.module.scss";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import ProjectItem, { ProjectItemProps } from "./Projects/ProjectItem";
// import PetAdoptionMedia from "./Projects/PetAdoptionMedia/PetAdoptionMedia";
import LetsPetLogo from "../../components/common/Icons/LetsPetLogo/LetsPetLogo";
import PetAdoptionWeb from "../../components/common/Icons/PetAdoptionWeb/PetAdoptionWeb";
import AgadoLive from "../../components/common/Icons/AgadoLive/AgadoLive";
import ExperienceItem, { ExperienceItemProps } from "./Experience/ExperienceItem";

const projects: ProjectItemProps[] = [
  {
    index: "2",
    id: "pet_adoption",
    media: <PetAdoptionWeb />,
    logo: <LetsPetLogo />,
    project_type: "Full stack project",
    description:
      "Demo pet adoption system with users, admin dashboard, likes, adopting and fostering methods",
    technologies: "React, Node.js, MySQL, Bootstrap, NotiStack, Figma, Adobe Photoshop",
    project_link: "https://petadoption-client.vercel.app/",
    deploy_location: "Vercel",
    project_primary_color: "ffe294",
  },
];

const experience: ExperienceItemProps[] = [
  {
    index: "1",
    id: "",
    media: <AgadoLive />,
    company_name: "Healthcare StartUp",
    // logo: "Agado - Live",
    position: "Full Stack Developer",
    description: [
      "Constructed complex React components using technologies like TypeScript and Redux Toolkit to deliver captivating user interfaces.",
      "Designed and developed integration between the Agado system and wearable devices (FitBit watch).",
      "Collaborated with offshore development team (Ukraine).",
      "Leveraged my background in photography and keen eye for detail to successfully complete design tasks.",
    ],
    skills: "React, TypeScript, Node.js, Redux toolkit, Figma, Photoshope",
    web_link: "https://www.agadolive.com/",
    experience_primary_color: "1ac4c7",
  },
];

function ExperiencePage() {
  return (
    <div id="experience" className={styles.PageSection}>
      <SlickSlider>
        <>
          <div className={styles.FirstSlideContainer} key={"0"}>
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                Experience & Projects
              </text>
            </svg>
          </div>
        </>
        {experience.map((experience) => (
          <ExperienceItem
            id={experience.id}
            index={experience.index}
            media={experience.media}
            company_name={experience.company_name}
            logo={experience.logo}
            position={experience.position}
            description={experience.description}
            skills={experience.skills}
            web_link={experience.web_link}
            experience_primary_color={experience.experience_primary_color}
          />
        ))}
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
    </div>
  );
}

export default ExperiencePage;

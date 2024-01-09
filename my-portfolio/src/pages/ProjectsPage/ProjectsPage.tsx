import LetsPetLogo from "../../components/common/Icons/LetsPetLogo/LetsPetLogo";
import PetAdoptionMobile1 from "../../components/common/Icons/PetAdoptionMobile1/PetAdoptionMobile1";
import PetAdoptionMobile2 from "../../components/common/Icons/PetAdoptionMobile2/PetAdoptionMobile2";
import PetAdoptionWeb from "../../components/common/Icons/PetAdoptionWeb/PetAdoptionWeb";
import styles from "./ProjectsPage.module.scss";

const PET_ADOPTION_URL: string = "https://petadoption-client.vercel.app/";

function ProjectsPage() {
  const openPetAdoptionUrl = () => {
    window.open(PET_ADOPTION_URL, "_blank");
  };
  return (
    <div id="projects" className={styles.PageSection}>
      <div className={styles.ContentContainer}>
        <div className={styles.LogoContainer}>
          <LetsPetLogo />
        </div>
        <p>Full stack project</p>
        <p>
          Demo pet adoption system with users, admin dashboard, likes, adopting and fostering
          methods
        </p>
        <p>
          <strong>Build with:</strong> {""}
          React, Node.js, MySQL, Bootstrap, NotiStack, Figma, Adobe Photoshop, Deployed with Vercel.
        </p>
        <p className={styles.WebsiteLink} onClick={openPetAdoptionUrl}>
          Visit the app
        </p>
      </div>
      <div className={styles.ProjectContainer}>
        <div className={styles.PetWeb} onClick={openPetAdoptionUrl}>
          <PetAdoptionWeb />
        </div>
        <div className={styles.PetMobile1} onClick={openPetAdoptionUrl}>
          <PetAdoptionMobile1 />
        </div>
        <div className={styles.PetMobile2} onClick={openPetAdoptionUrl}>
          <PetAdoptionMobile2 />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

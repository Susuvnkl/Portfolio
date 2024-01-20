import { useEffect, useState } from "react";
import LetsPetLogo from "../../components/common/Icons/LetsPetLogo/LetsPetLogo";
import PetAdoptionMobile1 from "../../components/common/Icons/PetAdoptionMobile1/PetAdoptionMobile1";
import PetAdoptionMobile2 from "../../components/common/Icons/PetAdoptionMobile2/PetAdoptionMobile2";
import PetAdoptionWeb from "../../components/common/Icons/PetAdoptionWeb/PetAdoptionWeb";
import styles from "./ProjectsPage.module.scss";

const PET_ADOPTION_URL: string = "https://petadoption-client.vercel.app/";

function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openPetAdoptionUrl = () => {
    window.open(PET_ADOPTION_URL, "_blank");
  };
  return (
    <div id="projects" className={styles.PageSection}>
      <div className={styles.ProjectContainer}>
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
            React, Node.js, MySQL, Bootstrap, NotiStack, Figma, Adobe Photoshop, Deployed with
            Vercel.
          </p>
          <p className={styles.WebsiteLink} onClick={openPetAdoptionUrl}>
            Visit the app
          </p>
        </div>
        <div className={styles.ProjectAnimation}>
          <div className={styles.PetWeb} onClick={openPetAdoptionUrl}>
            <PetAdoptionWeb mode={isMobile ? "mobile" : undefined} />
          </div>
          <div className={styles.PhoneWrapper}>
            <div className={styles.PetMobile1} onClick={openPetAdoptionUrl}>
              <PetAdoptionMobile1 />
            </div>
            <div className={styles.PetMobile2} onClick={openPetAdoptionUrl}>
              <PetAdoptionMobile2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;

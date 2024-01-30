import PetAdoptionMobile1 from "../../../../components/common/Icons/PetAdoptionMobile1/PetAdoptionMobile1";
import PetAdoptionMobile2 from "../../../../components/common/Icons/PetAdoptionMobile2/PetAdoptionMobile2";
import PetAdoptionWeb from "../../../../components/common/Icons/PetAdoptionWeb/PetAdoptionWeb";
import styles from "./PetAdoptionMedia.module.scss";

const PET_ADOPTION_URL: string = "https://petadoption-client.vercel.app/";

function PetAdoptionMedia() {
  const openPetAdoptionUrl = () => {
    window.open(PET_ADOPTION_URL, "_blank");
  };
  return (
    <div className={styles.PetAdoptionMedia}>
      <div className={styles.PetWeb} onClick={openPetAdoptionUrl}>
        <PetAdoptionWeb />
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
  );
}

export default PetAdoptionMedia;

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useActivePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("test render");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      let foundActive = false;
      console.log("test effect render", location);

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isMoreThanHalfVisible =
            rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

          if (isMoreThanHalfVisible && !foundActive) {
            if (location.pathname !== `/${sectionId}`) {
              navigate(`/#${sectionId}`, { replace: true });
            }
            foundActive = true;
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, location]);
};

export default useActivePage;

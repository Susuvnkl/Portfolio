import { useEffect } from "react";

const useScrollToSection = () => {
  console.log("test render 2");
  useEffect(() => {
    console.log("test effect render 2");

    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");

      const timeoutId = setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 1800);

      return () => clearTimeout(timeoutId);
    }
  }, []);
};

export default useScrollToSection;

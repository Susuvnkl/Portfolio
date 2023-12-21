import { useEffect, useRef, useState } from "react";

const useDropdown = (initial: boolean) => {
  // state
  const [visible, setVisible] = useState(initial);
  const ref = useRef<any>(null);

  // functions
  const toggleDropdown = () => {
    setVisible((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  // close when click outside
  const dropdownClickHandler = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  // close when esc
  const dropdownKeyHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

  // effects
  useEffect(() => {
    document.addEventListener("click", dropdownClickHandler, true);
    document.addEventListener("keydown", dropdownKeyHandler, true);

    return () => {
      document.removeEventListener("click", dropdownClickHandler, true);
      document.removeEventListener("keydown", dropdownKeyHandler, true);
    };
  });

  return { ref, visible, toggleDropdown, show, hide };
};

export { useDropdown };

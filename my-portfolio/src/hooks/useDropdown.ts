import { useEffect, useRef, useState } from "react";

const useDropdown = (initial: boolean) => {
  const [visible, setVisible] = useState(initial);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const ref = useRef<any>(null);
  /* eslint-disable  @typescript-eslint/no-explicit-any */

  const toggleDropdown = () => {
    setVisible((prevState) => !prevState);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const dropdownClickHandler = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  const dropdownKeyHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

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

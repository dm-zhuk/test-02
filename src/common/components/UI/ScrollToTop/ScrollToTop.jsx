import { createContext, useContext, useState, useEffect } from "react";
import styles from "./index.module.css";
import { ArrowUp } from "../../icons/iconsIndex";

const AppContext = createContext({
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

const ScrollToTop = () => {
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const { isModalShown } = useContext(AppContext);

  const toggleVisibility = () => {
    setIsBtnVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isBtnVisible && !isModalShown && (
        <button
          onClick={scrollToTop}
          className={styles.buttonScroll}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
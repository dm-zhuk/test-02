import {  createContext, useContext, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.css";
import { ArrowUp } from "../../icons/iconsIndex";

const AppContext = createContext({
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

const ScrollToTop = () => {
  const [isBtnVisible, setisBtnVisible] = useState(false);
  const [jump, setJump] = useState(false);
  const { isModalShown } = useContext(AppContext);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setisBtnVisible(true);
    } else {
      setisBtnVisible(false);
    }
  };

  const handleHover = () => {
    setJump(true);
    setTimeout(() => setJump(false), 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const jumpAnimation = jump
    ? { y: [0, -10, 0], duration: 0.5, opacity: 1 }
    : { opacity: 1 };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <AnimatePresence>
        {isBtnVisible && !isModalShown && (
          <motion.button
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            animate={jumpAnimation}
            onClick={scrollToTop}
            onMouseEnter={handleHover}
            className={styles.buttonScroll}>
            <ArrowUp/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;

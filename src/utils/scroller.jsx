export const scrollTo = (ref) => {
  setTimeout(() => {
    if (!ref.current) return;

    window.scrollBy({
      behavior: "smooth",
      top: window.innerHeight - ref.current.getBoundingClientRect().top,
    });
  }, 0);
};

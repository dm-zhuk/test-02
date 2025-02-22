import { createContext, useState, useMemo } from "react";

const Pagination = createContext({
  currentPage: 1,
  increasePage: () => {},
  resetPage: () => {},
});

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const increasePage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  const value = useMemo(
    () => ({
      currentPage,
      increasePage,
      resetPage,
    }),
    [currentPage]
  );

  return <Pagination.Provider value={value}>{children}</Pagination.Provider>;
};

export default Pagination;

import React, { createContext, useState } from "react";

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

  return (
    <Pagination.Provider value={{ currentPage, increasePage, resetPage }}>
      {children}
    </Pagination.Provider>
  );
};

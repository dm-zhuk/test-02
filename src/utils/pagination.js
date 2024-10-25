export const pagination = (currentPage, data) => {
  const endPage = currentPage * 4;
  return {
    cards: [...data].splice(0, endPage),
    isVisible: data.length > endPage,
  };
};

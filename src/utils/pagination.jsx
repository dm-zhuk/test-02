export const paginate = (currentPage, data) => {
  const endPage = currentPage * 4;
  return {
    cards: [...data].splice(0, endPage),
    isBtnVisible: data.length > endPage,
  };
};

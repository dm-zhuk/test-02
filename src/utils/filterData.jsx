export const filterData = (cards, filterParams) => {
  return cards.filter((card) => {
    if (
      filterParams.location &&
      !card.location.toLowerCase().includes(filterParams.location.toLowerCase())
    ) {
      return false;
    }

    if (filterParams.form && card.form !== filterParams.form) {
      return false;
    }

    if (filterParams.details) {
      for (const detail of filterParams.details) {
        if (!card[detail]) {
          return false;
        }
      }
    }

    return true;
  });
};

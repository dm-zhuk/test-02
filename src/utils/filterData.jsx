export const filterData = (data, filterParams) => {
  return data.filter(item => {
    if (
      filterParams.location &&
      !item.location.toLowerCase().includes(filterParams.location.toLowerCase())
    ) {
      return false;
    }

    if (filterParams.form && item.form !== filterParams.form) {
      return false;
    }

    if (filterParams.details && filterParams.details.length > 0) {
      for (let detail of filterParams.details) {
        if (!item.details[detail]) {
          return false;
        }
      }
    }

    return true;
  });
};

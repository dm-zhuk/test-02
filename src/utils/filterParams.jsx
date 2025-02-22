export const getFilterParams = (elements) => {
  const { location, AC, automatic, kitchen, TV, bathroom, form } = elements;

  const details = {
    transmission: automatic ? automatic.checked : false,
    AC: AC ? AC.checked : false,
    kitchen: kitchen ? kitchen.checked : false,
    TV: TV ? TV.checked : false,
    bathroom: bathroom ? bathroom.checked : false,
  };

  const filterParams = {};

  if (location && location.value) {
    filterParams.location = location.value;
  }

  if (form && form.value) {
    filterParams.form = form.value;
  }

  const detailsArr = Object.keys(details).filter((key) => details[key]);
  if (detailsArr.length > 0) {
    filterParams.details = detailsArr;
  }

  return filterParams;
};

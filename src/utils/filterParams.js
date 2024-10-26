export const getFilterParams = (elements) => {
  const { location, AC, automatic, kitchen, TV, shower, form } = elements;

  const details = {
    AC: AC.checked,
    automatic: automatic.checked,
    kitchen: kitchen.checked,
    TV: TV.checked,
    bathroom: shower.checked,
  };

  const filterParams = {};
  if (location.value) {
    filterParams.location = location.value;
  }

  if (form.value) {
    filterParams.form = form.value;
  }
  const detailsArr = Object.keys(details).filter(
    (key) => details[key] === true
  );
  if (detailsArr.length > 0) {
    filterParams.details = detailsArr;
  }

  return filterParams;
};

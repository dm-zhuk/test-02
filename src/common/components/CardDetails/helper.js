export const compileDetails = (card) => {
  return [
    { name: "form", value: card.form },
    { name: "length", value: card.length },
    { name: "width", value: card.width },
    { name: "height", value: card.height },
    { name: "tank", value: card.tank },
    { name: "consumption", value: card.consumption },
  ];
};

export const compileFeatures = (list) => {
  return Object.keys(list).reduce((acc, key) => {
    if (!list[key]) return acc;
    let name = key;
    let iconName = key;

    if (key === "iconName") name = "icon name";
    acc.push({ name, value: list[key], iconName });
    return acc;
  }, []);
};

export const formatPrice = (price) => {
  return price.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};

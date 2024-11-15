export const compileFeatures = (list) => {
  if (!list || typeof list !== "object") return [];

  return Object.keys(list).reduce((acc, key) => {
    const value = list[key];
    if (value) {
      acc.push({ name: key, value });
    }
    return acc;
  }, []);
};

export const compileVehicleDetails = (card) => {
  if (!card || typeof card !== "object") {
    return [];
  }

  const { form, length, width, height, tank, consumption } = card;

  const formatLabel = (label) => {
    return label.replace(/([a-z])([A-Z])/g, "$1 $2");
  };

  return [
    { name: "Form", value: form ? formatLabel(form) : "N/A" },
    { name: "Length", value: length ? `${length}m` : "N/A" },
    { name: "Width", value: width ? `${width}m` : "N/A" },
    { name: "Height", value: height ? `${height}m` : "N/A" },
    { name: "Tank", value: tank ? `${tank}l` : "N/A" },
    { name: "Consumption", value: consumption || "N/A" },
  ];
};

export const formatPrice = (price) => {
  return price.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};

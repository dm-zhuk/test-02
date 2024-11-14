export const compileVehicleDetails = (card) => {
  if (!card || typeof card !== "object") {
    return [];
  }

  const { form, length, width, height, tank, consumption } = card;

  return [
    { name: "form", value: form || "N/A" },
    { name: "length", value: length || "N/A" },
    { name: "width", value: width || "N/A" },
    { name: "height", value: height || "N/A" },
    { name: "tank", value: tank || "N/A" },
    { name: "consumption", value: consumption || "N/A" },
  ];
};

export const formatPrice = (price) => {
  return price.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};

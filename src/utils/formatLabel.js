export const formatLabel = (label) => {
  return label
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase()
    )
    .join(" ");
};

export const formatValue = (value) => {
  return typeof value === "string"
    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    : "";
};

export const formatSpace = (spaceValue) => {
  return spaceValue.replace(/(\d+)(m)/, "$1 $2");
};

export const formatTank = (tankValue) => {
  return tankValue.replace(/(\d+)(l)/, "$1 $2");
};

export const formatPrice = (price) => {
  return price.toLocaleString("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};

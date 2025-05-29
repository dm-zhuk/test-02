import { FormatLabel, formatSpace, formatTank } from '~/utils/FormatLabel';

export const compileFeatures = list => {
  if (!list || typeof list !== 'object') return [];

  return Object.keys(list).reduce((acc, key) => {
    const value = list[key];
    if (value) {
      acc.push({ name: key, value });
    }
    return acc;
  }, []);
};

export const compileVehicleDetails = card => {
  if (!card || typeof card !== 'object') {
    return [];
  }

  const { form, length, width, height, tank, consumption } = card;

  return [
    { name: 'Form', value: form ? FormatLabel(form) : 'N/A' },
    { name: 'Length', value: length ? formatSpace(length) : 'N/A' },
    { name: 'Width', value: width ? formatSpace(width) : 'N/A' },
    { name: 'Height', value: height ? formatSpace(height) : 'N/A' },
    { name: 'Tank', value: tank ? formatTank(tank) : 'N/A' },
    { name: 'Consumption', value: consumption || 'N/A' },
  ];
};

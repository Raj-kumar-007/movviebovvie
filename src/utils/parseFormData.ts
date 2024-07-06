import set from "lodash/set";

export function parseFormData(formData) {
  const data = {};

  for (const [key, value] of formData) {
    if (isStringifiedJSON(value)) {
      set(data, key, JSON.parse(value));
    } else {
      set(data, key, value);
    }
  }

  return data;
}

const isStringifiedJSON = (value: string) => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};

import set from "lodash/set";

export function parseFormData(formData: FormData) {
  const data = {};

  for (const [key, value] of formData) {
    if (isStringifiedJSON(value as string)) {
      set(data, key, JSON.parse(value as string));
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

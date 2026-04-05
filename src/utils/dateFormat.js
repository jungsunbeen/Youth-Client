export const formatDateLabel = (value) => {
  if (!value) return '';

  const date = value instanceof Date ? value : new Date(String(value).replace(/\./g, '-'));
  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString();
};

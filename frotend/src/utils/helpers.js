export const truncateText = (
  text,
  length = 100
) => {
  if (!text) return "";

  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
};

export const capitalize = (text) => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
};
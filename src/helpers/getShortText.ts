export const getShortText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + ".." : text;
};

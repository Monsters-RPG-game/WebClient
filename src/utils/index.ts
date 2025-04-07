/**
 * Small util to format dates into hh:mm:ss format.
 * @param date
 */
// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date?: string): string => {
  const start = date ? new Date(date) : new Date();

  const h = start.getHours().toString().length === 1 ? `0${start.getHours()}` : start.getHours();
  const m = start.getMinutes().toString().length === 1 ? `0${start.getMinutes()}` : start.getMinutes();
  const s = start.getSeconds().toString().length === 1 ? `0${start.getSeconds()}` : start.getSeconds();

  return `${h}:${m}:${s}`;
};

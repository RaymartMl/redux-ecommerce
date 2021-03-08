// https://dev.to/thomasxbanks/human-readable-numbers-58ho
// make a comma separated number
// will return a string value
export function humanReadable(value, lang = null) {
  if (!value) return;
  const locale = lang || document.documentElement.lang || "en";
  const number = parseFloat(value, 10);
  return number.toLocaleString(locale);
}

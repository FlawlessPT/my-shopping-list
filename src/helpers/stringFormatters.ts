export function capitalizeFirstLetter(str: string): string {
  if (str.charAt(0)) return str.charAt(0).toUpperCase() + str.slice(1);
  else return str;
}

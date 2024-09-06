export function removeSpecialCharMask (str: string): string {
  str = str.replace(/[ÀÁÂÃÄÅ]/g, 'A');
  str = str.replace(/[àáâãäå]/g, 'a');
  str = str.replace(/[ÈÉÊË]/g, 'E');
  str = str.replace(/[^a-z0-9]/gi, '');
  return str;
}

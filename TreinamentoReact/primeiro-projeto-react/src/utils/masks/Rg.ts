export function rgMask (rg: string): string {
  if (!rg) return '';

  return rg
    .substring(0, 13)
    .replace(/\D/g, '')
    .replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
}

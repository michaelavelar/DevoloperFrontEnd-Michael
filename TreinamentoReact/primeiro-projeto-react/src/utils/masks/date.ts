export function dateMask (date: string): string {
  if (!date) return '';
  return date
    .substring(0, 10)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d)(\d{4})$/, '$1');
}

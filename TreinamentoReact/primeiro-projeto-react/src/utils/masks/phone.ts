export function phoneMask (phone: string) {
  // const value = phone.substring(0, 19);
  // return value.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4');

  return phone
    .replace(/\D/g, '') // Regex para remover caracteres não numéricos
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    .substring(0, 19);
}

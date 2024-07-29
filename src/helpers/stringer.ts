export function formatCurrency(n: any, isUnit?: boolean, currency?: string): any {
  if (n === 0) {
    return '0';
  }
  if (!n) {
    return '';
  }
  const c = Math.round(n)
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return currency ? `${c} ${currency}` : isUnit ? `${c} đ` : c;
}

export function formatCurrencyDots(n: any, isUnit?: boolean, currency?: string): any {
  if (n === 0) {
    return '0';
  }
  if (!n) {
    return '';
  }
  const c = Math.round(n)
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return currency ? `${c} ${currency}` : isUnit ? `${c} đ` : c;
}

export function removeSpecialCharacter(s: string) {
  return s.replace(/[^\w\.\-]/gi, '_');
}

export function removeSpecialCharacterWithSpace(s: string) {
  return s.replace(/[&\@\\#,+()$~%.'":*?<>{}]/g, '');
}

export function convertPriceUSA(price: any) {
  if (price !== '' && price !== undefined) {
    const result = parseInt(price) / 23000;
    return result.toFixed(2);
  }
  return 0;
}

export default function currencyFormat(price: number, currency: 'usd' | 'krw') {
  return new Intl.NumberFormat(currency === 'usd' ? 'en-US' : 'ko-KR', {
    style: 'currency',
    currency: currency === 'usd' ? 'USD' : 'KRW',
  }).format(price);
}

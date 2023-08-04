/**
 * 환율 API를 통해 미국 달러를 원화로 변환합니다.
 * @param usdollars 미국 달러
 * @returns 원화
 */
export default async function getExchanges(usdollars: number) {
  try {
    const exchanges = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API}/latest/USD`,
    );

    const data = await exchanges.json();

    return data.conversion_rates.KRW * usdollars;
  } catch (error) {
    throw new Error('환율 API 호출에 문제가 발생했습니다.');
  }
}

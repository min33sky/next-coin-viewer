export default async function checkValidCoinLogoURL(
  coinSymbol: string,
  coinId: string,
) {
  try {
    const response = await fetch(
      `https://static.coinpaprika.com/coin/${coinSymbol.toLowerCase()}-${coinId}/logo.png`,
    );

    return response.status === 200;
  } catch (error) {
    throw new Error('코인 로고 URL API 호출에 문제가 발생했습니다.');
  }
}

export default async function getCandle(coinId: string, coinSymbol: string) {
  // get candle data
  // https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin

  const url = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinSymbol.toLowerCase()}-${coinId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log('캔들 데이터: ', data);

    return data;
  } catch (error) {
    throw new Error('코인 캔들 데이터 API 호출에 문제가 발생했습니다.');
  }
}

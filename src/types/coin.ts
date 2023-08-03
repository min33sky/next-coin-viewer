export type CoinList = {
  data: Coin[];
  timestamp: number;
};

export type Coin = {
  id: string; // "bitcoin" korean meaning: "아이디"
  rank: string; // "1" korean meaning: "순위"
  symbol: string; // "BTC"   korean meaning: "심볼"
  name: string; // "Bitcoin" korean meaning: "비트코인"
  supply: string; // "18639312.0000000000000000" korean meaning: "공급량"
  maxSupply: string; // "21000000.0000000000000000" korean meaning: "최대 공급량"
  marketCapUsd: string; // "109165095803.9612349136800000" korean meaning: "시가총액"
  volumeUsd24Hr: string; // "1566136944.5720299740000000" korean meaning: "24시간 거래량"
  priceUsd: string; // "5863.8504267169748000" korean meaning: "가격"
  changePercent24Hr: string; // "-0.0407180402487400" korean meaning: "24시간 변화율"
  vwap24Hr: string; //  "5910.4110950985770000" korean meaning: "24시간 평균 거래량"
  explorer: string; // "https://blockchain.info/" korean meaning: "익스플로러"
};

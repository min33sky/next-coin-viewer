import { CoinList } from '@/types/coin';

const BASE_URL = 'https://api.coincap.io/v2/assets';

/**
 * 따로 검색 API가 없어서 인기순위 200개 중에서 해당하는 코인을 반환한다.
 */
export default async function getCoinsByKeyword(keyword: string) {
  try {
    const response = await fetch(`${BASE_URL}?limit=200`);
    const data = (await response.json()) as CoinList;

    const filteredData = data.data.filter((coin) => {
      return coin.name.toLowerCase().includes(keyword.toLowerCase());
    });

    console.log('검색 결과 : ', filteredData);

    return filteredData;
  } catch (error) {
    throw new Error('API 호출에 문제가 발생했습니다.');
  }
}

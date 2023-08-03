import { CoinList } from '@/types/coin';

const BASE_URL = 'https://api.coincap.io/v2/assets?limit=3';

export default async function getAllCoins(offset: number = 0) {
  try {
    const response = await fetch(`${BASE_URL}&offset=${offset}`);
    const data = (await response.json()) as CoinList;
    return data;
  } catch (error) {
    throw new Error('API 호출에 문제가 발생했습니다.');
  }
}

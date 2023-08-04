import { Coin, CoinList } from '@/types/coin';

const BASE_URL = 'https://api.coincap.io/v2/assets';

export default async function getAllCoins(limit: number = 20) {
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}`);
    const data = (await response.json()) as CoinList;
    return data.data as Coin[];
  } catch (error) {
    throw new Error('API 호출에 문제가 발생했습니다.');
  }
}

import { CoinList } from '@/types/coin';

const BASE_URL = 'https://api.coincap.io/v2/assets?limit=3';

export default async function getAllCoins() {
  try {
    const response = await fetch(BASE_URL);
    const data = (await response.json()) as CoinList;
    return data;
  } catch (error) {
    return '코인 정보를 불러오는데 실패했습니다.';
  }
}

import { Coin } from '@/types/coin';

export default async function getCoin(coinId: string) {
  try {
    const response = await fetch(`https://api.coincap.io/v2/assets/${coinId}`);
    const data = await response.json();
    return data.data as Coin;
  } catch (error) {
    throw new Error('API 호출에 문제가 발생했습니다.');
  }
}

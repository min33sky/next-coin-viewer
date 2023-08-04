import getAllCoins from '@/actions/getAllCoins';
import getCoinsByKeyword from '@/actions/getCoinsByKeyword';
import { AlertArea } from '@/components/AlertArea';
import CoinCard from '@/components/CoinCard';
import InfinityScrollTrigger from '@/components/InfinityScrollTrigger';
import SearchBar from '@/components/SearchBar';

interface CoinsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CoinsPage({ searchParams }: CoinsPageProps) {
  // console.log('검색 파라미터: ', searchParams);

  const limit = searchParams.limit ? Number(searchParams.limit) : 20;
  const query = searchParams.query ? String(searchParams.query) : '';

  const coins = query
    ? await getCoinsByKeyword(query)
    : await getAllCoins(limit);

  // const coins = await getAllCoins(limit);

  // const searchedCoins = await getCoinsByKeyword(query);

  // console.log('검색된 코인: ', searchedCoins);

  // console.log('모든 코인: ', coins);

  const hasNext = limit - coins.length === 0;

  if (coins.length === 0) {
    return (
      <main className="mt-24 space-y-10">
        <SearchBar />
        <AlertArea message="코인이 존재하지 않습니다." />
      </main>
    );
  }

  return (
    <main className="mt-24">
      <SearchBar />

      <ul className="mt-24 pb-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </ul>

      <InfinityScrollTrigger limit={limit} hasNextPage={hasNext} />
    </main>
  );
}

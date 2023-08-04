import getAllCoins from '@/actions/getAllCoins';
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

  const coins = await getAllCoins(limit);

  // console.log('모든 코인: ', coins);

  const hasNext = limit - coins.data.length === 0;

  if (coins.data.length === 0) {
    return <AlertArea message="코인이 존재하지 않습니다." />;
  }

  return (
    <main>
      <SearchBar />

      <ul className="mt-24 pb-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {coins.data.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </ul>

      <InfinityScrollTrigger limit={limit} hasNextPage={hasNext} />
    </main>
  );
}

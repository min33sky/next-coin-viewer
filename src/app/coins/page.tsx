import getAllCoins from '@/actions/getAllCoins';
import CoinCard from '@/components/CoinCard';
import InfinityScrollTrigger from '@/components/InfinityScrollTrigger';
import SearchBar from '@/components/SearchBar';

interface CoinsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CoinsPage({ searchParams }: CoinsPageProps) {
  console.log('검색 파라미터: ', searchParams);

  const limit = searchParams.limit ? Number(searchParams.limit) : 20;

  const coins = await getAllCoins(limit);

  // console.log('모든 코인: ', coins);

  if (coins.data.length === 0) {
    return (
      <div>
        <h1>코인이 없습니다.</h1>
      </div>
    );
  }

  return (
    <main>
      <SearchBar />

      <ul className="mt-24 pb-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container">
        {coins.data.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}

        {/* <InfinityScrollTrigger limit={limit} /> */}
      </ul>
    </main>
  );
}

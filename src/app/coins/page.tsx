import getAllCoins from '@/actions/getAllCoins';
import getCoinsByKeyword from '@/actions/getCoinsByKeyword';
import InfinityScrollTrigger from '@/components/InfinityScrollTrigger';
import { AlertArea } from '@/components/alert-area';
import CoinCard from '@/components/coin-card';
import SearchBar from '@/components/search-bar';
import { TrendingUpIcon } from 'lucide-react';

interface CoinsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * 코인 목록 페이지
 */
export default async function CoinsPage({ searchParams }: CoinsPageProps) {
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
      <main className="pt-24 container space-y-10">
        <SearchBar />
        <AlertArea message="코인이 존재하지 않습니다." />
      </main>
    );
  }

  return (
    <main className="mt-24 container">
      <SearchBar keyword={query} />

      <div className="mt-12">
        {query ? (
          <div>
            검색어 : {query} ({coins.length}개)
          </div>
        ) : (
          <>
            <TrendingUpIcon size={24} className="inline-block mr-2" />
            <span className="font-bold">현재 코인 인기 순위입니다.</span>
          </>
        )}
      </div>

      <ul className="mt-12 pb-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </ul>

      <InfinityScrollTrigger limit={limit} hasNextPage={hasNext} />
    </main>
  );
}

import getAllCoins from '@/actions/getAllCoins';
import CoinCard from '@/components/CoinCard';
import SearchBar from '@/components/SearchBar';

export default async function CoinsPage() {
  const coins = await getAllCoins();

  console.log('모든 코인: ', coins);

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
      </ul>
    </main>
  );
}

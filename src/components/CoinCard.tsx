import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Coin } from '@/types/coin';
import CoinLogo from './CoinLogo';
import Link from 'next/link';
import getExchanges from '@/lib/getExchanges';
import currencyFormat from '@/lib/currencyFormat';

interface CoinCardProps {
  coin: Coin;
}

export default async function CoinCard({ coin }: CoinCardProps) {
  const exchanges = await getExchanges(Number(coin.priceUsd));

  return (
    <Card className="shadow-xl">
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-x-2">
          <CoinLogo coinId={coin.id} coinSymbol={coin.symbol} />
          {coin.name} ({coin.symbol})
        </CardTitle>
        <CardDescription>현재 {coin.rank}위</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{currencyFormat(exchanges, 'krw')}</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size={'sm'} asChild>
          <Link href={`/coins/${coin.id}`}>자세히</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

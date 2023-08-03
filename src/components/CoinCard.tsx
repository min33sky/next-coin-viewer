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

interface CoinCardProps {
  coin: Coin;
}

export default function CoinCard({ coin }: CoinCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <CardTitle className="flex items-center gap-x-2">
          <CoinLogo coinId={coin.id} coinSymbol={coin.symbol} />
          {coin.name}
        </CardTitle>
        <CardDescription>{coin.rank}위</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <span>가격: </span>
          {Number(coin.priceUsd).toFixed(2)} 달러
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild>
          <Link href={`/coins/${coin.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

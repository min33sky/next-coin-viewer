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
      <CardFooter>
        <Button>자세히</Button>
      </CardFooter>
    </Card>
  );
}

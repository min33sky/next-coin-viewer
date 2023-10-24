import getCandles from '@/actions/getCandles';
import getCoin from '@/actions/getCoin';
import BackButton from '@/components/back-button';
import CoinLogo from '@/components/coin-logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import currencyFormat from '@/lib/currencyFormat';
import getExchanges from '@/lib/getExchanges';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import dynamic from 'next/dynamic';
import React from 'react';
import compactFormat from '@/lib/compact-format';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
const CandleChart = dynamic(() => import('@/components/CandleChart'), {
  ssr: false,
});

interface CoinDetailPageProps {
  params: {
    coinId: string;
  };
}

export default async function CoinDetailPage({ params }: CoinDetailPageProps) {
  const coinData = await getCoin(params.coinId);
  const exchanges = await getExchanges(Number(coinData.priceUsd));
  const candleData = await getCandles(coinData.id, coinData.symbol);

  const changePercent24Hr = Number(
    Number(coinData.changePercent24Hr).toFixed(2),
  );

  // console.log('캔들 정보: ', candleData);

  console.log('코인 상세 정보: ', coinData);

  return (
    <div className="mt-24 container pb-24">
      <BackButton />

      <Separator className="my-6" />

      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CoinLogo coinId={coinData.id} coinSymbol={coinData.symbol} />
          <h1 className="text-3xl font-bold">{coinData.name}</h1>
          <p className="text-2xl">({coinData.symbol})</p>
        </div>
        <p className="text-xl">{coinData.rank}위</p>
      </header>

      <Separator className="my-6" />

      <div className="grid grid-cols-2 grid-rows-2 text-center gap-2">
        <div>원화</div>
        <div>달러</div>
        <div className="">{currencyFormat(exchanges, 'krw')}</div>
        <div className="">
          {currencyFormat(Number(coinData.priceUsd), 'usd')}
        </div>
      </div>

      <Table className="mt-8 min-w-[500px]">
        <TableCaption>코인 상세 정보 테이블</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-right">공급량</TableHead>
            <TableHead className=" text-right">최대공급량</TableHead>
            <TableHead className="text-right">시가총액</TableHead>
            <TableHead className="text-right">24시간 거래량</TableHead>
            <TableHead className="text-right">24시간 평균 거래량</TableHead>
            <TableHead className="text-right">24시간 변화율</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell className="text-right">
              {compactFormat(parseInt(coinData.supply))}
            </TableCell>
            <TableCell className="text-right">
              {compactFormat(parseInt(coinData.maxSupply)) || '정보 없음'}
            </TableCell>
            <TableCell className="text-right">
              {compactFormat(parseInt(coinData.marketCapUsd))}
            </TableCell>
            <TableCell className="text-right">
              {compactFormat(parseInt(coinData.volumeUsd24Hr))}
            </TableCell>
            <TableCell className="text-right">
              {compactFormat(parseInt(coinData.vwap24Hr))}
            </TableCell>
            <TableCell
              className={cn(
                'text-red-500 text-right',
                changePercent24Hr > 0 && 'text-green-500',
              )}
            >
              {changePercent24Hr > 0 ? (
                <TrendingUpIcon size={16} className="inline-block mr-2" />
              ) : (
                <TrendingDownIcon size={16} className="inline-block mr-2" />
              )}
              {changePercent24Hr}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="mt-8 flex items-center justify-center">
        <Button variant={'cyan'} size={'sm'} asChild>
          <Link
            href={coinData.explorer}
            target="_blank"
            rel="noreferrer noopener"
          >
            관련 사이트로 이동하기
          </Link>
        </Button>
      </div>

      <div className="mt-8">
        <CandleChart candleData={candleData} />
      </div>
    </div>
  );
}

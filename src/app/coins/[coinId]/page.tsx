import getCandles from '@/actions/getCandles';
import getCoin from '@/actions/getCoin';
import BackButton from '@/components/BackButton';
import CandleChart from '@/components/CandleChart';
import CoinLogo from '@/components/coin-logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import currencyFormat from '@/lib/currencyFormat';
import getExchanges from '@/lib/getExchanges';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

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

      <div className="flex flex-col space-y-2 text-base">
        <p className="text-right">🇰🇷 : {currencyFormat(exchanges, 'krw')}</p>
        <p className="text-right">
          🇺🇸 : {currencyFormat(Number(coinData.priceUsd), 'usd')}
        </p>
      </div>

      <div>
        <p>공급량 : {coinData.supply}</p>
        <p>최대 공급량: {coinData.maxSupply || '정보 없음'}</p>
        <p>시가 총액: {coinData.marketCapUsd}</p>
        <p>24시간 거래량: {coinData.volumeUsd24Hr}</p>
        <p
          className={cn(
            'text-red-500',
            changePercent24Hr > 0 && 'text-green-500',
          )}
        >
          24시간 변화율: {changePercent24Hr}%
        </p>
        <p>24시간 평균 거래량: {coinData.vwap24Hr}</p>

        <Button variant={'link'} size={'sm'} asChild>
          <Link href={coinData.explorer}>관련 사이트로 이동하기</Link>
        </Button>
      </div>

      <div className="mt-8">
        <CandleChart candleData={candleData} />
      </div>
    </div>
  );
}

import getCandles from '@/actions/getCandles';
import getCoin from '@/actions/getCoin';
import CandleChart from '@/components/CandleChart';
import CoinLogo from '@/components/CoinLogo';
import currencyFormat from '@/lib/currencyFormat';
import getExchanges from '@/lib/getExchanges';
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

  console.log('캔들 정보: ', candleData);

  console.log('코인 상세 정보: ', coinData);

  return (
    <div className="mt-24 container">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CoinLogo coinId={coinData.id} coinSymbol={coinData.symbol} />
          <h1 className="text-3xl font-bold">{coinData.name}</h1>
          <p className="text-2xl">({coinData.symbol})</p>
        </div>
        <p className="text-xl">{coinData.rank}위</p>
      </header>
      <p>원화 : {currencyFormat(exchanges, 'krw')}</p>
      <p className="text-2xl">
        달러: {currencyFormat(Number(coinData.priceUsd), 'usd')} USD
      </p>

      <div className="mt-8">
        <CandleChart candleData={candleData} />
      </div>
    </div>
  );
}

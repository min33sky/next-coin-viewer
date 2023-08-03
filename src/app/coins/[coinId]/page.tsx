import getCoin from '@/actions/getCoin';
import React from 'react';

interface CoinDetailPageProps {
  params: {
    coinId: string;
  };
}

export default async function CoinDetailPage({ params }: CoinDetailPageProps) {
  const coinData = await getCoin(params.coinId);

  console.log('코인 상세 정보: ', coinData);

  return <div className="mt-24">CoinDetailPage : {params.coinId}</div>;
}

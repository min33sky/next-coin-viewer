import Image from 'next/image';
import React from 'react';

interface CoinLogoProps {
  coinId: string;
  coinSymbol: string;
}

export default function CoinLogo({ coinId, coinSymbol }: CoinLogoProps) {
  const coinLogoURL = `https://static.coinpaprika.com/coin/${coinSymbol.toLowerCase()}-${coinId}/logo.png`;

  return (
    <div className="relative">
      <Image src={coinLogoURL} width={32} height={32} alt="coin logo" />
    </div>
  );
}

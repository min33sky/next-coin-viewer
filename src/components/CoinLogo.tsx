import checkValidCoinLogoURL from '@/actions/checkValidCoinLogoURL';
import { AlertCircleIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface CoinLogoProps {
  coinId: string;
  coinSymbol: string;
}

export default async function CoinLogo({ coinId, coinSymbol }: CoinLogoProps) {
  const isValid = await checkValidCoinLogoURL(coinSymbol, coinId);

  const coinLogoURL = `https://static.coinpaprika.com/coin/${coinSymbol.toLowerCase()}-${coinId}/logo.png`;

  if (!isValid) {
    return <AlertCircleIcon className="w-6 h-6 text-red-500" />;
  }

  return (
    <div className="relative">
      <Image src={coinLogoURL} width={32} height={32} alt="coin logo" />
    </div>
  );
}

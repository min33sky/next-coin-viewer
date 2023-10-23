'use client';

import { CandleList } from '@/types/coin';
import ApexChart from 'react-apexcharts';
import { AlertArea } from './alert-area';

interface CandleChartProps {
  candleData: CandleList;
}

export default function CandleChart({ candleData }: CandleChartProps) {
  if (!Array.isArray(candleData) || candleData.length === 0)
    return <AlertArea message="해당 코인은 차트 데이터가 존재하지 않아요." />;

  return (
    <section className="bg-slate-900/70 dark:bg-muted/40 p-4 rounded-lg shadow-xl">
      <ApexChart
        type="candlestick"
        series={[
          {
            data: candleData?.map((coin) => ({
              x: coin.time_close,
              y: [coin.open, coin.high, coin.low, coin.close],
            })),
          },
        ]}
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            height: 300,
            width: 500,
            toolbar: {
              show: true,
            },
            background: 'transparent',
          },
          grid: { show: false },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          yaxis: {
            show: true,
            axisBorder: { show: true },
            axisTicks: { show: true },
          },
          xaxis: {
            axisBorder: { show: true },
            axisTicks: { show: true },
            labels: {
              show: true,
              datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
              },
            },
            type: 'datetime',
            categories: candleData?.map((candle) => candle.time_close),
          },
          tooltip: {
            y: {
              formatter: (value) => `$${value.toFixed(2)}`,
            },
          },
        }}
      />
    </section>
  );
}

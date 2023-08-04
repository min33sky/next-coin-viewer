import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: '오늘의 코인',
  description: 'Coin viewer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className="antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

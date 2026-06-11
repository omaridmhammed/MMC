import type { Metadata } from 'next';
import { Inter, Inter_Tight, Fraunces } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { MobileBookBar } from '@/components/MobileBookBar';
import { ChatAssistant } from '@/components/ChatAssistant';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' });
const fraunces = Fraunces({ subsets: ['latin'], axes: ['opsz'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  title: 'My Medical Centers',
  description: 'Family medicine in Ottawa, with the time to actually listen. Walk-in welcome.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} ${fraunces.variable} font-sans antialiased text-ink bg-surface min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileBookBar />
        <ChatAssistant />
      </body>
    </html>
  );
}

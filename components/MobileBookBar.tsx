'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

export function MobileBookBar() {
  const pathname = usePathname();

  // Hide on the book page itself
  if (pathname === '/book') return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom,1rem))] shadow-lg transform transition-transform">
      <Button render={<Link href="/book" />} size="lg" className="w-full rounded-xl text-lg h-14">
        Book or refer
      </Button>
    </div>
  );
}

'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/womens-health', label: 'Women\'s Health' },
  { href: '/locations', label: 'Locations' },
  { href: '/doctors', label: 'Doctors' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b flex items-center ${
      isScrolled ? 'h-20 bg-surface/95 backdrop-blur-md border-border shadow-sm' : 'h-40 bg-surface border-transparent'
    }`}>
      <div className="container mx-auto max-w-7xl px-6 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="My Medical Centers — Home">
          <Image
            src="/logo.png"
            alt="My Medical Centers"
            width={260}
            height={78}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-32'
            }`}
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith(link.href) ? 'text-primary' : 'text-ink-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button render={<Link href="/book" />} className="rounded-xl">
            Book or refer
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden flex h-8 w-8 items-center justify-center rounded-md hover:bg-surface-2 transition-colors" aria-label="Open Menu">
            <Menu className="w-6 h-6 text-ink" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface border-l-border sm:max-w-sm flex flex-col">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Links to navigate the site</SheetDescription>
            {/* Logo at top of mobile drawer */}
            <div className="pt-6 pb-2 border-b border-border">
              <Image
                src="/logo.png"
                alt="My Medical Centers"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </div>
            <nav className="flex flex-col gap-6 mt-8 flex-1">
              {NAV_LINKS.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-serif font-bold tracking-tight transition-colors ${
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px w-full bg-border my-6" />
              <Button render={<Link href="/book" />} size="lg" className="rounded-xl w-full justify-center text-lg h-14" onClick={() => setIsOpen(false)}>
                Book or refer →
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

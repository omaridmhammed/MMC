'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/womens-health', label: "Women's Health" },
  { href: '/locations', label: 'Locations' },
  { href: '/doctors', label: 'Doctors' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'h-20 bg-surface/92 backdrop-blur-xl border-b border-border/60 shadow-premium-sm'
          : 'h-36 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0 group" aria-label="My Medical Centers — Home">
          <Image
            src="/logo.png"
            alt="My Medical Centers"
            width={260}
            height={78}
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-14' : 'h-28'
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'text-primary bg-primary/8'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-2'
                }`}
              >
                {link.label}
                {/* Active underline pill */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary transition-all duration-200 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
          <div className="ml-3">
            <Button
              render={<Link href="/book" />}
              className="rounded-xl btn-glow transition-all duration-200 font-semibold px-6"
            >
              Book or refer
            </Button>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-2 transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-ink" />
            ) : (
              <Menu className="w-5 h-5 text-ink" />
            )}
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface border-l border-border sm:max-w-sm flex flex-col p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Links to navigate the site</SheetDescription>

            {/* Mobile header */}
            <div className="px-6 pt-8 pb-4 border-b border-border bg-surface-2/50">
              <Image
                src="/logo.png"
                alt="My Medical Centers"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </div>

            <nav className="flex flex-col flex-1 px-4 py-6 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-lg font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-ink hover:bg-surface-2 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  render={<Link href="/book" />}
                  size="lg"
                  className="rounded-xl w-full justify-center text-base h-14 btn-glow font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Book or refer →
                </Button>
              </div>
            </nav>

            {/* Footer note */}
            <div className="px-6 py-4 border-t border-border text-xs text-ink-muted text-center">
              Mon–Fri 9 AM–5 PM · Sat 9 AM–1 PM
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

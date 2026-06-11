import Image from 'next/image';
import Link from 'next/link';
import { HoursStatus } from './HoursStatus';
import { LOCATIONS } from '@/content/locations';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { LINKS } from '@/content/links';

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-surface overflow-hidden">
      {/* Subtle gradient accent in footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 85% 20%, rgba(90,170,200,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(90,170,200,0.05) 0%, transparent 60%)',
        }}
      />

      {/* CTA pre-footer band */}
      <div className="relative border-b border-ink-muted/20">
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">
                Get started today
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-surface">
                Accepting new patients.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button
                render={<Link href="/book" />}
                className="rounded-xl bg-primary text-primary-ink hover:bg-primary-hover btn-glow font-semibold"
              >
                Book or refer <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
              <Button
                render={
                  <a
                    href={LINKS.oceanRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="rounded-xl border-surface/20 text-surface hover:bg-surface/8 hover:text-surface bg-transparent font-semibold"
              >
                New patient registration
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="My Medical Centers — Home">
              <Image
                src="/logo.png"
                alt="My Medical Centers"
                width={180}
                height={54}
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-surface/55 text-sm leading-relaxed max-w-[240px]">
              Your Health, Our Priority. Two convenient locations serving the Ottawa community with compassionate, comprehensive care.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <HoursStatus className="text-surface/70 text-sm" />
            </div>
          </div>

          {/* Location columns */}
          {LOCATIONS.map((loc) => (
            <div key={loc.slug} className="flex flex-col gap-4">
              <h4 className="font-semibold text-surface text-sm uppercase tracking-widest">{loc.name}</h4>
              <address className="not-italic text-sm flex flex-col gap-1.5 text-surface/60">
                <span className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>
                    {loc.addressLine1}
                    {loc.addressLine2 && <><br />{loc.addressLine2}</>}
                    <br />{loc.city}, {loc.province} {loc.postalCode}
                  </span>
                </span>
              </address>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={`tel:${loc.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 text-surface/60 hover:text-primary transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.phone}
                </a>
                <a
                  href={`mailto:${loc.email}`}
                  className="inline-flex items-center gap-2 text-surface/60 hover:text-primary transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.email}
                </a>
              </div>
            </div>
          ))}

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-surface text-sm uppercase tracking-widest">Quick Links</h4>
            <nav className="flex flex-col gap-2.5 text-sm text-surface/60">
              {[
                { href: '/services', label: 'Services' },
                { href: '/doctors', label: 'Doctors' },
                { href: '/womens-health', label: "Women's Health" },
                { href: '/locations', label: 'Locations' },
                { href: '/book', label: 'Book or Refer' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/accessibility', label: 'Accessibility Options' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-primary transition-colors w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 pt-4 border-t border-ink-muted/20">
              <span className="text-xs text-ink-muted uppercase tracking-wider font-semibold">Language / Langue</span>
              <div className="mt-2 flex gap-3 text-sm">
                <span className="text-surface font-semibold">EN</span>
                <span className="text-surface/30 cursor-not-allowed">FR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ink-muted/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-muted/60">
          <p>© {new Date().getFullYear()} My Medical Centers. All rights reserved.</p>
          <p className="text-ink-muted/40">
            Mon–Fri 9 AM–5 PM · Sat 9 AM–1 PM · Sun Closed
          </p>
        </div>
      </div>
    </footer>
  );
}

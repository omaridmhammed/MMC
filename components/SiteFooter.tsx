import Image from 'next/image';
import Link from 'next/link';
import { HoursStatus } from './HoursStatus';
import { LOCATIONS } from '@/content/locations';

export function SiteFooter() {
  return (
    <footer className="bg-ink text-surface py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-6">
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
            <p className="text-surface-2/60 text-sm max-w-[250px]">
              Your Health, Our Priority. Two convenient locations serving the Ottawa community.
            </p>
            <div className="mt-2">
              <HoursStatus className="text-surface-2" />
            </div>
          </div>

          {LOCATIONS.map(loc => (
            <div key={loc.slug} className="flex flex-col gap-4">
              <h4 className="font-semibold text-primary-ink">{loc.name}</h4>
              <address className="not-italic text-sm flex flex-col gap-1 text-surface-2/80">
                <span>{loc.addressLine1}</span>
                {loc.addressLine2 && <span>{loc.addressLine2}</span>}
                <span>{loc.city}, {loc.province} {loc.postalCode}</span>
              </address>
              <div className="flex flex-col gap-1 text-sm text-surface-2/80 mt-2">
                <a href={`tel:${loc.phone.replace(/-/g, '')}`} className="hover:text-primary-ink transition-colors">Tel: {loc.phone}</a>
                <span>Fax: {loc.fax}</span>
                <a href={`mailto:${loc.email}`} className="hover:text-primary-ink transition-colors">{loc.email}</a>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-primary-ink">Quick Links</h4>
            <nav className="flex flex-col gap-3 text-sm text-surface-2/80">
              <Link href="/services" className="hover:text-primary-ink transition-colors">Services</Link>
              <Link href="/doctors" className="hover:text-primary-ink transition-colors">Doctors</Link>
              <Link href="/book" className="hover:text-primary-ink transition-colors">Book or Refer</Link>
              <Link href="/privacy" className="hover:text-primary-ink transition-colors">Privacy Policy</Link>
              <Link href="/accessibility" className="hover:text-primary-ink transition-colors">Accessibility Options</Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-ink-muted/30">
              <span className="text-xs text-ink-muted uppercase tracking-wider font-semibold">Language / Langue</span>
              <div className="mt-2 flex gap-3 text-sm">
                <span className="text-primary-ink font-medium">EN</span>
                <span className="text-surface-2/50 cursor-not-allowed">FR</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-ink-muted/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} My Medical Centers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

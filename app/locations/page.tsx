import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HoursStatus } from '@/components/HoursStatus';
import { LOCATIONS } from '@/content/locations';
import { LINKS } from '@/content/links';
import { MapPin, Phone, Mail, Printer, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Locations — My Medical Centers',
  description:
    'Find My Medical Centers at two convenient Ottawa locations: 1081 Carling Avenue (Unit 507) and 190 Richmond Road (inside Superstore). View hours, contact info, and directions.',
};

// ─── Hours table data ─────────────────────────────────────────────────────────

const HOURS = [
  { day: 'Monday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const TODAY_INDEX = new Date().getDay(); // 0 = Sunday

// ─── Google Maps embeds ───────────────────────────────────────────────────────

const MAP_EMBEDS: Record<string, string> = {
  carling:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5540!2d-75.7457!3d45.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05aa97f0b!2s1081+Carling+Ave%2C+Ottawa%2C+ON+K1Y+4G2!5e0!3m2!1sen!2sca!4v1',
  richmond:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5540!2d-75.7457!3d45.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce055!2s190+Richmond+Rd%2C+Ottawa%2C+ON+K1Z+6W6!5e0!3m2!1sen!2sca!4v1',
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LocationsPage() {
  const todayName = HOURS[TODAY_INDEX]?.day;

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-surface py-24 md:py-32 relative overflow-hidden">
        <Image src="/hero-locations.png" alt="" fill className="object-cover object-center" priority aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(90,170,200,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Find us
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Two locations<br />in Ottawa.
          </h1>
          <p className="text-surface/70 text-lg max-w-xl leading-relaxed">
            Both clinics offer walk-in care, rostering physicians, and specialist services. Find the
            location most convenient for you.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Hours notice banner ─────────────────────────────────────────────── */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm text-ink-muted">
              <span className="font-semibold text-ink">Clinic hours:</span> Mon–Fri 9 AM–5 PM · Sat 9 AM–1 PM · Sun Closed
            </span>
          </div>
          <HoursStatus />
        </div>
      </div>

      {/* ── Location cards ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-10">
            {LOCATIONS.map((loc) => (
              <article
                key={loc.slug}
                id={loc.slug}
                className="scroll-mt-24 rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Header band */}
                <div className="bg-primary px-8 py-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-primary-ink/60 text-xs font-semibold uppercase tracking-widest mb-1">
                      My Medical Centers
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-ink">
                      {loc.name}
                    </h2>
                  </div>
                  <Button
                    render={
                      <a
                        href={
                          loc.slug === 'carling'
                            ? LINKS.carlingDirections
                            : LINKS.richmondDirections
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="rounded-xl bg-primary-ink text-ink hover:bg-surface-2 shrink-0"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get directions
                  </Button>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Info column */}
                  <div className="p-8 flex flex-col gap-8">
                    {/* Address */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                        Address
                      </h3>
                      <address className="not-italic flex flex-col gap-1">
                        <span className="font-semibold text-ink">{loc.addressLine1}</span>
                        {loc.addressLine2 && (
                          <span className="text-sm text-ink-muted italic">{loc.addressLine2}</span>
                        )}
                        <span className="text-sm text-ink-muted">
                          {loc.city}, {loc.province} {loc.postalCode}
                        </span>
                      </address>
                    </div>

                    {/* Contact */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                        Contact
                      </h3>
                      <div className="flex flex-col gap-2.5 text-sm">
                        <a
                          href={`tel:${loc.phone.replace(/-/g, '')}`}
                          className="inline-flex items-center gap-2.5 text-ink-muted hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4 text-primary shrink-0" />
                          {loc.phone}
                        </a>
                        <span className="inline-flex items-center gap-2.5 text-ink-muted">
                          <Printer className="w-4 h-4 text-primary shrink-0" />
                          Fax: {loc.fax}
                        </span>
                        <a
                          href={`mailto:${loc.email}`}
                          className="inline-flex items-center gap-2.5 text-ink-muted hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          {loc.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                        Hours
                      </h3>
                      <table className="w-full text-sm">
                        <tbody>
                          {HOURS.map(({ day, hours }) => {
                            const isToday = day === todayName;
                            return (
                              <tr
                                key={day}
                                className={`border-b border-border last:border-0 ${
                                  isToday ? 'bg-primary/5 rounded' : ''
                                }`}
                              >
                                <td
                                  className={`py-2 pr-6 font-medium ${
                                    isToday ? 'text-primary' : 'text-ink'
                                  }`}
                                >
                                  {day}
                                  {isToday && (
                                    <span className="ml-2 text-xs font-semibold text-primary">
                                      today
                                    </span>
                                  )}
                                </td>
                                <td
                                  className={`py-2 text-right ${
                                    hours === 'Closed' ? 'text-ink-muted' : 'text-ink'
                                  }`}
                                >
                                  {hours}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        render={<Link href="/book" />}
                        className="rounded-xl"
                      >
                        Book appointment <ArrowRight className="ml-1.5 w-4 h-4" />
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
                        className="rounded-xl"
                      >
                        New patient registration
                      </Button>
                    </div>
                  </div>

                  {/* Map column */}
                  <div className="relative min-h-72 lg:min-h-0 bg-surface-2">
                    <iframe
                      title={`Map for ${loc.name} clinic`}
                      src={MAP_EMBEDS[loc.slug]}
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parking / transit note ──────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 border-t border-border">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">Carling — Parking & Transit</h2>
              <p className="text-ink-muted text-sm leading-relaxed">
                Located inside the Carlingwood Medical Arts Building at 1081 Carling Ave, Unit 507.
                Parking is available in the building&apos;s surface lot. The clinic is accessible by OC
                Transpo routes along Carling Avenue.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">Richmond — Parking & Transit</h2>
              <p className="text-ink-muted text-sm leading-relaxed">
                Located on the second level of the Richmond Road Real Canadian Superstore at 190
                Richmond Rd. Free parking is available in the Superstore lot. Accessible by OC
                Transpo routes along Richmond Road and Carling Avenue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

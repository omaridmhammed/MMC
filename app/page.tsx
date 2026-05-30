import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HoursStatus } from '@/components/HoursStatus';
import { SERVICES } from '@/content/services';
import { LOCATIONS } from '@/content/locations';
import { LINKS } from '@/content/links';
import {
  Heart,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Users,
  Stethoscope,
  CalendarCheck,
  ChevronRight,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '2', label: 'Clinic locations', icon: MapPin },
  { value: '10+', label: 'Physicians & specialists', icon: Stethoscope },
  { value: '6', label: 'Services offered', icon: Heart },
  { value: 'Mon–Sat', label: 'Open six days a week', icon: Clock },
];

const TRUST_POINTS = [
  {
    icon: CalendarCheck,
    title: 'Walk-ins welcome',
    body: 'No appointment? No problem. Our walk-in clinic is open six days a week for non-emergency care.',
  },
  {
    icon: Users,
    title: 'Accepting new patients',
    body: 'Looking for a family doctor in Ottawa? Our rostering physicians are accepting new patients.',
  },
  {
    icon: Stethoscope,
    title: 'Comprehensive care',
    body: 'From family medicine to mental health, psychotherapy, and specialist care — all under one roof.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-surface">
        {/* Background photo */}
        <Image
          src="/hero-home.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-ink/70"
        />
        {/* Colour accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(90,170,200,0.2) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 mb-8">
              <HoursStatus className="text-surface" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-surface mb-6">
              Your health,{' '}
              <em className="not-italic text-primary">our priority.</em>
            </h1>

            <p className="text-lg sm:text-xl text-surface/70 max-w-xl mb-10 leading-relaxed">
              Two family medicine clinics in Ottawa — Carling and Richmond Road — with walk-in care, rostering physicians, and specialist services all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                render={<Link href="/book" />}
                size="lg"
                className="rounded-xl text-base h-14 px-8"
              >
                Book or refer <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                render={<Link href="/locations" />}
                variant="outline"
                size="lg"
                className="rounded-xl text-base h-14 px-8 border-surface/20 text-surface hover:bg-surface/10 hover:text-surface bg-transparent"
              >
                Find a location
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade to surface */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-1 py-8 px-6"
              >
                <Icon className="w-5 h-5 text-primary mb-2" />
                <span className="text-3xl font-serif font-bold text-ink">
                  {value}
                </span>
                <span className="text-sm text-ink-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Why My Medical Centers
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Medicine the way it should be.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_POINTS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-surface p-8 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-ink text-lg mb-3">{title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-2">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                What we offer
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
                Our services.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors shrink-0"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-border p-7 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {service.comingSoon && (
                  <span className="absolute top-5 right-5 text-xs font-semibold bg-accent/10 text-accent rounded-full px-3 py-1">
                    Coming soon
                  </span>
                )}
                <div>
                  <h3 className="font-semibold text-ink text-base mb-2 pr-20">
                    {service.name}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations teaser ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Find us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Two locations in Ottawa.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Card header */}
                <div className="bg-primary p-8">
                  <p className="text-primary-ink/60 text-xs font-semibold uppercase tracking-widest mb-2">
                    My Medical Centers
                  </p>
                  <h3 className="font-serif text-3xl font-bold text-primary-ink">
                    {loc.name}
                  </h3>
                </div>

                {/* Card body */}
                <div className="p-8 flex flex-col gap-5">
                  <address className="not-italic text-sm text-ink-muted flex flex-col gap-0.5">
                    <span className="text-ink font-medium">{loc.addressLine1}</span>
                    {loc.addressLine2 && (
                      <span className="italic">{loc.addressLine2}</span>
                    )}
                    <span>{loc.city}, {loc.province} {loc.postalCode}</span>
                  </address>

                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={`tel:${loc.phone.replace(/-/g, '')}`}
                      className="inline-flex items-center gap-2 text-ink-muted hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {loc.phone}
                    </a>
                  </div>

                  <HoursStatus />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      render={<Link href="/book" />}
                      size="sm"
                      className="rounded-lg"
                    >
                      Book appointment
                    </Button>
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
                      variant="outline"
                      size="sm"
                      className="rounded-lg"
                    >
                      <MapPin className="w-3.5 h-3.5 mr-1.5" />
                      Get directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              View full location details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Ready to be seen?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10">
            Book an appointment online, walk in during clinic hours, or ask your specialist to refer you directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="rounded-xl h-14 px-10 bg-surface text-ink hover:bg-surface-2 text-base font-semibold"
            >
              Book or refer
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
              size="lg"
              className="rounded-xl h-14 px-10 border-primary-ink/30 text-primary-ink hover:bg-primary-ink/10 hover:text-primary-ink bg-transparent text-base"
            >
              New patient registration
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

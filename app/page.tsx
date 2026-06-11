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
  ShieldCheck,
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
      <section className="relative overflow-hidden bg-ink text-surface min-h-[85vh] flex items-center">
        {/* Background photo */}
        <Image
          src="/hero-home.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* Layered overlays for premium depth */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/65 to-ink/50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 75% 40%, rgba(90,170,200,0.22) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(45,122,154,0.12) 0%, transparent 60%)',
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 py-28 md:py-36 lg:py-44 relative z-10">
          <div className="max-w-3xl">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/12 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <HoursStatus className="text-surface/90 text-sm" />
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.25rem] font-bold leading-[1.04] tracking-tight text-surface mb-6">
              Your health,{' '}
              <em className="not-italic" style={{ color: 'var(--primary)' }}>
                our priority.
              </em>
            </h1>

            <p className="text-lg sm:text-xl text-surface/65 max-w-xl mb-10 leading-relaxed font-light">
              Two family medicine clinics in Ottawa — Carling and Richmond Road — with walk-in care,
              rostering physicians, and specialist services all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/book" />}
                size="lg"
                className="rounded-xl text-base h-14 px-8 btn-glow font-semibold w-full sm:w-auto justify-center"
              >
                Book or refer <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                render={<Link href="/locations" />}
                variant="outline"
                size="lg"
                className="rounded-xl text-base h-14 px-8 border-surface/25 text-surface hover:bg-surface/12 hover:text-surface bg-transparent backdrop-blur-sm font-semibold w-full sm:w-auto justify-center"
              >
                Find a location
              </Button>
            </div>

            {/* Trust signal row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-10 border-t border-surface/15">
              <span className="flex items-center gap-2 text-sm text-surface/60">
                <ShieldCheck className="w-4 h-4 text-success" />
                OHIP accepted
              </span>
              <span className="flex items-center gap-2 text-sm text-surface/60">
                <Users className="w-4 h-4 text-primary" />
                New patients welcome
              </span>
              <span className="flex items-center gap-2 text-sm text-surface/60">
                <CalendarCheck className="w-4 h-4 text-primary" />
                Walk-ins 6 days/week
              </span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border shadow-premium-xs">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-border">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className="flex flex-col items-start gap-1.5 py-8 px-8 group hover:bg-surface-2/60 transition-colors duration-200 border-r border-b border-border"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/18 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary"></span>
              Why My Medical Centers
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Medicine the way<br />it should be.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_POINTS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-surface p-8 card-premium cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-ink text-lg mb-3 group-hover:text-primary transition-colors duration-200">
                  {title}
                </h3>
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
                <span className="inline-block w-6 h-px bg-primary"></span>
                What we offer
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
                Our services.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors shrink-0 group"
            >
              View all services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-border p-7 card-premium cursor-pointer"
              >
                {service.comingSoon && (
                  <span className="absolute top-5 right-5 text-xs font-semibold bg-accent/10 text-accent rounded-full px-3 py-1">
                    Coming soon
                  </span>
                )}
                <div>
                  <h3 className="font-semibold text-ink text-base mb-2 pr-20 group-hover:text-primary transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary"></span>
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
                className="rounded-2xl border border-border bg-surface overflow-hidden card-premium group"
              >
                {/* Card header */}
                <div
                  className="relative p-8 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 100%)',
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 80% 20%, white 0%, transparent 50%)',
                    }}
                  />
                  <p className="relative text-primary-ink/60 text-xs font-bold uppercase tracking-widest mb-2">
                    My Medical Centers
                  </p>
                  <h3 className="relative font-serif text-3xl font-bold text-primary-ink">
                    {loc.name}
                  </h3>
                </div>

                {/* Card body */}
                <div className="p-8 flex flex-col gap-5">
                  <address className="not-italic text-sm text-ink-muted flex flex-col gap-0.5">
                    <span className="text-ink font-semibold">{loc.addressLine1}</span>
                    {loc.addressLine2 && (
                      <span className="italic">{loc.addressLine2}</span>
                    )}
                    <span>{loc.city}, {loc.province} {loc.postalCode}</span>
                  </address>

                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={`tel:${loc.phone.replace(/-/g, '')}`}
                      className="inline-flex items-center gap-2 text-ink-muted hover:text-primary transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      {loc.phone}
                    </a>
                  </div>

                  <HoursStatus />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      render={<Link href="/book" />}
                      size="sm"
                      className="rounded-lg btn-glow"
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
            >
              View full location details
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 60%, #7BBCD8 100%)',
        }}
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 15% 50%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.06) 0%, transparent 35%)',
          }}
        />
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Ready to be seen?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10 font-light">
            Book an appointment online, walk in during clinic hours, or ask your specialist to refer
            you directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="rounded-xl h-14 px-10 bg-surface text-ink hover:bg-surface-2 text-base font-bold shadow-premium-md transition-all duration-200"
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
              className="rounded-xl h-14 px-10 border-primary-ink/30 text-primary-ink hover:bg-primary-ink/10 hover:text-primary-ink bg-transparent text-base font-semibold backdrop-blur-sm"
            >
              New patient registration
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DOCTORS } from '@/content/doctors';
import { LINKS } from '@/content/links';
import { ArrowRight, MapPin, UserCheck, Users, Stethoscope, Baby } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors — My Medical Centers',
  description:
    'Meet the physicians and specialists at My Medical Centers in Ottawa. Rostering and walk-in doctors at our Carling and Richmond Road clinics.',
};

// ─── Type badge config ────────────────────────────────────────────────────────

const TYPE_CONFIG = {
  rostering: {
    label: 'Rostering Physician',
    description: 'Accepting new patients — provides long-term primary care.',
    icon: UserCheck,
    color: 'bg-primary/10 text-primary border-primary/20',
    dotColor: 'bg-primary',
  },
  'walk-in': {
    label: 'Walk-In Physician',
    description: 'Available for walk-in visits. Not currently rostering.',
    icon: Users,
    color: 'bg-accent/10 text-accent border-accent/20',
    dotColor: 'bg-accent',
  },
  specialist: {
    label: 'Specialist',
    description: 'Referral required. See your family doctor to book.',
    icon: Stethoscope,
    color: 'bg-surface-2 text-ink-muted border-border',
    dotColor: 'bg-ink-muted',
  },
  'non-rostering': {
    label: 'Physician',
    description: 'Available at this location.',
    icon: UserCheck,
    color: 'bg-surface-2 text-ink-muted border-border',
    dotColor: 'bg-ink-muted',
  },
} as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DoctorsPage() {
  const carlingDoctors = DOCTORS.filter((d) => d.locations.includes('carling'));
  const richmondDoctors = DOCTORS.filter((d) => d.locations.includes('richmond'));

  const rosteringCount = DOCTORS.filter((d) => d.type === 'rostering').length;

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-surface py-24 md:py-32 relative overflow-hidden">
        <Image src="/hero-doctors.png" alt="" fill className="object-cover object-center" priority aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(90,170,200,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our team
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Meet the doctors.
          </h1>
          <p className="text-surface/70 text-lg max-w-xl leading-relaxed">
            {rosteringCount} rostering physicians across two locations — currently accepting new
            patients. Plus walk-in doctors and specialists to cover all your care needs.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Legend ─────────────────────────────────────────────────────────── */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap gap-6 items-center text-sm text-ink-muted">
            <span className="font-semibold text-ink text-xs uppercase tracking-widest mr-2">Key:</span>
            {Object.entries(TYPE_CONFIG).map(([key, cfg]) => (
              <span key={key} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${cfg.dotColor}`} />
                {cfg.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Carling ────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary-ink" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                My Medical Centers
              </p>
              <h2 className="font-serif text-3xl font-bold text-ink">Carling</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {carlingDoctors.map((doc) => {
              const cfg = TYPE_CONFIG[doc.type];
              const Icon = cfg.icon;
              return (
                <div
                  key={doc.id}
                  className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold select-none">
                    {doc.name.split(' ').find(p => p.startsWith('Dr') || p.startsWith('RM'))
                      ? (doc.name.split(' ')[1]?.[0] ?? '?')
                      : doc.name[0]}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-ink text-base leading-snug">{doc.name}</h3>
                    {doc.credentials && (
                      <p className="text-xs text-ink-muted mt-0.5">{doc.credentials}</p>
                    )}
                    {doc.languages && doc.languages.length > 0 && (
                      <p className="text-xs text-ink-muted mt-1">
                        Languages: {doc.languages.join(', ')}
                      </p>
                    )}
                    {doc.bio && !doc.bio.startsWith('// TODO') && (
                      <p className="text-sm text-ink-muted mt-3 leading-relaxed line-clamp-3">
                        {doc.bio}
                      </p>
                    )}
                  </div>

                  {/* Type badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 self-start ${cfg.color}`}
                  >
                    <Icon className="w-3 h-3" />
                    {cfg.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="border-t border-border bg-surface-2 py-1" />

      {/* ── Richmond ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-surface-2">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary-ink" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                My Medical Centers
              </p>
              <h2 className="font-serif text-3xl font-bold text-ink">Richmond</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {richmondDoctors.map((doc) => {
              const cfg = TYPE_CONFIG[doc.type];
              const Icon = cfg.icon;
              return (
                <div
                  key={doc.id}
                  className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
                >
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold select-none">
                    {doc.name.split(' ').find(p => p.startsWith('Dr') || p.startsWith('RM'))
                      ? (doc.name.split(' ')[1]?.[0] ?? '?')
                      : doc.name[0]}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-ink text-base leading-snug">{doc.name}</h3>
                    {doc.credentials && (
                      <p className="text-xs text-ink-muted mt-0.5">{doc.credentials}</p>
                    )}
                    {doc.languages && doc.languages.length > 0 && (
                      <p className="text-xs text-ink-muted mt-1">
                        Languages: {doc.languages.join(', ')}
                      </p>
                    )}
                    {doc.bio && !doc.bio.startsWith('// TODO') && (
                      <p className="text-sm text-ink-muted mt-3 leading-relaxed line-clamp-3">
                        {doc.bio}
                      </p>
                    )}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 self-start ${cfg.color}`}
                  >
                    <Icon className="w-3 h-3" />
                    {cfg.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accepting new patients CTA ──────────────────────────────────────── */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Looking for a family doctor?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10">
            Our rostering physicians are accepting new patients. Register online through our secure
            Ocean portal — our team will be in touch to confirm your registration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              render={
                <a
                  href={LINKS.oceanRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="rounded-xl h-14 px-10 bg-surface text-ink hover:bg-surface-2 text-base font-semibold"
            >
              Register as a new patient <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              render={<Link href="/locations" />}
              variant="outline"
              size="lg"
              className="rounded-xl h-14 px-10 border-primary-ink/30 text-primary-ink hover:bg-primary-ink/10 hover:text-primary-ink bg-transparent text-base"
            >
              View locations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

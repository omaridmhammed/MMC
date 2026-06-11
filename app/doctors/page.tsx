import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DOCTORS } from '@/content/doctors';
import { LINKS } from '@/content/links';
import { ArrowRight, MapPin, UserCheck, Users, Stethoscope } from 'lucide-react';

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
    dot: 'bg-success',
  },
  'walk-in': {
    label: 'Walk-In Physician',
    description: 'Available for walk-in visits. Not currently rostering.',
    icon: Users,
    color: 'bg-accent/10 text-accent border-accent/20',
    dotColor: 'bg-accent',
    dot: 'bg-primary',
  },
  specialist: {
    label: 'Specialist',
    description: 'Referral required. See your family doctor to book.',
    icon: Stethoscope,
    color: 'bg-surface-2 text-ink-muted border-border',
    dotColor: 'bg-ink-muted',
    dot: 'bg-ink-muted',
  },
  'non-rostering': {
    label: 'Physician',
    description: 'Available at this location.',
    icon: UserCheck,
    color: 'bg-surface-2 text-ink-muted border-border',
    dotColor: 'bg-ink-muted',
    dot: 'bg-ink-muted',
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
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/65 to-ink/50" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(90,170,200,0.22) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Our team
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Meet the doctors.
          </h1>
          <p className="text-surface/65 text-lg max-w-xl leading-relaxed font-light">
            {rosteringCount} rostering physicians across two locations — currently accepting new
            patients. Plus walk-in doctors and specialists to cover all your care needs.
          </p>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ── Legend ─────────────────────────────────────────────────────────── */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap gap-6 items-center text-sm text-ink-muted">
            <span className="font-bold text-ink text-xs uppercase tracking-widest mr-2">Key:</span>
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
          <div className="flex items-center gap-4 mb-10">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-premium-sm">
              <MapPin className="w-5 h-5 text-primary-ink" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
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
                  className="rounded-2xl border border-border bg-surface p-6 card-premium flex flex-col gap-4"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold select-none shrink-0 shadow-premium-sm">
                      {doc.name.split(' ').find((p) => p.startsWith('Dr') || p.startsWith('RM'))
                        ? (doc.name.split(' ')[1]?.[0] ?? '?')
                        : doc.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-base leading-snug">{doc.name}</h3>
                      {doc.credentials && (
                        <p className="text-xs text-ink-muted mt-0.5">{doc.credentials}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    {doc.languages && doc.languages.length > 0 && (
                      <p className="text-xs text-ink-muted">
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
          <div className="flex items-center gap-4 mb-10">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-premium-sm">
              <MapPin className="w-5 h-5 text-primary-ink" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
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
                  className="rounded-2xl border border-border bg-surface p-6 card-premium flex flex-col gap-4"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold select-none shrink-0 shadow-premium-sm">
                      {doc.name.split(' ').find((p) => p.startsWith('Dr') || p.startsWith('RM'))
                        ? (doc.name.split(' ')[1]?.[0] ?? '?')
                        : doc.name[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-base leading-snug">{doc.name}</h3>
                      {doc.credentials && (
                        <p className="text-xs text-ink-muted mt-0.5">{doc.credentials}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    {doc.languages && doc.languages.length > 0 && (
                      <p className="text-xs text-ink-muted">
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

      {/* ── CTA strip ───────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 60%, #7BBCD8 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 15% 50%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.06) 0%, transparent 35%)' }}
        />
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Looking for a family doctor?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10 font-light">
            Our rostering physicians are accepting new patients. Register online through our secure
            Ocean portal — our team will be in touch to confirm your registration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              render={<a href={LINKS.oceanRegistration} target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="rounded-xl h-14 px-10 bg-surface text-ink hover:bg-surface-2 text-base font-bold shadow-premium-md"
            >
              Register as a new patient <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              render={<Link href="/locations" />}
              variant="outline"
              size="lg"
              className="rounded-xl h-14 px-10 border-primary-ink/30 text-primary-ink hover:bg-primary-ink/10 hover:text-primary-ink bg-transparent text-base font-semibold"
            >
              View locations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

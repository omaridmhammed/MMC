import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/content/links';
import {
  CalendarCheck,
  FileText,
  ArrowUpRight,
  Phone,
  ChevronRight,
  Stethoscope,
  UserPlus,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book or Refer — My Medical Centers',
  description:
    'Book an appointment, register as a new patient, or refer a patient to My Medical Centers in Ottawa. Appointments managed through the Ocean health platform.',
};

// ─── Option cards data ────────────────────────────────────────────────────────

const OPTIONS = [
  {
    id: 'existing-patient',
    icon: CalendarCheck,
    label: 'Existing patients',
    title: 'Book an appointment',
    description:
      'Already a patient at My Medical Centers? Book your next appointment online through our secure Ocean patient portal.',
    primaryCta: { label: 'Book via Ocean', href: LINKS.oceanBooking, external: true },
    secondaryCta: null,
    note: 'You will need your Ocean account credentials to log in. First time? Ask the front desk to set up your account.',
  },
  {
    id: 'new-patient',
    icon: UserPlus,
    label: 'New patients',
    title: 'Register as a new patient',
    description:
      'Our rostering physicians are accepting new patients at both Carling and Richmond locations. Complete the online registration form and our team will reach out to confirm.',
    primaryCta: { label: 'Start registration', href: LINKS.oceanRegistration, external: true },
    secondaryCta: null,
    note: 'Registration is subject to physician availability. You may be placed on a waitlist if a doctor\'s roster is at capacity.',
  },
  {
    id: 'physician-referral',
    icon: FileText,
    label: 'Physicians',
    title: 'Refer a patient',
    description:
      'Referring a patient to one of our specialists or requesting a consultation? Submit a referral through Ocean eReferral — Canada\'s most widely used referral network.',
    primaryCta: { label: 'Submit an eReferral', href: LINKS.oceanReferral, external: true },
    secondaryCta: {
      label: 'Learn about Ocean eReferral',
      href: LINKS.oceanGettingStarted,
      external: true,
    },
    note: 'Ocean eReferral is integrated with most major EMRs. Contact Ocean support if you need onboarding assistance.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BookPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-surface py-24 md:py-32 relative overflow-hidden">
        <Image src="/hero-book.png" alt="" fill className="object-cover object-center" priority aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/65 to-ink/50" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(90,170,200,0.22) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Get started
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Book or refer.
          </h1>
          <p className="text-surface/65 text-lg max-w-xl leading-relaxed font-light">
            Patients can book online or walk in. Physicians can refer patients directly via Ocean
            eReferral.
          </p>
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ── Option cards ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OPTIONS.map(({ id, icon: Icon, label, title, description, primaryCta, secondaryCta, note }) => (
              <div
                key={id}
                id={id}
                className="rounded-2xl border border-border bg-surface p-8 flex flex-col gap-6 card-premium"
              >
                {/* Label + icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {label}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3">
                  <h2 className="font-serif text-2xl font-bold text-ink">{title}</h2>
                  <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
                </div>

                {/* Note */}
                {note && (
                  <p className="text-xs text-ink-muted bg-surface-2 rounded-xl px-4 py-3 leading-relaxed border border-border">
                    {note}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col gap-2 pt-2 border-t border-border">
                  <Button
                    render={
                      primaryCta.external ? (
                        <a
                          href={primaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ) : (
                        <Link href={primaryCta.href} />
                      )
                    }
                    className="rounded-xl w-full justify-center"
                  >
                    {primaryCta.label}
                    <ArrowUpRight className="ml-1.5 w-4 h-4" />
                  </Button>
                  {secondaryCta && (
                    <Button
                      render={
                        <a
                          href={secondaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      variant="outline"
                      className="rounded-xl w-full justify-center"
                    >
                      {secondaryCta.label}
                      <ArrowUpRight className="ml-1.5 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Walk-in notice ──────────────────────────────────────────────────── */}
      <section className="bg-surface-2 border-t border-border py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 card-premium">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 shadow-premium-sm">
              <Stethoscope className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3">
                Walk-ins always welcome.
              </h2>
              <p className="text-ink-muted leading-relaxed">
                No appointment? No problem. Our walk-in clinic is open Monday–Friday 9 AM–5 PM and
                Saturday 9 AM–1 PM at both the Carling and Richmond locations. Simply bring your
                provincial health card.
              </p>
            </div>
            <Button
              render={<Link href="/locations" />}
              variant="outline"
              className="rounded-xl shrink-0"
            >
              Find a location <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Phone alternative ───────────────────────────────────────────────── */}
      <section className="bg-surface py-16 border-t border-border">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-3">
              Prefer to call?
            </h2>
            <p className="text-ink-muted mb-6 text-sm">
              Our front desk is happy to help book appointments and answer questions during clinic
              hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.carlingPhone}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Carling: 613-704-2524
              </a>
              <a
                href={LINKS.richmondPhone}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Richmond: 613-704-2524
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

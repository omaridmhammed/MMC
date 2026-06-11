import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/content/links';
import {
  Heart,
  Baby,
  Microscope,
  ShieldCheck,
  Brain,
  Stethoscope,
  ArrowRight,
  ChevronRight,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Women's Health — My Medical Centers",
  description:
    "Comprehensive women's health services in Ottawa including gynaecology, midwifery, prenatal care, mental health support, and preventive screenings at My Medical Centers.",
};

// ─── Services offered ─────────────────────────────────────────────────────────

const WOMENS_SERVICES = [
  {
    icon: Stethoscope,
    title: 'Gynaecology',
    body: 'Dr. Keiko Chan (Focused Practice in Gynaecology) sees patients at our Carling location. Services include annual pelvic exams, Pap smears, colposcopy, management of menstrual disorders, PCOS, endometriosis, and menopause. A referral from a family doctor is required.',
    referralRequired: true,
  },
  {
    icon: Baby,
    title: 'Midwifery & Prenatal Care',
    body: 'RM Summer O\'Neill (Registered Midwife) provides full midwifery care at our Carling location, including prenatal visits, labour support, birth options (hospital or home), and postpartum follow-up. Midwifery care is fully covered by OHIP.',
    referralRequired: false,
  },
  {
    icon: Microscope,
    title: 'Preventive Screenings',
    body: 'Our family doctors provide routine preventive care for women of all ages: breast exams, Pap tests, mammogram referrals, bone density screening, STI testing, and age-appropriate vaccinations including HPV.',
    referralRequired: false,
  },
  {
    icon: Brain,
    title: 'Mental Health & Psychotherapy',
    body: 'Perinatal mental health, anxiety, depression, postpartum mood disorders, and life transitions are addressed by our registered psychotherapists. Sessions are available in-person at Carling and virtually for eligible patients.',
    referralRequired: false,
  },
  {
    icon: Heart,
    title: 'Contraception & Family Planning',
    body: 'Our physicians provide counselling on all contraceptive options including oral contraceptives, IUD insertion, hormonal implants, and permanent options. Family planning discussions are handled with care and without judgment.',
    referralRequired: false,
  },
  {
    icon: ShieldCheck,
    title: 'Chronic Disease Management',
    body: 'Long-term management of conditions that disproportionately affect women, including thyroid disorders, osteoporosis, cardiovascular risk, autoimmune conditions, and iron-deficiency anemia (including iron infusion therapy).',
    referralRequired: false,
  },
];

// ─── Specialists card data ────────────────────────────────────────────────────

const SPECIALISTS = [
  {
    name: 'Dr. Keiko Chan',
    credentials: 'MD, Focused Practice in Gynaecology',
    location: 'Carling',
    bio: 'Dr. Chan brings a specialized focus in gynaecology, providing comprehensive care for women\'s reproductive health. She sees patients at our Carling location by referral.',
  },
  {
    name: "RM Summer O'Neill",
    credentials: 'RM — Registered Midwife',
    location: 'Carling',
    bio: "Summer O'Neill is a registered midwife who provides full midwifery care including prenatal, birth, and postpartum support. She offers both hospital and home birth options.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WomensHealthPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-surface py-24 md:py-32 relative overflow-hidden">
        <Image src="/hero-womens.png" alt="" fill className="object-cover object-center" priority aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/65 to-ink/50" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 90% 50%, rgba(217,116,74,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 60%, rgba(90,170,200,0.18) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-primary" />
            Women&apos;s Health
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Care designed<br />around you.
          </h1>
          <p className="text-surface/70 text-lg max-w-xl leading-relaxed">
            From routine preventive screenings to specialist gynaecology and midwifery — My Medical
            Centers provides comprehensive, compassionate care for women at every stage of life.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="rounded-xl text-base h-14 px-8"
            >
              Book an appointment <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              render={<Link href="#our-specialists" />}
              variant="outline"
              size="lg"
              className="rounded-xl text-base h-14 px-8 border-surface/20 text-surface hover:bg-surface/10 hover:text-surface bg-transparent"
            >
              Meet our specialists
            </Button>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Services grid ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              What we offer
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Services for women.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WOMENS_SERVICES.map(({ icon: Icon, title, body, referralRequired }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-surface p-7 card-premium flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/18 group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-ink text-lg group-hover:text-primary transition-colors duration-200">{title}</h3>
                    {referralRequired && (
                      <span className="text-xs font-semibold text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                        Referral required
                      </span>
                    )}
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our specialists ─────────────────────────────────────────────────── */}
      <section id="our-specialists" className="scroll-mt-24 py-20 md:py-28 bg-surface-2 border-t border-border">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              Our team
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              Women&apos;s health specialists.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALISTS.map((spec) => (
              <div
                key={spec.name}
                className="rounded-2xl border border-border bg-surface p-8 flex gap-6 card-premium"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-2xl font-bold shrink-0 select-none shadow-premium-sm">
                  {spec.name.split(' ').find(p => p.startsWith('Dr') || p.startsWith('RM'))
                    ? spec.name.split(' ').slice(1).find(p => !p.startsWith('Dr') && !p.startsWith('RM'))?.[0] ?? '?'
                    : spec.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ink text-lg leading-snug">{spec.name}</h3>
                  <p className="text-xs text-ink-muted mt-0.5 mb-1">{spec.credentials}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-3">
                    <MapPin className="w-3 h-3" /> {spec.location}
                  </span>
                  <p className="text-sm text-ink-muted leading-relaxed">{spec.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-muted text-center">
            Specialist appointments require a referral from a family doctor.{' '}
            <Link href="/book#physician-referral" className="text-primary font-medium hover:underline">
              Referring physicians can submit via Ocean eReferral.
            </Link>
          </p>
        </div>
      </section>

      {/* ── OHIP note ───────────────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col sm:flex-row items-start gap-5">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-ink text-lg mb-2">
                Covered by OHIP
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Most women's health services at My Medical Centers, including family medicine visits,
                midwifery care, gynaecology consultations, and preventive screenings, are covered by
                the Ontario Health Insurance Plan (OHIP). Bring your valid Ontario health card to
                every visit. Some psychotherapy and counselling sessions may have fees — ask our
                front desk for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--primary-deep) 0%, var(--primary) 60%, #7BBCD8 100%)' }}
      >
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Ready to book?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10">
            Walk in or book online. Our team is here for you Monday to Saturday.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="rounded-xl h-14 px-10 bg-surface text-ink hover:bg-surface-2 text-base font-semibold"
            >
              Book or refer <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              render={<Link href="/locations" />}
              variant="outline"
              size="lg"
              className="rounded-xl h-14 px-10 border-primary-ink/30 text-primary-ink hover:bg-primary-ink/10 hover:text-primary-ink bg-transparent text-base"
            >
              Find a location <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

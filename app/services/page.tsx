import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/content/services';
import { LINKS } from '@/content/links';
import {
  Stethoscope,
  Users,
  Brain,
  HeartHandshake,
  BookOpen,
  Droplets,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — My Medical Centers',
  description:
    'From walk-in care and family medicine to psychotherapy, addiction counselling, and iron infusion therapy — My Medical Centers offers comprehensive care under one roof in Ottawa.',
};

// ─── Icon map ────────────────────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'walk-in': Stethoscope,
  'family-doctor': Users,
  'psychotherapy': Brain,
  'addiction-counselling': HeartHandshake,
  'mental-health-workshops': BookOpen,
  'iron-infusion': Droplets,
};

// ─── Detailed service copy ────────────────────────────────────────────────────

const SERVICE_DETAILS: Record<string, { tagline: string; body: string[]; cta?: string }> = {
  'walk-in': {
    tagline: 'No appointment needed.',
    body: [
      'Our walk-in clinic is open Monday to Friday 9 AM – 5 PM and Saturday 9 AM – 1 PM at both our Carling and Richmond locations.',
      'Walk-in visits cover a wide range of non-emergency conditions: minor infections, skin concerns, sprains, prescription renewals, lab requisitions, and more.',
      'Simply show up with your provincial health card. Wait times are displayed at the front desk.',
    ],
    cta: 'Find a location',
  },
  'family-doctor': {
    tagline: 'Comprehensive, continuous primary care for every member of your family.',
    body: [
      'Our rostering physicians are currently accepting new patients at both locations. A rostered family doctor provides long-term, relationship-based care — managing chronic conditions, preventive screenings, referrals, and everything in between.',
      'To register as a new patient, complete the online form through our Health Canada–recognized Ocean portal. Once reviewed, our team will contact you to schedule your first visit.',
      'Existing patients can book appointments online or by calling the clinic directly.',
    ],
    cta: 'Register as a new patient',
  },
  'psychotherapy': {
    tagline: 'Professional mental health support in a safe, confidential space.',
    body: [
      'Our registered psychotherapists provide evidence-based talk therapy for adults and adolescents experiencing anxiety, depression, grief, trauma, relationship difficulties, life transitions, and more.',
      'Sessions are offered in-person at the Carling location and virtually for eligible patients. We work collaboratively with your family doctor to ensure a coordinated approach to your mental health.',
      'A referral from a physician is not required. You may self-refer by calling the clinic or booking through the patient portal.',
    ],
    cta: 'Book a consultation',
  },
  'addiction-counselling': {
    tagline: 'Non-judgmental support for people navigating substance use.',
    body: [
      'Our addiction counselling program provides individualized support for people dealing with alcohol, opioid, cannabis, and other substance use concerns, as well as behavioural addictions.',
      'Services include intake assessments, harm reduction counselling, relapse prevention planning, and coordination with community resources and specialist care such as OAT (Opioid Agonist Therapy).',
      'All sessions are confidential. We welcome self-referrals and physician referrals.',
    ],
    cta: 'Book a consultation',
  },
  'mental-health-workshops': {
    tagline: 'Community learning to build resilience and mental wellness.',
    body: [
      'Our upcoming workshop series will cover topics such as stress management, mindfulness, building healthy relationships, and navigating anxiety in everyday life.',
      'Workshops are designed for adults and will be facilitated by our licensed mental health professionals in small group settings.',
      'Stay tuned — registration details will be posted here and on our social channels when dates are confirmed.',
    ],
  },
  'iron-infusion': {
    tagline: 'Safe, medically supervised intravenous iron therapy.',
    body: [
      'Iron infusion therapy is indicated for patients with moderate to severe iron-deficiency anemia who cannot tolerate or absorb oral iron supplements effectively.',
      'All infusions are administered by trained nursing staff under physician supervision at our Carling clinic. A pre-infusion consultation and blood work are required before treatment begins.',
      'Common candidates include patients with inflammatory bowel disease, chronic kidney disease, post-surgical blood loss, or persistent anemia unresponsive to oral iron.',
    ],
    cta: 'Book a consult',
  },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-ink text-surface py-24 md:py-32 relative overflow-hidden">
        <Image src="/hero-services.png" alt="" fill className="object-cover object-center" priority aria-hidden="true" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(90,170,200,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            What we offer
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-surface mb-6">
            Our services.
          </h1>
          <p className="text-surface/70 text-lg max-w-xl leading-relaxed">
            Comprehensive, compassionate care across family medicine, mental health, and specialist
            services — all under one roof in Ottawa.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-surface to-transparent"
        />
      </section>

      {/* ── Service detail cards ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.slug] ?? Stethoscope;
              const detail = SERVICE_DETAILS[service.slug];
              return (
                <article
                  id={service.slug}
                  key={service.slug}
                  className="scroll-mt-24 rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Card top bar */}
                  <div className="flex items-start gap-6 p-8 pb-0">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">
                          {service.name}
                        </h2>
                        {service.comingSoon && (
                          <span className="text-xs font-semibold bg-accent/10 text-accent rounded-full px-3 py-1">
                            Coming soon
                          </span>
                        )}
                      </div>
                      {detail?.tagline && (
                        <p className="text-ink-muted font-medium">{detail.tagline}</p>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-8 pt-6">
                    {detail?.body && (
                      <div className="flex flex-col gap-3 mb-6">
                        {detail.body.map((para, i) => (
                          <p key={i} className="text-ink-muted leading-relaxed text-sm md:text-base">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    {!service.comingSoon && (
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                        {service.slug === 'family-doctor' ? (
                          <Button
                            render={
                              <a
                                href={LINKS.oceanRegistration}
                                target="_blank"
                                rel="noopener noreferrer"
                              />
                            }
                            size="sm"
                            className="rounded-lg mt-4"
                          >
                            Register as a new patient <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                          </Button>
                        ) : service.slug === 'walk-in' ? (
                          <Button
                            render={<Link href="/locations" />}
                            size="sm"
                            className="rounded-lg mt-4"
                          >
                            Find a location <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                          </Button>
                        ) : (
                          <Button
                            render={<Link href="/book" />}
                            size="sm"
                            className="rounded-lg mt-4"
                          >
                            Book a consultation <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-ink mb-5">
            Not sure where to start?
          </h2>
          <p className="text-primary-ink/70 text-lg max-w-xl mx-auto mb-10">
            Walk in during clinic hours or book a consultation online. Our team will help guide you
            to the right care.
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

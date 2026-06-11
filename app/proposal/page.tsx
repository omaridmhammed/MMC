import React from 'react';
import {
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  FileText,
  Bot,
  MessageSquare,
  Users,
} from 'lucide-react';
import Link from 'next/link';

export default function ProposalPage() {
  return (
    <div className="bg-surface py-16 px-6 md:py-24 relative overflow-hidden min-h-screen text-ink">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 print:max-w-full print:p-0">
        
        {/* Print instruction banner */}
        <div className="mb-12 p-4 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Client Presentation Mode</p>
              <p className="text-xs text-ink-muted">Press <kbd className="bg-surface border border-border px-1.5 py-0.5 rounded text-[10px] font-mono shadow-sm">Ctrl + P</kbd> (or Cmd+P on Mac) to print this page directly to a clean PDF brochure.</p>
            </div>
          </div>
          <Link href="/" className="text-xs font-semibold text-primary hover:text-primary-hover underline transition-colors">
            Back to homepage
          </Link>
        </div>

        {/* ── Document Header ────────────────────────────────────────────────── */}
        <header className="border-b border-border/80 pb-10 mb-12 print:pb-6 print:mb-8">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3">
            <Sparkles className="w-4 h-4" /> Client Proposal & Platform Guide
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight print:text-3xl">
            A Next-Generation Digital Front Door for My Medical Centers
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed font-light mb-6 print:text-sm print:mb-4">
            A proposal showcasing a high-conversion website integrated with Ottawa clinic logistics, 
            Ocean onboarding, and a premium AI front-desk virtual assistant.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted print:text-xs">
            <span><strong>Prepared for:</strong> My Medical Centers Stakeholders</span>
            <span className="hidden sm:inline text-border-strong">•</span>
            <span><strong>Date:</strong> June 2026</span>
          </div>
        </header>

        {/* ── Executive Summary ─────────────────────────────────────────────── */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-4 border-l-4 border-primary pl-3 print:text-xl">
            Executive Summary
          </h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            In today's healthcare environment, patient experience begins online. The newly designed My Medical Centers (MMC) web platform is built not just to inform, but to **streamline administrative workflows, reduce staff phone time, and convert website traffic into registered patients**.
          </p>
          <p className="text-ink-muted leading-relaxed">
            By embedding custom **live hours checkers**, clean **location directories**, **Ocean Registration system pathways**, and an interactive **AI Front-Desk Assistant**, this web platform provides Ottawa residents with a modern, reliable, and premium healthcare portal.
          </p>
        </section>

        {/* ── Design System & Aesthetics ────────────────────────────────────── */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-6 border-l-4 border-primary pl-3 print:text-xl">
            Premium Design Language (UI/UX)
          </h2>
          <p className="text-ink-muted leading-relaxed mb-6">
            The platform's styling system represents trust, clinical professionalism, and tranquility, moving far away from generic "cheap templates."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
            <div className="p-5 rounded-2xl bg-surface-2 border border-border/60">
              <h3 className="font-semibold text-ink text-sm uppercase tracking-wider mb-2">Typography</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Uses the editorial serif <strong>Fraunces</strong> for titles, giving clinic branding a warm, professional authority. Paired with <strong>Inter</strong> for clean, readable body copy on mobile.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-2 border border-border/60">
              <h3 className="font-semibold text-ink text-sm uppercase tracking-wider mb-2">Custom Palette</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                A serene combination of Deep Ink (#1E2D3D), Clinic Teal-Blue (#5AAAC8), and Soft Ice backgrounds. Projects clean, hygienic medical tranquility.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-2 border border-border/60">
              <h3 className="font-semibold text-ink text-sm uppercase tracking-wider mb-2">Micro-Animations</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Subtle hover transitions (spring movements, glow states on buttons, live pulsing badges) indicate that the website is alive and responsive.
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Features ─────────────────────────────────────────────────── */}
        <section className="mb-12 print:mb-8 page-break-before">
          <h2 className="font-serif text-2xl font-bold text-ink mb-6 border-l-4 border-primary pl-3 print:text-xl">
            Core Web Features & Client Value
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink text-base mb-1">Live Hours Checker Badge</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Automatically calculates whether the Carling or Richmond Rd clinic is open right now, displaying a clean green or amber live status badge. Stops patients from visiting during closed hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink text-base mb-1">Dual-Location Directory Cards</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Beautiful, informative location details featuring phone numbers, fax numbers, specific address listings (e.g. "inside Superstore, second level"), and instant Google Maps directions shortcuts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink text-base mb-1">Ocean Platform Integrations</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Direct connections to Ocean Booking, Ocean Referrals, and New Patient Registrations. Promotes online appointments and roster expansion with minimal friction.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-ink text-base mb-1">Rostering Showcase</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Direct indicator showing which local Ottawa family physicians are accepting new patients under OHIP, helping the clinic grow its roster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI Chatbot Assistant ─────────────────────────────────────────── */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink mb-4 border-l-4 border-primary pl-3 print:text-xl">
            The MMC AI Virtual Assistant
          </h2>
          <p className="text-ink-muted leading-relaxed mb-6">
            To provide 24/7 client intake and answers, we implemented the <strong>MMC Assistant</strong>—a floating chatbot widget equipped with local clinic knowledge:
          </p>

          <div className="bg-surface-2 border border-border/80 rounded-2xl p-6 mb-6 print:bg-transparent print:border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white relative">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
              </div>
              <div>
                <h4 className="font-semibold text-ink text-sm">Interactive Help Desk Agent</h4>
                <p className="text-xs text-ink-muted">Trained in clinic data directory files</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-ink-muted">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Directory Context Integration</strong>: Instantly answers queries about doctors accepting new patients, services offered, locations, and directions without querying database endpoints.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Frictionless Suggestions</strong>: Quick-reply question chips let users click to ask typical questions immediately upon opening the chat.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Emergency Interception Disclaimer</strong>: Detects keyword symptoms (e.g. chest pain, breathing difficulty) and immediately responds with a strict warning to call 911.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Offline Mode Fallback</strong>: Runs a smart, keyword-based local responder if the API key is not set, meaning the chatbot works instantly out-of-the-box.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Guide on Taking Screenshots ──────────────────────────────────── */}
        <section className="mb-12 print:hidden">
          <h2 className="font-serif text-2xl font-bold text-ink mb-4 border-l-4 border-primary pl-3">
            How to Capture Live Screenshots
          </h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            Since your server is running locally, you can easily take high-quality, actual screenshots of your website to add to your client slides:
          </p>
          <div className="space-y-3.5 text-sm text-ink-muted">
            <div className="flex gap-2">
              <span className="font-bold text-primary">Step 1:</span>
              <span>Open <strong>[http://localhost:3000](http://localhost:3000)</strong> in your browser.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-primary">Step 2:</span>
              <span>Use your system screenshot tool (<strong>Windows Key + Shift + S</strong> on Windows, or <strong>Cmd + Shift + 4</strong> on Mac) to snip the homepage layout.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-primary">Step 3:</span>
              <span>Click the floating chatbot icon in the bottom-right corner to expand the chat panel, click one of the suggested chips, and take a snippet of the expanded, animated chat assistant in action!</span>
            </div>
          </div>
        </section>

        {/* ── Document Footer ────────────────────────────────────────────────── */}
        <footer className="border-t border-border/80 pt-8 mt-12 text-center text-xs text-ink-muted print:mt-6 print:pt-4">
          <p>© 2026 My Medical Centers. All rights reserved.</p>
          <p className="mt-1 print:hidden">This presentation page is fully responsive. Feel free to resize the screen to demonstrate mobile-first design to the client.</p>
        </footer>

      </div>

      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:max-w-full {
            max-width: 100% !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          .print\\:text-3xl {
            font-size: 1.875rem !important;
          }
          .print\\:text-xl {
            font-size: 1.25rem !important;
          }
          .print\\:text-xs {
            font-size: 0.75rem !important;
          }
          .print\\:mb-8 {
            margin-bottom: 2rem !important;
          }
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          .print\\:pb-6 {
            padding-bottom: 1.5rem !important;
          }
          .print\\:bg-transparent {
            background-color: transparent !important;
          }
          .print\\:border-border {
            border-color: #CCE3EE !important;
          }
          .page-break-before {
            page-break-before: always;
          }
        }
      `}</style>
    </div>
  );
}

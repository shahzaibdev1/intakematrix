"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, X, Zap, Calendar, MessageSquare, Shield, Lock, ShieldCheck, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function App() {
  const router = useRouter();
  const goToAccess = () => router.push("/request-access");
  return (
    <>
      {/* <!-- TopAppBar --> */}
      <nav className="bg-surface/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <span className="text-xl font-headline font-bold tracking-tighter text-on-surface dark:text-on-surface">
              IntakeMatrix
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-on-surface dark:text-on-surface">
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
              href="#roi"
            >
              ROI
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
              href="#pricing"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={goToAccess} className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-6 py-2 rounded-full font-medium active:scale-95 transition-transform duration-150">
              Start Trial
            </button>
          </div>
        </div>
      </nav>
      <main className="w-full flex flex-col overflow-hidden">
        {/* <!-- HERO SECTION --> */}
        <section className="relative pt-32 pb-24 px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[921px]">
          {/* <!-- Decorative Background Element --> */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
          <motion.div className="text-center max-w-4xl mx-auto" {...staggerContainer}>
            <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-display font-extrabold tracking-[-0.02em] leading-tight mb-6 text-on-surface text-glow">
              The Autonomous Intake Infrastructure for <span className="text-primary">Premium Practices.</span>
            </motion.h1>
            <motion.p {...fadeIn} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-body">
              Eliminate revenue leaks instantly. Replace manual phone tag and fragmented data with a developer-grade,
              24/7 autonomous capture engine.
            </motion.p>
            <motion.div {...fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={goToAccess} className="w-full sm:w-auto bg-primary text-on-primary hover:bg-primary-fixed-dim px-8 py-4 rounded-full font-semibold transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(167,139,250,0.3)]">
                Deploy Now
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container px-8 py-4 rounded-full font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                View Demo
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </motion.div>
          </motion.div>
          {/* <!-- Trusted By --> */}
          <motion.div {...fadeIn} className="mt-24 pt-12 border-t border-outline-variant w-full max-w-5xl text-center">
            <p className="text-sm font-medium text-secondary-fixed mb-8 tracking-widest uppercase">
              Trusted by high-performance clinics
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-headline font-bold text-xl text-on-surface">VERITAS HEALTH</span>
              <span className="font-headline font-bold text-xl text-on-surface">ELITE MEDICAL</span>
              <span className="font-headline font-bold text-xl text-on-surface">PRIME CARDIOLOGY</span>
              <span className="font-headline font-bold text-xl text-on-surface">NEXUS DENTAL</span>
              <span className="font-headline font-bold text-xl text-on-surface">ZENITH WELLNESS</span>
            </div>
          </motion.div>
        </section>
        {/* <!-- THE DIAGNOSTIC --> */}
        <section className="py-24 px-6 lg:px-8 bg-surface-container-lowest w-full">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-[-0.02em] text-on-surface">
                The Invisible Revenue Leak
              </h2>
              <p className="text-on-surface-variant mt-2 font-body text-lg">
                Diagnosing the critical failures of traditional patient intake.
              </p>
            </motion.div>
            <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8">
              {/* <!-- The Old Way --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-error/20 bg-surface/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-bl-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cancel
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface">The Old Way</h3>
                </div>
                <ul className="space-y-4 text-on-surface-variant font-body">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error/60 mt-1 text-sm">close</span>
                    <span>Endless phone tag causing frustrated patients to call competitors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error/60 mt-1 text-sm">close</span>
                    <span>Manual data entry leading to critical transcription errors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-error/60 mt-1 text-sm">close</span>
                    <span>Lost leads during after-hours when the front desk is closed.</span>
                  </li>
                </ul>
              </motion.div>
              {/* <!-- The Matrix Way --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-tertiary/20 bg-surface/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-bl-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="material-symbols-outlined text-tertiary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface">The Matrix Way</h3>
                </div>
                <ul className="space-y-4 text-on-surface-variant font-body">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary/60 mt-1 text-sm">check</span>
                    <span>Instant, autonomous miss-call text-back captures leads immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary/60 mt-1 text-sm">check</span>
                    <span>Direct API integration pushes clean data directly into your EHR/CRM.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary/60 mt-1 text-sm">check</span>
                    <span>24/7 intelligent capture engine ensuring zero dropped opportunities.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* <!-- VERTICAL FEATURE STACK --> */}
        <section className="py-24 px-6 lg:px-8 w-full max-w-7xl mx-auto space-y-32" id="features">
          {/* <!-- Feature A --> */}
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="order-2 md:order-1 glass-panel rounded-xl aspect-[4/3] overflow-hidden border border-outline-variant relative group">
              <img
                alt="A sleek, dark-themed dashboard interface displaying real-time text message analytics. The screen glows subtly with vibrant violet accents against a near-black background. Code snippets and API endpoints are visible on a secondary monitor, reinforcing a high-tech, developer-grade aesthetic. The lighting is low and moody, emphasizing precision and modern software design."
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                data-alt="A sleek, dark-themed dashboard interface displaying real-time text message analytics. The screen glows subtly with vibrant violet accents against a near-black background. Code snippets and API endpoints are visible on a secondary monitor, reinforcing a high-tech, developer-grade aesthetic. The lighting is low and moody, emphasizing precision and modern software design."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByK6p0B03xFb6dSAP1SPZoEHbr_FD80-9yEbcJ76PMaqeUZAiXygPANaKMcBoRO8UwJYx_ombeCXjvmX1icxm5MQDIH4p7a2M0ioCPwF8Z0ZC_YvAAw5srWOhJ-B9-UjkkRi5KWTgSM3VEkfLfKbe2aV_pdfHs7XdIvPts64Gvgl9GDx36djSyNsa24SAMk0RPdWGVoBYwyORqTHtEKn50v-RQs2wdpLX-wZWatHT9jRjh3qyhEYairdZ1HLhN4zAXm2Jp9W8cxFQN"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container border border-outline-variant mb-6">
                <span className="material-symbols-outlined text-primary">quickreply</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Instant Lead Reclamation</h3>
              <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed">
                Deploy our Missed-Call Text-Back protocol. When the line is busy, IntakeMatrix autonomously engages the
                caller via SMS within 2.4 seconds, converting a lost call into an active text thread.
              </p>
              <ul className="space-y-3 font-body text-secondary-fixed">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">bolt</span> Sub-3 second response
                  time
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">bolt</span> Customizable SMS routing
                  logic
                </li>
              </ul>
            </motion.div>
          </motion.div>
          {/* <!-- Feature B --> */}
          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-container border border-outline-variant mb-6">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Autonomous Calendar Growth</h3>
              <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed">
                An AI-driven booking system that negotiates availability securely. It reads your master schedule,
                proposes optimal slots, and writes confirmed appointments back to your database without human
                intervention.
              </p>
              <ul className="space-y-3 font-body text-secondary-fixed">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">bolt</span> Bidirectional calendar
                  sync
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">bolt</span> Smart buffer zone
                  algorithms
                </li>
              </ul>
            </motion.div>
            <motion.div {...fadeIn} className="glass-panel rounded-xl aspect-[4/3] overflow-hidden border border-outline-variant relative group">
              <img
                alt="A dark mode calendar application shown on a high-resolution display. The UI is sharp and minimalist, featuring deep zinc blacks and bright violet highlight states for active appointments. The environment is a clean, modern workspace with subtle bias lighting illuminating the desk. The overall mood conveys absolute control and technical sophistication."
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                data-alt="A dark mode calendar application shown on a high-resolution display. The UI is sharp and minimalist, featuring deep zinc blacks and bright violet highlight states for active appointments. The environment is a clean, modern workspace with subtle bias lighting illuminating the desk. The overall mood conveys absolute control and technical sophistication."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXLmEeE7QN1YOghPIz_Fns2TZkzo4gmzx6dvo5t9-JuiUwSF9n6yNa8BKP6kaCBl52cNPJqIHQ7Azz-AGXeSLft-zSgskLTPhnwV9ZrOa_wJOLijwabWIfM6U_m08fQlEztXQcoGIn1rzwdMtHzJIzkOS04uJ3hSnDgxlfMqYHuYZsMrV1axha5hrdUk5eIodY9YV41tpoo7UPAky1Y9F0cYqFswDoptmNPpi8kMEmFPcSuo8mweNfMgJ_RBxpYlTn7UKp1Mn4UMrQ"
              />
            </motion.div>
          </motion.div>
        </section>
        {/* <!-- THE TESTIMONIAL WALL --> */}
        <section
          className="py-24 px-6 lg:px-8 bg-surface-container-lowest border-y border-outline-variant w-full"
          id="roi"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-[-0.02em] text-on-surface mb-4">
                Engineered for ROI
              </h2>
              <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
                High-end clinics measure success in numbers, not feelings. Here is the data.
              </p>
            </motion.div>
            <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
              {/* <!-- Review 1 - Spans 2 cols on lg --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant lg:col-span-2 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-tertiary mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-xl text-on-surface font-body font-medium leading-relaxed">
                    &quot;We deployed IntakeMatrix and immediately saw a 34% drop in abandoned calls. The system paid
                    for itself within the first 48 hours of operation by capturing leads we normally lost during lunch
                    hours.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center font-bold text-primary">
                    VD
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Dr. Sarah Jenkins</p>
                    <p className="text-sm text-on-surface-variant">Veritas Dental Group</p>
                  </div>
                </div>
              </motion.div>
              {/* <!-- Review 2 --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant flex flex-col justify-between hover:border-primary/50 transition-colors bg-surface-container/30">
                <div className="mb-6">
                  <h4 className="text-4xl font-bold text-primary mb-2">+42%</h4>
                  <p className="text-on-surface-variant font-body">Increase in completed online bookings in Q1.</p>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Prime Cardiology</p>
                  <p className="text-sm text-on-surface-variant">Operations Dept.</p>
                </div>
              </motion.div>
              {/* <!-- Review 3 --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant flex flex-col justify-between hover:border-primary/50 transition-colors bg-surface-container/30">
                <div className="mb-6">
                  <h4 className="text-4xl font-bold text-tertiary mb-2">0</h4>
                  <p className="text-on-surface-variant font-body">Data transcription errors since implementation.</p>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Elite Medical</p>
                  <p className="text-sm text-on-surface-variant">IT Infrastructure</p>
                </div>
              </motion.div>
              {/* <!-- Review 4 - Spans 2 cols on lg --> */}
              <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant lg:col-span-2 flex flex-col justify-between hover:border-primary/50 transition-colors">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-tertiary mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                  <p className="text-xl text-on-surface font-body font-medium leading-relaxed">
                    &quot;The unified data pipeline is flawless. It consolidates our SMS, email, and web chat into a
                    single stream. Our front desk efficiency is up tremendously.&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center font-bold text-primary">
                    ZW
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Marcus Chen</p>
                    <p className="text-sm text-on-surface-variant">Director, Zenith Wellness</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* <!-- PRICING ARCHITECTURE --> */}
        <section className="py-24 px-6 lg:px-8 w-full max-w-7xl mx-auto" id="pricing">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-[-0.02em] text-on-surface mb-4">
              Pricing Architecture
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto">
              Transparent, predictable scaling for your infrastructure.
            </p>
          </motion.div>
          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8 items-center">
            {/* <!-- Tier 1 --> */}
            <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant flex flex-col h-full">
              <h3 className="text-xl font-bold text-on-surface mb-2">Essential</h3>
              <p className="text-on-surface-variant text-sm mb-6">Core automation for single-location clinics.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-on-surface">$297</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-on-surface-variant mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Missed-Call Text-Back
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Unified Inbox
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Standard Integrations
                </li>
              </ul>
              <button onClick={goToAccess} className="w-full bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container px-6 py-3 rounded-lg font-medium transition-colors">
                Select Essential
              </button>
            </motion.div>
            {/* <!-- Tier 2 --> */}
            <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border-2 border-primary relative flex flex-col h-full transform scale-105 bg-surface-container-low shadow-[0_0_30px_rgba(167,139,250,0.15)] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-2">Professional</h3>
              <p className="text-on-surface-variant text-sm mb-6">Advanced growth engine for scaling practices.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">$497</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 text-sm text-on-surface-variant mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Everything in Essential
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> AI Calendar Booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Review Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Custom Workflows
                </li>
              </ul>
              <button onClick={goToAccess} className="w-full bg-primary text-on-primary hover:bg-primary-fixed-dim px-6 py-3 rounded-lg font-medium transition-colors shadow-[0_0_10px_rgba(167,139,250,0.3)]">
                Deploy Professional
              </button>
            </motion.div>
            {/* <!-- Tier 3 --> */}
            <motion.div {...fadeIn} className="glass-panel p-8 rounded-xl border border-outline-variant flex flex-col h-full">
              <h3 className="text-xl font-bold text-on-surface mb-2">Enterprise</h3>
              <p className="text-on-surface-variant text-sm mb-6">Bespoke architecture for multi-location groups.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-on-surface">Custom</span>
              </div>
              <ul className="space-y-4 text-sm text-on-surface-variant mb-8 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Dedicated Server
                  Instance
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> SLA Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span> Custom API Development
                </li>
              </ul>
              <button onClick={goToAccess} className="w-full bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </motion.div>
        </section>
        {/* <!-- COMPLIANCE & SECURITY --> */}
        <section className="py-16 px-6 border-y border-outline-variant bg-surface-container-lowest w-full overflow-hidden">
          <motion.div {...staggerContainer} className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 opacity-80">
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-tertiary">shield</span>
              <span className="font-headline font-bold text-lg text-on-surface tracking-wide">HIPAA Compliant</span>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-tertiary">gpp_good</span>
              <span className="font-headline font-bold text-lg text-on-surface tracking-wide">GDPR Ready</span>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-outline-variant"></div>
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-tertiary">lock</span>
              <span className="font-headline font-bold text-lg text-on-surface tracking-wide">AES-256 Encryption</span>
            </motion.div>
          </motion.div>
        </section>
        {/* <!-- FINAL CTA --> */}
        <section className="py-32 px-6 lg:px-8 w-full max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-8 text-on-surface text-glow">
            Ready to stop the leaks?
          </motion.h2>
          <motion.button {...fadeIn} onClick={goToAccess} className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-12 py-6 rounded-full font-bold text-lg md:text-xl transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(167,139,250,0.4)] hover:shadow-[0_0_30px_rgba(167,139,250,0.6)]">
            Deploy Your Engine
          </motion.button>
        </section>
      </main>
    </>
  );
}

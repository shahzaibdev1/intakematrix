"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, Loader } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function RequestAccessPage() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    clinic: "",
    phone: "",
    plan: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error ?? "Submission failed");
      setState("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <nav className="bg-surface/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant">
        <div className="flex items-center gap-4 px-6 py-4 max-w-7xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </button>
          <span className="text-xl font-headline font-bold tracking-tighter text-on-surface">
            IntakeMatrix
          </span>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              Limited Cohort — Priority Access
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-on-surface mb-5">
              Request <span className="text-primary">Priority Access</span>
            </h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-xl mx-auto">
              We are currently onboarding a limited cohort of premium clinics to
              ensure white-glove technical setup. Enter your details below to
              request priority access to the IntakeMatrix platform.
            </p>
          </div>

          {/* Success State */}
          {state === "success" ? (
            <div className="glass-panel rounded-2xl border border-primary/30 bg-surface/60 p-12 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle size={56} className="text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-3">
                Request Received
              </h2>
              <p className="text-on-surface-variant font-body mb-8">
                You&apos;re on the list. Our onboarding team will reach out within
                24–48 hours to begin your white-glove setup.
              </p>
              <button
                onClick={() => router.push("/")}
                className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-8 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95"
              >
                Back to Homepage
              </button>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl border border-outline-variant bg-surface/60 p-8 md:p-10 space-y-6"
            >
              {/* Row: Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="name">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Dr. Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="email">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@yourclinic.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Row: Clinic + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="clinic">
                    Clinic / Practice Name
                  </label>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    placeholder="Veritas Dental Group"
                    value={form.clinic}
                    onChange={handleChange}
                    className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-on-surface" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Plan selector */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface" htmlFor="plan">
                  Plan of Interest
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a plan…</option>
                  <option value="Essential">Essential — $297/mo</option>
                  <option value="Professional">Professional — $497/mo (Most Popular)</option>
                  <option value="Enterprise">Enterprise — Custom</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface" htmlFor="message">
                  Anything else you&apos;d like us to know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g. We have 3 locations and use Epic as our EHR…"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {state === "error" && (
                <p className="text-sm text-error bg-error/10 border border-error/20 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full bg-primary text-on-primary hover:bg-primary-fixed-dim disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 rounded-full font-bold text-base transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(167,139,250,0.35)] flex items-center justify-center gap-3"
              >
                {state === "loading" ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Request Priority Access →"
                )}
              </button>

              <p className="text-center text-xs text-on-surface-variant">
                By submitting, you agree to our Privacy Policy. We never share your data.
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}

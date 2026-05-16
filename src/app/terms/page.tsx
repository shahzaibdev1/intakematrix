import React from "react";

const Terms = () => {
  return (
    <>
      {/* <!-- Main Content Layout --> */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 flex flex-col lg:flex-row gap-12 xl:gap-24">
        {/* <!-- Sidebar Navigation (TOC) --> */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-32 space-y-6">
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-4 border-b border-outline-variant pb-2">
              Contents
            </h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-1"
              >
                1. Subscription Fees, Billing, and Renewals
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-2"
              >
                2. Cancellations and Refund Policy
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-3"
              >
                3. Usage Restrictions and Fair Use Protocols
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-4"
              >
                4. Telecommunication Operational Credits
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-5"
              >
                5. Limitation of Liability and Data Fail-Safes
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-6"
              >
                6. Intellectual Property Rights
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-7"
              >
                7. Governance and Jurisdictional Framework
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-8"
              >
                8. Structural Adjustments to Terms
              </a>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors block py-1 border-l-2 border-transparent hover:border-primary pl-3"
                href="#section-9"
              >
                9. Engineering Support Contact
              </a>
            </nav>
          </div>
        </aside>
        {/* <!-- Document Body --> */}
        <article className="flex-1 max-w-3xl">
          {/* <!-- Hero Section --> */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface-variant px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                calendar_today
              </span>
              Last Updated: May 17, 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              These Terms of Service govern your access to and use of IntakeMatrix. Please read these terms carefully
              before accessing our platform. By utilizing our services, you agree to be bound by these provisions.
            </p>
          </div>
          <div className="space-y-16">
            {/* <!-- Section 1 --> */}
            <section className="scroll-mt-32" id="section-1">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">1.</span> Subscription Fees, Billing, and Renewals
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  Access to the IntakeMatrix platform requires an active subscription. All fees are stated in USD unless
                  otherwise negotiated in enterprise agreements.
                </p>
                <ul className="list-none space-y-4 mt-6 pl-4 border-l border-outline-variant">
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: '16px' }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Billing Cycles</strong>
                    Charges are assessed in advance on a monthly or annual cadence as selected during checkout.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: '16px' }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Merchant of Record</strong>
                    Payment processing is handled by our designated secure third-party provider. We do not store full
                    credit card data on IntakeMatrix servers.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: '16px' }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Automatic Renewal</strong>
                    Subscriptions renew automatically to prevent service interruption unless cancelled prior to the end
                    of the current billing epoch.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- Section 2 --> */}
            <section className="scroll-mt-32" id="section-2">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">2.</span> Cancellations and Refund Policy
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  We maintain strict, automated protocols for handling service termination to ensure data security and
                  minimal friction.
                </p>
                <ul className="list-none space-y-4 mt-6 pl-4 border-l border-outline-variant">
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: '16px' }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Cancellation</strong>
                    Users may terminate their subscription at any time via the billing dashboard. Service will remain
                    active until the conclusion of the paid period.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: '16px' }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Refunds</strong>
                    Due to the infrastructural costs of provisioning environments, we do not offer prorated refunds for
                    mid-cycle cancellations except where legally mandated.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- Section 3 --> */}
            <section className="scroll-mt-32" id="section-3">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">3.</span> Usage Restrictions and Fair Use Protocols
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  To ensure optimal performance for all tenants on the shared infrastructure, usage must comply with our
                  acceptable use policies. Automated scraping, reverse engineering, or intentional overloading of API
                  endpoints will trigger immediate suspension. Account access is strictly limited to authorized
                  personnel within your organization.
                </p>
              </div>
            </section>
            {/* <!-- Section 4 --> */}
            <section className="scroll-mt-32" id="section-4">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">4.</span> Telecommunication Operational Credits and Third-Party
                Costs
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  Features requiring external carrier networks (e.g., SMS routing, voice processing) operate on a
                  distinct credit system separate from base subscription fees.
                </p>
                <ul className="list-none space-y-4 mt-6 pl-4 border-l border-outline-variant">
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: "16px" }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Carrier Compliance</strong>
                    You are solely responsible for ensuring message content adheres to local telecommunications laws
                    (e.g., TCPA, 10DLC registration).
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: "16px" }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Usage Credits</strong>
                    Operational credits are non-refundable and expire 12 months from the date of purchase if unutilized.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- Section 5 --> */}
            <section className="scroll-mt-32" id="section-5">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">5.</span> Limitation of Liability and Data Fail-Safes
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  IntakeMatrix is engineered for high availability, but we provide the service &quot;as is&quot; without warranty
                  of continuous operation.
                </p>
                <ul className="list-none space-y-4 mt-6 pl-4 border-l border-outline-variant">
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: "16px" }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">No Revenue Liability</strong>
                    In no event shall IntakeMatrix be liable for lost profits, lost revenue, or indirect damages arising
                    from platform downtime or data processing anomalies.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 text-primary material-symbols-outlined" style={{ fontSize: "16px" }}>
                      arrow_right
                    </span>
                    <strong className="text-on-surface font-medium block mb-1">Platform Proviso</strong>
                    Our total cumulative liability shall not exceed the amount paid by you to IntakeMatrix in the twelve
                    (12) months preceding the claim.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- Section 6 --> */}
            <section className="scroll-mt-32" id="section-6">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">6.</span> Intellectual Property Rights
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  The IntakeMatrix platform, its underlying codebase, algorithms, and visual interfaces are the
                  exclusive property of IntakeMatrix Inc. You retain all intellectual property rights to the raw data
                  you ingest into the system; however, you grant us a limited license to process and display this data
                  solely to provide the service to you.
                </p>
              </div>
            </section>
            {/* <!-- Section 7 --> */}
            <section className="scroll-mt-32" id="section-7">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">7.</span> Governance and Jurisdictional Framework
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                  without regard to its conflict of law provisions. Any legal action or proceeding arising out of these
                  terms shall be brought exclusively in the federal or state courts located in Delaware.
                </p>
              </div>
            </section>
            {/* <!-- Section 8 --> */}
            <section className="scroll-mt-32" id="section-8">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">8.</span> Structural Adjustments to Terms
              </h2>
              <div className="text-on-surface-variant space-y-4 leading-relaxed">
                <p>
                  We reserve the right to modify these terms as our platform evolves. Material changes will be
                  communicated via the email address associated with your administrator account at least 30 days prior
                  to enforcement. Continued use of the platform constitutes acceptance of the revised framework.
                </p>
              </div>
            </section>
            {/* <!-- Section 9 (Contact Card) --> */}
            <section className="scroll-mt-32" id="section-9">
              <h2 className="text-2xl font-headline font-semibold text-on-surface mb-6 flex items-baseline gap-4">
                <span className="text-primary text-xl">9.</span> Engineering Support Contact
              </h2>
              <div className="bg-surface-container border border-outline-variant rounded-xl p-8 mt-6 relative overflow-hidden group">
                {/* <!-- Subtle decorative background element --> */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-medium text-on-surface mb-2">
                    Technical Assistance &amp; Legal Inquiries
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-6">
                    For questions concerning these terms or to report infrastructure anomalies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
                          mail
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-0.5">Email</div>
                        <a
                          className="text-on-surface hover:text-primary transition-colors font-medium"
                          href="mailto:legal@intakematrix.com"
                        >
                          legal@intakematrix.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "20px" }}>
                          location_on
                        </span>
                      </div>
                      <div>
                        <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-0.5">
                          Headquarters
                        </div>
                        <span className="text-on-surface font-medium">San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
};

export default Terms;

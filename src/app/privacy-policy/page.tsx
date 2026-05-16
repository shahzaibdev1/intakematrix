import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      
      {/* <!-- Main Content --> */}
      <main className="grow max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* <!-- Sidebar Navigation --> */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32">
            <h4 className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
              Table of Contents
            </h4>
            <nav className="flex flex-col space-y-2 border-l border-outline-variant pl-4">
              <a className="text-sm text-on-surface hover:text-primary transition-colors" href="#introduction">
                Introduction
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-1">
                1. Information We Collect
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-2">
                2. How We Use Your Information
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-3">
                3. Data Processing &amp; Compliance
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-4">
                4. Data Sharing &amp; Sub-Processors
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-5">
                5. Data Security
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-6">
                6. Regional Privacy Rights
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-7">
                7. Changes to This Policy
              </a>
              <a className="text-sm text-on-surface-variant hover:text-primary transition-colors" href="#section-8">
                8. Contact Information
              </a>
            </nav>
          </div>
        </aside>
        {/* <!-- Document Content --> */}
        <article className="lg:col-span-3 space-y-12">
          {/* <!-- Title & Metadata --> */}
          <div className="border-b border-outline-variant pb-8">
            <div className="inline-flex items-center space-x-2 bg-surface-container-high px-3 py-1 rounded-full border border-outline-variant mb-6">
              <span className="material-symbols-outlined text-[16px] text-tertiary">update</span>
              <span className="text-xs font-medium text-on-surface-variant">Last Updated: May 17, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed" id="introduction">
              At IntakeMatrix, we architect our infrastructure with precision and security at the forefront. This
              Privacy Policy outlines our uncompromising approach to managing, processing, and safeguarding your data
              across our platforms.
            </p>
          </div>
          {/* <!-- Sections --> */}
          <section className="scroll-mt-32" id="section-1">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">01.</span> Information We Collect
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>We systematically collect discrete datasets to operate our infrastructure effectively:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-on-surface">Account Data:</strong> Cryptographically hashed credentials,
                  administrative contacts, and organization identifiers.
                </li>
                <li>
                  <strong className="text-on-surface">Operational &amp; Patient Data:</strong> Securely ingested forms,
                  scheduling matrices, and encrypted patient intake streams.
                </li>
                <li>
                  <strong className="text-on-surface">Technical Log Data:</strong> Telemetry, IP addresses, agent
                  strings, and latency metrics for operational integrity.
                </li>
              </ul>
            </div>
          </section>
          <section className="scroll-mt-32" id="section-2">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">02.</span> How We Use Your Information
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Data utilization is strictly confined to system performance and provisioning. We do not monetize data.
              Usage includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container p-6 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-2">deployed_code</span>
                <h3 className="text-sm font-semibold text-on-surface mb-2">Provisioning &amp; Routing</h3>
                <p className="text-sm text-on-surface-variant">
                  Executing intake workflows and deterministic routing of patient data.
                </p>
              </div>
              <div className="bg-surface-container p-6 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-2">credit_card</span>
                <h3 className="text-sm font-semibold text-on-surface mb-2">Transaction Processing</h3>
                <p className="text-sm text-on-surface-variant">
                  Secure billing operations managed via Lemon Squeezy integration.
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-mt-32" id="section-3">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">03.</span> Data Processing &amp; Healthcare Compliance
            </h2>
            <div className="space-y-6">
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl">verified_user</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">HIPAA Compliance Protocol</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Our infrastructure is engineered for Business Associate Agreement (BAA) standards. Protected Health
                  Information (PHI) is isolated, encrypted at rest (AES-256) and in transit, with immutable audit logs
                  ensuring compliance.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl">public</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface mb-2">GDPR Directives</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  We adhere to strict data localization and subject access rights for EU entities, enforcing the
                  principle of least privilege across all nodes.
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-mt-32" id="section-4">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">04.</span> Data Sharing &amp; Sub-Processors
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We maintain a minimal, audited list of sub-processors to maintain operational capabilities:
            </p>
            <div className="bg-surface-container rounded-lg border border-outline-variant divide-y divide-outline-variant">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-on-surface">Lemon Squeezy</div>
                  <div className="text-xs text-on-surface-variant">Merchant of Record &amp; Billing</div>
                </div>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-on-surface">Google / Vercel</div>
                  <div className="text-xs text-on-surface-variant">Cloud Infrastructure &amp; Edge Routing</div>
                </div>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-on-surface">Telecomm Operators</div>
                  <div className="text-xs text-on-surface-variant">SMS/Voice routing endpoints</div>
                </div>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
            </div>
          </section>
          <section className="scroll-mt-32" id="section-5">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">05.</span> Data Security
            </h2>
            <div className="bg-surface-container-high border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-on-surface-variant leading-relaxed mb-2">
                Security is mathematically enforced. All data at rest is encrypted utilizing <strong>AES-256</strong>{" "}
                block ciphers. Transit layers mandate <strong>TLS 1.3</strong> protocols. We implement continuous
                vulnerability scanning and zero-trust internal architecture.
              </p>
            </div>
          </section>
          <section className="scroll-mt-32" id="section-6">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">06.</span> Regional Privacy Rights (CCPA / CPRA)
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              California residents possess explicit rights regarding data access, deletion, and the prohibition of data
              sales. IntakeMatrix honors these rights universally, ensuring &quot;Do Not Sell My Personal
              Information&quot; directives are hardcoded into our handling policies.
            </p>
          </section>
          <section className="scroll-mt-32" id="section-7">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">07.</span> Changes to This Privacy Policy
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              We may iterate on this policy to reflect infrastructural or regulatory shifts. Significant architectural
              changes affecting privacy will be broadcasted to administrative contacts prior to deployment.
            </p>
          </section>
          <section className="scroll-mt-32" id="section-8">
            <h2 className="text-2xl font-headline font-semibold text-on-surface tracking-tight mb-4 flex items-center gap-2">
              <span className="text-primary">08.</span> Contact Information
            </h2>
            <div className="flex items-center space-x-4 bg-surface-container p-4 rounded-lg border border-outline-variant w-fit">
              <span className="material-symbols-outlined text-primary text-2xl">mail</span>
              <div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                  Privacy Operations
                </div>
                <a
                  className="text-on-surface hover:text-primary transition-colors font-mono text-sm"
                  href="mailto:solutions@getintakematrix.com"
                >
                  solutions@getintakematrix.com
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default PrivacyPolicy;

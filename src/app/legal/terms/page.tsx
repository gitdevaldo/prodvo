"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Terms of Service</h1>
          <p className={styles.heroSub}>
            These Terms govern access to and use of the Prodvo platform, including workspaces,
            AI agent workflows, hosted services, and related support.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Effective date:</strong> April 2, 2026
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="Terms of service contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#acceptance">1. Agreement and Acceptance</a>
              </li>
              <li>
                <a href="#account">2. Accounts and Workspace Access</a>
              </li>
              <li>
                <a href="#service-use">3. Service Use Rules</a>
              </li>
              <li>
                <a href="#billing">4. Billing and Subscriptions</a>
              </li>
              <li>
                <a href="#content">5. Data, Code, and Ownership</a>
              </li>
              <li>
                <a href="#availability">6. Service Availability and Changes</a>
              </li>
              <li>
                <a href="#termination">7. Suspension and Termination</a>
              </li>
              <li>
                <a href="#warranty">8. Warranties and Disclaimers</a>
              </li>
              <li>
                <a href="#liability">9. Liability Limits</a>
              </li>
              <li>
                <a href="#general">10. General Legal Terms</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="acceptance">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>Agreement and Acceptance</h2>
            <div className={styles.sectionContent}>
              <p>
                By accessing or using Prodvo, you agree to these Terms of Service and the{" "}
                <Link href="/legal/privacy">Privacy Policy</Link>. If you use Prodvo on behalf of an
                organization, you confirm you have authority to bind that organization.
              </p>
              <p>
                If you do not agree with these Terms, do not use the Service. Continued use after
                updated terms become effective means you accept the updated version.
              </p>
            </div>
          </section>

          <section className={styles.section} id="account">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Accounts and Workspace Access</h2>
            <div className={styles.sectionContent}>
              <p>To use Prodvo, you must create an account and keep information accurate.</p>
              <ul>
                <li>You are responsible for account credentials and all activity under your account.</li>
                <li>You must promptly notify us of unauthorized access or security incidents.</li>
                <li>You may invite teammates and assign internal roles where available.</li>
                <li>You must ensure team members comply with these Terms.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="service-use">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>Service Use Rules</h2>
            <div className={styles.sectionContent}>
              <p>
                Prodvo provides an AI coding workspace including planning, parallel agent
                execution, checkpoints, rollback tooling, and deployment workflows.
              </p>
              <p>You may not use the Service to:</p>
              <ul>
                <li>Violate law, regulation, sanctions, or third-party rights.</li>
                <li>Upload or distribute malware or abusive content.</li>
                <li>Attempt unauthorized access to infrastructure, accounts, or private data.</li>
                <li>Abuse system resources in ways that degrade service for others.</li>
                <li>Misrepresent identity, ownership, or authority.</li>
              </ul>
              <div className={`${styles.callout} ${styles.calloutImportant}`}>
                <p>
                  You are responsible for reviewing and validating generated code before
                  production use, including security, licensing, and operational correctness.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="billing">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>Billing and Subscriptions</h2>
            <div className={styles.sectionContent}>
              <p>
                Paid plans are billed in advance on a monthly or annual cycle. Current tier details
                are shown on the <Link href="/pricing">Pricing page</Link>.
              </p>
              <ul>
                <li>Starter, Growth, and Scale plan features and limits vary by tier.</li>
                <li>Annual billing may include discounted pricing where offered.</li>
                <li>
                  New customers may be eligible for the publicly stated trial and refund terms.
                </li>
                <li>Fees are exclusive of applicable taxes unless stated otherwise.</li>
              </ul>
              <p>
                Failure to pay may result in restricted access, suspension, or termination of paid
                features.
              </p>
            </div>
          </section>

          <section className={styles.section} id="content">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Data, Code, and Ownership</h2>
            <div className={styles.sectionContent}>
              <p>
                You retain ownership of your project content. Prodvo receives limited rights needed
                to host, process, and operate the Service on your instructions.
              </p>
              <ul>
                <li>Your code remains in your Git repository based on configured integrations.</li>
                <li>
                  Prodvo may process execution logs and checkpoint metadata to deliver the platform.
                </li>
                <li>
                  As represented in product materials, project content is not used to train our
                  models.
                </li>
              </ul>
              <p>
                You are responsible for ensuring you have rights to all inputs and for license
                compliance of all output you distribute.
              </p>
            </div>
          </section>

          <section className={styles.section} id="availability">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>Service Availability and Changes</h2>
            <div className={styles.sectionContent}>
              <p>
                We continually improve Prodvo and may modify features, APIs, integrations, limits,
                and plan packaging. We may also perform maintenance that temporarily impacts
                availability.
              </p>
              <p>
                For specific uptime commitments, support response targets, or enterprise controls,
                terms are governed by your applicable order form or commercial agreement.
              </p>
            </div>
          </section>

          <section className={styles.section} id="termination">
            <span className={styles.sectionNumber}>Section 7</span>
            <h2 className={styles.sectionTitle}>Suspension and Termination</h2>
            <div className={styles.sectionContent}>
              <p>
                You may stop using the Service at any time. We may suspend or terminate access for
                non-payment, security risk, policy violations, or unlawful use.
              </p>
              <p>
                Where practical, we provide notice and a cure period. We may act immediately when
                required for safety, legal compliance, or platform integrity.
              </p>
            </div>
          </section>

          <section className={styles.section} id="warranty">
            <span className={styles.sectionNumber}>Section 8</span>
            <h2 className={styles.sectionTitle}>Warranties and Disclaimers</h2>
            <div className={styles.sectionContent}>
              <p>
                Prodvo is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent
                permitted by law. We do not guarantee uninterrupted operation, error-free output, or
                fitness for a particular purpose except where explicitly agreed in writing.
              </p>
              <p>
                AI-generated outputs can be incomplete or incorrect. You are responsible for review,
                testing, and deployment decisions.
              </p>
            </div>
          </section>

          <section className={styles.section} id="liability">
            <span className={styles.sectionNumber}>Section 9</span>
            <h2 className={styles.sectionTitle}>Liability Limits</h2>
            <div className={styles.sectionContent}>
              <p>
                To the maximum extent permitted by law, Prodvo is not liable for indirect,
                incidental, special, consequential, or punitive damages, including lost profits,
                revenue, goodwill, or data.
              </p>
              <p>
                Our aggregate liability related to the Service is limited to fees paid by you for
                the affected services in the 12 months preceding the claim, unless a different cap
                is set in an executed commercial agreement.
              </p>
            </div>
          </section>

          <section className={styles.section} id="general">
            <span className={styles.sectionNumber}>Section 10</span>
            <h2 className={styles.sectionTitle}>General Legal Terms</h2>
            <div className={styles.sectionContent}>
              <p>
                These Terms constitute the entire agreement for self-serve usage and supersede prior
                online terms. If any part is unenforceable, the remainder stays in effect.
              </p>
              <p>
                We may update these Terms from time to time. Material changes will be posted on this
                page with an updated effective date.
              </p>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Legal contact</span>
                <p>
                  <strong>Email:</strong> <a href="mailto:legal@prodvo.dev">legal@prodvo.dev</a>
                </p>
                <p>
                  <strong>Security reports:</strong>{" "}
                  <a href="mailto:security@prodvo.dev">security@prodvo.dev</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/terms" />
        </div>
      </article>
    </SiteShell>
  );
}

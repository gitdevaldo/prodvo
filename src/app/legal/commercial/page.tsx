"use client";

import { SiteShell } from "@/components/site-shell";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function CommercialAgreementPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Commercial Agreement</h1>
          <p className={styles.heroSub}>
            This Commercial Agreement describes subscription purchase, service levels, and
            commercial terms for customers buying Prodvo plans.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Effective date:</strong> April 2, 2026
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="Commercial agreement contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#structure">1. Contract Structure</a>
              </li>
              <li>
                <a href="#subscription">2. Subscription Scope</a>
              </li>
              <li>
                <a href="#fees">3. Fees and Invoicing</a>
              </li>
              <li>
                <a href="#term-renewal">4. Term and Renewal</a>
              </li>
              <li>
                <a href="#support-sla">5. Support and Service Levels</a>
              </li>
              <li>
                <a href="#security-compliance">6. Security and Compliance</a>
              </li>
              <li>
                <a href="#customer-obligations">7. Customer Responsibilities</a>
              </li>
              <li>
                <a href="#suspension">8. Suspension and Remedies</a>
              </li>
              <li>
                <a href="#liability">9. Liability and Risk Allocation</a>
              </li>
              <li>
                <a href="#misc">10. Miscellaneous</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="structure">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>Contract Structure</h2>
            <div className={styles.sectionContent}>
              <p>
                This Commercial Agreement governs paid use of Prodvo by customer organizations.
                It incorporates the Terms of Service and related legal policies unless explicitly
                overridden by signed order forms or addenda.
              </p>
              <p>
                In case of conflict, precedence is: (1) signed Order Form, (2) this Commercial
                Agreement, (3) Terms of Service.
              </p>
            </div>
          </section>

          <section className={styles.section} id="subscription">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Subscription Scope</h2>
            <div className={styles.sectionContent}>
              <p>
                Customer purchases a non-exclusive, non-transferable right for authorized users to
                access Prodvo features included in the selected plan tier and order form.
              </p>
              <ul>
                <li>Plan limits and feature entitlements follow the purchased package.</li>
                <li>Additional capacity, support, or controls may be added through order changes.</li>
                <li>Usage beyond entitlement may require plan upgrade or overage purchase.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="fees">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>Fees and Invoicing</h2>
            <div className={styles.sectionContent}>
              <p>
                Customer agrees to pay fees in the currency and schedule stated in the order form.
                Unless otherwise stated, fees are non-cancelable and non-refundable, subject to
                any explicit refund commitments in writing.
              </p>
              <ul>
                <li>Invoices are due within the payment period shown on the invoice.</li>
                <li>Late payments may incur suspension after notice and cure period.</li>
                <li>Customer is responsible for taxes, duties, and similar charges.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="term-renewal">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>Term and Renewal</h2>
            <div className={styles.sectionContent}>
              <p>
                The agreement term begins on the order effective date and continues for the stated
                initial period. Unless the order specifies otherwise, subscriptions renew for
                successive terms of equal length.
              </p>
              <p>
                Either party may elect non-renewal by written notice before the renewal date
                specified in the order.
              </p>
            </div>
          </section>

          <section className={styles.section} id="support-sla">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Support and Service Levels</h2>
            <div className={styles.sectionContent}>
              <p>
                Standard support channels and response targets are defined by plan. Enhanced
                support, dedicated channels, and custom uptime commitments are available for
                qualifying plans and enterprise orders.
              </p>
              <p>
                Any SLA credits, exclusions, and claim procedures are governed by the applicable
                service level schedule in the order package.
              </p>
            </div>
          </section>

          <section className={styles.section} id="security-compliance">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>Security and Compliance</h2>
            <div className={styles.sectionContent}>
              <p>
                Prodvo maintains security controls represented in customer-facing documentation,
                including encryption safeguards and auditable workflow metadata protections.
              </p>
              <p>
                Additional controls such as SSO, role-based access, and custom compliance packages
                may be plan-dependent and reflected in the commercial order.
              </p>
            </div>
          </section>

          <section className={styles.section} id="customer-obligations">
            <span className={styles.sectionNumber}>Section 7</span>
            <h2 className={styles.sectionTitle}>Customer Responsibilities</h2>
            <div className={styles.sectionContent}>
              <ul>
                <li>Maintain lawful use of the platform and all uploaded inputs.</li>
                <li>Protect account credentials and internal access controls.</li>
                <li>Review generated outputs before production deployment.</li>
                <li>Obtain all required rights and permissions for provided content.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="suspension">
            <span className={styles.sectionNumber}>Section 8</span>
            <h2 className={styles.sectionTitle}>Suspension and Remedies</h2>
            <div className={styles.sectionContent}>
              <p>
                Prodvo may suspend access for non-payment, material breach, or credible security
                threat. Where feasible, we provide prior notice and a remediation period.
              </p>
              <p>
                Emergency suspension may occur immediately when necessary to protect service
                integrity, legal compliance, or customer data security.
              </p>
            </div>
          </section>

          <section className={styles.section} id="liability">
            <span className={styles.sectionNumber}>Section 9</span>
            <h2 className={styles.sectionTitle}>Liability and Risk Allocation</h2>
            <div className={styles.sectionContent}>
              <p>
                Except as prohibited by law, each party excludes indirect and consequential losses.
                Aggregate liability is limited as set out in the order form or default legal terms.
              </p>
              <p>
                AI output review and deployment approval remain customer responsibilities.
              </p>
            </div>
          </section>

          <section className={styles.section} id="misc">
            <span className={styles.sectionNumber}>Section 10</span>
            <h2 className={styles.sectionTitle}>Miscellaneous</h2>
            <div className={styles.sectionContent}>
              <p>
                This agreement may only be amended by written instrument or accepted online
                amendment flow approved by both parties.
              </p>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Commercial contact</span>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:legal@prodvo.dev">legal@prodvo.dev</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/commercial" />
        </div>
      </article>
    </SiteShell>
  );
}

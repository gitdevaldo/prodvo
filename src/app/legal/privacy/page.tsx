"use client";

import { SiteShell } from "@/components/site-shell";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>
            This Privacy Policy explains what data Prodvo processes, why we process it, and how
            users and customers can control their information.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Effective date:</strong> April 2, 2026
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <nav className={styles.toc} aria-label="Privacy policy contents">
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              <li>
                <a href="#scope">1. Scope</a>
              </li>
              <li>
                <a href="#data-we-collect">2. Data We Collect</a>
              </li>
              <li>
                <a href="#how-used">3. How We Use Data</a>
              </li>
              <li>
                <a href="#legal-bases">4. Legal Bases</a>
              </li>
              <li>
                <a href="#sharing">5. Sharing and Disclosure</a>
              </li>
              <li>
                <a href="#security">6. Security Controls</a>
              </li>
              <li>
                <a href="#retention">7. Data Retention</a>
              </li>
              <li>
                <a href="#rights">8. Your Rights</a>
              </li>
              <li>
                <a href="#international">9. International Transfers</a>
              </li>
              <li>
                <a href="#contact">10. Contact</a>
              </li>
            </ol>
          </nav>

          <section className={styles.section} id="scope">
            <span className={styles.sectionNumber}>Section 1</span>
            <h2 className={styles.sectionTitle}>Scope</h2>
            <div className={styles.sectionContent}>
              <p>
                This policy applies to personal data processed by Prodvo in connection with the
                website, product platform, APIs, and support operations.
              </p>
              <p>
                For enterprise customers with a signed data processing addendum, that agreement
                governs where it conflicts with this public policy.
              </p>
            </div>
          </section>

          <section className={styles.section} id="data-we-collect">
            <span className={styles.sectionNumber}>Section 2</span>
            <h2 className={styles.sectionTitle}>Data We Collect</h2>
            <div className={styles.sectionContent}>
              <p>We process the following categories of data:</p>
              <ul>
                <li>
                  <strong>Account data:</strong> name, email, organization, plan, and billing
                  metadata.
                </li>
                <li>
                  <strong>Workspace metadata:</strong> workflow runs, checkpoints, audit records,
                  and activity history.
                </li>
                <li>
                  <strong>Support communications:</strong> messages, tickets, and troubleshooting
                  logs.
                </li>
                <li>
                  <strong>Usage telemetry:</strong> product interaction events, performance metrics,
                  and diagnostics.
                </li>
                <li>
                  <strong>Integration metadata:</strong> repository configuration and authorized
                  integration scopes.
                </li>
              </ul>
              <p>
                As represented in the product FAQ, user source code remains in customer repositories;
                Prodvo processes repository content for execution but does not permanently host the
                full source code as a product datastore.
              </p>
            </div>
          </section>

          <section className={styles.section} id="how-used">
            <span className={styles.sectionNumber}>Section 3</span>
            <h2 className={styles.sectionTitle}>How We Use Data</h2>
            <div className={styles.sectionContent}>
              <p>We use data to:</p>
              <ul>
                <li>Provision and operate workspaces and AI workflow execution.</li>
                <li>Provide checkpoint, rollback, and audit functionality.</li>
                <li>Authenticate users and enforce access controls.</li>
                <li>Maintain platform reliability, security, and abuse prevention.</li>
                <li>Process billing, invoicing, and plan administration.</li>
                <li>Respond to support and legal requests.</li>
              </ul>
              <div className={`${styles.callout} ${styles.calloutImportant}`}>
                <p>
                  Prodvo does not use customer project content for model training, consistent with
                  representations on product pricing and FAQ pages.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} id="legal-bases">
            <span className={styles.sectionNumber}>Section 4</span>
            <h2 className={styles.sectionTitle}>Legal Bases</h2>
            <div className={styles.sectionContent}>
              <p>Depending on jurisdiction, we process personal data based on:</p>
              <ul>
                <li>Contract performance (service delivery and account management).</li>
                <li>Legitimate interests (security, reliability, fraud prevention).</li>
                <li>Legal obligations (tax, compliance, lawful requests).</li>
                <li>Consent where required by applicable law.</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} id="sharing">
            <span className={styles.sectionNumber}>Section 5</span>
            <h2 className={styles.sectionTitle}>Sharing and Disclosure</h2>
            <div className={styles.sectionContent}>
              <p>We may share data with:</p>
              <ul>
                <li>Infrastructure and subprocessors needed to run the platform.</li>
                <li>Payment processors for billing operations.</li>
                <li>Security and support vendors under confidentiality controls.</li>
                <li>Authorities where legally required.</li>
              </ul>
              <p>We do not sell personal data.</p>
            </div>
          </section>

          <section className={styles.section} id="security">
            <span className={styles.sectionNumber}>Section 6</span>
            <h2 className={styles.sectionTitle}>Security Controls</h2>
            <div className={styles.sectionContent}>
              <p>
                Prodvo applies administrative, technical, and organizational safeguards, including
                controls represented in product materials such as encryption in transit and at rest,
                role-based access options on higher tiers, and audit logging.
              </p>
              <p>
                Security researchers may report vulnerabilities to{" "}
                <a href="mailto:security@prodvo.dev">security@prodvo.dev</a>.
              </p>
            </div>
          </section>

          <section className={styles.section} id="retention">
            <span className={styles.sectionNumber}>Section 7</span>
            <h2 className={styles.sectionTitle}>Data Retention</h2>
            <div className={styles.sectionContent}>
              <p>
                We retain data only as long as necessary for service delivery, security, legal, and
                contractual obligations.
              </p>
              <p>
                Product documentation currently states a 90-day default retention period for
                execution logs and checkpoint data, with custom retention options for eligible
                enterprise customers.
              </p>
            </div>
          </section>

          <section className={styles.section} id="rights">
            <span className={styles.sectionNumber}>Section 8</span>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <div className={styles.sectionContent}>
              <p>Subject to applicable law, you may request to:</p>
              <ul>
                <li>Access, correct, or delete personal data.</li>
                <li>Restrict or object to certain processing.</li>
                <li>Receive a portable copy of eligible data.</li>
                <li>Withdraw consent where processing depends on consent.</li>
              </ul>
              <p>
                You may also manage many account settings directly inside your workspace controls.
              </p>
            </div>
          </section>

          <section className={styles.section} id="international">
            <span className={styles.sectionNumber}>Section 9</span>
            <h2 className={styles.sectionTitle}>International Transfers</h2>
            <div className={styles.sectionContent}>
              <p>
                If data is transferred across borders, we apply appropriate legal safeguards
                required by applicable privacy laws.
              </p>
            </div>
          </section>

          <section className={styles.section} id="contact">
            <span className={styles.sectionNumber}>Section 10</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.sectionContent}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Privacy contact</span>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@prodvo.dev">privacy@prodvo.dev</a>
                </p>
                <p>
                  <strong>General support:</strong>{" "}
                  <a href="mailto:support@prodvo.dev">support@prodvo.dev</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/privacy" />
        </div>
      </article>
    </SiteShell>
  );
}

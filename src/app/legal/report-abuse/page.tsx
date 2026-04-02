"use client";

import { SiteShell } from "@/components/site-shell";
import { LegalLinks } from "@/components/legal-links";
import styles from "../legal.module.css";

export default function ReportAbusePage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.heroTitle}>Report Abuse</h1>
          <p className={styles.heroSub}>
            Use this page to report suspected abuse, security issues, policy violations, or misuse
            of the Prodvo platform.
          </p>
          <p className={styles.effectiveDate}>
            <strong>Response target:</strong> Initial review within 24 hours for critical reports
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <section className={styles.section}>
            <span className={styles.sectionNumber}>How to report</span>
            <h2 className={styles.sectionTitle}>Submit an abuse report</h2>
            <div className={styles.sectionContent}>
              <p>
                Include as much detail as possible so our trust and security team can investigate
                quickly. High-quality reports include reproducible steps, timestamps, and affected
                workspace or account identifiers.
              </p>
              <div className={styles.reportForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="reporter-name">
                      Your name
                    </label>
                    <input
                      className={styles.formInput}
                      id="reporter-name"
                      name="reporter-name"
                      type="text"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="reporter-email">
                      Email
                    </label>
                    <input
                      className={styles.formInput}
                      id="reporter-email"
                      name="reporter-email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="abuse-type">
                    Abuse category
                  </label>
                  <select className={styles.formSelect} id="abuse-type" name="abuse-type" defaultValue="">
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="security">Security vulnerability</option>
                    <option value="malware">Malware or malicious code</option>
                    <option value="ip">Copyright or IP violation</option>
                    <option value="harassment">Harassment or harmful content</option>
                    <option value="account">Account compromise</option>
                    <option value="other">Other policy violation</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="workspace-id">
                      Workspace or account ID
                    </label>
                    <input
                      className={styles.formInput}
                      id="workspace-id"
                      name="workspace-id"
                      type="text"
                      placeholder="ws_12345"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="incident-time">
                      Incident date/time
                    </label>
                    <input
                      className={styles.formInput}
                      id="incident-time"
                      name="incident-time"
                      type="text"
                      placeholder="2026-04-02 08:10 UTC"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="abuse-details">
                    Detailed report
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    id="abuse-details"
                    name="abuse-details"
                    placeholder="Describe what happened, how it can be reproduced, and who is affected."
                  />
                  <p className={styles.formHint}>
                    Do not include unnecessary sensitive personal data. Include only what is required
                    for investigation.
                  </p>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="evidence-link">
                    Evidence link (optional)
                  </label>
                  <input
                    className={styles.formInput}
                    id="evidence-link"
                    name="evidence-link"
                    type="url"
                    placeholder="https://..."
                  />
                </div>

                <div className={styles.reportActions}>
                  <p className={styles.reportNote}>
                    For immediate security issues, email{" "}
                    <a href="mailto:security@prodvo.dev">security@prodvo.dev</a>.
                  </p>
                  <button className="btn btn-primary" type="button">
                    Submit report
                  </button>
                </div>
              </div>
            </div>
          </section>

          <hr className={styles.sectionBreak} />

          <section className={styles.section}>
            <span className={styles.sectionNumber}>What happens next</span>
            <h2 className={styles.sectionTitle}>Investigation process</h2>
            <div className={styles.sectionContent}>
              <ol>
                <li>We triage severity and confirm receipt.</li>
                <li>We investigate logs, metadata, and affected systems.</li>
                <li>We may request additional details from the reporter.</li>
                <li>We take remediation actions, including account restrictions if needed.</li>
                <li>We communicate outcome and any required follow-up steps.</li>
              </ol>
              <div className={`${styles.callout} ${styles.calloutImportant}`}>
                <p>
                  Submitting false, malicious, or knowingly misleading reports may itself be treated
                  as abuse under our platform policies.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <span className={styles.sectionNumber}>Alternative channels</span>
            <h2 className={styles.sectionTitle}>Direct contacts</h2>
            <div className={styles.sectionContent}>
              <div className={styles.contactBlock}>
                <span className={styles.contactLabel}>Trust and safety</span>
                <p>
                  <strong>Security:</strong>{" "}
                  <a href="mailto:security@prodvo.dev">security@prodvo.dev</a>
                </p>
                <p>
                  <strong>Legal:</strong> <a href="mailto:legal@prodvo.dev">legal@prodvo.dev</a>
                </p>
                <p>
                  <strong>Support:</strong>{" "}
                  <a href="mailto:support@prodvo.dev">support@prodvo.dev</a>
                </p>
              </div>
            </div>
          </section>

          <LegalLinks current="/legal/report-abuse" />
        </div>
      </article>
    </SiteShell>
  );
}

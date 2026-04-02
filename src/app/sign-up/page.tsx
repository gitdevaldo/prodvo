import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "../auth-pages.module.css";

export default function SignUpPage() {
  return (
    <SiteShell>
      <section className={styles.authSection}>
        <div className={styles.authContainer}>
          <div className={styles.authGrid}>
            <div className={styles.infoPanel}>
              <span className={styles.badge}>Invitation only</span>
              <h1 className={styles.title}>Sign up for Prodvo</h1>
              <p className={styles.subtitle}>
                New workspaces are currently onboarded through invitation while we control rollout
                quality and support coverage.
              </p>

              <ul className={styles.infoList}>
                <li>Invitation access is issued by the Prodvo team.</li>
                <li>Rollout is prioritized for active project teams.</li>
                <li>All selected teams receive guided onboarding.</li>
              </ul>
            </div>

            <div className={styles.authCard}>
              <h2 className={styles.cardTitle}>Request access</h2>
              <p className={styles.cardSub}>
                This form is temporarily disabled while sign-up remains invitation-only.
              </p>

              <form className={styles.authForm}>
                <fieldset className={styles.disabledFieldset} disabled aria-disabled="true">
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="signup-name">
                      Full name
                    </label>
                    <input
                      className={styles.input}
                      id="signup-name"
                      name="signup-name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="signup-email">
                      Work email
                    </label>
                    <input
                      className={styles.input}
                      id="signup-email"
                      name="signup-email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="signup-company">
                      Company
                    </label>
                    <input
                      className={styles.input}
                      id="signup-company"
                      name="signup-company"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>

                  <button className={styles.primaryButton} type="button" disabled>
                    Sign up (Invitation required)
                  </button>
                </fieldset>
              </form>

              <div className={styles.inviteNotice}>
                Need an invite? Contact <a href="mailto:legal@prodvo.dev">legal@prodvo.dev</a> or
                sign in if your organization has already provisioned your account.
              </div>

              <p className={styles.helperLine}>
                Already have access? <Link href="/sign-in">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "../auth-pages.module.css";

export default function SignInPage() {
  return (
    <SiteShell>
      <section className={styles.authSection}>
        <div className={styles.authContainer}>
          <div className={styles.authGrid}>
            <div className={styles.infoPanel}>
              <span className={styles.badge}>Account</span>
              <h1 className={styles.title}>Sign in to Prodvo</h1>
              <p className={styles.subtitle}>
                Continue your workspace sessions, checkpoints, and release workflows from one place.
              </p>

              <ul className={styles.infoList}>
                <li>Resume active runs and deployment pipelines.</li>
                <li>Review checkpoints and team activity history.</li>
                <li>Manage plan usage and billing access in one dashboard.</li>
              </ul>
            </div>

            <div className={styles.authCard}>
              <h2 className={styles.cardTitle}>Welcome back</h2>
              <p className={styles.cardSub}>Use your workspace credentials to continue.</p>

              <form className={styles.authForm}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="signin-email">
                    Work email
                  </label>
                  <input
                    className={styles.input}
                    id="signin-email"
                    name="signin-email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="signin-password">
                    Password
                  </label>
                  <input
                    className={styles.input}
                    id="signin-password"
                    name="signin-password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </div>

                <button className={styles.primaryButton} type="button">
                  Sign in
                </button>
              </form>

              <p className={styles.helperLine}>
                New to Prodvo? <Link href="/sign-up">Request invitation access</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

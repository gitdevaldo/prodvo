import Link from "next/link";
import styles from "../auth-pages.module.css";

export default function SignUpPage() {
  return (
    <div className={styles.authPage}>
      <div className={styles.authWrap}>
        <div className={styles.topBar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandPrefix}>P/</span>
            <span className={styles.brandWord}>Prodvo</span>
            <span className={styles.brandDot}>.</span>
          </Link>
          <p className={styles.topLink}>
            Already have access? <Link href="/sign-in">Sign in</Link>
          </p>
        </div>

        <div className={styles.authGrid}>
          <section className={styles.infoPanel}>
            <span className={styles.eyebrow}>Invitation only</span>
            <h1 className={styles.title}>Sign up is currently invite-based</h1>
            <p className={styles.subtitle}>
              We are onboarding teams through controlled invitations to keep rollout quality and
              support performance stable.
            </p>
            <ul className={styles.featureList}>
              <li>Invitations are issued by the Prodvo team.</li>
              <li>Priority is given to active shipping teams.</li>
              <li>Selected teams receive guided setup support.</li>
            </ul>
          </section>

          <section className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Request invitation</h2>
            <p className={styles.panelSub}>
              Complete the form so our team can review your invitation request.
            </p>

            <form className={styles.authForm}>
              <fieldset className={styles.formFieldset}>
                <div className={styles.field}>
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

                <div className={styles.field}>
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

                <div className={styles.field}>
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

                <button className={styles.primaryButton} type="button">
                  Submit invitation request
                </button>
              </fieldset>
            </form>

            <div className={styles.notice}>
              Need an invite? Contact <a href="mailto:legal@prodvo.dev">legal@prodvo.dev</a> with
              your team context and expected usage.
            </div>

            <p className={styles.helper}>
              If your workspace is already provisioned, <Link href="/sign-in">sign in here</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

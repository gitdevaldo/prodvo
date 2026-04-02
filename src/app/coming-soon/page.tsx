import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "@/app/legal/legal.module.css";

export default function ComingSoonPage() {
  return (
    <SiteShell>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Resources</span>
          <h1 className={styles.heroTitle}>Coming Soon</h1>
          <p className={styles.heroSub}>
            This page is being prepared. We are finalizing content and will publish it soon.
          </p>
        </div>
      </section>

      <article className={styles.document}>
        <div className={styles.documentInner}>
          <section className={styles.section}>
            <span className={styles.sectionNumber}>Status</span>
            <h2 className={styles.sectionTitle}>We are working on it</h2>
            <div className={styles.sectionContent}>
              <p>
                Please check back shortly. In the meantime, you can explore current product,
                pricing, and legal pages.
              </p>
              <p>
                <Link href="/pricing">View pricing</Link> or <Link href="/faq">read FAQ</Link>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}

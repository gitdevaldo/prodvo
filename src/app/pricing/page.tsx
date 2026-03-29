"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./pricing.module.css";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "For solo builders and early teams validating the platform.",
      monthlyPrice: 29,
      annualPrice: 24,
      cta: "Start free trial",
      features: [
        "1 active workspace",
        "Up to 50 runs/month",
        "Basic checkpoint controls",
        "Git integration",
        "Community support",
      ],
      limits: ["Single user", "No parallel agents", "7-day history"],
    },
    {
      id: "growth",
      name: "Growth",
      description: "For product teams shipping customer-facing features weekly.",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      cta: "Start free trial",
      features: [
        "Unlimited workspaces",
        "Unlimited runs",
        "Parallel agents (up to 5)",
        "Advanced checkpoints",
        "Custom domains",
        "Rollback & snapshots",
        "Priority support",
      ],
      limits: ["Up to 10 users", "30-day history"],
    },
    {
      id: "scale",
      name: "Scale",
      description: "For organizations running multiple teams with governance needs.",
      monthlyPrice: 249,
      annualPrice: 199,
      cta: "Talk to sales",
      features: [
        "Everything in Growth",
        "Unlimited users",
        "Parallel agents (up to 20)",
        "SSO / SAML",
        "Audit logs & compliance",
        "Dedicated capacity",
        "90-day history",
        "Dedicated account manager",
      ],
      limits: [],
    },
  ];

  const faqs = [
    {
      q: "Can I change plans later?",
      a: "Yes. Upgrade or downgrade anytime. Changes take effect on your next billing cycle, and we prorate any differences.",
    },
    {
      q: "What happens when I hit run limits?",
      a: "On Starter, you'll see a warning at 80% and can't start new runs at 100%. Upgrade to Growth for unlimited runs.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. All plans include a 14-day free trial with full access. No credit card required to start.",
    },
    {
      q: "What's included in 'Priority support'?",
      a: "Growth and Scale plans get <24h response times, direct Slack channel access, and scheduled onboarding calls.",
    },
  ];

  const trustSignals = [
    { metric: "3,200+", label: "active teams" },
    { metric: "99.9%", label: "uptime SLA" },
    { metric: "<24h", label: "support response" },
    { metric: "SOC 2", label: "compliant" },
  ];

  return (
    <SiteShell buildTag="prodvo-pricing-v5">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Pricing</span>
          <h1 className={styles.heroTitle}>
            Simple pricing that
            <br />
            <em>scales with you.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Start free. Pay only when you&apos;re ready to scale. No surprise fees, 
            no per-seat complexity, no vendor lock-in.
          </p>
          
          {/* Billing toggle */}
          <div className={styles.billingToggle}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${billingCycle === "monthly" ? styles.active : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${billingCycle === "annual" ? styles.active : ""}`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual <span className={styles.saveBadge}>Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRICING CARDS — Highlighted center card
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.plansSection}>
        <div className={styles.plansInner}>
          <div className={styles.planCards}>
            {plans.map((plan) => (
              <article 
                key={plan.id} 
                className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`}
              >
                {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                
                <div className={styles.planHeader}>
                  <h2>{plan.name}</h2>
                  <p>{plan.description}</p>
                </div>
                
                <div className={styles.planPrice}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>
                    {billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={styles.period}>/month</span>
                </div>
                
                {billingCycle === "annual" && (
                  <p className={styles.annualNote}>
                    Billed annually (${(billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice) * 12}/year)
                  </p>
                )}
                
                <Link 
                  className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} ${styles.planCta}`}
                  href={plan.id === "scale" ? "/docs" : "/docs"}
                >
                  {plan.cta}
                </Link>
                
                <div className={styles.planFeatures}>
                  <h4>What&apos;s included:</h4>
                  <ul>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.featureIncluded}>
                        <span className={styles.checkIcon}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {plan.limits.length > 0 && (
                    <>
                      <h4 className={styles.limitsLabel}>Limits:</h4>
                      <ul>
                        {plan.limits.map((l) => (
                          <li key={l} className={styles.featureLimit}>
                            <span className={styles.limitIcon}>—</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST SIGNALS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.trustSection}>
        <div className={styles.trustInner}>
          {trustSignals.map((t) => (
            <div key={t.label} className={styles.trustItem}>
              <strong>{t.metric}</strong>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPARE ALL FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.compareSection}>
        <div className={styles.compareInner}>
          <div className={styles.compareHeader}>
            <span className={styles.sectionLabel}>Full comparison</span>
            <h2 className={styles.sectionTitle}>Compare all features</h2>
          </div>
          
          <div className={styles.compareTable}>
            <div className={styles.compareHead}>
              <span>Feature</span>
              <span>Starter</span>
              <span>Growth</span>
              <span>Scale</span>
            </div>
            
            <div className={styles.compareGroup}>
              <h4>Workspaces & Runs</h4>
              <div className={styles.compareRow}>
                <span>Workspaces</span>
                <span>1</span>
                <span>Unlimited</span>
                <span>Unlimited</span>
              </div>
              <div className={styles.compareRow}>
                <span>Monthly runs</span>
                <span>50</span>
                <span>Unlimited</span>
                <span>Unlimited</span>
              </div>
              <div className={styles.compareRow}>
                <span>Parallel agents</span>
                <span>—</span>
                <span>Up to 5</span>
                <span>Up to 20</span>
              </div>
            </div>
            
            <div className={styles.compareGroup}>
              <h4>Controls & Governance</h4>
              <div className={styles.compareRow}>
                <span>Checkpoint controls</span>
                <span>Basic</span>
                <span>Advanced</span>
                <span>Advanced</span>
              </div>
              <div className={styles.compareRow}>
                <span>Rollback & snapshots</span>
                <span>—</span>
                <span>✓</span>
                <span>✓</span>
              </div>
              <div className={styles.compareRow}>
                <span>Audit logs</span>
                <span>—</span>
                <span>—</span>
                <span>✓</span>
              </div>
              <div className={styles.compareRow}>
                <span>SSO / SAML</span>
                <span>—</span>
                <span>—</span>
                <span>✓</span>
              </div>
            </div>
            
            <div className={styles.compareGroup}>
              <h4>Support & SLA</h4>
              <div className={styles.compareRow}>
                <span>Support level</span>
                <span>Community</span>
                <span>Priority</span>
                <span>Dedicated</span>
              </div>
              <div className={styles.compareRow}>
                <span>Response time</span>
                <span>Best effort</span>
                <span>&lt;24 hours</span>
                <span>&lt;4 hours</span>
              </div>
              <div className={styles.compareRow}>
                <span>Uptime SLA</span>
                <span>—</span>
                <span>99.9%</span>
                <span>99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqHeader}>
            <span className={styles.sectionLabel}>Questions</span>
            <h2 className={styles.sectionTitle}>Pricing FAQ</h2>
          </div>
          
          <div className={styles.faqGrid}>
            {faqs.map((faq) => (
              <article key={faq.q} className={`${styles.faqItem} ${styles.reveal}`}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to ship faster?</h2>
          <p className={styles.ctaBody}>
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary btn-lg" href="/docs">Start free trial</Link>
            <Link className="btn btn-secondary" href="/docs">Talk to sales</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./v0.module.css";

const PLATFORM_COMPARISON = [
  {
    aspect: "Primary focus",
    prodvo: "Full-cycle AI coding workspace: plan → build → review → ship",
    v0: "UI generation and rapid prototyping with Vercel deployment",
  },
  {
    aspect: "Planning phase",
    prodvo: "Structured task plans with dependencies and effort estimates",
    v0: "No dedicated planning — conversational prompting only",
  },
  {
    aspect: "Execution model",
    prodvo: "Parallel agents for frontend, backend, QA, and integrations",
    v0: "Sequential chat-based generation",
  },
  {
    aspect: "Rollback safety",
    prodvo: "One-click rollback to any checkpoint snapshot",
    v0: "Git history only — no built-in rollback UI",
  },
  {
    aspect: "Team coordination",
    prodvo: "Single timeline for PM, eng, and QA with approval gates",
    v0: "Shared chats and team workspaces",
  },
  {
    aspect: "Deployment",
    prodvo: "One-click deploy with rollback-ready states",
    v0: "One-click deploy to Vercel (Vercel-only)",
  },
];

const FEATURE_MATRIX = [
  { feature: "Natural language → code", prodvo: true, v0: true },
  { feature: "Structured planning workspace", prodvo: true, v0: false },
  { feature: "Parallel agent execution", prodvo: true, v0: false },
  { feature: "Checkpoint snapshots", prodvo: true, v0: false },
  { feature: "One-click rollback", prodvo: true, v0: false },
  { feature: "Approval workflows", prodvo: true, v0: false },
  { feature: "GitHub integration", prodvo: true, v0: true },
  { feature: "Visual design mode", prodvo: false, v0: true },
  { feature: "Design system builder", prodvo: false, v0: true },
  { feature: "iOS mobile app", prodvo: false, v0: true },
  { feature: "Figma import", prodvo: false, v0: true },
  { feature: "Template library", prodvo: true, v0: true },
];

const PRICING_COMPARISON = [
  {
    tier: "Free",
    prodvo: {
      price: "—",
      details: "No free tier",
      notes: "14-day trial available",
    },
    v0: {
      price: "$0",
      details: "$5 credits/month",
      notes: "7 messages/day limit",
    },
  },
  {
    tier: "Pro / Growth",
    prodvo: {
      price: "$99/mo",
      details: "Flat rate",
      notes: "Parallel agents, checkpoints, rollback, custom domains",
    },
    v0: {
      price: "$30/user/mo",
      details: "$30 credits + $2 daily",
      notes: "Team collaboration, shared billing",
    },
  },
  {
    tier: "Scale / Business",
    prodvo: {
      price: "$249/mo",
      details: "Flat rate, whole team",
      notes: "Advanced access, governance, priority support",
    },
    v0: {
      price: "$100/user/mo",
      details: "$30 credits + $2 daily",
      notes: "Training opt-out, centralized billing",
    },
  },
];

const TEAM_COST = [
  { size: "Solo", prodvo: "$99", v0: "$30", winner: "v0" },
  { size: "3 users", prodvo: "$249", v0: "$90", winner: "v0" },
  { size: "5 users", prodvo: "$249", v0: "$150", winner: "v0" },
  { size: "10 users", prodvo: "$249", v0: "$300", winner: "Prodvo" },
  { size: "20 users", prodvo: "$249", v0: "$600", winner: "Prodvo" },
];

const USE_CASE_FIT = [
  {
    useCase: "Rapid UI prototyping",
    bestFit: "v0",
    reason: "Design mode, Figma import, and visual controls make UI iteration fast",
  },
  {
    useCase: "Full-stack production apps",
    bestFit: "Prodvo",
    reason: "Planning workflows, parallel execution, and rollback safety",
  },
  {
    useCase: "Designer-developer handoff",
    bestFit: "v0",
    reason: "Visual design mode bridges the gap between design and code",
  },
  {
    useCase: "Team sprints with QA",
    bestFit: "Prodvo",
    reason: "Approval gates and single coordination timeline",
  },
  {
    useCase: "Vercel-first deployment",
    bestFit: "v0",
    reason: "Native Vercel integration with seamless deployment",
  },
  {
    useCase: "Enterprise with rollback needs",
    bestFit: "Prodvo",
    reason: "Checkpoint snapshots and one-click rollback",
  },
];

export default function CompareV0Page() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>
            Prodvo <span className={styles.vs}>vs</span> v0
          </h1>
          <p className={styles.heroSub}>
            v0 excels at rapid UI prototyping with Vercel's ecosystem. Prodvo adds the 
            planning, parallel execution, and safety rails that turn prototypes into 
            production-ready products.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Try Prodvo free
            </Link>
            <Link href="#comparison" className="btn btn-secondary">
              See the comparison
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PLATFORM PHILOSOPHY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="comparison">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Philosophy</span>
            <h2 className={styles.sectionTitle}>Different tools, different goals</h2>
            <p className={styles.sectionSub}>
              v0 is a conversational UI generator tightly integrated with Vercel. 
              Prodvo is a full-cycle coding workspace with team workflows.
            </p>
          </div>

          <div className={styles.platformGrid}>
            {PLATFORM_COMPARISON.map((item) => (
              <div key={item.aspect} className={styles.platformRow}>
                <div className={styles.platformAspect}>{item.aspect}</div>
                <div className={styles.platformCell}>
                  <span className={styles.platformBrand}>Prodvo</span>
                  <p>{item.prodvo}</p>
                </div>
                <div className={styles.platformCell}>
                  <span className={styles.platformBrand}>v0</span>
                  <p>{item.v0}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURE MATRIX
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Features</span>
            <h2 className={styles.sectionTitle}>Feature comparison</h2>
            <p className={styles.sectionSub}>
              v0 leads on visual design tools. Prodvo leads on workflow and safety.
            </p>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureHeader}>
              <span>Feature</span>
              <span>Prodvo</span>
              <span>v0</span>
            </div>
            {FEATURE_MATRIX.map((item) => (
              <div key={item.feature} className={styles.featureRow}>
                <span className={styles.featureName}>{item.feature}</span>
                <span className={item.prodvo ? styles.checkYes : styles.checkNo}>
                  {item.prodvo ? "✓" : "—"}
                </span>
                <span className={item.v0 ? styles.checkYes : styles.checkNo}>
                  {item.v0 ? "✓" : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          USE CASE FIT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Use cases</span>
            <h2 className={styles.sectionTitle}>Which tool fits your workflow?</h2>
            <p className={styles.sectionSub}>
              The right choice depends on what you're building and how your team works.
            </p>
          </div>

          <div className={styles.useCaseGrid}>
            {USE_CASE_FIT.map((item) => (
              <div 
                key={item.useCase} 
                className={`${styles.useCaseCard} ${item.bestFit === "Prodvo" ? styles.prodvoFit : styles.v0Fit}`}
              >
                <div className={styles.useCaseHeader}>
                  <h3>{item.useCase}</h3>
                  <span className={styles.useCaseTag}>{item.bestFit}</span>
                </div>
                <p>{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Pricing</span>
            <h2 className={styles.sectionTitle}>Pricing model comparison</h2>
            <p className={styles.sectionSub}>
              v0 uses per-user pricing with credits. Prodvo uses flat tiers.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {PRICING_COMPARISON.map((tier) => (
              <div key={tier.tier} className={styles.pricingRow}>
                <div className={styles.pricingTier}>{tier.tier}</div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>Prodvo</span>
                  <span className={styles.pricingPrice}>{tier.prodvo.price}</span>
                  <span className={styles.pricingDetails}>{tier.prodvo.details}</span>
                  <p className={styles.pricingNotes}>{tier.prodvo.notes}</p>
                </div>
                <div className={styles.pricingCard}>
                  <span className={styles.pricingBrand}>v0</span>
                  <span className={styles.pricingPrice}>{tier.v0.price}</span>
                  <span className={styles.pricingDetails}>{tier.v0.details}</span>
                  <p className={styles.pricingNotes}>{tier.v0.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM COST
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Team economics</span>
            <h2 className={styles.sectionTitle}>Cost at scale</h2>
            <p className={styles.sectionSub}>
              v0's per-user pricing works for small teams. Prodvo's flat rate wins at scale.
            </p>
          </div>

          <div className={styles.costTable}>
            <div className={styles.costHeader}>
              <span>Team size</span>
              <span>Prodvo</span>
              <span>v0</span>
              <span>Better value</span>
            </div>
            {TEAM_COST.map((row) => (
              <div key={row.size} className={styles.costRow}>
                <span>{row.size}</span>
                <span>{row.prodvo}/mo</span>
                <span>{row.v0}/mo</span>
                <span className={row.winner === "Prodvo" ? styles.winProdvo : styles.winV0}>
                  {row.winner}
                </span>
              </div>
            ))}
          </div>

          <p className={styles.costNote}>
            At 10+ team members, Prodvo's Scale tier ($249/mo flat) becomes more 
            economical than v0's per-user model — with planning workflows and 
            rollback safety included.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BOTTOM LINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.bottomLine}>
            <h2 className={styles.bottomTitle}>The bottom line</h2>
            <p className={styles.bottomSub}>
              v0 and Prodvo serve different stages of the product lifecycle. 
              Many teams use both.
            </p>
            <div className={styles.bottomGrid}>
              <div className={styles.bottomCard}>
                <div className={styles.bottomCardHeader}>
                  <span className={styles.bottomBrand}>v0</span>
                  <span className={styles.bottomTag}>Best for design → code</span>
                </div>
                <ul className={styles.bottomList}>
                  <li>Visual design mode with live preview</li>
                  <li>Figma import and design system builder</li>
                  <li>iOS app for building on the go</li>
                  <li>Native Vercel deployment</li>
                  <li>Great free tier for prototyping</li>
                </ul>
              </div>
              <div className={`${styles.bottomCard} ${styles.bottomCardHighlight}`}>
                <div className={styles.bottomCardHeader}>
                  <span className={styles.bottomBrand}>Prodvo</span>
                  <span className={styles.bottomTagHighlight}>Best for idea → production</span>
                </div>
                <ul className={styles.bottomList}>
                  <li>Structured planning before coding</li>
                  <li>Parallel execution (3.1× faster)</li>
                  <li>Checkpoint snapshots + one-click rollback</li>
                  <li>Approval gates for team review</li>
                  <li>Flat pricing at scale</li>
                </ul>
              </div>
            </div>
            <p className={styles.bottomVerdict}>
              Use v0 for rapid prototypes and design exploration. Switch to Prodvo 
              when you need team workflows, safety rails, and production confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Ready for production-grade workflows?</h2>
              <p>
                Start your first Prodvo workspace and see why teams choose 
                planning + safety over prompts alone.
              </p>
              <Link className="btn" href="/pricing">
                Start free trial
              </Link>
            </div>
            <div className="globe" aria-hidden="true">
              <span className="globe-dot a" />
              <span className="globe-dot b" />
              <span className="globe-dot c" />
              <span className="globe-dot d" />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

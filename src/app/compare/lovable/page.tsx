"use client";

import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import styles from "./lovable.module.css";

const SAFETY_COMPARISON = [
  {
    category: "Rollback capability",
    prodvo: "One-click rollback to any checkpoint snapshot",
    lovable: "No built-in rollback — rely on Git history",
    prodvoWins: true,
  },
  {
    category: "Approval gates",
    prodvo: "Gate risky changes behind team approval workflows",
    lovable: "No approval workflow — direct deploy",
    prodvoWins: true,
  },
  {
    category: "Audit trails",
    prodvo: "Full execution history with timestamps and diffs",
    lovable: "Standard Git commit history only",
    prodvoWins: true,
  },
  {
    category: "Checkpoint snapshots",
    prodvo: "Automatic checkpoints before major changes",
    lovable: "Manual Git commits required",
    prodvoWins: true,
  },
  {
    category: "Compliance certifications",
    prodvo: "Audit trails + governance controls",
    lovable: "SOC 2 Type II, ISO 27001, GDPR",
    prodvoWins: false,
  },
];

const TEAM_FEATURES = [
  {
    feature: "Planning workspace",
    description: "Convert requirements into ordered task plans with effort estimates",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Parallel execution",
    description: "Run frontend, backend, QA, and integrations simultaneously",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Live progress tracking",
    description: "See active runs, blockers, and completion confidence in real-time",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "Single coordination timeline",
    description: "One view for PM, eng, and QA — no status chasing",
    prodvo: true,
    lovable: false,
  },
  {
    feature: "GitHub sync",
    description: "Push code to your own repository",
    prodvo: true,
    lovable: true,
  },
  {
    feature: "Team workspaces",
    description: "Shared collaboration spaces",
    prodvo: true,
    lovable: true,
  },
  {
    feature: "SSO integration",
    description: "Enterprise identity management",
    prodvo: true,
    lovable: true,
  },
];

const ENTERPRISE_MATRIX = [
  { feature: "SOC 2 Type II certified", prodvo: "Via audit trails", lovable: "Yes" },
  { feature: "ISO 27001", prodvo: "Roadmap", lovable: "Yes" },
  { feature: "GDPR compliance", prodvo: "Yes", lovable: "Yes" },
  { feature: "SSO / SAML", prodvo: "Scale tier", lovable: "Business tier" },
  { feature: "SCIM provisioning", prodvo: "Roadmap", lovable: "Enterprise" },
  { feature: "Audit logs", prodvo: "All tiers", lovable: "Enterprise" },
  { feature: "Role-based access", prodvo: "Scale tier", lovable: "Business tier" },
  { feature: "Custom connectors", prodvo: "Scale tier", lovable: "Enterprise" },
];

const WORKFLOW_STAGES = [
  {
    stage: "1",
    title: "Plan",
    prodvo: "Structured task plans from plain language with effort estimates and dependencies",
    lovable: "Jump to prompts — no planning phase",
  },
  {
    stage: "2",
    title: "Build",
    prodvo: "Parallel agents for UI, backend, tests, and integrations with live visibility",
    lovable: "Sequential generation with template library",
  },
  {
    stage: "3",
    title: "Review",
    prodvo: "Checkpoint gates, clear diffs, team approvals before deployment",
    lovable: "GitHub PR workflow (bring your own review process)",
  },
  {
    stage: "4",
    title: "Ship",
    prodvo: "One-click deploy with rollback-ready snapshots and audit trail",
    lovable: "Deploy with custom domains (no rollback safety net)",
  },
];

export default function CompareLovablePage() {
  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Comparison</span>
          <h1 className={styles.heroTitle}>
            Prodvo vs Lovable
          </h1>
          <p className={styles.heroSub}>
            Both claim production-grade output. The difference is what "production-grade" 
            actually means — planning workflows, rollback safety, and the team coordination 
            that keeps complex projects on track.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Try Prodvo free
            </Link>
            <Link href="#safety" className="btn btn-secondary">
              See safety features
            </Link>
          </div>
        </div>

        {/* Shield visual */}
        <div className={styles.shieldVisual}>
          <div className={styles.shield}>
            <div className={styles.shieldInner}>
              <span className={styles.shieldIcon}>⛨</span>
              <span className={styles.shieldText}>Rollback-ready</span>
            </div>
          </div>
          <div className={styles.shieldRings}>
            <span className={styles.ring} style={{ animationDelay: "0s" }} />
            <span className={styles.ring} style={{ animationDelay: "0.5s" }} />
            <span className={styles.ring} style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WORKFLOW STAGES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Workflow</span>
            <h2 className={styles.sectionTitle}>From idea to production — step by step</h2>
            <p className={styles.sectionSub}>
              Lovable generates apps. Prodvo manages the entire journey from planning 
              through safe deployment.
            </p>
          </div>

          <div className={styles.stagesGrid}>
            {WORKFLOW_STAGES.map((item) => (
              <div key={item.stage} className={styles.stageCard}>
                <div className={styles.stageNumber}>{item.stage}</div>
                <h3 className={styles.stageTitle}>{item.title}</h3>
                <div className={styles.stageComparison}>
                  <div className={styles.stageItem}>
                    <span className={styles.stageBrand}>Prodvo</span>
                    <p>{item.prodvo}</p>
                  </div>
                  <div className={styles.stageItem}>
                    <span className={styles.stageBrand}>Lovable</span>
                    <p>{item.lovable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SAFETY FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section} id="safety">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Safety</span>
            <h2 className={styles.sectionTitle}>Production-grade means rollback-ready</h2>
            <p className={styles.sectionSub}>
              Lovable emphasizes compliance certifications. Prodvo adds the operational 
              safety features that prevent bad deploys from becoming incidents.
            </p>
          </div>

          <div className={styles.safetyGrid}>
            {SAFETY_COMPARISON.map((item) => (
              <div 
                key={item.category} 
                className={`${styles.safetyCard} ${item.prodvoWins ? styles.prodvoWins : styles.lovableWins}`}
              >
                <h3 className={styles.safetyCategory}>{item.category}</h3>
                <div className={styles.safetyComparison}>
                  <div className={styles.safetyItem}>
                    <span className={styles.safetyBrand}>Prodvo</span>
                    <p>{item.prodvo}</p>
                  </div>
                  <div className={styles.safetyItem}>
                    <span className={styles.safetyBrand}>Lovable</span>
                    <p>{item.lovable}</p>
                  </div>
                </div>
                {item.prodvoWins && <span className={styles.winnerBadge}>Prodvo advantage</span>}
                {!item.prodvoWins && <span className={styles.winnerBadgeLovable}>Lovable advantage</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM COORDINATION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Teams</span>
            <h2 className={styles.sectionTitle}>Built for team coordination, not just code generation</h2>
            <p className={styles.sectionSub}>
              Code generation is table stakes. The real challenge is keeping teams 
              aligned through planning, execution, and review.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {TEAM_FEATURES.map((item) => (
              <div key={item.feature} className={styles.teamCard}>
                <div className={styles.teamHeader}>
                  <h3 className={styles.teamFeature}>{item.feature}</h3>
                  <div className={styles.teamChecks}>
                    <span className={item.prodvo ? styles.checkYes : styles.checkNo}>
                      {item.prodvo ? "✓" : "—"}
                    </span>
                    <span className={item.lovable ? styles.checkYes : styles.checkNo}>
                      {item.lovable ? "✓" : "—"}
                    </span>
                  </div>
                </div>
                <p className={styles.teamDesc}>{item.description}</p>
                <div className={styles.teamLabels}>
                  <span>Prodvo</span>
                  <span>Lovable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ENTERPRISE MATRIX
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Enterprise</span>
            <h2 className={styles.sectionTitle}>Enterprise feature comparison</h2>
            <p className={styles.sectionSub}>
              Lovable leads on compliance certifications. Prodvo leads on operational 
              controls. Here's how they stack up.
            </p>
          </div>

          <div className={styles.matrixWrap}>
            <table className={styles.matrix}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Prodvo</th>
                  <th>Lovable</th>
                </tr>
              </thead>
              <tbody>
                {ENTERPRISE_MATRIX.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.prodvo}</td>
                    <td>{row.lovable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BOTTOM LINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottomLine}>
            <h2 className={styles.bottomTitle}>The bottom line</h2>
            <div className={styles.bottomColumns}>
              <div className={styles.bottomCol}>
                <h3>Choose Lovable if...</h3>
                <ul>
                  <li>SOC 2 / ISO 27001 certification is a hard requirement today</li>
                  <li>You need GitHub-first workflow with full code ownership</li>
                  <li>You're a solo builder who doesn't need team coordination</li>
                </ul>
              </div>
              <div className={styles.bottomCol}>
                <h3>Choose Prodvo if...</h3>
                <ul>
                  <li>You need planning → execution → review → ship in one place</li>
                  <li>Rollback safety and approval gates matter for your team</li>
                  <li>You want parallel execution, not sequential prompts</li>
                  <li>Team coordination is as important as code generation</li>
                </ul>
              </div>
            </div>
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
              <h2>Production-grade means rollback-ready</h2>
              <p>
                Start your first Prodvo workspace and see why teams choose 
                safety rails over certifications alone.
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

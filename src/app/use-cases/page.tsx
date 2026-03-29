"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

export default function UseCasesPage() {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);

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

  const useCases = [
    {
      id: "feature-velocity",
      number: "01",
      headline: "Ship features in days, not sprints",
      context: "A Series B startup needed to deliver 3 major features before their funding milestone.",
      challenge: "2-week sprints stretched to 4 weeks. Half of every sprint was coordination, not coding.",
      howProdvo: "Parallel agents handled frontend, backend, and tests simultaneously. Engineers reviewed at checkpoints instead of attending status meetings.",
      metric: "72%",
      metricLabel: "reduction in coordination time",
      detail: "14 hours/week → 4 hours/week on alignment meetings",
    },
    {
      id: "scale-teams",
      number: "02",
      headline: "Scale from 5 to 50 without scaling chaos",
      context: "Enterprise SaaS company growing fast. What worked with one team collapsed at five teams.",
      challenge: "Dependencies slipped constantly. No one knew who was blocking whom. Every release felt risky.",
      howProdvo: "Explicit ownership at every checkpoint. Cross-team dependencies visible in one place. Automatic escalation when blockers appear.",
      metric: "60%",
      metricLabel: "fewer cross-team delays",
      detail: "Handoff clarity became the default, not the exception",
    },
    {
      id: "client-delivery",
      number: "03",
      headline: "Consistent quality across 12 client accounts",
      context: "Digital agency delivering custom work for enterprise clients with tight margins.",
      challenge: "Every project reinvented delivery. Quality varied by account manager. Surprises at launch.",
      howProdvo: "Templated workflows with client-specific scope. Same quality gates, different implementations. Reusable patterns.",
      metric: "3×",
      metricLabel: "more projects with same headcount",
      detail: "From reactive firefighting to proactive delivery",
    },
    {
      id: "compliance-velocity",
      number: "04",
      headline: "Move fast without breaking compliance",
      context: "Regulated fintech where auditors want evidence and engineers want autonomy.",
      challenge: "Manual audit prep took 2 weeks per release. Speed and compliance felt mutually exclusive.",
      howProdvo: "Automatic checkpoint evidence collection. Approval trails built into the workflow. Compliance as byproduct, not extra work.",
      metric: "2 weeks → 1 day",
      metricLabel: "audit prep time",
      detail: "From dreaded chore to automated process",
    },
  ];

  const signals = [
    { icon: "⚡", text: "Shipping weekly or faster" },
    { icon: "👥", text: "Cross-functional squads" },
    { icon: "📈", text: "Scaling engineering org" },
    { icon: "🔄", text: "Multiple concurrent projects" },
    { icon: "✅", text: "Quality gates required" },
    { icon: "🔐", text: "Audit trail needs" },
  ];

  return (
    <SiteShell buildTag="prodvo-use-cases-v6">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO: Bold statement with supporting context
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Use Cases</span>
          <h1 className={styles.heroTitle}>
            How teams actually use Prodvo
          </h1>
          <p className={styles.heroSubtitle}>
            Not feature lists. Not demos. Real stories from teams who solved 
            real coordination problems and shipped faster because of it.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CASE STUDIES: Full-width expandable case format
          Unique layout: Number + headline row, expandable detail panel below
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.casesSection}>
        <div className={styles.casesInner}>
          {useCases.map((uc, i) => (
            <article 
              key={uc.id}
              className={`${styles.caseItem} ${expandedCase === i ? styles.expanded : ""} ${styles.reveal}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <button
                type="button"
                className={styles.caseHeader}
                onClick={() => setExpandedCase(expandedCase === i ? null : i)}
                aria-expanded={expandedCase === i}
              >
                <span className={styles.caseNumber}>{uc.number}</span>
                <h2 className={styles.caseHeadline}>{uc.headline}</h2>
                <span className={styles.caseToggle}>{expandedCase === i ? "−" : "+"}</span>
              </button>
              
              <div className={styles.caseDetail}>
                <div className={styles.caseStory}>
                  <div className={styles.storyBlock}>
                    <span className={styles.storyLabel}>The situation</span>
                    <p>{uc.context}</p>
                  </div>
                  <div className={styles.storyBlock}>
                    <span className={styles.storyLabel}>The friction</span>
                    <p>{uc.challenge}</p>
                  </div>
                  <div className={styles.storyBlock}>
                    <span className={styles.storyLabel}>How Prodvo helped</span>
                    <p>{uc.howProdvo}</p>
                  </div>
                </div>
                <div className={styles.caseResult}>
                  <div className={styles.resultMetric}>
                    <span className={styles.metricValue}>{uc.metric}</span>
                    <span className={styles.metricLabel}>{uc.metricLabel}</span>
                  </div>
                  <p className={styles.resultDetail}>{uc.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PATTERN RECOGNITION: Horizontal signal strip
          Not cards, not grid—inline flowing signals
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.signalSection}>
        <div className={styles.signalInner}>
          <div className={styles.signalLeft}>
            <span className={styles.sectionLabel}>Pattern match</span>
            <h2 className={styles.signalTitle}>You&apos;ll get the most value if...</h2>
          </div>
          <div className={styles.signalStrip}>
            {signals.map((s) => (
              <span key={s.text} className={styles.signalItem}>
                <span className={styles.signalIcon}>{s.icon}</span>
                {s.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPARISON: Side-by-side without/with Prodvo
          Two columns, same row heights, direct contrast
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.compareSection}>
        <div className={styles.compareInner}>
          <div className={styles.compareHeader}>
            <span className={styles.sectionLabel}>The difference</span>
            <h2 className={styles.sectionTitle}>Before and after</h2>
          </div>
          
          <div className={styles.compareTable}>
            <div className={styles.compareSide}>
              <div className={styles.compareSideHeader}>Without Prodvo</div>
              <div className={styles.compareRow}>Standups to sync on status</div>
              <div className={styles.compareRow}>Slack threads to find blockers</div>
              <div className={styles.compareRow}>Manual dependency tracking</div>
              <div className={styles.compareRow}>Scope creep mid-sprint</div>
              <div className={styles.compareRow}>Surprise bugs at merge time</div>
              <div className={styles.compareRow}>Audit prep after the fact</div>
            </div>
            <div className={`${styles.compareSide} ${styles.compareSideAfter}`}>
              <div className={styles.compareSideHeader}>With Prodvo</div>
              <div className={styles.compareRow}>Async visibility into all runs</div>
              <div className={styles.compareRow}>Blockers surfaced automatically</div>
              <div className={styles.compareRow}>Dependencies explicit at checkpoints</div>
              <div className={styles.compareRow}>Scope locked at intent definition</div>
              <div className={styles.compareRow}>Issues caught at review gates</div>
              <div className={styles.compareRow}>Evidence collected automatically</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STARTING POINT: Linear progression, not steps grid
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.startSection}>
        <div className={styles.startInner}>
          <div className={styles.startText}>
            <span className={styles.sectionLabel}>Where to start</span>
            <h2 className={styles.startTitle}>
              Pick your highest-friction workflow.
              <br />
              Run it once with Prodvo.
              <br />
              Measure the difference.
            </h2>
            <p className={styles.startBody}>
              Don&apos;t try to transform everything at once. Find the one workflow where coordination 
              overhead is killing velocity, and prove value there first. Scale after you have evidence.
            </p>
            <div className={styles.startActions}>
              <Link className="btn btn-primary" href="/pricing">Start free trial</Link>
              <Link className="btn btn-secondary" href="/workflow">See the workflow model</Link>
            </div>
          </div>
          <div className={styles.startVisual}>
            <div className={styles.visualFlow}>
              <div className={styles.flowNode}>
                <span>Identify</span>
                <small>Where handoffs break</small>
              </div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowNode}>
                <span>Run</span>
                <small>One scoped workflow</small>
              </div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowNode}>
                <span>Prove</span>
                <small>Measure the delta</small>
              </div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowNode}>
                <span>Scale</span>
                <small>Expand with confidence</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA: Clean close
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Find your use case</h2>
          <p className={styles.ctaBody}>
            Start free. Run one workflow. See the difference.
          </p>
          <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
        </div>
      </section>
    </SiteShell>
  );
}

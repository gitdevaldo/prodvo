"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

export default function UseCasesPage() {
  const [activePersona, setActivePersona] = useState(0);

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

  const personas = [
    {
      role: "Engineering Lead",
      company: "Series B Startup",
      avatar: "EL",
      challenge: "Shipping features while drowning in coordination overhead",
      story: `Every sprint starts the same way. Three standups, two planning sessions, and a dozen Slack 
threads just to align on what "done" means. By the time everyone agrees on scope, half the sprint is gone.`,
      before: "14 hours/week in status meetings",
      after: "3 hours/week with async visibility",
      quote: "We stopped asking 'what's the status?' because everyone can see it.",
    },
    {
      role: "VP of Product",
      company: "Enterprise SaaS",
      avatar: "VP",
      challenge: "Scaling delivery without scaling chaos",
      story: `When we were one team, everything was in someone's head. Now we're five teams, and every 
release feels like herding cats. Dependencies slip, handoffs break, and nobody knows who's blocking whom.`,
      before: "60% of delays from cross-team handoffs",
      after: "Explicit ownership at every checkpoint",
      quote: "We finally have a single source of truth for what's actually happening.",
    },
    {
      role: "Agency Director",
      company: "Digital Agency",
      avatar: "AD",
      challenge: "Delivering consistent quality across 12 client accounts",
      story: `Every client wants custom work, but our margins depend on repeatability. We were reinventing 
delivery for every project—different processes, different quality bars, different surprises at launch.`,
      before: "Inconsistent delivery quality by account",
      after: "Templated workflows with client-specific scope",
      quote: "Same quality gates, custom implementations. Finally.",
    },
    {
      role: "CTO",
      company: "Regulated Fintech",
      avatar: "CT",
      challenge: "Moving fast without breaking compliance",
      story: `Our auditors want evidence trails. Our board wants velocity. Our engineers want autonomy. 
These felt mutually exclusive until we realized the problem was visibility, not speed.`,
      before: "Manual audit prep taking 2 weeks per release",
      after: "Automatic checkpoint evidence collection",
      quote: "Compliance became a byproduct of how we work, not extra work.",
    },
  ];

  const scenarios = [
    {
      title: "Internal Tools Sprint",
      context: "Platform team needs admin dashboard in 2 weeks",
      approach: "Scoped agents handle UI, API, and auth in parallel while humans review at merge points",
      outcome: "Delivered in 8 days with full test coverage",
      teamSize: "2 engineers + Prodvo",
      complexity: "Medium",
    },
    {
      title: "Feature Flag Rollout",
      context: "Gradual release of pricing tier changes to 10% of users",
      approach: "Checkpoint gates at each rollout percentage with automatic rollback triggers",
      outcome: "Zero-incident launch with clear escalation path",
      teamSize: "1 engineer + Prodvo",
      complexity: "High risk, low code",
    },
    {
      title: "Client Portal Migration",
      context: "Agency rebuilding legacy system for enterprise client",
      approach: "Templated migration workflow with client-specific data mapping",
      outcome: "3 similar migrations completed using same pattern",
      teamSize: "3 engineers + Prodvo",
      complexity: "High",
    },
  ];

  const activePersonaData = personas[activePersona];

  return (
    <SiteShell buildTag="prodvo-use-cases-v5">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO: Persona-focused opener
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Use Cases</span>
          <h1 className={styles.heroTitle}>
            Real teams. Real problems.
            <br />
            <em>Real solutions.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Prodvo works differently depending on who you are and what you&apos;re building. 
            Explore how teams like yours are shipping faster with less friction.
          </p>
          <div className={styles.heroActions}>
            <Link className="btn btn-primary" href="/pricing">Start free trial</Link>
            <Link className={styles.heroLink} href="/product">
              See all capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PERSONA DEEP DIVE: Interactive role selector with story expansion
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.personaSection}>
        <div className={styles.personaInner}>
          <div className={styles.personaHeader}>
            <span className={styles.sectionLabel}>Who uses Prodvo</span>
            <h2 className={styles.sectionTitle}>Find your story</h2>
            <p className={styles.sectionSubtitle}>
              Select a role to see how teams in that position use Prodvo to solve their specific challenges.
            </p>
          </div>

          <div className={styles.personaSelector}>
            {personas.map((p, i) => (
              <button
                key={p.role}
                type="button"
                className={`${styles.personaTab} ${activePersona === i ? styles.active : ""}`}
                onClick={() => setActivePersona(i)}
              >
                <span className={styles.personaAvatar}>{p.avatar}</span>
                <div>
                  <strong>{p.role}</strong>
                  <span>{p.company}</span>
                </div>
              </button>
            ))}
          </div>

          <article className={styles.personaStory}>
            <div className={styles.storyHeader}>
              <div className={styles.storyMeta}>
                <span className={styles.storyAvatarLarge}>{activePersonaData.avatar}</span>
                <div>
                  <h3>{activePersonaData.role}</h3>
                  <span>{activePersonaData.company}</span>
                </div>
              </div>
              <p className={styles.storyChallenge}>{activePersonaData.challenge}</p>
            </div>

            <div className={styles.storyBody}>
              <div className={styles.storyNarrative}>
                <h4>The situation</h4>
                <p>{activePersonaData.story}</p>
              </div>

              <div className={styles.storyTransform}>
                <div className={styles.transformBefore}>
                  <span className={styles.transformLabel}>Before</span>
                  <p>{activePersonaData.before}</p>
                </div>
                <div className={styles.transformArrow}>→</div>
                <div className={styles.transformAfter}>
                  <span className={styles.transformLabel}>After</span>
                  <p>{activePersonaData.after}</p>
                </div>
              </div>

              <blockquote className={styles.storyQuote}>
                &ldquo;{activePersonaData.quote}&rdquo;
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SCENARIO SHOWCASE: Diagonal staggered layout with real examples
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.scenarioSection}>
        <div className={styles.scenarioInner}>
          <div className={styles.scenarioHeader}>
            <span className={styles.sectionLabel}>In practice</span>
            <h2 className={styles.sectionTitle}>See it in action</h2>
            <p className={styles.sectionSubtitle}>
              Real delivery scenarios showing how Prodvo fits into existing team workflows.
            </p>
          </div>

          <div className={styles.scenarioShowcase}>
            {scenarios.map((s, i) => (
              <article 
                key={s.title} 
                className={`${styles.scenarioCard} ${i === 1 ? styles.scenarioOffset : ""} ${styles.reveal}`}
              >
                <div className={styles.scenarioTop}>
                  <h3>{s.title}</h3>
                  <div className={styles.scenarioMeta}>
                    <span>{s.teamSize}</span>
                    <span className={styles.complexityBadge}>{s.complexity}</span>
                  </div>
                </div>
                <div className={styles.scenarioContent}>
                  <div className={styles.scenarioRow}>
                    <strong>Context</strong>
                    <p>{s.context}</p>
                  </div>
                  <div className={styles.scenarioRow}>
                    <strong>Approach</strong>
                    <p>{s.approach}</p>
                  </div>
                  <div className={styles.scenarioOutcome}>
                    <span>Outcome</span>
                    <p>{s.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FIT MATRIX: Which teams get most value
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.fitSection}>
        <div className={styles.fitInner}>
          <div className={styles.fitHeader}>
            <span className={styles.sectionLabel}>Team fit</span>
            <h2 className={styles.sectionTitle}>Is Prodvo right for you?</h2>
          </div>

          <div className={styles.fitColumns}>
            <div className={styles.fitYes}>
              <h3>Great fit</h3>
              <ul>
                <li>
                  <strong>Teams shipping weekly or faster</strong>
                  <span>High velocity benefits most from reduced coordination overhead</span>
                </li>
                <li>
                  <strong>Cross-functional squads</strong>
                  <span>Frontend, backend, QA working on shared features</span>
                </li>
                <li>
                  <strong>Growing engineering orgs</strong>
                  <span>Scaling from 5 to 50 engineers without scaling chaos</span>
                </li>
                <li>
                  <strong>Agencies with multiple clients</strong>
                  <span>Repeatable quality with client-specific customization</span>
                </li>
              </ul>
            </div>
            <div className={styles.fitMaybe}>
              <h3>Consider first</h3>
              <ul>
                <li>
                  <strong>Solo developers</strong>
                  <span>Prodvo shines with coordination—solo work may not need it</span>
                </li>
                <li>
                  <strong>Monthly release cycles</strong>
                  <span>Benefits scale with velocity; slower cycles see less impact</span>
                </li>
                <li>
                  <strong>Highly experimental R&D</strong>
                  <span>Unstructured exploration may not fit checkpoint model</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          GETTING STARTED: Clear next steps
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.startSection}>
        <div className={styles.startInner}>
          <div className={styles.startContent}>
            <span className={styles.sectionLabel}>Get started</span>
            <h2 className={styles.startTitle}>Pick one workflow. Prove value. Scale from there.</h2>
            <p className={styles.startBody}>
              The most successful teams start with a single, high-friction workflow where impact 
              is measurable within one sprint. Don&apos;t boil the ocean—prove the model first.
            </p>
          </div>
          <div className={styles.startSteps}>
            <div className={styles.startStep}>
              <span className={styles.stepNum}>1</span>
              <div>
                <strong>Identify friction</strong>
                <p>Where do handoffs break? Where does scope drift?</p>
              </div>
            </div>
            <div className={styles.startStep}>
              <span className={styles.stepNum}>2</span>
              <div>
                <strong>Run one workflow</strong>
                <p>Use Prodvo for that specific pain point</p>
              </div>
            </div>
            <div className={styles.startStep}>
              <span className={styles.stepNum}>3</span>
              <div>
                <strong>Measure the delta</strong>
                <p>Compare cycle time, coordination overhead, quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA: High-impact closer
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to find your use case?</h2>
          <p className={styles.ctaBody}>
            Start with a free trial and run your first workflow in under an hour.
          </p>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
            <Link className="btn btn-secondary" href="/workflow">See how it works</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./workflow.module.css";

export default function WorkflowPage() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

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

  const phases = [
    {
      id: 0,
      name: "Plan",
      icon: "📋",
      headline: "Capture intent before chaos begins",
      description: `Every run starts with a locked scope. Describe what you want in plain language, and Prodvo 
generates a structured implementation plan with tasks, estimates, and acceptance criteria.`,
      inputs: ["Natural language prompt", "Constraints and boundaries", "Acceptance criteria"],
      outputs: ["Structured task breakdown", "Effort estimates", "Agent assignments"],
      humanRole: "Review and approve the plan before execution starts",
    },
    {
      id: 1,
      name: "Build",
      icon: "🔨",
      headline: "Parallel execution without parallel confusion",
      description: `Multiple agents work simultaneously—frontend, backend, tests—each in isolated branches 
but sharing the same intent lock. Progress is visible in real-time.`,
      inputs: ["Approved plan", "Codebase context", "Test requirements"],
      outputs: ["Implementation code", "Test coverage", "Documentation updates"],
      humanRole: "Monitor progress, available for questions at checkpoints",
    },
    {
      id: 2,
      name: "Review",
      icon: "🔍",
      headline: "Checkpoints catch problems before they compound",
      description: `At defined gates, agents pause and wait for explicit approval. You see full diffs, 
test results, and quality signals before anything moves forward.`,
      inputs: ["Completed tasks", "Test results", "Quality metrics"],
      outputs: ["Approved changes", "Requested revisions", "Rollback decisions"],
      humanRole: "Review changes, approve continuation or request revisions",
    },
    {
      id: 3,
      name: "Deploy",
      icon: "🚀",
      headline: "Ship with confidence, rollback without fear",
      description: `One-click deployment to staging or production. Every checkpoint is a save point—if 
anything goes wrong, rollback to any previous state instantly.`,
      inputs: ["Approved implementation", "Environment config", "Rollback plan"],
      outputs: ["Live deployment", "Monitoring alerts", "Checkpoint archive"],
      humanRole: "Trigger deployment, monitor rollout, handle incidents",
    },
  ];

  const principles = [
    {
      title: "Explicit ownership",
      description: "Every task has one owner. Every decision has one decider. No ambiguity about who's responsible.",
    },
    {
      title: "Visible progress",
      description: "Status is never hidden in someone's head. The timeline shows what's done, what's blocked, what's next.",
    },
    {
      title: "Recoverable state",
      description: "Every checkpoint is a save point. Any mistake can be undone without manual cleanup.",
    },
    {
      title: "Bounded scope",
      description: "Agents can't drift outside defined boundaries. Intent lock keeps execution aligned with goals.",
    },
  ];

  const comparisons = [
    {
      label: "Scope changes",
      traditional: "Discovered at code review, causes rework",
      prodvo: "Locked at planning, flagged before build starts",
    },
    {
      label: "Status updates",
      traditional: "Manual, in meetings and Slack threads",
      prodvo: "Automatic, visible in real-time timeline",
    },
    {
      label: "Quality gates",
      traditional: "End-of-sprint reviews with surprises",
      prodvo: "Checkpoint reviews throughout execution",
    },
    {
      label: "Rollback",
      traditional: "Manual, partial, often incomplete",
      prodvo: "One-click, full state restoration",
    },
  ];

  return (
    <SiteShell buildTag="prodvo-workflow-v5">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Workflow</span>
          <h1 className={styles.heroTitle}>
            From prompt to production.
            <br />
            <em>One clear path.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            See exactly how Prodvo transforms a natural language request into deployed, 
            production-ready code—with human oversight at every critical point.
          </p>
        </div>
        
        <div className={styles.heroFlow}>
          <div className={styles.flowStep}>
            <span>Plan</span>
          </div>
          <div className={styles.flowConnector} />
          <div className={styles.flowStep}>
            <span>Build</span>
          </div>
          <div className={styles.flowConnector} />
          <div className={styles.flowStep}>
            <span>Review</span>
          </div>
          <div className={styles.flowConnector} />
          <div className={styles.flowStep}>
            <span>Deploy</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PHASE DEEP DIVE — Expandable left-aligned progression
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.phaseSection}>
        <div className={styles.phaseInner}>
          <div className={styles.phaseHeader}>
            <span className={styles.sectionLabel}>The four phases</span>
            <h2 className={styles.sectionTitle}>Every run follows the same rhythm</h2>
            <p className={styles.sectionSubtitle}>
              Click any phase to see exactly what happens, what humans do, and what moves forward.
            </p>
          </div>

          <div className={styles.phaseTimeline}>
            <div className={styles.timelineLine} aria-hidden="true" />
            
            {phases.map((phase) => (
              <article 
                key={phase.id}
                className={`${styles.phaseItem} ${expandedPhase === phase.id ? styles.expanded : ""}`}
              >
                <button
                  type="button"
                  className={styles.phaseToggle}
                  onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                  aria-expanded={expandedPhase === phase.id}
                >
                  <span className={styles.phaseIcon}>{phase.icon}</span>
                  <div className={styles.phaseMeta}>
                    <strong>{phase.name}</strong>
                    <span>{phase.headline}</span>
                  </div>
                  <span className={styles.phaseExpand}>{expandedPhase === phase.id ? "−" : "+"}</span>
                </button>
                
                {expandedPhase === phase.id && (
                  <div className={styles.phaseContent}>
                    <p className={styles.phaseDescription}>{phase.description}</p>
                    
                    <div className={styles.phaseGrid}>
                      <div className={styles.phaseInputs}>
                        <h4>Inputs</h4>
                        <ul>
                          {phase.inputs.map((input) => (
                            <li key={input}>{input}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.phaseOutputs}>
                        <h4>Outputs</h4>
                        <ul>
                          {phase.outputs.map((output) => (
                            <li key={output}>{output}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={styles.humanRole}>
                      <span className={styles.humanLabel}>👤 Human role</span>
                      <p>{phase.humanRole}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRINCIPLES — Horizontal scroll marquee
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.principleSection}>
        <div className={styles.principleInner}>
          <div className={styles.principleHeader}>
            <span className={styles.sectionLabel}>Design principles</span>
            <h2 className={styles.sectionTitle}>Built on four foundations</h2>
          </div>
          
          <div className={styles.principleRow}>
            {principles.map((p, i) => (
              <article key={p.title} className={`${styles.principleCard} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          COMPARISON — Side by side traditional vs Prodvo
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.compareSection}>
        <div className={styles.compareInner}>
          <div className={styles.compareHeader}>
            <span className={styles.sectionLabel}>The difference</span>
            <h2 className={styles.sectionTitle}>Traditional delivery vs. Prodvo</h2>
          </div>
          
          <div className={styles.compareTable}>
            <div className={styles.compareHead}>
              <span></span>
              <span>Traditional</span>
              <span>With Prodvo</span>
            </div>
            {comparisons.map((row) => (
              <div key={row.label} className={`${styles.compareRow} ${styles.reveal}`}>
                <span className={styles.compareLabel}>{row.label}</span>
                <span className={styles.compareBad}>{row.traditional}</span>
                <span className={styles.compareGood}>{row.prodvo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          LIVE EXAMPLE — Terminal visualization
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.exampleSection}>
        <div className={styles.exampleInner}>
          <div className={styles.exampleContent}>
            <span className={styles.sectionLabel}>In practice</span>
            <h2 className={styles.sectionTitle}>Watch it work</h2>
            <p className={styles.sectionSubtitle}>
              A real workflow run from prompt to deployment, showing each phase transition.
            </p>
            
            <div className={styles.exampleSteps}>
              <div className={styles.exStep}>
                <span>1</span>
                <p>&quot;Add password reset flow with email verification&quot;</p>
              </div>
              <div className={styles.exStep}>
                <span>2</span>
                <p>Plan generated: 6 tasks, ~4 hours estimated</p>
              </div>
              <div className={styles.exStep}>
                <span>3</span>
                <p>3 agents execute in parallel (UI, API, Email service)</p>
              </div>
              <div className={styles.exStep}>
                <span>4</span>
                <p>Checkpoint: 94% test coverage, 0 security issues</p>
              </div>
              <div className={styles.exStep}>
                <span>5</span>
                <p>Deployed to staging → production in 12 minutes</p>
              </div>
            </div>
          </div>
          
          <div className={styles.exampleVisual}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalBar}>
                <span /><span /><span />
              </div>
              <div className={styles.terminalBody}>
                <code><span className={styles.terminalPrompt}>$</span> prodvo run &quot;Add password reset&quot;</code>
                <code className={styles.terminalMuted}>Planning...</code>
                <code className={styles.terminalSuccess}>✓ 6 tasks planned</code>
                <code className={styles.terminalSuccess}>✓ 3 agents assigned</code>
                <code className={styles.terminalMuted}>Building...</code>
                <code>  [ui-agent] ████████░░ 80%</code>
                <code>  [api-agent] ██████████ 100%</code>
                <code>  [email-agent] █████████░ 90%</code>
                <code className={styles.terminalSuccess}>✓ Build complete</code>
                <code className={styles.terminalHighlight}>→ Checkpoint ready for review</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to see the workflow in your codebase?</h2>
          <p className={styles.ctaBody}>
            Start a free trial and run your first production workflow today.
          </p>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
            <Link className="btn btn-secondary" href="/docs">Read the docs</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

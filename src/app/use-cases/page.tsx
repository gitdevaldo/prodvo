"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type DeliveryScenario = {
  id: string;
  lane: string;
  profile: string;
  pressure: string;
  execution: readonly string[];
  proof: readonly string[];
  note: string;
  source: string;
};

const SCENARIOS: readonly DeliveryScenario[] = [
  {
    id: "founder-team",
    lane: "Founder lane",
    profile: "Small product team shipping customer-facing releases every week",
    pressure:
      "Scope was clear, but context was fragmented across PM docs, tickets, and PRs, creating late QA and unstable release promises.",
    execution: [
      "Lock one release objective in plan mode with strict acceptance criteria.",
      "Run frontend, backend, and test work in parallel agents under one lane.",
      "Pause at checkpoints for quality and merge approval before release.",
      "Deploy with rollback state linked to the same run history.",
    ],
    proof: [
      "Release rhythm shifted from reactive to predictable.",
      "Scope changes no longer reset sprint confidence.",
      "Status meetings dropped because execution context stayed visible.",
    ],
    note:
      "We stopped coordinating in fragments. Prodvo gave us one lane to run delivery seriously.",
    source: "Engineering lead · Vertical SaaS",
  },
  {
    id: "agency-team",
    lane: "Agency lane",
    profile: "Multi-client delivery pod with shared engineers and overlapping launches",
    pressure:
      "Every client had different delivery rituals, so context switching and inconsistent quality gates slowed output.",
    execution: [
      "Create isolated workspace lanes per client with reusable templates.",
      "Map each account to one checkpoint model for build, review, and release.",
      "Track approvals and QA readiness directly in run history.",
      "Ship parallel client releases with consistent governance.",
    ],
    proof: [
      "More client launches shipped with the same team size.",
      "Launch-week defects dropped across active accounts.",
      "Client comms moved from updates to shipped evidence.",
    ],
    note:
      "Prodvo standardized how we execute without flattening each client scope.",
    source: "Delivery manager · Product agency",
  },
  {
    id: "regulated-team",
    lane: "Regulated lane",
    profile: "Engineering + compliance workflow for regulated onboarding/payment releases",
    pressure:
      "Audit evidence was collected at the end, causing rework and delayed approvals right before launch windows.",
    execution: [
      "Capture control artifacts at each checkpoint during implementation.",
      "Review engineering and compliance state inside one release lane.",
      "Retain decisions and approvals in export-ready run logs.",
      "Deploy once release records are complete and verifiable.",
    ],
    proof: [
      "Audit prep became predictable per cycle.",
      "Compliance stopped acting as final-stage blocker.",
      "Executive release confidence increased with full traceability.",
    ],
    note:
      "Approval velocity improved because evidence now arrives with the work, not after.",
    source: "Engineering manager · Fintech platform",
  },
];

const DELIVERY_RHYTHM = [
  {
    title: "Intent lock",
    body: "One scoped release objective with boundaries and done criteria before coding starts.",
  },
  {
    title: "Parallel execution",
    body: "UI, API, and tests progress simultaneously with shared lane visibility.",
  },
  {
    title: "Checkpoint control",
    body: "Teams approve quality and risk at explicit gates before merge and deploy.",
  },
  {
    title: "Release confidence",
    body: "Shipping and rollback both run from the same traceable execution history.",
  },
] as const;

const OPERATOR_SIGNALS = [
  "Single owner and single lane per release scope",
  "Checkpoint accountability across PM, engineering, and QA",
  "Early blocker visibility instead of late-cycle surprises",
  "Approval context preserved with implementation records",
  "Faster recovery through rollback-ready checkpoints",
] as const;

const FIT_STRANDS = [
  {
    label: "Founder-led teams",
    detail: "Need speed without sacrificing release control",
  },
  {
    label: "Product squads",
    detail: "Need parallel shipping with clear quality ownership",
  },
  {
    label: "Delivery agencies",
    detail: "Need repeatable execution across multiple client lanes",
  },
  {
    label: "Regulated orgs",
    detail: "Need audit-ready records inside normal release flow",
  },
] as const;

const OPERATOR_FAQ = [
  {
    q: "Does Prodvo replace our current Git + CI workflow?",
    a: "No. It operates as an execution layer above your existing branches and CI gates.",
  },
  {
    q: "How do we keep agent runs inside approved scope?",
    a: "Scope is locked in plan mode and enforced through checkpoint approvals before risky merges.",
  },
  {
    q: "What if quality drops in the middle of a run?",
    a: "Pause at checkpoint, request revisions, or roll back to a known-good state instantly.",
  },
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeScenario, setActiveScenario] = useState<string>(SCENARIOS[0]?.id ?? "");

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = SCENARIOS.find((item) => item.id === activeScenario) ?? SCENARIOS[0];

  return (
    <SiteShell buildTag="prodvo-use-cases-v16">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                Where delivery teams
                <br />
                run Prodvo for real.
              </h1>
              <p className={styles["hero-sub"]}>
                This page shows how teams use Prodvo as an execution system:
                scoped intent, parallel build lanes, checkpoint approvals, and release control
                in one workspace.
              </p>
              <div className={styles["hero-tags"]}>
                <span>Plan mode</span>
                <span>Parallel agents</span>
                <span>Checkpoint review</span>
                <span>Rollback safety</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["orbit"]}>
          <div className="container">
            <div className={cx("orbit-shell", "reveal", "d1")}>
              <div className={styles["orbit-core"]}>Prodvo execution lane</div>
              <div className={styles["orbit-ring"]} />
              <div className={styles["orbit-a"]}>Intent</div>
              <div className={styles["orbit-b"]}>Build</div>
              <div className={styles["orbit-c"]}>Review</div>
              <div className={styles["orbit-d"]}>Release</div>
            </div>
          </div>
        </section>

        <section className={styles["scenario-tabs"]}>
          <div className="container">
            <div className={cx("tabs-row", "reveal")}>
              {SCENARIOS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cx(
                    "tab-btn",
                    activeScenario === item.id ? "tab-btn-active" : "",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                  onClick={() => setActiveScenario(item.id)}
                  aria-pressed={activeScenario === item.id}
                >
                  <span>{item.lane}</span>
                  <strong>{item.profile}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["scenario-canvas"]}>
          <div className="container">
            <div className={styles["canvas-grid"]}>
              <article className={cx("pressure-sheet", "reveal")}>
                <p className={styles["sheet-label"]}>Operational pressure</p>
                <h2>{active.profile}</h2>
                <p>{active.pressure}</p>
              </article>

              <article className={cx("run-sheet", "reveal", "d1")}>
                <p className={styles["sheet-label"]}>How this lane runs in Prodvo</p>
                <ol>
                  {active.execution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            </div>

            <div className={styles["voice-strip"]}>
              <blockquote className={cx("voice-card", "reveal", "d1")}>
                <p>&ldquo;{active.note}&rdquo;</p>
                <cite>{active.source}</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className={styles["proof-reel"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Shipped proof</span>
              <h2 className={styles["section-title"]}>What changed after this team moved delivery into Prodvo</h2>
            </div>
            <div className={styles["proof-row"]}>
              {active.proof.map((item, index) => (
                <article key={item} className={cx("proof-item", "reveal", index > 0 ? "d1" : "")}>
                  <span>{`0${index + 1}`}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["rhythm-strip"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution rhythm</span>
              <h2 className={styles["section-title"]}>The repeatable sequence high-performing teams follow</h2>
            </div>
            <div className={styles["rhythm-line"]}>
              {DELIVERY_RHYTHM.map((item, index) => (
                <article key={item.title} className={cx("rhythm-cell", "reveal", index > 0 ? "d1" : "")}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["signals"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator signals</span>
              <h2 className={styles["section-title"]}>Common signs of healthy execution lanes</h2>
            </div>
            <div className={styles["signal-cloud"]}>
              {OPERATOR_SIGNALS.map((item, index) => (
                <span key={item} className={cx("signal-chip", "reveal", index > 0 ? "d1" : "")}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["fit-matrix"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Team fit</span>
              <h2 className={styles["section-title"]}>Who gets immediate value from Prodvo lanes</h2>
            </div>
            <div className={styles["matrix-grid"]}>
              {FIT_STRANDS.map((item, index) => (
                <article key={item.label} className={cx("matrix-item", "reveal", index > 0 ? "d1" : "")}>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["operator-faq"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator Q&A</span>
              <h2 className={styles["section-title"]}>Questions teams ask before rollout</h2>
            </div>
            <div className={styles["faq-list"]}>
              {OPERATOR_FAQ.map((item, index) => (
                <details key={item.q} className={cx("faq-item", "reveal", index > 0 ? "d1" : "")} open={index === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Run one real release lane in Prodvo.</h2>
              <p>
                Pick your highest-friction workflow, execute it in Prodvo this sprint,
                and keep scope, implementation, review, and release in one system.
              </p>
              <div className={styles["cta-actions"]}>
                <Link className={styles["btn-primary"]} href="/pricing">
                  Start free trial
                </Link>
                <Link className={styles["btn-secondary"]} href="/workflow">
                  See workflow
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

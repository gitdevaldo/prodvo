"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type DeliveryArc = {
  id: string;
  lane: string;
  operator: string;
  context: string;
  friction: string;
  sequence: readonly string[];
  outcomes: readonly string[];
  voice: string;
  voiceBy: string;
};

const DELIVERY_ARCS: readonly DeliveryArc[] = [
  {
    id: "startup-squad",
    lane: "Release lane 01 · Startup squad",
    operator: "Product + engineering squad",
    context:
      "Weekly shipping team running Next.js + TypeScript releases with frequent roadmap pressure.",
    friction:
      "Ownership blurred across PM notes, tickets, and PR threads, creating late QA and unstable release windows.",
    sequence: [
      "Lock one release objective with explicit done criteria in plan mode.",
      "Execute UI, API, and tests in parallel agents under one lane.",
      "Pause at checkpoint gates for scoped review and correction.",
      "Ship with rollback-ready state tied to the same run history.",
    ],
    outcomes: [
      "Weekly release rhythm stabilized with fewer surprise slips.",
      "Scope changes no longer reset entire sprint commitments.",
      "Leadership review moved from status chasing to one visible execution lane.",
    ],
    voice:
      "We stopped managing delivery in fragments. Prodvo gave us one operating lane from scope to release.",
    voiceBy: "Engineering lead · B2B SaaS",
  },
  {
    id: "agency-pod",
    lane: "Release lane 02 · Agency pod",
    operator: "Delivery manager + shared engineers",
    context:
      "Agency team running multiple client implementations with overlapping launch dates.",
    friction:
      "Each client followed a different process, so context switching and inconsistent gates slowed quality.",
    sequence: [
      "Create isolated workspaces per client with reusable execution templates.",
      "Map each account to the same build-review-release checkpoint rhythm.",
      "Run readiness checks and approvals inside the lane, not external docs.",
      "Ship parallel client updates under one consistent quality model.",
    ],
    outcomes: [
      "Parallel client throughput increased without adding staff.",
      "Launch-week defect spikes dropped across accounts.",
      "Client communication shifted to shipped evidence and run logs.",
    ],
    voice:
      "Prodvo standardized execution without flattening client nuance. We scale delivery without process chaos.",
    voiceBy: "Delivery manager · Product agency",
  },
  {
    id: "regulated-team",
    lane: "Release lane 03 · Regulated flow",
    operator: "Engineering + compliance reviewers",
    context:
      "Regulated team shipping onboarding and payment flows under strict approval controls.",
    friction:
      "Evidence collection occurred at cycle end, causing rework and delayed release approvals.",
    sequence: [
      "Attach control evidence and test artifacts during implementation checkpoints.",
      "Review engineering output and compliance requirements in one execution lane.",
      "Track decision logs and approvals directly in run history.",
      "Deploy with release records already complete and audit-ready.",
    ],
    outcomes: [
      "Audit preparation became predictable for each cycle.",
      "Compliance stopped acting as a final-stage blocker.",
      "Executive approval speed improved with full release traceability.",
    ],
    voice:
      "Release sign-off is faster now because the evidence is captured as work happens, not after.",
    voiceBy: "Engineering manager · Fintech",
  },
];

const EXECUTION_TICKS = [
  { step: "01", title: "Scope lock", text: "Intent, constraints, and acceptance criteria are explicit before build starts." },
  { step: "02", title: "Parallel run", text: "Frontend, backend, and tests move together with shared visibility." },
  { step: "03", title: "Checkpoint review", text: "Risk, quality, and merge decisions are made at defined gates." },
  { step: "04", title: "Release control", text: "Deployment and rollback operate from one execution history." },
] as const;

const OPERATOR_SIGNALS = [
  "One release owner and one execution lane per shipment",
  "Clear checkpoint accountability across PM, engineering, and QA",
  "Fewer late-cycle surprises because blockers surface earlier",
  "Faster release approvals with auditable run context",
  "Safer iteration because rollback state is always available",
] as const;

const TEAM_MODES = [
  {
    title: "Founders shipping MVP → V1",
    whatRuns:
      "Plan mode for scope, parallel build for speed, checkpoint gate before production push.",
    fit: "Best when one small team owns full product delivery.",
  },
  {
    title: "Product squads shipping weekly",
    whatRuns:
      "Shared release lane with visible dependencies, controlled merges, and clear quality ownership.",
    fit: "Best when multiple roles touch every release.",
  },
  {
    title: "Agencies with client pods",
    whatRuns:
      "Reusable workflow templates across isolated workspaces with consistent release controls.",
    fit: "Best when throughput and quality must scale together.",
  },
  {
    title: "Regulated engineering orgs",
    whatRuns:
      "Evidence capture at checkpoints, compliance-ready logs, and release traceability by default.",
    fit: "Best when governance is part of every shipment.",
  },
] as const;

const OPERATOR_QA = [
  {
    q: "Can Prodvo fit existing Git + CI workflows?",
    a: "Yes. Prodvo runs as an execution layer with branch and checkpoint discipline while keeping your existing repository and CI gates.",
  },
  {
    q: "How do teams prevent agents from drifting scope?",
    a: "Runs are bounded by explicit intent, task scope, and checkpoint approvals. Sensitive areas can require manual confirmation before merge.",
  },
  {
    q: "What happens when release quality drops mid-run?",
    a: "Teams pause at checkpoint, request revisions, or roll back to a known-good state without rebuilding the full lane.",
  },
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeArc, setActiveArc] = useState<string>(DELIVERY_ARCS[0]?.id ?? "");

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

  const currentArc = DELIVERY_ARCS.find((item) => item.id === activeArc) ?? DELIVERY_ARCS[0];

  return (
    <SiteShell buildTag="prodvo-use-cases-v15">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                Delivery stories from teams
                <br />
                shipping real product work.
              </h1>
              <p className={styles["hero-sub"]}>
                Prodvo is an AI coding workspace for execution, not just generation.
                Teams use it to scope, build, review, and release in one controlled lane.
              </p>
            </div>
          </div>
        </section>

        <section className={styles["lane-marquee"]} aria-label="Use-case lanes">
          <div className={cx("marquee-track", "reveal", "d1")}>
            {[...DELIVERY_ARCS, ...DELIVERY_ARCS].map((item, index) => (
              <span key={`${item.id}-${index}`} className={styles["marquee-chip"]}>
                {item.lane}
              </span>
            ))}
          </div>
        </section>

        <section className={styles["arc-switcher"]}>
          <div className="container">
            <div className={cx("switcher-row", "reveal")}>
              {DELIVERY_ARCS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cx(
                    "switcher-btn",
                    activeArc === item.id ? "switcher-btn-active" : "",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                  onClick={() => setActiveArc(item.id)}
                  aria-pressed={activeArc === item.id}
                >
                  <span>{item.lane}</span>
                  <strong>{item.operator}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["arc-stage"]}>
          <div className="container">
            <div className={styles["arc-shell"]}>
              <aside className={cx("arc-brief", "reveal")}>
                <p className={styles["arc-label"]}>{currentArc.lane}</p>
                <h2>{currentArc.operator}</h2>
                <p className={styles["arc-context"]}>{currentArc.context}</p>
                <p className={styles["arc-friction"]}>{currentArc.friction}</p>
              </aside>

              <div className={cx("arc-sequence", "reveal", "d1")}>
                <h3>Workflow run inside Prodvo</h3>
                <ol>
                  {currentArc.sequence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <blockquote>
                  <p>&ldquo;{currentArc.voice}&rdquo;</p>
                  <cite>{currentArc.voiceBy}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["outcome-ribbon"]}>
          <div className="container">
            <div className={cx("ribbon-head", "reveal")}>
              <span className={styles["section-kicker"]}>Outcome ribbon</span>
              <h2 className={styles["section-title"]}>What shipped after this team moved execution into Prodvo</h2>
            </div>
            <div className={styles["ribbon-track"]}>
              {currentArc.outcomes.map((item, index) => (
                <article key={item} className={cx("ribbon-note", "reveal", index > 0 ? "d1" : "")}>
                  <span>{`0${index + 1}`}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["tick-board"]}>
          <div className="container">
            <div className={cx("tick-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution tick board</span>
              <h2 className={styles["section-title"]}>The rhythm teams repeat on every healthy release lane</h2>
            </div>
            <div className={styles["tick-grid"]}>
              {EXECUTION_TICKS.map((item, index) => (
                <article key={item.step} className={cx("tick-card", "reveal", index > 0 ? "d1" : "")}>
                  <div className={styles["tick-step"]}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["signal-strip"]}>
          <div className="container">
            <div className={cx("signal-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator signals</span>
              <h2 className={styles["section-title"]}>Common patterns seen in high-confidence delivery teams</h2>
            </div>
            <div className={styles["signal-row"]}>
              {OPERATOR_SIGNALS.map((item, index) => (
                <div key={item} className={cx("signal-item", "reveal", index > 0 ? "d1" : "")}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["team-modes"]}>
          <div className="container">
            <div className={cx("modes-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operating modes</span>
              <h2 className={styles["section-title"]}>How different team shapes run Prodvo in production</h2>
            </div>
            <div className={styles["modes-columns"]}>
              {TEAM_MODES.map((item, index) => (
                <article key={item.title} className={cx("mode-block", "reveal", index > 0 ? "d1" : "")}>
                  <h3>{item.title}</h3>
                  <p>{item.whatRuns}</p>
                  <strong>{item.fit}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["operator-qa"]}>
          <div className="container">
            <div className={cx("qa-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator Q&A</span>
              <h2 className={styles["section-title"]}>Questions teams ask before adopting Prodvo lanes</h2>
            </div>
            <div className={styles["qa-list"]}>
              {OPERATOR_QA.map((item, index) => (
                <details key={item.q} className={cx("qa-item", "reveal", index > 0 ? "d1" : "")} open={index === 0}>
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
              <h2>Start your next release lane in Prodvo.</h2>
              <p>
                Choose one high-friction workflow, run it end-to-end in Prodvo,
                and keep scope, implementation, review, and release in one system.
              </p>
              <div className={styles["cta-actions"]}>
                <Link className={styles["btn-primary"]} href="/pricing">
                  Start free trial
                </Link>
                <Link className={styles["btn-secondary"]} href="/workflow">
                  Explore workflow
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

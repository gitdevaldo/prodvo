"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type Scenario = {
  id: string;
  label: string;
  team: string;
  summary: string;
  bottleneck: string;
  workflow: readonly string[];
  shipped: readonly string[];
  quote: string;
  source: string;
};

const SCENARIOS: readonly Scenario[] = [
  {
    id: "startup-release",
    label: "01 / Startup release lane",
    team: "Product + engineering squad",
    summary:
      "A startup team shipping weekly growth releases in Next.js and TypeScript with constant scope pressure.",
    bottleneck:
      "Work was spread across tickets, chat, and PR threads, so release ownership was unclear and QA arrived too late.",
    workflow: [
      "Lock one release scope with explicit acceptance criteria in plan mode.",
      "Run UI, API, and test implementation in parallel agents with shared checkpoint status.",
      "Gate merges through checkpoint approvals before release branch is finalized.",
      "Deploy with rollback state captured from the same workspace.",
    ],
    shipped: [
      "Weekly release cadence stabilized without adding ceremony.",
      "Scope changes were absorbed without resetting the full sprint.",
      "Product and engineering reviewed one execution timeline instead of status threads.",
    ],
    quote:
      "Prodvo removed coordination drag. We finally run one delivery loop from scope to deploy.",
    source: "Engineering lead · B2B SaaS startup",
  },
  {
    id: "agency-multi-client",
    label: "02 / Agency multi-client pod",
    team: "Delivery management + shared engineers",
    summary:
      "An agency operating multiple client workstreams with one shared delivery team and parallel launch windows.",
    bottleneck:
      "Each client account had a different delivery process, so context switching slowed implementation quality.",
    workflow: [
      "Spin up isolated workspaces per client with reusable workflow templates.",
      "Map each client scope to the same checkpoint model for build, review, and handoff.",
      "Track QA readiness and approvals in a single run history per account.",
      "Ship client updates with consistent quality gates across all active lanes.",
    ],
    shipped: [
      "Parallel client throughput increased with the same headcount.",
      "Launch-week regressions dropped across active accounts.",
      "Client reporting shifted from activity updates to shipped evidence.",
    ],
    quote:
      "We stopped rebuilding process for every account. Prodvo gave us one execution system that scales.",
    source: "Delivery manager · Product agency",
  },
  {
    id: "regulated-release",
    label: "03 / Regulated release flow",
    team: "Engineering + compliance reviewers",
    summary:
      "A regulated team shipping onboarding and payment flows under recurring compliance and audit review.",
    bottleneck:
      "Evidence collection happened at the end of the cycle, creating rework and delayed approvals at release time.",
    workflow: [
      "Attach control evidence and test artifacts at each checkpoint during implementation.",
      "Review engineering and compliance status in one lane before merge approval.",
      "Retain decision logs and artifacts directly in run history for audit traceability.",
      "Deploy with release records already complete and export-ready.",
    ],
    shipped: [
      "Audit preparation became predictable per release cycle.",
      "Compliance stopped acting as a final-stage blocker.",
      "Leadership approved launches with complete traceability in one workspace.",
    ],
    quote:
      "Release sign-off is faster because evidence is already captured as we build.",
    source: "Engineering manager · Fintech platform",
  },
];

const EXECUTION_SIGNALS = [
  "Scope, owner, and acceptance criteria are visible from day one",
  "Parallel workstreams progress without hidden handoff blockers",
  "Checkpoint reviews catch risks before release-day crunch",
  "Run history preserves implementation and approval context",
  "Rollback decisions are controlled, fast, and low-friction",
] as const;

const TEAM_FIT = [
  "Your team ships customer-facing changes every sprint",
  "Multiple roles must align on one release outcome",
  "Quality gates need explicit owners and stage visibility",
  "Release approvals require evidence, not status summaries",
] as const;

const PLAYBOOK = [
  {
    step: "01",
    title: "Define release intent",
    detail:
      "Scope one production slice with constraints, owner, and done criteria before implementation starts.",
  },
  {
    step: "02",
    title: "Run parallel execution",
    detail:
      "Launch UI, backend, and QA streams together so bottlenecks surface early.",
  },
  {
    step: "03",
    title: "Approve by checkpoints",
    detail:
      "Review diffs, tests, and risk signals at defined gates before merge and deployment.",
  },
  {
    step: "04",
    title: "Ship with traceability",
    detail:
      "Deploy with full run history, decision logs, and rollback confidence in the same lane.",
  },
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0]?.id ?? "");

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

  const activeScenario =
    SCENARIOS.find((item) => item.id === activeScenarioId) ?? SCENARIOS[0];

  return (
    <SiteShell buildTag="prodvo-use-cases-v14">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                Real delivery teams.
                <br />
                Real execution in Prodvo.
              </h1>
              <p className={styles["hero-sub"]}>
                Prodvo is an AI coding workspace that keeps planning, implementation,
                checkpoints, and release in one operating flow. These scenarios reflect
                how teams actually ship production work with it.
              </p>
            </div>
          </div>
        </section>

        <section className={styles["scenario-selector"]}>
          <div className="container">
            <div className={cx("selector-track", "reveal", "d1")}>
              {SCENARIOS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cx(
                    "selector-item",
                    activeScenarioId === item.id ? "selector-item-active" : "",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                  onClick={() => setActiveScenarioId(item.id)}
                  aria-pressed={activeScenarioId === item.id}
                >
                  <span>{item.label}</span>
                  <strong>{item.team}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["scenario-stage"]}>
          <div className="container">
            <div className={styles["stage-grid"]}>
              <article className={cx("stage-brief", "reveal")}>
                <p className={styles["stage-label"]}>{activeScenario.label}</p>
                <h2 className={styles["stage-team"]}>{activeScenario.team}</h2>
                <p className={styles["stage-summary"]}>{activeScenario.summary}</p>
                <p className={styles["stage-bottleneck"]}>{activeScenario.bottleneck}</p>
              </article>

              <article className={cx("stage-runbook", "reveal", "d1")}>
                <h3>Workflow in Prodvo</h3>
                <ol className={styles["runbook-list"]}>
                  {activeScenario.workflow.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <blockquote className={styles["stage-quote"]}>
                  <p>&ldquo;{activeScenario.quote}&rdquo;</p>
                  <cite>{activeScenario.source}</cite>
                </blockquote>
              </article>
            </div>
          </div>
        </section>

        <section className={styles["delivery-ledger"]}>
          <div className="container">
            <div className={cx("ledger-head", "reveal")}>
              <span className={styles["section-kicker"]}>Shipped outcomes</span>
              <h2 className={styles["section-title"]}>What this team shipped after switching the lane to Prodvo</h2>
            </div>
            <div className={styles["ledger-list"]}>
              {activeScenario.shipped.map((item, index) => (
                <div key={item} className={cx("ledger-row", "reveal", index > 0 ? "d1" : "")}>
                  <span>{`0${index + 1}`}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["signal-band"]}>
          <div className="container">
            <div className={cx("signal-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution signals</span>
              <h2 className={styles["section-title"]}>Patterns we repeatedly see in successful Prodvo workflows</h2>
            </div>
            <div className={styles["signal-strip"]}>
              {EXECUTION_SIGNALS.map((item, index) => (
                <article key={item} className={cx("signal-pill", "reveal", index > 0 ? "d1" : "")}>
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["playbook-steps"]}>
          <div className="container">
            <div className={cx("playbook-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution playbook</span>
              <h2 className={styles["section-title"]}>How teams run release flow in Prodvo</h2>
            </div>
            <ol className={styles["playbook-grid"]}>
              {PLAYBOOK.map((item, index) => (
                <li key={item.step} className={cx("playbook-step", "reveal", index > 0 ? "d1" : "")}>
                  <span className={styles["playbook-index"]}>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles["fit-profile"]}>
          <div className="container">
            <div className={styles["fit-shell"]}>
              <div className={cx("fit-head", "reveal")}>
                <span className={styles["section-kicker"]}>Team profile</span>
                <h2 className={styles["section-title"]}>Who gets the biggest delivery gains</h2>
                <p className={styles["fit-copy"]}>
                  Prodvo is strongest for teams that need one execution system across
                  planning, coding, review, and release governance.
                </p>
              </div>
              <div className={cx("fit-matrix", "reveal", "d1")}>
                {TEAM_FIT.map((item) => (
                  <div key={item} className={styles["fit-row"]}>
                    <p>{item}</p>
                    <span>High fit</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Run one production workflow in Prodvo this sprint.</h2>
              <p>
                Start with a release lane that is currently high-friction, execute it
                end-to-end in Prodvo, and keep every checkpoint in one workspace.
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

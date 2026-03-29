"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type Scenario = {
  id: string;
  label: string;
  title: string;
  pressure: string;
  steps: readonly string[];
  wins: readonly string[];
  quote: string;
  byline: string;
};

const SCENARIOS: readonly Scenario[] = [
  {
    id: "startup",
    label: "Lane 01",
    title: "Startup weekly release lane",
    pressure:
      "The team had clear product intent but release ownership was scattered across docs, tickets, and PR notes.",
    steps: [
      "Scope one release in plan mode with strict done criteria.",
      "Run UI, API, and QA in parallel agents under one execution lane.",
      "Pause at checkpoints for merge and quality approval.",
      "Deploy with rollback tied to run history.",
    ],
    wins: [
      "Release rhythm became predictable.",
      "Priority changes stopped derailing sprints.",
      "Status meetings dropped as lane visibility improved.",
    ],
    quote:
      "Prodvo gave us one place to run the release instead of coordinating across five channels.",
    byline: "Engineering lead · SaaS startup",
  },
  {
    id: "agency",
    label: "Lane 02",
    title: "Agency multi-client lane",
    pressure:
      "Different client processes caused constant context switching and inconsistent launch quality.",
    steps: [
      "Create isolated client lanes with reusable workflow templates.",
      "Apply one checkpoint model for build, review, and release.",
      "Track approvals and QA state inside each lane.",
      "Ship parallel client updates with consistent quality gates.",
    ],
    wins: [
      "Throughput increased without headcount growth.",
      "Launch-week defects declined across accounts.",
      "Client reporting shifted to shipped evidence.",
    ],
    quote:
      "We stopped reinventing process per client. Prodvo gave us repeatable execution.",
    byline: "Delivery manager · Product agency",
  },
  {
    id: "regulated",
    label: "Lane 03",
    title: "Regulated release lane",
    pressure:
      "Audit evidence was gathered too late, creating rework and approval delays near go-live windows.",
    steps: [
      "Capture control artifacts during implementation checkpoints.",
      "Review engineering and compliance state in one lane.",
      "Keep approval logs and decisions with run history.",
      "Deploy once release records are complete and traceable.",
    ],
    wins: [
      "Audit prep became predictable per cycle.",
      "Compliance stopped blocking final release stage.",
      "Approval confidence increased with full traceability.",
    ],
    quote:
      "Evidence now arrives with the work, so release approvals move faster and cleaner.",
    byline: "Engineering manager · Fintech",
  },
];

const RHYTHM = [
  "Intent lock",
  "Parallel build",
  "Checkpoint review",
  "Release + rollback",
] as const;

const SIGNALS = [
  "Single owner per release lane",
  "Checkpoint accountability across roles",
  "Early blocker discovery",
  "Approval context preserved in run history",
  "Rollback always available",
] as const;

const FIT = [
  "Founder-led teams shipping V1 rapidly",
  "Product squads shipping weekly customer releases",
  "Agencies managing multiple client lanes",
  "Regulated orgs requiring audit-ready releases",
] as const;

const FAQ = [
  {
    q: "Can Prodvo fit our existing Git + CI?",
    a: "Yes. Prodvo runs as an execution layer on top of your existing branch and CI workflow.",
  },
  {
    q: "How do we keep runs inside scope?",
    a: "Scope is locked in plan mode and reinforced through checkpoint approvals before critical merges.",
  },
  {
    q: "What happens when quality drops mid-run?",
    a: "Teams pause at checkpoint, request revision, or roll back instantly to a known-good state.",
  },
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0]?.id ?? "");

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

  const active = SCENARIOS.find((s) => s.id === activeId) ?? SCENARIOS[0];

  return (
    <SiteShell buildTag="prodvo-use-cases-v17">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                Production delivery lanes
                <br />
                teams run in Prodvo.
              </h1>
              <p className={styles["hero-sub"]}>
                Prodvo is an AI coding workspace for real shipping operations:
                scoped intent, parallel implementation, checkpoint review, and controlled release.
              </p>
            </div>
          </div>
        </section>

        <section className={styles["lane-band"]}>
          <div className={styles["lane-scroll"]}>
            {[...SCENARIOS, ...SCENARIOS].map((item, idx) => (
              <span key={`${item.id}-${idx}`}>{item.title}</span>
            ))}
          </div>
        </section>

        <section className={styles["lane-pins"]}>
          <div className="container">
            <div className={cx("pin-strip", "reveal")}>
              {SCENARIOS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cx(
                    "pin-btn",
                    activeId === item.id ? "pin-btn-active" : "",
                    idx === 1 ? "d1" : idx === 2 ? "d2" : "",
                  )}
                  aria-pressed={activeId === item.id}
                >
                  <strong>{item.label}</strong>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["pressure"]}>
          <div className="container">
            <div className={cx("pressure-rail", "reveal")}>
              <h2>{active.title}</h2>
              <p>{active.pressure}</p>
            </div>
          </div>
        </section>

        <section className={styles["workflow-board"]}>
          <div className="container">
            <div className={cx("board-shell", "reveal", "d1")}>
              <h3>Workflow in Prodvo</h3>
              <div className={styles["step-columns"]}>
                {active.steps.map((step, index) => (
                  <article key={step} className={styles["step-line"]}>
                    <span>{`0${index + 1}`}</span>
                    <p>{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles["quote-run"]}>
          <div className="container">
            <blockquote className={cx("quote-shell", "reveal")}>
              <p>&ldquo;{active.quote}&rdquo;</p>
              <cite>{active.byline}</cite>
            </blockquote>
          </div>
        </section>

        <section className={styles["wins"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Shipped outcomes</span>
              <h2 className={styles["section-title"]}>What changed in this lane</h2>
            </div>
            <ol className={styles["wins-track"]}>
              {active.wins.map((item, idx) => (
                <li key={item} className={cx("win-item", "reveal", idx > 0 ? "d1" : "")}>
                  <span>{`0${idx + 1}`}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles["rhythm"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution rhythm</span>
              <h2 className={styles["section-title"]}>The repeatable cadence teams keep</h2>
            </div>
            <div className={styles["rhythm-run"]}>
              {RHYTHM.map((item, idx) => (
                <div key={item} className={cx("rhythm-node", "reveal", idx > 0 ? "d1" : "")}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["signals"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator signals</span>
              <h2 className={styles["section-title"]}>Signs of healthy release operations</h2>
            </div>
            <div className={styles["signal-cloud"]}>
              {SIGNALS.map((item, idx) => (
                <span key={item} className={cx("signal-pill", "reveal", idx > 0 ? "d1" : "")}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["fit"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Team fit</span>
              <h2 className={styles["section-title"]}>Who gets immediate value</h2>
            </div>
            <div className={styles["fit-lines"]}>
              {FIT.map((item, idx) => (
                <p key={item} className={cx("fit-line", "reveal", idx > 0 ? "d1" : "")}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["qa"]}>
          <div className="container">
            <div className={cx("section-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operator Q&A</span>
              <h2 className={styles["section-title"]}>Before teams adopt Prodvo lanes</h2>
            </div>
            <div className={styles["qa-stack"]}>
              {FAQ.map((item, idx) => (
                <details key={item.q} className={cx("qa-item", "reveal", idx > 0 ? "d1" : "")} open={idx === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-shell", "reveal")}>
              <h2>Run your next release lane in Prodvo.</h2>
              <p>
                Start with your highest-friction workflow and execute it in one controlled lane.
              </p>
              <div className={styles["cta-actions"]}>
                <Link href="/pricing" className={styles["btn-primary"]}>
                  Start free trial
                </Link>
                <Link href="/workflow" className={styles["btn-secondary"]}>
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

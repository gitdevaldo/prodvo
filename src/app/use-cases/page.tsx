"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type UseCase = {
  id: string;
  team: string;
  domain: string;
  stage: string;
  trigger: string;
  interventions: readonly string[];
  outcomes: readonly string[];
  proof: string;
};

const CASES: readonly UseCase[] = [
  {
    id: "startup-release",
    team: "Series A product team",
    domain: "SaaS platform",
    stage: "Pre-PMF release pressure",
    trigger: "Features were blocked by frontend/backend/QA handoffs.",
    interventions: [
      "Converted roadmap intents into scoped implementation lanes.",
      "Parallelized frontend, backend, and test work under one checkpoint model.",
      "Used mandatory reviews before merge to prevent late regressions.",
    ],
    outcomes: [
      "Release cycle moved from 6 weeks to 10 days.",
      "Cross-team blockers surfaced during planning, not sprint review.",
      "Team shipped weekly with stable defect rates.",
    ],
    proof: "Delivery velocity recovered without adding headcount.",
  },
  {
    id: "agency-accounts",
    team: "Agency with 12 client accounts",
    domain: "Services delivery",
    stage: "Multi-stream execution",
    trigger: "Quality varied by PM style and client urgency.",
    interventions: [
      "Standardized delivery checkpoints across all client streams.",
      "Mapped each account backlog to one repeatable operating model.",
      "Added quality gates per account before client-facing releases.",
    ],
    outcomes: [
      "3x more concurrent projects managed by same core team.",
      "Fewer launch-week bugs and escalations across accounts.",
      "Client reporting shifted from status updates to proof artifacts.",
    ],
    proof: "Consistent quality across accounts became operational, not individual.",
  },
  {
    id: "fintech-compliance",
    team: "Regulated fintech squad",
    domain: "Financial workflows",
    stage: "SOC2 and audit cycles",
    trigger: "Audit evidence was assembled manually near release deadlines.",
    interventions: [
      "Embedded evidence capture directly into delivery checkpoints.",
      "Connected change logs to release artifacts by default.",
      "Made compliance review part of the normal merge flow.",
    ],
    outcomes: [
      "Audit prep dropped from 2 weeks to 1 day.",
      "Compliance requests answered from live artifacts, not spreadsheets.",
      "Release confidence increased during regulated launches.",
    ],
    proof: "Compliance shifted from afterthought to in-flow execution.",
  },
  {
    id: "scale-engineering",
    team: "50-person engineering org",
    domain: "Platform engineering",
    stage: "Cross-team scaling",
    trigger: "Dependency breaks were detected late across squads.",
    interventions: [
      "Introduced dependency maps at planning instead of post-implementation.",
      "Ran multi-team checkpoint reviews before sprint handoff.",
      "Used one escalation path for blockers across squads.",
    ],
    outcomes: [
      "Cross-team delay incidents reduced by 60%.",
      "Planning meetings focused on sequencing, not firefighting.",
      "Teams regained predictable release windows.",
    ],
    proof: "Scale coordination became a system, not tribal knowledge.",
  },
];

const DRILL_SEQUENCE: readonly string[] = [
  "Intake and scoping",
  "Parallel execution lanes",
  "Checkpoint review",
  "Release and evidence",
];

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASES[0]?.id ?? "");

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
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeCase = useMemo(
    () => CASES.find((item) => item.id === activeCaseId) ?? CASES[0],
    [activeCaseId],
  );

  return (
    <SiteShell buildTag="prodvo-use-cases-v8">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-grid", "reveal")}>
              <div className={styles["hero-copy"]}>
                <span className={styles["hero-kicker"]}>Use Cases</span>
                <h1 className={styles["hero-title"]}>
                  Real operating scenarios.
                  <br />
                  Not template examples.
                </h1>
                <p className={styles["hero-sub"]}>
                  Each case shows what changed in execution rhythm when teams moved from
                  fragmented handoffs to one coordinated delivery system.
                </p>
              </div>

              <div className={styles["hero-panel"]}>
                <div className={styles["panel-label"]}>Common trigger</div>
                <p>
                  Teams did not lack engineering talent. They lacked a shared mechanism
                  to coordinate scope, quality, and release proof at speed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.selector}>
          <div className="container">
            <div className={cx("selector-wrap", "reveal", "d1")}>
              <div className={styles["selector-head"]}>
                <span className={styles["section-kicker"]}>Case selector</span>
                <h2 className={styles["section-title"]}>
                  Pick a scenario and inspect the operating shift
                </h2>
              </div>
              <div className={styles["selector-pills"]}>
                {CASES.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={cx(
                      "pill",
                      activeCaseId === item.id ? "pill-active" : "",
                      index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : "",
                    )}
                    onClick={() => setActiveCaseId(item.id)}
                    aria-pressed={activeCaseId === item.id}
                  >
                    <span>{item.team}</span>
                    <small>{item.domain}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.snapshot}>
          <div className="container">
            <div className={styles["snapshot-grid"]}>
              <article className={cx("snapshot-card", "reveal")}>
                <div className={styles["snapshot-head"]}>
                  <span className={styles["snapshot-tag"]}>{activeCase.domain}</span>
                  <h3>{activeCase.team}</h3>
                  <p>{activeCase.stage}</p>
                </div>
                <div className={styles["snapshot-trigger"]}>
                  <strong>Trigger</strong>
                  <p>{activeCase.trigger}</p>
                </div>
              </article>

              <article className={cx("snapshot-card", "reveal", "d1")}>
                <div className={styles["snapshot-head"]}>
                  <span className={styles["snapshot-tag"]}>Interventions</span>
                  <h3>What changed operationally</h3>
                </div>
                <ol className={styles["list-numbered"]}>
                  {activeCase.interventions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>

              <article className={cx("snapshot-card", "reveal", "d2")}>
                <div className={styles["snapshot-head"]}>
                  <span className={styles["snapshot-tag"]}>Outcomes</span>
                  <h3>Observed results</h3>
                </div>
                <ul className={styles["list-bullets"]}>
                  {activeCase.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={styles["proof-note"]}>{activeCase.proof}</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.drill}>
          <div className="container">
            <div className={cx("drill-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution drill</span>
              <h2 className={styles["section-title"]}>The sequence teams run every sprint</h2>
            </div>
            <div className={styles["drill-grid"]}>
              {DRILL_SEQUENCE.map((step, index) => (
                <div
                  key={step}
                  className={cx(
                    "drill-step",
                    "reveal",
                    index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : "",
                  )}
                >
                  <span className={styles["drill-index"]}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.matrix}>
          <div className="container">
            <div className={styles["matrix-wrap"]}>
              <div className={cx("matrix-copy", "reveal")}>
                <span className={styles["section-kicker"]}>Fit matrix</span>
                <h2 className={styles["section-title"]}>When Prodvo is a strong fit</h2>
                <p>
                  You benefit most when shipping depends on cross-team coordination,
                  repeatable checkpoints, and release evidence that can be reviewed fast.
                </p>
              </div>

              <div className={cx("matrix-table", "reveal", "d1")}>
                <div className={styles["matrix-row"]}>
                  <span>Multiple teams touch one release</span>
                  <strong>High fit</strong>
                </div>
                <div className={styles["matrix-row"]}>
                  <span>Frequent compliance or audit checks</span>
                  <strong>High fit</strong>
                </div>
                <div className={styles["matrix-row"]}>
                  <span>Delivery blocked by handoffs, not coding speed</span>
                  <strong>High fit</strong>
                </div>
                <div className={styles["matrix-row"]}>
                  <span>Need one repeatable operating model across squads</span>
                  <strong>High fit</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Run one workflow and compare your before/after cycle.</h2>
              <p>Start with your highest-friction lane and validate impact in one sprint.</p>
              <div className={styles["cta-actions"]}>
                <Link className={styles["btn-primary"]} href="/pricing">
                  Start free trial
                </Link>
                <Link className={styles["btn-secondary"]} href="/workflow">
                  See workflow model
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

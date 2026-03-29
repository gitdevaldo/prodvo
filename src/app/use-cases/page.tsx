"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type UseCaseItem = {
  id: string;
  team: string;
  stage: string;
  tension: string;
  before: string;
  after: string;
  win: string;
  proof: string;
  signal: "velocity" | "handoff" | "quality" | "audit";
};

const CASES: readonly UseCaseItem[] = [
  {
    id: "startup-release",
    team: "Series A product team",
    stage: "Pre-PMF push",
    tension: "Features were blocked by handoffs across frontend, backend, and QA.",
    before: "Two-week intent, six-week delivery.",
    after: "One owner defined intent, parallel agents shipped scoped slices daily.",
    win: "Release cycle dropped from 6 weeks to 10 days.",
    proof: "Velocity",
    signal: "velocity",
  },
  {
    id: "agency-accounts",
    team: "Agency with 12 client accounts",
    stage: "Multi-stream delivery",
    tension: "Delivery quality varied by PM style and project pressure.",
    before: "Different process every client, surprise bugs near launch.",
    after: "Same checkpoints, same quality gates, custom implementation per account.",
    win: "3x more concurrent projects without adding headcount.",
    proof: "Handoff",
    signal: "handoff",
  },
  {
    id: "fintech-compliance",
    team: "Regulated fintech squad",
    stage: "SOC2 + audit pressure",
    tension: "Compliance work happened after coding and delayed releases.",
    before: "Audit evidence was assembled manually before every release.",
    after: "Evidence captured at each checkpoint automatically.",
    win: "Audit preparation dropped from 2 weeks to 1 day.",
    proof: "Audit",
    signal: "audit",
  },
  {
    id: "scale-engineering",
    team: "50-person engineering org",
    stage: "Cross-team scaling",
    tension: "Dependencies broke silently between teams.",
    before: "Blocked work discovered late in sprint reviews.",
    after: "Dependency edges visible at planning, blockers surfaced in flow.",
    win: "Cross-team delay incidents reduced by 60%.",
    proof: "Quality",
    signal: "quality",
  },
];

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeId, setActiveId] = useState<string>(CASES[0]?.id ?? "");

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
    () => CASES.find((item) => item.id === activeId) ?? CASES[0],
    [activeId],
  );

  return (
    <SiteShell buildTag="prodvo-use-cases-v7">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-wrap", "reveal")}>
              <span className={styles["hero-kicker"]}>Use Cases</span>
              <h1 className={styles["hero-title"]}>
                Different teams.
                <br />
                One production rhythm.
              </h1>
              <p className={styles["hero-sub"]}>
                This is not a feature catalog. It&apos;s a field manual of how teams use
                Prodvo when delivery speed, handoff quality, and proof of work actually matter.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.dispatch}>
          <div className="container">
            <div className={styles["dispatch-grid"]}>
              <aside className={cx("dispatch-rail", "reveal")}>
                <div className={styles["rail-label"]}>Case dispatch</div>
                <div className={styles["rail-list"]}>
                  {CASES.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={cx(
                        "rail-item",
                        activeId === item.id ? "rail-item-active" : "",
                        index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : "",
                      )}
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={activeId === item.id}
                    >
                      <span className={styles["rail-dot"]} aria-hidden />
                      <span className={styles["rail-team"]}>{item.team}</span>
                      <span className={styles["rail-stage"]}>{item.stage}</span>
                    </button>
                  ))}
                </div>
              </aside>

              <article className={cx("dispatch-sheet", "reveal", "d1")}>
                <div className={styles["sheet-head"]}>
                  <span className={styles["sheet-tag"]}>{activeCase.proof}</span>
                  <h2 className={styles["sheet-title"]}>{activeCase.team}</h2>
                  <p className={styles["sheet-stage"]}>{activeCase.stage}</p>
                </div>

                <div className={styles["sheet-flow"]}>
                  <div className={styles["flow-col"]}>
                    <h3>The tension</h3>
                    <p>{activeCase.tension}</p>
                  </div>
                  <div className={styles["flow-col"]}>
                    <h3>Before</h3>
                    <p>{activeCase.before}</p>
                  </div>
                  <div className={styles["flow-col"]}>
                    <h3>After</h3>
                    <p>{activeCase.after}</p>
                  </div>
                </div>

                <div className={styles["sheet-win"]}>
                  <strong>Outcome</strong>
                  <p>{activeCase.win}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles["proof-loop"]}>
          <div className="container">
            <div className={cx("loop-head", "reveal")}>
              <span className={styles["section-kicker"]}>Operating pattern</span>
              <h2 className={styles["section-title"]}>How successful teams run Prodvo</h2>
            </div>

            <div className={styles["loop-track"]}>
              <div className={cx("loop-step", "reveal", "d1")}>
                <span>01</span>
                <h3>Define a sharp intent</h3>
                <p>Scope one workflow with clear output and constraints.</p>
              </div>
              <div className={cx("loop-connector", "reveal", "d1")} aria-hidden />
              <div className={cx("loop-step", "reveal", "d2")}>
                <span>02</span>
                <h3>Run in parallel lanes</h3>
                <p>Frontend, backend, and tests move simultaneously.</p>
              </div>
              <div className={cx("loop-connector", "reveal", "d2")} aria-hidden />
              <div className={cx("loop-step", "reveal", "d3")}>
                <span>03</span>
                <h3>Review at checkpoints</h3>
                <p>Quality, security, and compliance are validated in-flow.</p>
              </div>
              <div className={cx("loop-connector", "reveal", "d3")} aria-hidden />
              <div className={cx("loop-step", "reveal", "d4")}>
                <span>04</span>
                <h3>Scale what proves out</h3>
                <p>Expand only what repeatedly produces reliable outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["fit-map"]}>
          <div className="container">
            <div className={styles["fit-grid"]}>
              <div className={cx("fit-left", "reveal")}>
                <span className={styles["section-kicker"]}>Fit check</span>
                <h2 className={styles["section-title"]}>You&apos;ll likely win with Prodvo if...</h2>
              </div>
              <ul className={cx("fit-list", "reveal", "d1")}>
                <li>work moves through multiple teams before shipping</li>
                <li>release confidence depends on repeatable gates</li>
                <li>audit/compliance asks for traceable change history</li>
                <li>delivery speed is blocked by coordination, not coding</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Run one workflow. Measure the delta.</h2>
              <p>Don&apos;t migrate everything. Start with your highest-friction delivery lane.</p>
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

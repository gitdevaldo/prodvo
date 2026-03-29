"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type StoryCase = {
  id: string;
  chapter: string;
  team: string;
  context: string;
  conflict: string;
  plan: readonly string[];
  result: string;
};

const CASES: readonly StoryCase[] = [
  {
    id: "founder",
    chapter: "Chapter 01",
    team: "Founder + product lead",
    context: "SaaS team preparing weekly releases",
    conflict: "Work got stuck between handoffs even when scope was clear.",
    plan: [
      "Define one release intent with explicit acceptance criteria.",
      "Run implementation lanes in parallel, not sequentially.",
      "Review quality at checkpoint gates before merge.",
    ],
    result: "Cycle moved from multi-week pushes to weekly controlled releases.",
  },
  {
    id: "agency",
    chapter: "Chapter 02",
    team: "Agency delivery manager",
    context: "12 active client streams",
    conflict: "Every account used a different process and quality drifted.",
    plan: [
      "Standardize one operating model across all accounts.",
      "Use shared checkpoints for readiness and risk review.",
      "Ship from consistent quality gates before client release.",
    ],
    result: "Concurrent delivery increased while launch-week defects dropped.",
  },
  {
    id: "fintech",
    chapter: "Chapter 03",
    team: "Compliance-heavy fintech squad",
    context: "Audit-sensitive release cadence",
    conflict: "Evidence collection happened late and blocked shipping.",
    plan: [
      "Capture review evidence as part of normal execution flow.",
      "Attach checkpoint artifacts directly to release records.",
      "Keep compliance review in the same lane as engineering review.",
    ],
    result: "Audit preparation compressed from weeks into days without release drag.",
  },
];

const PRINCIPLES = [
  "Character clarity: identify who owns the outcome.",
  "Conflict framing: state operational friction before solution.",
  "Guided plan: make execution steps explicit and repeatable.",
  "Proof-first ending: close every case with observable change.",
] as const;

const JOURNEY = [
  {
    step: "01",
    title: "Narrative intake",
    detail: "Map team, stage, and operational tension before proposing solution.",
  },
  {
    step: "02",
    title: "Plan sequencing",
    detail: "Turn intent into a concrete, checkpoint-based operating sequence.",
  },
  {
    step: "03",
    title: "Execution loop",
    detail: "Run parallel delivery lanes with visible accountability.",
  },
  {
    step: "04",
    title: "Proof capture",
    detail: "Measure cycle, quality, and coordination outcomes after rollout.",
  },
] as const;

const FIT_SIGNALS = [
  "Cross-team handoffs determine release speed",
  "Quality needs repeatable checkpoints",
  "Compliance evidence is mandatory",
  "Leadership needs visible delivery proof",
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
  const [activeCaseId, setActiveCaseId] = useState(CASES[0]?.id ?? "");
  const reelRef = useRef<HTMLDivElement | null>(null);

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

  const activeCase = CASES.find((item) => item.id === activeCaseId) ?? CASES[0];

  const scrollReel = (direction: "left" | "right") => {
    const reel = reelRef.current;
    if (!reel) return;
    reel.scrollBy({ left: direction === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <SiteShell buildTag="prodvo-use-cases-v10">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                A richer delivery narrative.
                <br />
                Not a repeated section template.
              </h1>
              <p className={styles["hero-sub"]}>
                This route is structured as a storyboard system: who the team is, what
                blocks them, what operating plan they run, and what measurable change
                happens after execution.
              </p>
            </div>
          </div>
        </section>

        <section className={styles["timeline-rail"]}>
          <div className="container">
            <div className={cx("rail-line", "reveal")}>
              {CASES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cx(
                    "rail-node",
                    activeCaseId === item.id ? "rail-node-active" : "",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                  onClick={() => setActiveCaseId(item.id)}
                  aria-pressed={activeCaseId === item.id}
                >
                  <span>{item.chapter}</span>
                  <strong>{item.team}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["narrative-split"]}>
          <div className="container">
            <div className={styles["split-wrap"]}>
              <article className={cx("left-story", "reveal")}>
                <p className={styles["story-label"]}>{activeCase.context}</p>
                <h2>{activeCase.team}</h2>
                <p className={styles["story-conflict"]}>{activeCase.conflict}</p>
                <p className={styles["story-result"]}>{activeCase.result}</p>
              </article>

              <aside className={cx("right-plan", "reveal", "d1")}>
                <p className={styles["plan-head"]}>Guided plan</p>
                <ol>
                  {activeCase.plan.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles["horizontal-reel"]}>
          <div className="container">
            <div className={cx("reel-head", "reveal")}>
              <span className={styles["section-kicker"]}>Storyboard reel</span>
              <h2 className={styles["section-title"]}>Swipe through outcome snapshots</h2>
              <div className={styles["reel-controls"]}>
                <button type="button" onClick={() => scrollReel("left")} aria-label="Scroll left">
                  ←
                </button>
                <button type="button" onClick={() => scrollReel("right")} aria-label="Scroll right">
                  →
                </button>
              </div>
            </div>

            <div ref={reelRef} className={styles["reel-track"]}>
              {CASES.map((item, index) => (
                <article
                  key={item.id}
                  className={cx("reel-card", "reveal", index === 1 ? "d1" : index === 2 ? "d2" : "")}
                >
                  <span>{item.chapter}</span>
                  <h3>{item.team}</h3>
                  <p>{item.result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["principles-accordion"]}>
          <div className="container">
            <div className={cx("accordion-head", "reveal")}>
              <span className={styles["section-kicker"]}>Copy framework</span>
              <h2 className={styles["section-title"]}>StoryBrand principles behind each use case</h2>
            </div>
            <div className={styles["accordion-list"]}>
              {PRINCIPLES.map((item, index) => (
                <details
                  key={item}
                  className={cx("accordion-item", "reveal", index > 0 ? "d1" : "")}
                  open={index === 0}
                >
                  <summary>{item.split(":")[0]}</summary>
                  <p>{item.split(":")[1]?.trim()}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["journey-diagram"]}>
          <div className="container">
            <div className={cx("diagram-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution map</span>
              <h2 className={styles["section-title"]}>How teams move from chaos to cadence</h2>
            </div>
            <div className={styles["diagram-line"]}>
              {JOURNEY.map((item, index) => (
                <div
                  key={item.step}
                  className={cx("diagram-point", "reveal", index > 0 ? "d1" : "")}
                >
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["fit-matrix"]}>
          <div className="container">
            <div className={styles["matrix-shell"]}>
              <div className={cx("matrix-copy", "reveal")}>
                <span className={styles["section-kicker"]}>Fit matrix</span>
                <h2 className={styles["section-title"]}>Signals that this model fits your team</h2>
              </div>
              <div className={cx("matrix-rows", "reveal", "d1")}>
                {FIT_SIGNALS.map((signal) => (
                  <div key={signal} className={styles["matrix-row"]}>
                    <span>{signal}</span>
                    <strong>High fit</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Pick one story lane and run it for one sprint.</h2>
              <p>Measure your cycle, quality, and handoff clarity before scaling further.</p>
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

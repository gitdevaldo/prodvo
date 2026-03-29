"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type StoryCase = {
  id: string;
  chapter: string;
  hero: string;
  context: string;
  stakes: string;
  conflict: string;
  guide: string;
  plan: readonly string[];
  results: readonly string[];
  quote: string;
  quoteBy: string;
};

const CASES: readonly StoryCase[] = [
  {
    id: "founder",
    chapter: "Chapter 01",
    hero: "Founder-operator",
    context: "Early-stage SaaS team trying to hold weekly launch rhythm",
    stakes:
      "When shipping confidence drops, growth experiments freeze and roadmap credibility erodes inside the company.",
    conflict:
      "The work was clear, but progress died in handoffs. Engineering kept re-planning the same sprint every week.",
    guide:
      "Prodvo became the execution guide: one visible loop, one ownership model, one checkpoint rhythm.",
    plan: [
      "Lock one release promise with explicit done criteria.",
      "Run frontend, backend, and QA in parallel lanes from day one.",
      "Ship only through checkpoint gates, never by deadline panic.",
    ],
    results: [
      "Release cadence shifted from sporadic to weekly.",
      "Priority changes no longer destroyed delivery confidence.",
      "Leadership got operational visibility without extra reporting rituals.",
    ],
    quote:
      "We stopped spending sprint time on coordination theater. The team now runs one loop and ships on purpose.",
    quoteBy: "Founder, Vertical SaaS startup",
  },
  {
    id: "agency",
    chapter: "Chapter 02",
    hero: "Agency delivery lead",
    context: "Multi-client studio running 10+ active product streams",
    stakes:
      "Inconsistent delivery turns into client escalations, lower margins, and a team constantly in reactive mode.",
    conflict:
      "Every account had its own process. The team kept rebuilding operating rules instead of shipping outcomes.",
    guide:
      "Prodvo standardized execution without flattening client nuance, so teams could move fast and stay reliable.",
    plan: [
      "Apply one checkpoint framework to every delivery lane.",
      "Map each client backlog to the same operating milestones.",
      "Run release-readiness review before every client handoff.",
    ],
    results: [
      "More projects shipped with the same core team.",
      "Launch-week regressions dropped across accounts.",
      "Client updates moved from activity logs to outcome proof.",
    ],
    quote:
      "We stopped running 12 different playbooks. Now we run one system and adapt scope, not process.",
    quoteBy: "Delivery lead, product agency",
  },
  {
    id: "fintech",
    chapter: "Chapter 03",
    hero: "Regulated fintech squad",
    context: "Compliance-heavy release cycle with strict audit windows",
    stakes:
      "If evidence arrives late, launches slip, risk climbs, and engineering time gets consumed by audit firefighting.",
    conflict:
      "Evidence was collected at the end, under pressure, which made every release review slower and riskier.",
    guide:
      "Prodvo embedded evidence capture into the delivery lane, making compliance part of normal execution.",
    plan: [
      "Capture artifacts during delivery instead of post-release.",
      "Attach checkpoint evidence directly to release records.",
      "Run compliance and engineering review in the same operating loop.",
    ],
    results: [
      "Audit prep time collapsed from weeks to days.",
      "Compliance stopped acting as a release blocker.",
      "Executive release confidence increased in regulated launches.",
    ],
    quote:
      "Compliance is no longer the final gate. It now lives inside how we ship every week.",
    quoteBy: "Head of engineering, fintech platform",
  },
];

const PRINCIPLES = [
  {
    title: "Start with the hero",
    tag: "Hero",
    body:
      "Every story opens with the accountable role, not the feature list.",
  },
  {
    title: "Name the real friction",
    tag: "Problem",
    body:
      "We frame operational pain first so teams can recognize themselves instantly.",
  },
  {
    title: "Guide with a concrete plan",
    tag: "Plan",
    body:
      "The plan is explicit, sequenced, and operational—not inspirational copy.",
  },
  {
    title: "Close with measurable proof",
    tag: "Proof",
    body:
      "Every case ends with outcome evidence teams can validate in their own environment.",
  },
] as const;

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Context capture",
    detail:
      "Pin down who owns the outcome, what stage they are in, and what pressure is active now.",
  },
  {
    step: "02",
    title: "Operating design",
    detail:
      "Convert goals into one checkpointed operating lane with clear ownership and boundaries.",
  },
  {
    step: "03",
    title: "Aligned execution",
    detail:
      "Run lanes in parallel with shared visibility so blockers appear before they become delays.",
  },
  {
    step: "04",
    title: "Proof, then scale",
    detail:
      "Measure outcomes, lock the winning pattern, then scale it across teams and programs.",
  },
] as const;

const PROOF_STRIP = [
  "Cycle time stayed stable under release pressure",
  "Handoffs became explicit instead of assumed",
  "Quality increased without slowing shipment velocity",
  "Audit evidence moved inside normal delivery flow",
  "Leadership gained real-time execution clarity",
] as const;

const FIT_SIGNALS = [
  "Your speed depends on cross-team coordination quality",
  "Your roadmap confidence requires repeatable quality gates",
  "Your releases need audit/compliance evidence every cycle",
  "Your leadership needs proof of progress, not progress theater",
] as const;

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
    <SiteShell buildTag="prodvo-use-cases-v12">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-shell", "reveal")}>
              <p className={styles["hero-kicker"]}>Use Cases</p>
              <h1 className={styles["hero-title"]}>
                Storyboard-led delivery narratives
                <br />
                for teams shipping under pressure.
              </h1>
              <p className={styles["hero-sub"]}>
                This page is built for operators, not browsers. Each section shows how
                real teams moved from delivery friction to repeatable execution using
                one narrative arc: hero, conflict, guide, plan, and proof.
              </p>
            </div>
          </div>
        </section>

        <section className={styles["timeline-rail"]}>
          <div className="container">
            <div className={cx("rail-line", "reveal", "d1")}>
              {CASES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cx(
                    "rail-node",
                    activeId === item.id ? "rail-node-active" : "",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={activeId === item.id}
                >
                  <span>{item.chapter}</span>
                  <strong>{item.hero}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["narrative-split"]}>
          <div className="container">
            <div className={styles["split-wrap"]}>
              <aside className={cx("story-meta", "reveal")}>
                <p className={styles["story-chapter"]}>{activeCase.chapter}</p>
                <h2 className={styles["story-team"]}>{activeCase.hero}</h2>
                <p className={styles["story-context"]}>{activeCase.context}</p>
                <p className={styles["story-stakes"]}>{activeCase.stakes}</p>
              </aside>

              <article className={cx("story-body", "reveal", "d1")}>
                <div className={styles["story-block"]}>
                  <h3>Conflict</h3>
                  <p>{activeCase.conflict}</p>
                </div>
                <div className={styles["story-block"]}>
                  <h3>Guide intervention</h3>
                  <p>{activeCase.guide}</p>
                </div>
                <div className={styles["story-block"]}>
                  <h3>Plan ladder</h3>
                  <ol className={styles["plan-ladder"]}>
                    {activeCase.plan.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className={styles["story-block"]}>
                  <h3>Observed outcomes</h3>
                  <ul className={styles["result-list"]}>
                    {activeCase.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <blockquote className={styles.quote}>
                  <p>&ldquo;{activeCase.quote}&rdquo;</p>
                  <cite>{activeCase.quoteBy}</cite>
                </blockquote>
              </article>
            </div>
          </div>
        </section>

        <section className={styles["proof-strip"]}>
          <div className="container">
            <div className={cx("proof-head", "reveal")}>
              <span className={styles["section-kicker"]}>Proof strip</span>
              <h2 className={styles["section-title"]}>Recurring signals across successful teams</h2>
            </div>
            <div className={styles["proof-track"]}>
              {PROOF_STRIP.map((item, index) => (
                <div key={item} className={cx("proof-chip", "reveal", index > 0 ? "d1" : "")}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["principles-accordion"]}>
          <div className="container">
            <div className={cx("accordion-head", "reveal")}>
              <span className={styles["section-kicker"]}>Copy architecture</span>
              <h2 className={styles["section-title"]}>StoryBrand principles applied to each case</h2>
            </div>
            <div className={styles["accordion-list"]}>
              {PRINCIPLES.map((item, index) => (
                <details
                  key={item.title}
                  className={cx("accordion-item", "reveal", index > 0 ? "d1" : "")}
                  open={index === 0}
                >
                  <summary>
                    <span>{item.title}</span>
                    <em>{item.tag}</em>
                  </summary>
                  <p>{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["journey-diagram"]}>
          <div className="container">
            <div className={cx("diagram-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution map</span>
              <h2 className={styles["section-title"]}>From intent to repeatable operating cadence</h2>
            </div>
            <ol className={styles["journey-list"]}>
              {JOURNEY_STEPS.map((item, index) => (
                <li key={item.step} className={cx("journey-step", "reveal", index > 0 ? "d1" : "")}>
                  <span className={styles["journey-index"]}>{item.step}</span>
                  <div className={styles["journey-copy"]}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles["fit-check"]}>
          <div className="container">
            <div className={styles["fit-shell"]}>
              <div className={cx("fit-head", "reveal")}>
                <span className={styles["section-kicker"]}>Fit check</span>
                <h2 className={styles["section-title"]}>When this use-case model is a strong match</h2>
                <p className={styles["fit-copy"]}>
                  If these conditions are true in your team today, this operating model
                  is likely to generate immediate execution gains.
                </p>
              </div>
              <div className={cx("fit-table", "reveal", "d1")}>
                {FIT_SIGNALS.map((signal) => (
                  <div key={signal} className={styles["fit-row"]}>
                    <span>{signal}</span>
                    <strong>Strong fit</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={cx("cta-frame", "reveal")}>
              <h2>Run one narrative lane for one sprint and measure the delta.</h2>
              <p>
                Start where delivery friction is highest, prove the operating shift,
                then scale the pattern with confidence.
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

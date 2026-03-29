"use client";

import Link from "next/link";
import { useEffect } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./use-cases.module.css";

type StoryScene = {
  id: string;
  chapter: string;
  hero: string;
  problem: string;
  desire: string;
  plan: readonly string[];
  success: readonly string[];
};

const STORY_SCENES: readonly StoryScene[] = [
  {
    id: "founder-ship",
    chapter: "01",
    hero: "Founder and product lead",
    problem: "Roadmap intent was clear, but delivery slowed down across handoffs.",
    desire: "Ship weekly without creating chaos or burning the team.",
    plan: [
      "Lock one release intent for each sprint.",
      "Run frontend/backend/test lanes in parallel.",
      "Check quality at fixed checkpoints before merge.",
    ],
    success: [
      "Cycle time reduced from weeks to days.",
      "Priority shifts handled without derailing release confidence.",
    ],
  },
  {
    id: "agency-scale",
    chapter: "02",
    hero: "Agency delivery manager",
    problem: "Each client stream used a different process and quality dropped under pressure.",
    desire: "Keep every account moving with consistent quality and less firefighting.",
    plan: [
      "Standardize one execution model across accounts.",
      "Map each account backlog to shared checkpoints.",
      "Review readiness before every client release.",
    ],
    success: [
      "More concurrent client projects with the same team.",
      "Fewer launch-week regressions and escalations.",
    ],
  },
  {
    id: "fintech-audit",
    chapter: "03",
    hero: "Compliance-heavy fintech squad",
    problem: "Audit evidence was rebuilt manually before each release.",
    desire: "Pass compliance reviews without slowing product delivery.",
    plan: [
      "Capture evidence during normal execution, not after.",
      "Link checkpoint outputs to release artifacts.",
      "Keep compliance review in-flow with engineering review.",
    ],
    success: [
      "Audit prep dropped from weeks to days.",
      "Release confidence improved in regulated launches.",
    ],
  },
];

const PRINCIPLES = [
  {
    title: "Character-first clarity",
    copy: "Every use case starts with who owns the outcome and what pressure they face.",
  },
  {
    title: "Problem before product",
    copy: "We frame delivery friction first, then map product intervention clearly.",
  },
  {
    title: "Plan that can be repeated",
    copy: "A three-step execution model keeps velocity and quality predictable.",
  },
  {
    title: "Proof, not promise",
    copy: "Each narrative ends with measurable operational change.",
  },
] as const;

const JOURNEY_STEPS = [
  {
    title: "Scene setup",
    detail: "Define team context, release stage, and delivery tension.",
  },
  {
    title: "Guided intervention",
    detail: "Apply a shared operating plan with explicit checkpoint gates.",
  },
  {
    title: "Operational proof",
    detail: "Measure cycle, quality, and confidence delta after rollout.",
  },
  {
    title: "Scale with control",
    detail: "Repeat proven lane patterns across squads and accounts.",
  },
] as const;

const FIT_SIGNALS = [
  "Multiple teams contribute to one release path",
  "Delivery quality depends on predictable handoffs",
  "Audit or compliance evidence is mandatory",
  "Roadmap speed is blocked by coordination overhead",
  "Leadership needs traceable execution visibility",
] as const;

function cx(...parts: string[]) {
  return parts
    .map((part) => styles[part])
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

export default function UseCasesPage() {
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

  return (
    <SiteShell buildTag="prodvo-use-cases-v9">
      <div className={styles["usecases-page"]}>
        <section className={styles.hero}>
          <div className="container">
            <div className={cx("hero-grid", "reveal")}>
              <div className={styles["hero-copy"]}>
                <p className={styles["hero-kicker"]}>Use Cases</p>
                <h1 className={styles["hero-title"]}>
                  Story-driven scenarios
                  <br />
                  for teams that must ship.
                </h1>
                <p className={styles["hero-sub"]}>
                  This page is built like a storyboard: character, tension, plan, and
                  measurable outcome. It shows how teams use Prodvo in real delivery
                  pressure, not abstract feature tours.
                </p>
              </div>
              <aside className={styles["hero-note"]}>
                <strong>StoryBrand lens</strong>
                <p>
                  The team is the hero. Prodvo is the guide. Clear plans remove risk
                  and produce reliable release outcomes.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles["chapter-nav"]}>
          <div className="container">
            <div className={cx("chapter-strip", "reveal", "d1")}>
              {STORY_SCENES.map((scene, index) => (
                <a
                  key={scene.id}
                  className={cx("chapter-link", index === 1 ? "d1" : index === 2 ? "d2" : "")}
                  href={`#${scene.id}`}
                >
                  <span>{scene.chapter}</span>
                  <strong>{scene.hero}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.storyboard}>
          <div className="container">
            <div className={cx("storyboard-head", "reveal")}>
              <span className={styles["section-kicker"]}>Storyboard</span>
              <h2 className={styles["section-title"]}>Three high-pressure delivery narratives</h2>
              <p className={styles["section-sub"]}>
                Each chapter shows the exact shift from delivery friction to controlled execution.
              </p>
            </div>

            <div className={styles["scene-stack"]}>
              {STORY_SCENES.map((scene, index) => (
                <article
                  id={scene.id}
                  key={scene.id}
                  className={cx(
                    "scene",
                    "reveal",
                    index === 1 ? "d1" : index === 2 ? "d2" : "",
                  )}
                >
                  <div className={styles["scene-meta"]}>
                    <span>{scene.chapter}</span>
                    <h3>{scene.hero}</h3>
                  </div>

                  <div className={styles["scene-grid"]}>
                    <div className={styles["scene-block"]}>
                      <strong>Problem</strong>
                      <p>{scene.problem}</p>
                    </div>
                    <div className={styles["scene-block"]}>
                      <strong>Desired outcome</strong>
                      <p>{scene.desire}</p>
                    </div>
                    <div className={styles["scene-block"]}>
                      <strong>Plan</strong>
                      <ol>
                        {scene.plan.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>
                    <div className={styles["scene-block"]}>
                      <strong>Success markers</strong>
                      <ul>
                        {scene.success.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principles}>
          <div className="container">
            <div className={cx("principles-grid", "reveal")}>
              <div className={styles["principles-head"]}>
                <span className={styles["section-kicker"]}>Messaging principles</span>
                <h2 className={styles["section-title"]}>How we structure every case narrative</h2>
              </div>
              <div className={styles["principles-list"]}>
                {PRINCIPLES.map((item, index) => (
                  <article
                    key={item.title}
                    className={cx(
                      "principle-card",
                      "reveal",
                      index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : "",
                    )}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.journey}>
          <div className="container">
            <div className={cx("journey-head", "reveal")}>
              <span className={styles["section-kicker"]}>Execution journey</span>
              <h2 className={styles["section-title"]}>From intent to repeatable delivery</h2>
            </div>
            <div className={styles["journey-track"]}>
              {JOURNEY_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className={cx(
                    "journey-step",
                    "reveal",
                    index === 1 ? "d1" : index === 2 ? "d2" : index === 3 ? "d3" : "",
                  )}
                >
                  <span>{`0${index + 1}`}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["fit-matrix"]}>
          <div className="container">
            <div className={styles["fit-grid"]}>
              <div className={cx("fit-copy", "reveal")}>
                <span className={styles["section-kicker"]}>Fit matrix</span>
                <h2 className={styles["section-title"]}>When this operating model is a clear match</h2>
                <p>
                  If your team sees these signals, the use-case patterns above usually
                  produce immediate delivery and coordination gains.
                </p>
              </div>
              <div className={cx("fit-table", "reveal", "d1")}>
                {FIT_SIGNALS.map((item) => (
                  <div key={item} className={styles["fit-row"]}>
                    <span>{item}</span>
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
              <h2>Start with one high-friction lane and prove the delta.</h2>
              <p>
                Pick a chapter above, run it for one sprint, and measure the before/after
                on speed, quality, and handoff clarity.
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

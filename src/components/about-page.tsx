import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AboutRevealEffect } from "@/components/about-reveal-effect";

const ORIGIN_STORY_POINTS = [
  {
    label: "The spark",
    title: "AI coding tools are fast. They are not safe.",
    body: "Developers adopted AI coding assistants en masse, but every tool available shared a fundamental flaw: they jump straight from prompt to code with no planning, no coordination, and no recovery path when things go wrong.",
  },
  {
    label: "The cost",
    title: "$4.2B lost annually to failed AI-assisted projects",
    body: "Developers are not failing because AI is weak. They are failing because AI tools have no structure. No planning phase. No rollback. No team coordination. Context amnesia after every session.",
  },
  {
    label: "The answer",
    title: "Build the workspace that thinks before it codes",
    body: "Prodvo introduces a planning layer before any code is generated. Requirements are decomposed into dependency-mapped task graphs, executed by specialized agents in parallel, gated at checkpoints, and deployed with rollback confidence.",
  },
] as const;

const DELIVERY_PHASES = [
  {
    phase: "Plan",
    what: "Converts natural language into an ordered task graph with dependency mapping and effort estimates.",
    why: "Prevents false starts and architectural mistakes before a line is written.",
  },
  {
    phase: "Build",
    what: "Parallel AI agents execute frontend, backend, QA, and integrations simultaneously.",
    why: "3.1x faster than sequential generation with no bottlenecks between tasks.",
  },
  {
    phase: "Review",
    what: "Checkpoint gates with diffs and team approvals before risky changes merge.",
    why: "Every significant change is reviewed and regressions are caught early.",
  },
  {
    phase: "Ship",
    what: "One-click deploy with rollback-ready snapshots, auto-SSL, and CDN distribution.",
    why: "Deployments are reversible. Bad releases are recovered in seconds.",
  },
  {
    phase: "Maintain",
    what: "Unified logs, error tracking, performance metrics, and audit trails.",
    why: "Full operational visibility without stitching together separate tools.",
  },
] as const;

const BUILT_IN_STACK = [
  { title: "Authentication", detail: "Email, magic links, OAuth, SSO with zero configuration." },
  { title: "Database", detail: "Postgres with schema generation from natural language, automatic migrations, and daily backups." },
  { title: "Deployment", detail: "One-click deploy with custom domains, auto-SSL, and edge CDN." },
  { title: "Email", detail: "Transactional email with templating and deliverability monitoring." },
  { title: "Git integration", detail: "Native sync with GitHub, GitLab, and Bitbucket." },
  { title: "Audit trail", detail: "Full execution history with timestamps, diffs, and exportable artifacts." },
] as const;

const VALUES = [
  {
    title: "Planning prevents rework",
    body: "68% fewer rework cycles because planning prevents architectural mistakes before execution starts.",
  },
  {
    title: "Parallel over sequential",
    body: "3.1x faster project completion because parallel agents eliminate sequential bottlenecks.",
  },
  {
    title: "Experimentation without fear",
    body: "4x more experimentation because developers can roll back any checkpoint instead of recovering manually.",
  },
  {
    title: "Team-safe by design",
    body: "Approval gates and audit trails make AI adoption acceptable to compliance teams from day one.",
  },
] as const;

const MARKET_SEGMENTS = [
  {
    segment: "Development Agencies",
    profile: "5 to 20 concurrent client projects",
    value: "Parallel execution, client workspace isolation, template reuse",
  },
  {
    segment: "Solo Founders & Indies",
    profile: "Building MVPs with limited resources",
    value: "Full-stack scaffold in hours, built-in auth and billing, rollback safety",
  },
  {
    segment: "Enterprise Internal Tools",
    profile: "Legacy systems plus new feature development",
    value: "Audit trails, checkpoint governance, compliance-ready rollback",
  },
] as const;

export function AboutPage() {
  return (
    <SiteShell>
      <AboutRevealEffect />

      <section className="page-hero">
        <div className="container">
          <span className="about-eyebrow animate-fade-up">About Prodvo</span>
          <h1 className="section-title animate-fade-up-1" style={{ maxWidth: "820px" }}>
            The AI workspace that <span style={{ color: "var(--fire-orange)" }}>plans before it builds.</span>
          </h1>
          <p className="section-subtitle animate-fade-up-2" style={{ maxWidth: "54rem" }}>
            Prodvo combines planning, parallel execution, checkpoint rollback, and a full production stack into one workspace.
            From prompt to production in hours, not weeks.
          </p>
          <ul className="page-hero-meta animate-fade-up-3">
            <li>Plan. Build. Ship. Maintain.</li>
            <li>Founded 2024</li>
            <li>$750K Seed Round</li>
          </ul>
        </div>
      </section>

      <section className="section" id="origin">
        <div className="container">
          <div className="section-label">
            <code>[ 01 / 05 ]</code>
            <span>Origin</span>
          </div>
          <h2 className="section-title">Why Prodvo exists</h2>
          <p className="section-subtitle">
            Every AI coding tool on the market jumps straight to code. We asked: what if the tool thought first?
          </p>

          <div className="about-origin-stream reveal">
            {ORIGIN_STORY_POINTS.map((point, i) => (
              <article className={`about-origin-card reveal${i === 1 ? " delay-1" : i === 2 ? " delay-2" : ""}`} key={point.label}>
                <div className="about-origin-label">{point.label}</div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="how-it-works">
        <div className="container">
          <div className="section-label">
            <code>[ 02 / 05 ]</code>
            <span>Delivery lifecycle</span>
          </div>
          <h2 className="section-title">Five phases. One workspace.</h2>
          <p className="section-subtitle">
            Prodvo structures the entire delivery lifecycle so nothing falls through the cracks between planning, execution, and production.
          </p>

          <div className="about-phase-rail reveal">
            {DELIVERY_PHASES.map((phase) => (
              <div className="about-phase-node" key={phase.phase}>
                <div className="about-phase-badge">{phase.phase}</div>
                <p className="about-phase-what">{phase.what}</p>
                <p className="about-phase-why">{phase.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="section-label">
                <code>[ 03 / 05 ]</code>
                <span>Built-in stack</span>
              </div>
              <h2 className="section-title">Everything you need, nothing to stitch together</h2>
              <p className="section-subtitle">
                Auth, database, deployment, email, Git, and audit trails ship with every workspace. Zero external configuration required.
              </p>
            </div>
          </div>

          <div className="about-stack-grid reveal">
            {BUILT_IN_STACK.map((item) => (
              <article className="about-stack-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="who-its-for">
        <div className="container">
          <div className="section-label">
            <code>[ 04 / 05 ]</code>
            <span>Who it&rsquo;s for</span>
          </div>
          <h2 className="section-title">Built for teams that need to ship, not just demo</h2>
          <p className="section-subtitle">
            Prodvo sits at the intersection of agencies, solo founders, and enterprise teams. The planning-first architecture is the differentiator across all three.
          </p>

          <div className="about-segments-rail reveal">
            {MARKET_SEGMENTS.map((seg) => (
              <article className="about-segment-card" key={seg.segment}>
                <h3>{seg.segment}</h3>
                <p className="about-segment-profile">{seg.profile}</p>
                <p className="about-segment-value">{seg.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <div className="section-label">
            <code>[ 05 / 05 ]</code>
            <span>What we believe</span>
          </div>
          <h2 className="section-title">Principles that shape Prodvo</h2>
          <p className="section-subtitle">
            Every design decision flows from a simple conviction: structured execution beats raw speed.
          </p>

          <div className="about-values-strip reveal">
            {VALUES.map((v, i) => (
              <article className={`about-value-item reveal${i >= 2 ? " delay-1" : ""}`} key={v.title}>
                <span className="about-value-num">{`0${i + 1}`}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-cta-frame reveal">
            <div>
              <h2>Ready to build with structure?</h2>
              <p>Start your first project with Prodvo and experience planning-first AI development.</p>
            </div>
            <div className="about-cta-actions">
              <Link className="btn btn-primary" href="/pricing">Start building</Link>
              <Link className="btn btn-secondary" href="/product">Explore the platform</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

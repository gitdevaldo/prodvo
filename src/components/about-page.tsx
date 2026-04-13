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

const TRACTION_METRICS = [
  { value: "2,400+", label: "Monthly Active Users" },
  { value: "47%", label: "MoM User Growth" },
  { value: "12,000+", label: "Projects Created" },
  { value: "$1.47M", label: "Current ARR" },
] as const;

const CUSTOMER_OUTCOMES = [
  {
    type: "Agency (5-person team)",
    before: "12 days per project",
    after: "5.5 days",
    improvement: "54% faster",
  },
  {
    type: "Solo Founder",
    before: "8 weeks to MVP",
    after: "4 weeks",
    improvement: "50% faster",
  },
  {
    type: "Enterprise Team",
    before: "34% rework rate",
    after: "11% rework",
    improvement: "68% reduction",
  },
] as const;

const TESTIMONIALS = [
  {
    quote: "We went from shipping 2 client projects per month to 5. The parallel execution alone paid for the subscription in week one.",
    name: "Marcus Chen",
    role: "CTO at PixelForge Agency",
    detail: "12 developers",
  },
  {
    quote: "I finally trust AI to help me code. The checkpoint system means I can experiment without fear. Rolled back 3 times yesterday and still shipped by end of day.",
    name: "Sarah Kim",
    role: "Solo Founder at Metricly",
    detail: "",
  },
  {
    quote: "Our compliance team was blocking AI tool adoption. Prodvo's audit trail and rollback capability got us approved in 2 weeks.",
    name: "James Wright",
    role: "VP Engineering at FinanceStack",
    detail: "",
  },
  {
    quote: "We used to spend hours syncing between PM, engineering, and QA before each release. With Prodvo, everyone sees one execution timeline and we ship with fewer surprises.",
    name: "Marina Solis",
    role: "VP Product at Helio Labs",
    detail: "52% reduction in handoff delay",
  },
  {
    quote: "Rollbacks used to be chaotic. Now we deploy with explicit checkpoints, so recovery is controlled and fast when priorities shift.",
    name: "Theo Jensen",
    role: "CTO at Launchgrid",
    detail: "96% delivery confidence",
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
            <li>Post-revenue &amp; publicly launched</li>
            <li>$750K Seed Round</li>
            <li>prodvo.dev</li>
          </ul>
        </div>
      </section>

      <section className="section" id="origin">
        <div className="container">
          <div className="section-label">
            <code>[ 01 / 06 ]</code>
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
            <code>[ 02 / 06 ]</code>
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

      <section className="section" id="traction">
        <div className="container">
          <div className="section-label">
            <code>[ 03 / 06 ]</code>
            <span>Traction</span>
          </div>
          <h2 className="section-title">Post-revenue. Publicly launched. Growing.</h2>
          <p className="section-subtitle">
            Real teams use Prodvo every day to ship real products. These numbers reflect organic adoption and product-led growth.
          </p>

          <div className="about-metrics-band reveal">
            {TRACTION_METRICS.map((metric) => (
              <div className="about-metric-cell" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <table className="about-outcomes-table reveal delay-1">
            <thead>
              <tr className="about-outcomes-head">
                <th scope="col">Customer type</th>
                <th scope="col">Before Prodvo</th>
                <th scope="col">With Prodvo</th>
                <th scope="col">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {CUSTOMER_OUTCOMES.map((row) => (
                <tr className="about-outcomes-row" key={row.type}>
                  <th scope="row">{row.type}</th>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                  <td><span className="about-outcome-badge">{row.improvement}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-alt" id="voices">
        <div className="container">
          <div className="section-label">
            <code>[ 04 / 06 ]</code>
            <span>Customer voices</span>
          </div>
          <h2 className="section-title">Teams ship faster. Engineers trust the output.</h2>
          <p className="section-subtitle">
            Hear from the builders, CTOs, and product leaders who use Prodvo every day.
          </p>

          <div className="about-quotes-mosaic reveal">
            {TESTIMONIALS.map((t) => (
              <blockquote className="about-quote-card" key={t.name}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <cite>{t.name}</cite>
                  <span>{t.role}</span>
                  {t.detail && <strong>{t.detail}</strong>}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="container">
          <div className="section-head-row">
            <div>
              <div className="section-label">
                <code>[ 05 / 06 ]</code>
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

      <section className="section section-alt" id="values">
        <div className="container">
          <div className="section-label">
            <code>[ 06 / 06 ]</code>
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

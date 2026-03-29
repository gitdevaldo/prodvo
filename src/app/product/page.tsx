"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./product-page.module.css";

export default function ProductPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell buildTag="prodvo-product-v5">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO: Full-bleed narrative opener with asymmetric layout
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.opener}>
        <div className={styles.openerInner}>
          <div className={styles.openerLead}>
            <span className={styles.openerTag}>The Prodvo Platform</span>
            <h1 className={styles.openerTitle}>
              Stop managing tickets.
              <br />
              <em>Start shipping products.</em>
            </h1>
            <p className={styles.openerSubtitle}>
              Prodvo is the execution layer between your idea and production. One workspace where 
              AI agents plan, build, test, and deploy—while you stay in control of every decision.
            </p>
            <div className={styles.openerActions}>
              <Link className="btn btn-primary" href="/pricing">Start free trial</Link>
              <Link className={styles.openerGhost} href="/docs">
                <span>Read documentation</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className={styles.openerVisual}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalBar}>
                <span /><span /><span />
              </div>
              <div className={styles.terminalBody}>
                <code><span className={styles.terminalPrompt}>$</span> prodvo run &quot;Add user authentication&quot;</code>
                <code className={styles.terminalMuted}>⏳ Planning scope...</code>
                <code className={styles.terminalSuccess}>✓ 4 tasks identified</code>
                <code className={styles.terminalSuccess}>✓ Frontend agent assigned</code>
                <code className={styles.terminalSuccess}>✓ Backend agent assigned</code>
                <code className={styles.terminalSuccess}>✓ Test agent assigned</code>
                <code className={styles.terminalMuted}>⏳ Executing in parallel...</code>
                <code className={styles.terminalHighlight}>→ Checkpoint: ready for review</code>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.openerStats}>
          <div className={styles.stat}>
            <strong>3.1×</strong>
            <span>parallel throughput</span>
          </div>
          <div className={styles.stat}>
            <strong>52%</strong>
            <span>less handoff delay</span>
          </div>
          <div className={styles.stat}>
            <strong>96%</strong>
            <span>delivery confidence</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE PROBLEM: Magazine-style editorial with dramatic statement
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.problemSection}>
        <div className={styles.problemInner}>
          <div className={styles.problemStatement}>
            <span className={styles.problemLabel}>The reality</span>
            <h2 className={styles.problemHeadline}>
              Your team spends <em>60%</em> of their time not coding.
            </h2>
            <p className={styles.problemBody}>
              Status meetings. Slack threads. Ticket grooming. Context switching between tools. 
              The work before the work. The coordination tax that slows every feature, every sprint, every quarter.
            </p>
          </div>
          <div className={styles.problemEvidence}>
            <figure className={styles.problemQuote}>
              <blockquote>
                &ldquo;We had six people in a room for two hours just to align on what 
                &lsquo;done&rsquo; meant for one feature.&rdquo;
              </blockquote>
              <figcaption>— Engineering Director, Series B startup</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE SHIFT: Full-width narrative transition
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.shiftSection}>
        <div className={styles.shiftContent}>
          <div className={styles.shiftMarker}>
            <span>What changes</span>
          </div>
          <h2 className={styles.shiftHeadline}>
            Prodvo eliminates the gap between decision and execution.
          </h2>
          <p className={styles.shiftBody}>
            Instead of translating requirements through five tools and three meetings, 
            you describe what you want—and watch agents build it with full visibility.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CORE CAPABILITIES: Interactive accordion-reveal with deep detail
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesInner}>
          <div className={styles.capabilitiesHeader}>
            <span className={styles.capabilitiesLabel}>Platform capabilities</span>
            <h2 className={styles.capabilitiesTitle}>
              Four systems that work as one
            </h2>
          </div>
          
          <div className={styles.capabilitiesLayout}>
            <nav className={styles.capabilitiesNav}>
              {[
                { id: 0, title: "Intent Lock", subtitle: "Capture scope before chaos" },
                { id: 1, title: "Parallel Agents", subtitle: "Multiply without meetings" },
                { id: 2, title: "Checkpoints", subtitle: "Control without micromanaging" },
                { id: 3, title: "Rollback States", subtitle: "Ship without fear" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.capabilityTrigger} ${activeCapability === item.id ? styles.active : ""}`}
                  onClick={() => setActiveCapability(item.id)}
                >
                  <span className={styles.capabilityNum}>0{item.id + 1}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </button>
              ))}
            </nav>
            
            <div className={styles.capabilityDetail}>
              {activeCapability === 0 && (
                <article className={styles.capabilityContent}>
                  <h3>Intent Lock</h3>
                  <p className={styles.capabilityLede}>
                    The scope document that actually stays true.
                  </p>
                  <p>
                    Before a single line of code is written, Prodvo captures your goals, constraints, 
                    and acceptance criteria in a structured format that agents reference throughout execution.
                    No more &ldquo;that&rsquo;s not what I asked for&rdquo; at the end of a sprint.
                  </p>
                  <div className={styles.capabilityFeatures}>
                    <div className={styles.featureItem}>
                      <strong>Natural language input</strong>
                      <span>Describe what you want in plain English</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Structured output</strong>
                      <span>Auto-generated implementation plan with effort estimates</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Constraint binding</strong>
                      <span>Agents can&rsquo;t drift outside defined boundaries</span>
                    </div>
                  </div>
                </article>
              )}
              {activeCapability === 1 && (
                <article className={styles.capabilityContent}>
                  <h3>Parallel Agents</h3>
                  <p className={styles.capabilityLede}>
                    Three engineers in one workspace. Zero coordination overhead.
                  </p>
                  <p>
                    Frontend, backend, and QA work happens simultaneously. Each agent operates in 
                    its own scoped lane while sharing context through the same execution timeline.
                    No more waiting for one team to finish before another can start.
                  </p>
                  <div className={styles.capabilityFeatures}>
                    <div className={styles.featureItem}>
                      <strong>Isolated execution</strong>
                      <span>Each agent works in its own branch and environment</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Shared context</strong>
                      <span>All agents see the same intent lock and constraints</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Automatic merge</strong>
                      <span>Coordinated integration when checkpoints pass</span>
                    </div>
                  </div>
                </article>
              )}
              {activeCapability === 2 && (
                <article className={styles.capabilityContent}>
                  <h3>Checkpoints</h3>
                  <p className={styles.capabilityLede}>
                    Review gates that catch problems before they compound.
                  </p>
                  <p>
                    Define where human review is required. Agents pause at checkpoints and wait 
                    for explicit approval before proceeding. You see exactly what changed, what 
                    tests passed, and what risks exist—before anything ships.
                  </p>
                  <div className={styles.capabilityFeatures}>
                    <div className={styles.featureItem}>
                      <strong>Configurable gates</strong>
                      <span>Set checkpoints per task, feature, or environment</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Full diff visibility</strong>
                      <span>See every change with context, not just file names</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Quality signals</strong>
                      <span>Test coverage, lint status, security scan results</span>
                    </div>
                  </div>
                </article>
              )}
              {activeCapability === 3 && (
                <article className={styles.capabilityContent}>
                  <h3>Rollback States</h3>
                  <p className={styles.capabilityLede}>
                    Every checkpoint is a save point.
                  </p>
                  <p>
                    If a run goes wrong—or priorities change—revert to any previous checkpoint 
                    with one click. Full environment state, database migrations, and deployment 
                    config all roll back together. No manual cleanup, no partial states.
                  </p>
                  <div className={styles.capabilityFeatures}>
                    <div className={styles.featureItem}>
                      <strong>Full state capture</strong>
                      <span>Code, config, environment, and data snapshots</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>Instant recovery</strong>
                      <span>One-click rollback to any checkpoint</span>
                    </div>
                    <div className={styles.featureItem}>
                      <strong>History retention</strong>
                      <span>Audit trail of every run and decision</span>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          EXECUTION TIMELINE: Horizontal scrolling journey visualization
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.journeySection}>
        <div className={styles.journeyHeader}>
          <span className={styles.journeyLabel}>From prompt to production</span>
          <h2 className={styles.journeyTitle}>One workspace. One timeline. Zero friction.</h2>
        </div>
        <div className={styles.journeyTrack}>
          <div className={styles.journeyLine} aria-hidden="true" />
          <div className={styles.journeySteps}>
            <article className={`${styles.journeyStep} ${styles.reveal}`}>
              <div className={styles.journeyNode}>
                <span>01</span>
              </div>
              <div className={styles.journeyContent}>
                <h3>Describe</h3>
                <p>Write what you want in natural language. Prodvo translates intent into structured scope.</p>
                <code className={styles.journeyCode}>&quot;Add Stripe checkout with subscription tiers&quot;</code>
              </div>
            </article>
            <article className={`${styles.journeyStep} ${styles.reveal}`}>
              <div className={styles.journeyNode}>
                <span>02</span>
              </div>
              <div className={styles.journeyContent}>
                <h3>Review plan</h3>
                <p>See the generated task breakdown with effort estimates. Adjust scope before execution starts.</p>
                <span className={styles.journeyMeta}>4 tasks • ~2 hours estimated</span>
              </div>
            </article>
            <article className={`${styles.journeyStep} ${styles.reveal}`}>
              <div className={styles.journeyNode}>
                <span>03</span>
              </div>
              <div className={styles.journeyContent}>
                <h3>Execute</h3>
                <p>Agents work in parallel. Watch progress in real-time or check back when checkpoints trigger.</p>
                <span className={styles.journeyMeta}>3 agents • 1 checkpoint pending</span>
              </div>
            </article>
            <article className={`${styles.journeyStep} ${styles.reveal}`}>
              <div className={styles.journeyNode}>
                <span>04</span>
              </div>
              <div className={styles.journeyContent}>
                <h3>Checkpoint</h3>
                <p>Review changes at defined gates. Approve to continue, request changes, or rollback.</p>
                <span className={styles.journeyMeta}>Tests passing • No security issues</span>
              </div>
            </article>
            <article className={`${styles.journeyStep} ${styles.reveal}`}>
              <div className={styles.journeyNode}>
                <span>05</span>
              </div>
              <div className={styles.journeyContent}>
                <h3>Deploy</h3>
                <p>Ship to production with one click. Rollback instantly if anything goes wrong.</p>
                <span className={styles.journeyMeta}>Preview available • Production-ready</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PROOF POINTS: Diagonal offset layout with real metrics
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.proofSection}>
        <div className={styles.proofInner}>
          <div className={styles.proofHeader}>
            <span className={styles.proofLabel}>Measured outcomes</span>
            <h2 className={styles.proofTitle}>Results that show up in sprints, not slides.</h2>
          </div>
          <div className={styles.proofGrid}>
            <article className={`${styles.proofCard} ${styles.reveal}`}>
              <div className={styles.proofMetric}>
                <strong>72%</strong>
                <span>reduction in coordination time</span>
              </div>
              <p>
                Teams stop spending half their day in status syncs. One execution view 
                replaces six tools and three meetings.
              </p>
              <cite>— Based on 14-team pilot, Q4 2025</cite>
            </article>
            <article className={`${styles.proofCard} ${styles.proofCardOffset} ${styles.reveal}`}>
              <div className={styles.proofMetric}>
                <strong>3.1×</strong>
                <span>parallel execution throughput</span>
              </div>
              <p>
                Frontend, backend, and QA work happens simultaneously. No more waiting 
                for one stream to finish before another starts.
              </p>
              <cite>— Brightforge engineering report</cite>
            </article>
            <article className={`${styles.proofCard} ${styles.reveal}`}>
              <div className={styles.proofMetric}>
                <strong>84%</strong>
                <span>release confidence score</span>
              </div>
              <p>
                Explicit checkpoints replace gut-feel go/no-go decisions. Teams know 
                exactly what shipped and what tests covered it.
              </p>
              <cite>— Nordpath deployment metrics</cite>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          DIFFERENTIATOR: Split comparison with honest positioning
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.diffSection}>
        <div className={styles.diffInner}>
          <h2 className={styles.diffTitle}>What Prodvo is—and isn&rsquo;t</h2>
          <div className={styles.diffColumns}>
            <div className={styles.diffYes}>
              <h3>Prodvo is</h3>
              <ul>
                <li>
                  <strong>An execution layer</strong>
                  <span>Sits on top of your existing stack. Works with GitHub, GitLab, Bitbucket.</span>
                </li>
                <li>
                  <strong>A coordination system</strong>
                  <span>Keeps scope, status, and ownership visible without manual updates.</span>
                </li>
                <li>
                  <strong>A quality control framework</strong>
                  <span>Checkpoints and rollbacks built into the workflow, not bolted on.</span>
                </li>
                <li>
                  <strong>A team multiplier</strong>
                  <span>AI agents handle the work. Humans handle the decisions.</span>
                </li>
              </ul>
            </div>
            <div className={styles.diffNo}>
              <h3>Prodvo is not</h3>
              <ul>
                <li>
                  <strong>A CI/CD replacement</strong>
                  <span>Your pipelines stay. Prodvo orchestrates what feeds into them.</span>
                </li>
                <li>
                  <strong>A project management tool</strong>
                  <span>No Gantt charts. No resource planning. Just execution.</span>
                </li>
                <li>
                  <strong>A no-code platform</strong>
                  <span>This is for teams building real software, not prototypes.</span>
                </li>
                <li>
                  <strong>A magic button</strong>
                  <span>You still make decisions. Prodvo makes them easier to execute.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TEAM VOICE: Asymmetric testimonial with full context
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.voiceSection}>
        <div className={styles.voiceInner}>
          <div className={styles.voicePrimary}>
            <div className={styles.voiceQuoteMark}>&ldquo;</div>
            <blockquote className={styles.voiceQuote}>
              The biggest shift was confidence. Engineers are no longer guessing what changed 
              in upstream scope because the run history is always visible.
            </blockquote>
            <div className={styles.voiceAttribution}>
              <strong>Derek Kim</strong>
              <span>Engineering Director, Nordpath</span>
            </div>
            <div className={styles.voiceProof}>
              <div className={styles.voiceMetric}>
                <strong>-37%</strong>
                <span>coordination overhead</span>
              </div>
              <p className={styles.voiceContext}>
                Prodvo replaced status chasing with checkpointed execution, so cross-functional 
                teams spend more time shipping than coordinating.
              </p>
            </div>
          </div>
          <div className={styles.voiceSecondary}>
            <article className={styles.voiceCard}>
              <blockquote>
                &ldquo;We run client launches in parallel workspaces now. Every implementation 
                follows the same quality gates without slowing down custom work.&rdquo;
              </blockquote>
              <footer>
                <strong>Alicia Romero</strong>
                <span>Head of Delivery, Brightforge</span>
              </footer>
            </article>
            <article className={styles.voiceCard}>
              <blockquote>
                &ldquo;Rollbacks used to be chaotic. Now we deploy with explicit checkpoints, 
                so recovery is controlled and fast when priorities shift.&rdquo;
              </blockquote>
              <footer>
                <strong>Theo Jensen</strong>
                <span>CTO, Launchgrid</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TECHNICAL SPECS: Clean data presentation for evaluators
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.specsSection}>
        <div className={styles.specsInner}>
          <div className={styles.specsHeader}>
            <span className={styles.specsLabel}>For technical evaluators</span>
            <h2 className={styles.specsTitle}>Under the hood</h2>
          </div>
          <div className={styles.specsContent}>
            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <h4>Integrations</h4>
                <p>GitHub, GitLab, Bitbucket, Linear, Jira, Slack, Discord</p>
              </div>
              <div className={styles.specItem}>
                <h4>Languages</h4>
                <p>TypeScript, JavaScript, Python, Go, Rust, Ruby, Java</p>
              </div>
              <div className={styles.specItem}>
                <h4>Frameworks</h4>
                <p>React, Next.js, Vue, Svelte, Django, FastAPI, Rails</p>
              </div>
              <div className={styles.specItem}>
                <h4>Infrastructure</h4>
                <p>AWS, GCP, Azure, Vercel, Cloudflare, Railway</p>
              </div>
              <div className={styles.specItem}>
                <h4>Security</h4>
                <p>SOC 2 Type II, GDPR compliant, SSO/SAML, audit logs</p>
              </div>
              <div className={styles.specItem}>
                <h4>Deployment</h4>
                <p>Cloud-hosted or self-hosted enterprise option</p>
              </div>
            </div>
            <div className={styles.specsActions}>
              <Link className="btn btn-secondary" href="/docs">View full documentation</Link>
              <Link className={styles.specsLink} href="/docs">
                Security whitepaper →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CLOSING CTA: High-impact closer with urgency
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.closingSection}>
        <div className={styles.closingInner}>
          <h2 className={styles.closingTitle}>
            Your next feature doesn&rsquo;t need another meeting.
          </h2>
          <p className={styles.closingBody}>
            Start a Prodvo workspace. Describe what you want. Watch it build.
          </p>
          <div className={styles.closingActions}>
            <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
            <span className={styles.closingNote}>No credit card required • 14-day trial</span>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

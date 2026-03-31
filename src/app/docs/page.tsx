"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./docs.module.css";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quickstart");

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

  const docSections = [
    {
      id: "quickstart",
      title: "Quickstart",
      description: "Get up and running in 5 minutes",
      articles: [
        { title: "Create your first workspace", time: "3 min" },
        { title: "Connect a Git repository", time: "2 min" },
        { title: "Run your first workflow", time: "5 min" },
      ],
    },
    {
      id: "concepts",
      title: "Core Concepts",
      description: "Understand how Prodvo works",
      articles: [
        { title: "Intent locks and scope", time: "4 min" },
        { title: "Parallel agents explained", time: "6 min" },
        { title: "Checkpoint lifecycle", time: "5 min" },
        { title: "Branching and merge strategy", time: "4 min" },
      ],
    },
    {
      id: "workflows",
      title: "Workflows",
      description: "Configure and customize execution",
      articles: [
        { title: "Defining workflow stages", time: "5 min" },
        { title: "Approval gates configuration", time: "4 min" },
        { title: "Environment variables and secrets", time: "3 min" },
        { title: "Rollback procedures", time: "4 min" },
      ],
    },
    {
      id: "integrations",
      title: "Integrations",
      description: "Connect your existing tools",
      articles: [
        { title: "GitHub integration setup", time: "5 min" },
        { title: "GitLab integration setup", time: "5 min" },
        { title: "CI/CD pipeline hooks", time: "6 min" },
        { title: "Slack notifications", time: "3 min" },
      ],
    },
    {
      id: "api",
      title: "API Reference",
      description: "Programmatic access to Prodvo",
      articles: [
        { title: "Authentication", time: "3 min" },
        { title: "Workspaces API", time: "5 min" },
        { title: "Runs API", time: "6 min" },
        { title: "Webhooks", time: "4 min" },
      ],
    },
    {
      id: "security",
      title: "Security",
      description: "Enterprise-grade protection",
      articles: [
        { title: "Security overview", time: "4 min" },
        { title: "SAML SSO configuration", time: "6 min" },
        { title: "Audit logs", time: "3 min" },
        { title: "Data handling and compliance", time: "5 min" },
      ],
    },
  ];

  const popularGuides = [
    {
      badge: "Most read",
      title: "The complete guide to AI-assisted workflows",
      description: "Everything you need to know about setting up, configuring, and optimizing Prodvo for your team.",
      readTime: "15 min read",
      href: "#",
    },
    {
      badge: "Team favorite",
      title: "Migrating from manual PR reviews",
      description: "A step-by-step guide to transitioning your code review process to checkpoint-based approvals.",
      readTime: "12 min read",
      href: "#",
    },
    {
      badge: "Updated",
      title: "Best practices for enterprise rollout",
      description: "Lessons learned from teams that successfully scaled Prodvo across multiple engineering teams.",
      readTime: "10 min read",
      href: "#",
    },
  ];

  const supportOptions = [
    {
      title: "Community Discord",
      description: "Connect with other Prodvo users",
      action: "Join community",
      href: "#",
    },
    {
      title: "Email Support",
      description: "Get help from our team",
      action: "support@prodvo.dev",
      href: "mailto:support@prodvo.dev",
    },
    {
      title: "Book a call",
      description: "Schedule a walkthrough",
      action: "Pick a time",
      href: "#",
    },
  ];

  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>Documentation</span>
          <h1 className={styles.heroTitle}>
            Learn Prodvo.
            <br />
            <em>Build faster.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Guides, tutorials, and API references to help you get the most out of 
            AI-assisted development workflows.
          </p>
          
          {/* Quick access buttons */}
          <div className={styles.quickAccess}>
            <Link href="#quickstart" className={styles.quickBtn}>
              Quickstart
            </Link>
            <Link href="#api" className={styles.quickBtn}>
              API Reference
            </Link>
            <Link href="#integrations" className={styles.quickBtn}>
              Integrations
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          DOCUMENTATION BROWSER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.docsSection}>
        <div className={styles.docsInner}>
          {/* Section nav */}
          <nav className={styles.sectionNav}>
            {docSections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`${styles.navBtn} ${activeSection === section.id ? styles.active : ""}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </nav>

          {/* Content panel */}
          <div className={styles.contentPanel}>
            {docSections.filter(s => s.id === activeSection).map((section) => (
              <div key={section.id} className={styles.sectionContent}>
                <div className={styles.contentHeader}>
                  <div>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                </div>
                
                <div className={styles.articleList}>
                  {section.articles.map((article, i) => (
                    <Link 
                      href="#" 
                      key={article.title} 
                      className={`${styles.articleCard} ${styles.reveal}`}
                      style={{ transitionDelay: `${i * 0.08}s` }}
                    >
                      <div className={styles.articleIndex}>{String(i + 1).padStart(2, '0')}</div>
                      <div className={styles.articleInfo}>
                        <h3>{article.title}</h3>
                        <span className={styles.readTime}>{article.time}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className={styles.sectionFooter}>
                  <Link href="#" className={styles.viewAllLink}>
                    View all {section.title.toLowerCase()} docs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          POPULAR GUIDES — Feature strip
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.guidesSection}>
        <div className={styles.guidesInner}>
          <div className={styles.guidesHeader}>
            <span className={styles.sectionLabel}>Featured</span>
            <h2 className={styles.sectionTitle}>Popular guides</h2>
          </div>
          
          <div className={styles.guidesStrip}>
            {popularGuides.map((guide, i) => (
              <Link 
                href={guide.href} 
                key={guide.title} 
                className={`${styles.guideCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={styles.guideBadge}>{guide.badge}</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <span className={styles.guideTime}>{guide.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CODE EXAMPLE — Terminal showcase
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.codeSection}>
        <div className={styles.codeInner}>
          <div className={styles.codeHeader}>
            <span className={styles.sectionLabel}>API Example</span>
            <h2 className={styles.sectionTitle}>Start a workflow with one call</h2>
            <p className={styles.codeSubtitle}>
              Use the Prodvo API to programmatically trigger workflows from your existing tools.
            </p>
          </div>
          
          <div className={`${styles.terminal} ${styles.reveal}`}>
            <div className={styles.terminalBar}>
              <div className={styles.terminalDots}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.terminalTitle}>bash — start-workflow.sh</span>
            </div>
            <div className={styles.terminalBody}>
              <pre><code>{`curl -X POST https://api.prodvo.dev/v1/runs \\
  -H "Authorization: Bearer $PRODVO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workspace_id": "ws_abc123",
    "intent": "Add user authentication with OAuth",
    "config": {
      "branch": "feature/auth",
      "agents": ["frontend", "backend", "tests"],
      "checkpoints": ["planning", "review", "merge"]
    }
  }'

# Response:
{
  "run_id": "run_xyz789",
  "status": "initializing",
  "checkpoint_url": "https://app.prodvo.dev/runs/xyz789"
}`}</code></pre>
            </div>
          </div>
          
          <div className={styles.codeActions}>
            <Link href="#api" className="btn btn-primary">Explore API docs</Link>
            <Link href="#" className="btn btn-secondary">View more examples</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SUPPORT — Three options
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.supportSection}>
        <div className={styles.supportInner}>
          <div className={styles.supportHeader}>
            <span className={styles.sectionLabel}>Support</span>
            <h2 className={styles.sectionTitle}>Need help?</h2>
            <p>Multiple ways to get the answers you need.</p>
          </div>
          
          <div className={styles.supportOptions}>
            {supportOptions.map((option, i) => (
              <Link 
                href={option.href} 
                key={option.title} 
                className={`${styles.supportCard} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className={styles.supportAction}>{option.action}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to dive in?</h2>
          <p className={styles.ctaBody}>
            Start your free trial and follow along with the quickstart guide.
          </p>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
            <Link className="btn btn-secondary" href="#quickstart">Read quickstart</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

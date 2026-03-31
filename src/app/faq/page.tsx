"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import styles from "./faq.module.css";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  const categories = [
    { id: "all", label: "All questions" },
    { id: "getting-started", label: "Getting Started" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing & Billing" },
    { id: "security", label: "Security" },
    { id: "technical", label: "Technical" },
  ];

  const faqs = [
    {
      category: "getting-started",
      question: "How do I get started with Prodvo?",
      answer: `Start by creating a free account—no credit card required. Once you're in, create your first workspace and connect your Git repository. From there, describe what you want to build in plain language, and Prodvo will generate a structured plan. Review and approve the plan, then watch agents execute while you maintain oversight at checkpoints.`,
    },
    {
      category: "getting-started",
      question: "How long does it take to see results?",
      answer: `Most teams run their first production workflow within an hour of signing up. Meaningful impact—reduced coordination overhead, faster cycle times—typically shows up within one sprint of active use.`,
    },
    {
      category: "getting-started",
      question: "Do I need to change my existing workflow?",
      answer: `No. Prodvo layers on top of your existing Git-based workflow. Your repositories, branches, and CI/CD pipelines stay the same. Prodvo adds visibility, coordination, and checkpoint controls without replacing what works.`,
    },
    {
      category: "features",
      question: "What are 'parallel agents' and how do they work?",
      answer: `Parallel agents are specialized AI workers that can execute different parts of a task simultaneously. For example, one agent handles frontend code while another works on the API and a third writes tests—all operating from the same intent lock but in isolated branches. They coordinate through shared context and merge at checkpoints.`,
    },
    {
      category: "features",
      question: "How do checkpoints work?",
      answer: `Checkpoints are human review gates you define in your workflow. When agents reach a checkpoint, they pause and present their work—code changes, test results, quality signals—for your approval. You can approve to continue, request revisions, or rollback to a previous checkpoint.`,
    },
    {
      category: "features",
      question: "Can I rollback if something goes wrong?",
      answer: `Yes. Every checkpoint creates a snapshot of your entire state—code, config, environment. If anything goes wrong after approval, you can rollback to any previous checkpoint with one click. Full state restoration, no manual cleanup required.`,
    },
    {
      category: "features",
      question: "What languages and frameworks are supported?",
      answer: `Prodvo supports TypeScript, JavaScript, Python, Go, Rust, Ruby, and Java. For frameworks, we work well with React, Next.js, Vue, Svelte, Django, FastAPI, Rails, and most modern web stacks. We're constantly expanding coverage based on user needs.`,
    },
    {
      category: "pricing",
      question: "Is there a free trial?",
      answer: `Yes. All plans include a 14-day free trial with full access to features. No credit card required to start. If you need more time to evaluate, contact us and we can extend your trial.`,
    },
    {
      category: "pricing",
      question: "Can I change plans later?",
      answer: `Absolutely. Upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle, and we prorate any differences. Workflows and data remain intact across plan changes.`,
    },
    {
      category: "pricing",
      question: "What happens when I hit my run limits?",
      answer: `On Starter, you'll see warnings at 80% of your monthly limit. At 100%, you can't start new runs until the next billing cycle or until you upgrade. Growth and Scale plans have unlimited runs.`,
    },
    {
      category: "security",
      question: "Where is my code stored?",
      answer: `Your code stays in your Git repository. Prodvo reads from and writes to your repos during execution but doesn't permanently store your source code. Execution logs and checkpoint metadata are stored securely in our SOC 2 compliant infrastructure.`,
    },
    {
      category: "security",
      question: "Is Prodvo SOC 2 compliant?",
      answer: `Yes. We maintain SOC 2 Type II certification. Enterprise customers on the Scale plan also get access to detailed audit logs, SAML SSO, and can request our full security documentation.`,
    },
    {
      category: "security",
      question: "Can agents access sensitive credentials?",
      answer: `Agents only access what you explicitly grant through environment variables and secrets. You control the scope of access, and all credential handling follows security best practices. Sensitive values are never logged or stored in plain text.`,
    },
    {
      category: "technical",
      question: "How does Prodvo integrate with my CI/CD pipeline?",
      answer: `Prodvo works alongside your existing CI/CD. When agents complete work and you approve at a checkpoint, the changes are committed to your branch and trigger your normal CI pipeline. We don't replace your pipeline—we orchestrate what feeds into it.`,
    },
    {
      category: "technical",
      question: "Can I self-host Prodvo?",
      answer: `Enterprise customers on Scale plans can discuss self-hosted deployment options. Most teams use our cloud-hosted version, which offers the best balance of performance, security, and maintenance simplicity.`,
    },
    {
      category: "technical",
      question: "What if an agent makes a mistake?",
      answer: `Checkpoints are your safety net. Agents pause at defined gates, so you review all changes before they proceed. If you spot an issue, request revisions or rollback. The system is designed so no irreversible change happens without your explicit approval.`,
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SiteShell>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <span className={styles.heroTag}>FAQ</span>
          <h1 className={styles.heroTitle}>
            Questions?
            <br />
            <em>We&apos;ve got answers.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Everything you need to know about Prodvo, from getting started 
            to enterprise security. Can&apos;t find what you&apos;re looking for? Reach out.
          </p>
          
          {/* Search */}
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ CONTENT — Two-column with sidebar filters
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          {/* Sidebar */}
          <aside className={styles.faqSidebar}>
            <h3>Categories</h3>
            <nav className={styles.categoryNav}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  <span className={styles.categoryCount}>
                    {cat.id === "all" 
                      ? faqs.length 
                      : faqs.filter(f => f.category === cat.id).length}
                  </span>
                </button>
              ))}
            </nav>
            
            <div className={styles.sidebarCta}>
              <h4>Still have questions?</h4>
              <p>Our team is here to help.</p>
              <Link className="btn btn-secondary" href="/docs">Contact support</Link>
            </div>
          </aside>
          
          {/* FAQ List */}
          <div className={styles.faqList}>
            {filteredFaqs.length === 0 ? (
              <div className={styles.noResults}>
                <p>No questions match your search.</p>
                <button 
                  type="button" 
                  className={styles.clearBtn}
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, i) => (
                <article key={faq.question} className={`${styles.faqItem} ${styles.reveal}`} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className={styles.faqCategoryTag}>
                    {categories.find(c => c.id === faq.category)?.label}
                  </div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          QUICK LINKS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.linksSection}>
        <div className={styles.linksInner}>
          <div className={styles.linksHeader}>
            <span className={styles.sectionLabel}>Resources</span>
            <h2 className={styles.sectionTitle}>Need more detail?</h2>
          </div>
          
          <div className={styles.linksGrid}>
            <Link href="/docs" className={styles.linkCard}>
              <div className={styles.linkIcon}>📚</div>
              <div>
                <h3>Documentation</h3>
                <p>Detailed guides and API references</p>
              </div>
            </Link>
            <Link href="/workflow" className={styles.linkCard}>
              <div className={styles.linkIcon}>🔄</div>
              <div>
                <h3>Workflow Guide</h3>
                <p>See how the execution flow works</p>
              </div>
            </Link>
            <Link href="/use-cases" className={styles.linkCard}>
              <div className={styles.linkIcon}>💼</div>
              <div>
                <h3>Use Cases</h3>
                <p>Real examples from teams like yours</p>
              </div>
            </Link>
            <Link href="/pricing" className={styles.linkCard}>
              <div className={styles.linkIcon}>💰</div>
              <div>
                <h3>Pricing</h3>
                <p>Plans and feature comparison</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to try Prodvo?</h2>
          <p className={styles.ctaBody}>
            Start your free trial and see the answers in action.
          </p>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary btn-lg" href="/pricing">Start free trial</Link>
            <Link className="btn btn-secondary" href="/docs">Talk to us</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

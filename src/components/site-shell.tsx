"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/workflow", label: "Workflow" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/docs", label: "Docs" },
];

type SiteShellProps = {
  buildTag: string;
  children: React.ReactNode;
};

export function SiteShell({ buildTag, children }: SiteShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement-wrap">
        <div className="container">
          <p className="announcement">
            Live build {buildTag}: multi-page rollout is active.
            <Link href="/product"> View product details</Link>
          </p>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? " scrolled" : ""}${mobileOpen ? " mobile-open" : ""}`}
      >
        <div className="container nav-row">
          <Link className="brand" href="/">
            <span className="brand-mark">PV</span>
            <span className="brand-text">Prodvo</span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="btn btn-header" href="/pricing">
              Start now
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={mobileOpen}
              aria-controls="mobile-panel"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>

        <div id="mobile-panel" className="mobile-panel" role="menu">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="brand" href="/">
                <span className="brand-mark">PV</span>
                <span className="brand-text">Prodvo</span>
              </Link>
              <p>
                AI coding agent workspace for teams that want speed, control, and
                production-grade outcomes in one place.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <Link href="/product">Platform</Link>
                </li>
                <li>
                  <Link href="/use-cases">Use cases</Link>
                </li>
                <li>
                  <Link href="/workflow">Workflow</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/docs">Documentation</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">Copyright {year} Prodvo. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

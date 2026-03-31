"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerLogoRef = useRef<HTMLDivElement>(null);
  const footerLogoRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  // Handle scroll state and logo collapse/expand
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      // Collapse/expand header logo based on scroll
      if (headerLogoRef.current) {
        if (isScrolled) {
          headerLogoRef.current.classList.remove("expanded");
        } else {
          headerLogoRef.current.classList.add("expanded");
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Expand logos on mount with animation
  useEffect(() => {
    const expandWithAnimation = (el: HTMLElement | null, delay: number) => {
      if (!el) return;
      // Start collapsed
      el.classList.remove("expanded");
      // Expand after delay
      setTimeout(() => {
        el.classList.add("expanded");
      }, delay);
    };
    
    expandWithAnimation(headerLogoRef.current, 100);
    expandWithAnimation(footerLogoRef.current, 200);
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
            🚀 Prodvo is now live — start building your product today.
            <Link href="/pricing"> Get started free</Link>
          </p>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? " scrolled" : ""}${mobileOpen ? " mobile-open" : ""}`}
      >
        <div className="container nav-row">
          <Link className="brand" href="/">
            <div className="prodvo-logo sz-nav" ref={headerLogoRef}>
              <span className="logo-prefix">P/</span>
              <div className="logo-word-wrap"><span className="logo-word">Prodvo</span></div>
              <span className="logo-dot">.</span>
            </div>
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
                <div className="prodvo-logo sz-xs expanded" ref={footerLogoRef}>
                  <span className="logo-prefix">P/</span>
                  <div className="logo-word-wrap"><span className="logo-word">Prodvo</span></div>
                  <span className="logo-dot">.</span>
                </div>
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

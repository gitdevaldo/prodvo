<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Prodvo — Logo & Icon System</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; }
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  color: #18181b;
  line-height: 1.6;
}

:root {
  --fire-orange:        #f97316;
  --fire-orange-dark:   #ea580c;
  --fire-orange-deep:   #c2410c;
  --fire-orange-darker: #9a3412;
  --fire-orange-soft:   #fdba74;
  --ink:   #18181b;
  --ink-2: #3f3f46;
  --ink-3: #71717a;
  --border: #e4e4e7;
  --cool:   #f4f4f5;
}

.page { max-width: 1120px; margin: 0 auto; padding: 4rem 2rem; }

/* ---- section labels ---- */
.sec-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.68rem; font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--fire-orange); margin-bottom: 0.75rem;
}
.sec-title {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 800; letter-spacing: -0.03em;
  color: var(--ink); margin-bottom: 2.5rem;
}

/* ---- showcase panels ---- */
.panel {
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.panel-head {
  background: var(--cool);
  border-bottom: 1px solid var(--border);
  padding: 0.65rem 1.4rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.67rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.09em; color: var(--ink-3);
  display: flex; align-items: center; justify-content: space-between;
}
.panel-body {
  padding: 3rem 2.5rem;
  display: flex; align-items: center; justify-content: center;
  gap: 4rem; flex-wrap: wrap;
}
.panel-body.dark {
  background: var(--ink);
}
.panel-body.orange {
  background: var(--fire-orange);
}
.panel-body.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  align-items: center;
  padding: 2.5rem;
}

.size-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.6rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--ink-3); margin-top: 0.6rem; text-align: center;
  display: block;
}
.size-label.light { color: rgba(255,255,255,0.45); }
.size-cell { display: flex; flex-direction: column; align-items: center; }

/* divider */
.divider { height: 1px; background: var(--border); margin: 3.5rem 0; }

/* export hint */
.export-note {
  font-size: 0.82rem; color: var(--ink-3); line-height: 1.65;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--border); border-radius: 10px;
  background: var(--cool);
  margin-top: 2rem;
  font-family: "JetBrains Mono", monospace;
}
</style>
</head>
<body>
<div class="page">

  <div style="margin-bottom:4rem;">
    <div class="sec-label">Brand Assets</div>
    <h1 class="sec-title" style="margin-bottom:0.4rem;">Prodvo — Logo &amp; Icon System</h1>
    <p style="font-size:0.9rem;color:var(--ink-3);max-width:540px;">Primary mark, wordmark lockups, icon-only variants, and size/context adaptations. All SVG, no raster.</p>
  </div>

  <!-- ============================================================
       CONCEPT: The mark is a geometric P where the bowl opens
       into a sharp forward-slash / caret — reading simultaneously
       as the letter P and a compile/prompt symbol.
       The slash is cut at ~35° — aggressive but not chaotic.
  ============================================================ -->

  <!-- ============================================================
       SECTION 1 — PRIMARY ICON MARK
  ============================================================ -->
  <div class="sec-label">01 — Primary icon mark</div>
  <p class="sec-title">The Prodvo mark</p>

  <div class="panel">
    <div class="panel-head">
      <span>On white — primary usage</span>
      <span>SVG · scalable</span>
    </div>
    <div class="panel-body">

      <!-- MASTER MARK — large showcase -->
      <!--
        CONCEPT: A square rounded container.
        Inside: a bold geometric "P" letterform where
        the right side of the bowl is replaced by a sharp
        angled slash — the universal "prompt / compile" symbol.
        The slash cuts down-right, visually escaping the P,
        suggesting code executing and escaping the terminal.
      -->
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Container: rounded square -->
        <rect width="120" height="120" rx="28" fill="#f97316"/>
        <!-- The P-slash composite mark — white on orange -->
        <!--
          The P stem: vertical bar on the left
          The P bowl: top half only, open on the right
          The slash: descends from the bowl's open right edge
                     down to the bottom-right area — like a cursor or compile arrow
        -->
        <!-- Stem of P -->
        <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
        <!-- Top bar of P bowl (horizontal top) -->
        <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
        <!-- Mid bar of P bowl (horizontal middle) -->
        <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
        <!-- Right arc of bowl — approximated with a rounded rect rotated -->
        <!-- We use a path for the bowl curve + slash combo -->
        <!-- Bowl right side: a tall right-rounded rect -->
        <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
        <!-- THE SLASH — the defining element -->
        <!-- A bold angled stroke from mid-right area down to bottom right -->
        <!-- Drawn as a rotated thick rounded rect -->
        <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
        <!-- Slash terminator: small filled circle at tip — the "cursor dot" -->
        <circle cx="83" cy="88" r="6" fill="white"/>
      </svg>

    </div>
  </div>

  <div class="panel">
    <div class="panel-head"><span>On dark</span></div>
    <div class="panel-body dark">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="28" fill="#f97316"/>
        <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
        <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
        <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
        <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
        <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
        <circle cx="83" cy="88" r="6" fill="white"/>
      </svg>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Dark bg variant: dark container, orange mark -->
        <rect width="120" height="120" rx="28" fill="#18181b"/>
        <rect x="28" y="26" width="13" height="68" rx="3" fill="#f97316"/>
        <rect x="28" y="26" width="36" height="12" rx="3" fill="#f97316"/>
        <rect x="28" y="54" width="30" height="11" rx="3" fill="#f97316"/>
        <rect x="54" y="26" width="12" height="39" rx="6" fill="#f97316"/>
        <rect x="57" y="55" width="13" height="44" rx="6" fill="#f97316" transform="rotate(-22 63 77)"/>
        <circle cx="83" cy="88" r="6" fill="#f97316"/>
      </svg>
    </div>
  </div>

  <div class="panel">
    <div class="panel-head"><span>On orange brand background</span></div>
    <div class="panel-body orange">
      <!-- White container, orange mark -->
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" rx="28" fill="white"/>
        <rect x="28" y="26" width="13" height="68" rx="3" fill="#f97316"/>
        <rect x="28" y="26" width="36" height="12" rx="3" fill="#f97316"/>
        <rect x="28" y="54" width="30" height="11" rx="3" fill="#f97316"/>
        <rect x="54" y="26" width="12" height="39" rx="6" fill="#f97316"/>
        <rect x="57" y="55" width="13" height="44" rx="6" fill="#f97316" transform="rotate(-22 63 77)"/>
        <circle cx="83" cy="88" r="6" fill="#f97316"/>
      </svg>
      <!-- No container, white mark -->
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
        <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
        <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
        <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
        <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
        <circle cx="83" cy="88" r="6" fill="white"/>
      </svg>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 2 — SIZE SCALE
  ============================================================ -->
  <div class="sec-label">02 — Size scale</div>
  <p class="sec-title">From favicon to billboard</p>

  <div class="panel">
    <div class="panel-head"><span>Icon at all sizes — white bg</span></div>
    <div class="panel-body grid" style="align-items:end;">

      <!-- 512px equivalent — shown at 200 -->
      <div class="size-cell">
        <svg width="200" height="200" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label">512 × 512</span>
      </div>

      <div class="size-cell">
        <svg width="96" height="96" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label">96 × 96</span>
      </div>

      <div class="size-cell">
        <svg width="64" height="64" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label">64 × 64</span>
      </div>

      <div class="size-cell">
        <svg width="48" height="48" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label">48 × 48</span>
      </div>

      <div class="size-cell">
        <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label">32 × 32</span>
      </div>

      <!-- 16px favicon — simplified version -->
      <div class="size-cell">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Simplified favicon — just the P + slash, no container, at pixel scale -->
          <rect width="24" height="24" rx="5" fill="#f97316"/>
          <!-- Stem -->
          <rect x="5" y="4" width="3" height="16" rx="1" fill="white"/>
          <!-- Top -->
          <rect x="5" y="4" width="9" height="3" rx="1" fill="white"/>
          <!-- Mid -->
          <rect x="5" y="11" width="7" height="3" rx="1" fill="white"/>
          <!-- Bowl right -->
          <rect x="11" y="4" width="3" height="10" rx="1.5" fill="white"/>
          <!-- Slash -->
          <rect x="12" y="13" width="3" height="8" rx="1.5" fill="white" transform="rotate(-20 13 17)"/>
          <!-- Dot -->
          <circle cx="17" cy="20" r="1.5" fill="white"/>
        </svg>
        <span class="size-label">24 × 24</span>
      </div>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 3 — WORDMARK LOCKUPS
  ============================================================ -->
  <div class="sec-label">03 — Wordmark lockups</div>
  <p class="sec-title">Logo + name combinations</p>

  <!-- Horizontal lockup — white bg -->
  <div class="panel">
    <div class="panel-head"><span>Horizontal lockup — white background</span></div>
    <div class="panel-body" style="flex-direction:column;gap:2.5rem;">

      <!-- HORIZONTAL — icon left, wordmark right -->
      <svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Icon mark — 56×56 -->
        <rect width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="13" y="12" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="13" y="12" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="13" y="25" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="25" y="12" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="26" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 29 35.5)"/>
        <circle cx="38.5" cy="41" r="2.8" fill="white"/>
        <!-- Wordmark: "Prodvo" -->
        <text x="72" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="28" fill="#18181b" letter-spacing="-1.2">Prodvo</text>
        <!-- Period accent -->
        <circle cx="270" cy="38" r="3.5" fill="#f97316"/>
      </svg>

      <!-- HORIZONTAL — with tagline -->
      <svg width="320" height="72" viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="13" y="12" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="13" y="12" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="13" y="25" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="25" y="12" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="26" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 29 35.5)"/>
        <circle cx="38.5" cy="41" r="2.8" fill="white"/>
        <!-- Wordmark -->
        <text x="72" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22" fill="#18181b" letter-spacing="-0.8">Prodvo</text>
        <circle cx="218" cy="30" r="2.8" fill="#f97316"/>
        <!-- Tagline -->
        <text x="72" y="52" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="11" fill="#71717a" letter-spacing="0.2">AI Agent for Builders</text>
      </svg>

    </div>
  </div>

  <!-- Horizontal lockup — dark bg -->
  <div class="panel">
    <div class="panel-head"><span>Horizontal lockup — dark background</span></div>
    <div class="panel-body dark" style="flex-direction:column;gap:2.5rem;">

      <svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="13" y="12" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="13" y="12" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="13" y="25" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="25" y="12" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="26" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 29 35.5)"/>
        <circle cx="38.5" cy="41" r="2.8" fill="white"/>
        <text x="72" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="28" fill="white" letter-spacing="-1.2">Prodvo</text>
        <circle cx="270" cy="38" r="3.5" fill="#f97316"/>
      </svg>

      <svg width="320" height="72" viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="13" y="12" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="13" y="12" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="13" y="25" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="25" y="12" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="26" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 29 35.5)"/>
        <circle cx="38.5" cy="41" r="2.8" fill="white"/>
        <text x="72" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22" fill="white" letter-spacing="-0.8">Prodvo</text>
        <circle cx="218" cy="30" r="2.8" fill="#f97316"/>
        <text x="72" y="52" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="11" fill="rgba(255,255,255,0.5)" letter-spacing="0.2">AI Agent for Builders</text>
      </svg>

    </div>
  </div>

  <!-- Stacked lockup -->
  <div class="panel">
    <div class="panel-head"><span>Stacked / centered lockup</span></div>
    <div class="panel-body" style="gap:5rem;">

      <!-- White bg stacked -->
      <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Center icon at top -->
        <rect x="32" y="0" width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="45" y="12" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="45" y="12" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="45" y="25" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="57" y="12" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="58" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 61 35.5)"/>
        <circle cx="70.5" cy="41" r="2.8" fill="white"/>
        <!-- Wordmark centered below -->
        <text x="60" y="96" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="24" fill="#18181b" letter-spacing="-1" text-anchor="middle">Prodvo</text>
        <circle cx="104" cy="96" r="3" fill="#f97316"/>
        <!-- Tagline -->
        <text x="60" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="9.5" fill="#71717a" letter-spacing="0.3" text-anchor="middle">AI Agent for Builders</text>
      </svg>

      <!-- Dark bg stacked -->
      <svg width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="180" rx="18" fill="#18181b"/>
        <!-- icon -->
        <rect x="52" y="20" width="56" height="56" rx="13" fill="#f97316"/>
        <rect x="65" y="32" width="6" height="32" rx="1.5" fill="white"/>
        <rect x="65" y="32" width="17" height="5.5" rx="1.5" fill="white"/>
        <rect x="65" y="45" width="14" height="5" rx="1.5" fill="white"/>
        <rect x="77" y="32" width="5.5" height="18" rx="2.8" fill="white"/>
        <rect x="78" y="45.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 81 55.5)"/>
        <circle cx="90.5" cy="61" r="2.8" fill="white"/>
        <!-- Wordmark -->
        <text x="80" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="24" fill="white" letter-spacing="-1" text-anchor="middle">Prodvo</text>
        <circle cx="122" cy="112" r="3" fill="#f97316"/>
        <!-- Tagline -->
        <text x="80" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="9.5" fill="rgba(255,255,255,0.45)" letter-spacing="0.3" text-anchor="middle">AI Agent for Builders</text>
        <!-- Divider line -->
        <line x1="40" y1="148" x2="120" y2="148" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <text x="80" y="165" font-family="'JetBrains Mono', monospace" font-weight="500" font-size="8" fill="rgba(255,255,255,0.3)" letter-spacing="0.8" text-anchor="middle">PRODVO.DEV</text>
      </svg>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 4 — ICON MARK VARIANTS (no container)
  ============================================================ -->
  <div class="sec-label">04 — Mark-only variants</div>
  <p class="sec-title">Containerless — for inline use</p>

  <div class="panel">
    <div class="panel-head"><span>No container — mark only, multiple colors</span></div>
    <div class="panel-body grid">

      <!-- Orange mark on white — large -->
      <div class="size-cell">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="14" width="17" height="92" rx="4" fill="#f97316"/>
          <rect x="20" y="14" width="48" height="16" rx="4" fill="#f97316"/>
          <rect x="20" y="55" width="41" height="15" rx="4" fill="#f97316"/>
          <rect x="57" y="14" width="16" height="56" rx="8" fill="#f97316"/>
          <rect x="62" y="66" width="17" height="57" rx="8" fill="#f97316" transform="rotate(-22 70 94)"/>
          <circle cx="96" cy="108" r="9" fill="#f97316"/>
        </svg>
        <span class="size-label">Orange / white bg</span>
      </div>

      <!-- Deep orange -->
      <div class="size-cell">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="14" width="17" height="92" rx="4" fill="#c2410c"/>
          <rect x="20" y="14" width="48" height="16" rx="4" fill="#c2410c"/>
          <rect x="20" y="55" width="41" height="15" rx="4" fill="#c2410c"/>
          <rect x="57" y="14" width="16" height="56" rx="8" fill="#c2410c"/>
          <rect x="62" y="66" width="17" height="57" rx="8" fill="#c2410c" transform="rotate(-22 70 94)"/>
          <circle cx="96" cy="108" r="9" fill="#c2410c"/>
        </svg>
        <span class="size-label">Deep orange</span>
      </div>

      <!-- Ink / black -->
      <div class="size-cell">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="14" width="17" height="92" rx="4" fill="#18181b"/>
          <rect x="20" y="14" width="48" height="16" rx="4" fill="#18181b"/>
          <rect x="20" y="55" width="41" height="15" rx="4" fill="#18181b"/>
          <rect x="57" y="14" width="16" height="56" rx="8" fill="#18181b"/>
          <rect x="62" y="66" width="17" height="57" rx="8" fill="#18181b" transform="rotate(-22 70 94)"/>
          <circle cx="96" cy="108" r="9" fill="#18181b"/>
        </svg>
        <span class="size-label">Ink / black</span>
      </div>

      <!-- White on dark -->
      <div class="size-cell" style="background:var(--ink);padding:1rem;border-radius:10px;">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="14" width="17" height="92" rx="4" fill="white"/>
          <rect x="20" y="14" width="48" height="16" rx="4" fill="white"/>
          <rect x="20" y="55" width="41" height="15" rx="4" fill="white"/>
          <rect x="57" y="14" width="16" height="56" rx="8" fill="white"/>
          <rect x="62" y="66" width="17" height="57" rx="8" fill="white" transform="rotate(-22 70 94)"/>
          <circle cx="96" cy="108" r="9" fill="white"/>
        </svg>
        <span class="size-label light">White / dark bg</span>
      </div>

      <!-- Soft/muted -->
      <div class="size-cell">
        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="14" width="17" height="92" rx="4" fill="#fdba74"/>
          <rect x="20" y="14" width="48" height="16" rx="4" fill="#fdba74"/>
          <rect x="20" y="55" width="41" height="15" rx="4" fill="#fdba74"/>
          <rect x="57" y="14" width="16" height="56" rx="8" fill="#fdba74"/>
          <rect x="62" y="66" width="17" height="57" rx="8" fill="#fdba74" transform="rotate(-22 70 94)"/>
          <circle cx="96" cy="108" r="9" fill="#fdba74"/>
        </svg>
        <span class="size-label">Soft orange</span>
      </div>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 5 — FAVICON / APP ICON
  ============================================================ -->
  <div class="sec-label">05 — Favicon &amp; app icon</div>
  <p class="sec-title">Small-scale optimized</p>

  <div class="panel">
    <div class="panel-head"><span>Favicon variants — pixel-optimized at small sizes</span></div>
    <div class="panel-body grid" style="align-items:end;">

      <!-- 32px favicon — orange bg -->
      <div class="size-cell">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="7" fill="#f97316"/>
          <rect x="6" y="5" width="4" height="22" rx="1" fill="white"/>
          <rect x="6" y="5" width="12" height="4" rx="1" fill="white"/>
          <rect x="6" y="13.5" width="10" height="4" rx="1" fill="white"/>
          <rect x="14" y="5" width="4" height="13" rx="2" fill="white"/>
          <rect x="15" y="17" width="4" height="12" rx="2" fill="white" transform="rotate(-20 17 23)"/>
          <circle cx="23" cy="27" r="2" fill="white"/>
        </svg>
        <span class="size-label">32px · orange</span>
      </div>

      <!-- 32px favicon — dark bg -->
      <div class="size-cell">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="7" fill="#18181b"/>
          <rect x="6" y="5" width="4" height="22" rx="1" fill="#f97316"/>
          <rect x="6" y="5" width="12" height="4" rx="1" fill="#f97316"/>
          <rect x="6" y="13.5" width="10" height="4" rx="1" fill="#f97316"/>
          <rect x="14" y="5" width="4" height="13" rx="2" fill="#f97316"/>
          <rect x="15" y="17" width="4" height="12" rx="2" fill="#f97316" transform="rotate(-20 17 23)"/>
          <circle cx="23" cy="27" r="2" fill="#f97316"/>
        </svg>
        <span class="size-label">32px · dark</span>
      </div>

      <!-- iOS app icon style — 60px -->
      <div class="size-cell">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- iOS-style continuous corner radius ~27% of size -->
          <rect width="120" height="120" rx="26" fill="#f97316"/>
          <!-- Slightly larger forms for app icon legibility -->
          <rect x="26" y="22" width="14" height="76" rx="4" fill="white"/>
          <rect x="26" y="22" width="40" height="13" rx="4" fill="white"/>
          <rect x="26" y="52" width="34" height="12" rx="4" fill="white"/>
          <rect x="52" y="22" width="13" height="42" rx="6.5" fill="white"/>
          <rect x="56" y="62" width="14" height="46" rx="7" fill="white" transform="rotate(-22 63 85)"/>
          <circle cx="87" cy="96" r="8" fill="white"/>
        </svg>
        <span class="size-label">App icon · 120px</span>
      </div>

      <!-- Notched / pill variant for nav -->
      <div class="size-cell">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#f97316"/>
          <rect x="11" y="9" width="6" height="30" rx="1.5" fill="white"/>
          <rect x="11" y="9" width="16" height="6" rx="1.5" fill="white"/>
          <rect x="11" y="21" width="13" height="5" rx="1.5" fill="white"/>
          <rect x="21" y="9" width="6" height="17" rx="3" fill="white"/>
          <rect x="23" y="25" width="6" height="17" rx="3" fill="white" transform="rotate(-22 26 33.5)"/>
          <circle cx="34" cy="38" r="3.5" fill="white"/>
        </svg>
        <span class="size-label">Nav · 48px</span>
      </div>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 6 — ANIMATED MARK (CSS)
  ============================================================ -->
  <div class="sec-label">06 — Motion variant</div>
  <p class="sec-title">Loading / animated state</p>

  <style>
    @keyframes slash-draw {
      0%   { transform: scaleY(0) rotate(-22deg); transform-origin: top center; opacity:0; }
      60%  { opacity:1; }
      100% { transform: scaleY(1) rotate(-22deg); transform-origin: top center; opacity:1; }
    }
    @keyframes dot-pop {
      0%   { r: 0; opacity: 0; }
      70%  { r: 10; opacity: 1; }
      100% { r: 9; opacity: 1; }
    }
    @keyframes mark-fade {
      0%   { opacity: 0; transform: translateY(4px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes mark-pulse {
      0%,100% { opacity:1; }
      50% { opacity:0.7; }
    }

    .anim-mark rect.stem     { animation: mark-fade 0.3s ease forwards; animation-delay: 0s; opacity:0; }
    .anim-mark rect.top-bar  { animation: mark-fade 0.3s ease forwards; animation-delay: 0.06s; opacity:0; }
    .anim-mark rect.mid-bar  { animation: mark-fade 0.3s ease forwards; animation-delay: 0.12s; opacity:0; }
    .anim-mark rect.bowl-r   { animation: mark-fade 0.3s ease forwards; animation-delay: 0.18s; opacity:0; }
    .anim-mark rect.slash    { animation: mark-fade 0.4s cubic-bezier(0.4,0,0.2,1) forwards; animation-delay: 0.28s; opacity:0; }
    .anim-mark circle.dot    { animation: dot-pop 0.3s ease forwards; animation-delay: 0.55s; r:0; }

    .pulse-mark {
      animation: mark-pulse 2s ease-in-out infinite;
    }
  </style>

  <div class="panel">
    <div class="panel-head"><span>CSS animated — entrance sequence (reload page to replay)</span></div>
    <div class="panel-body" style="gap:5rem;">

      <!-- Animated entrance -->
      <div style="text-align:center;">
        <svg class="anim-mark" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect class="stem"    x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect class="top-bar" x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect class="mid-bar" x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect class="bowl-r"  x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect class="slash"   x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle class="dot"   cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label" style="margin-top:0.8rem;">Entrance animation</span>
      </div>

      <!-- Pulse / loading state -->
      <div style="text-align:center;">
        <svg class="pulse-mark" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" rx="28" fill="#f97316"/>
          <rect x="28" y="26" width="13" height="68" rx="3" fill="white"/>
          <rect x="28" y="26" width="36" height="12" rx="3" fill="white"/>
          <rect x="28" y="54" width="30" height="11" rx="3" fill="white"/>
          <rect x="54" y="26" width="12" height="39" rx="6" fill="white"/>
          <rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/>
          <circle cx="83" cy="88" r="6" fill="white"/>
        </svg>
        <span class="size-label" style="margin-top:0.8rem;">Pulse / loading state</span>
      </div>

    </div>
  </div>

  <div class="divider"></div>

  <!-- ============================================================
       SECTION 7 — STANDALONE SVG CODE (copyable)
  ============================================================ -->
  <div class="sec-label">07 — SVG source</div>
  <p class="sec-title">Copy-ready code</p>

  <div class="panel">
    <div class="panel-head"><span>Primary icon mark — 120×120 — copy this SVG</span></div>
    <div style="padding:1.5rem 2rem;font-family:'JetBrains Mono',monospace;font-size:0.75rem;line-height:1.9;color:var(--ink-3);background:var(--cool);overflow-x:auto;">
&lt;svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;<br>
&nbsp;&nbsp;&lt;rect width="120" height="120" rx="28" fill="#f97316"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="28" y="26" width="13" height="68" rx="3" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="28" y="26" width="36" height="12" rx="3" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="28" y="54" width="30" height="11" rx="3" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="54" y="26" width="12" height="39" rx="6" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="57" y="55" width="13" height="44" rx="6" fill="white" transform="rotate(-22 63 77)"/&gt;<br>
&nbsp;&nbsp;&lt;circle cx="83" cy="88" r="6" fill="white"/&gt;<br>
&lt;/svg&gt;
    </div>
  </div>

  <div class="panel">
    <div class="panel-head"><span>Horizontal wordmark — 280×56 — copy this SVG</span></div>
    <div style="padding:1.5rem 2rem;font-family:'JetBrains Mono',monospace;font-size:0.75rem;line-height:1.9;color:var(--ink-3);background:var(--cool);overflow-x:auto;">
&lt;svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;<br>
&nbsp;&nbsp;&lt;!-- Icon mark --&gt;<br>
&nbsp;&nbsp;&lt;rect width="56" height="56" rx="13" fill="#f97316"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="13" y="12" width="6" height="32" rx="1.5" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="13" y="12" width="17" height="5.5" rx="1.5" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="13" y="25" width="14" height="5" rx="1.5" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="25" y="12" width="5.5" height="18" rx="2.8" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;rect x="26" y="25.5" width="6" height="20" rx="2.8" fill="white" transform="rotate(-22 29 35.5)"/&gt;<br>
&nbsp;&nbsp;&lt;circle cx="38.5" cy="41" r="2.8" fill="white"/&gt;<br>
&nbsp;&nbsp;&lt;!-- Wordmark --&gt;<br>
&nbsp;&nbsp;&lt;text x="72" y="38" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="28" fill="#18181b" letter-spacing="-1.2"&gt;Prodvo&lt;/text&gt;<br>
&nbsp;&nbsp;&lt;circle cx="270" cy="38" r="3.5" fill="#f97316"/&gt;<br>
&lt;/svg&gt;
    </div>
  </div>

  <div class="export-note">
    <strong style="color:var(--ink);">Note:</strong> The wordmark uses Plus Jakarta Sans weight 900. For standalone SVG files intended for use without web fonts, convert the text element to outlines in Figma or Illustrator before exporting. The icon mark is purely geometric and requires no fonts.
  </div>

</div>
</body>
</html>

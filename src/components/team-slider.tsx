"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
}

export function TeamSlider({ members }: { members: readonly TeamMember[] }) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: number) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return members.length - 1;
      if (next >= members.length) return 0;
      return next;
    });
  }, [members.length]);

  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [go]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(1), 5000);
  };

  const handlePrev = () => { go(-1); resetAuto(); };
  const handleNext = () => { go(1); resetAuto(); };
  const handleDot = (i: number) => { setActive(i); resetAuto(); };

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
  };

  const initials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  const member = members[active];

  return (
    <div className="about-slider-wrapper">
      <div className="container">
        <div
          className="about-slider"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => setDragging(false)}
        >
          <button
            className="about-slider-arrow about-slider-prev"
            onClick={handlePrev}
            aria-label="Previous team member"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="about-slider-stage">
            <div className="about-slider-photo">
              <div className="about-slider-shimmer">
                <span className="about-slider-initials">{initials(member.name)}</span>
              </div>
            </div>

            <div className="about-slider-info">
              <span className="about-slider-counter">{`${String(active + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`}</span>
              <h3 className="about-slider-name">{member.name}</h3>
              <span className="about-slider-role">{member.role}</span>
              <p className="about-slider-bio">{member.bio}</p>
            </div>
          </div>

          <button
            className="about-slider-arrow about-slider-next"
            onClick={handleNext}
            aria-label="Next team member"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="about-slider-dots">
          {members.map((m, i) => (
            <button
              key={m.name}
              className={`about-slider-dot${i === active ? " active" : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Go to ${m.name}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

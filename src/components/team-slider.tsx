"use client";

interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
}

export function TeamSlider({ members }: { members: readonly TeamMember[] }) {
  const initials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <div className="about-team-grid">
      {members.map((member) => (
        <div key={member.name} className="about-team-card">
          <div className="about-slider-photo">
            <div className="about-slider-shimmer">
              <span className="about-slider-initials">{initials(member.name)}</span>
            </div>
          </div>
          <div className="about-team-card-info">
            <h3 className="about-team-card-name">{member.name}</h3>
            <span className="about-team-card-role">{member.role}</span>
            <p className="about-team-card-bio">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

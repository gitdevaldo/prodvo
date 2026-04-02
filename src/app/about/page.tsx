import { SiteShell } from "@/components/site-shell";
import { ComingSoonView } from "@/components/coming-soon-view";

export default function AboutPage() {
  return (
    <SiteShell>
      <ComingSoonView
        label="About"
        title="About page is coming soon"
        description="We are preparing the full About page. It will be available soon."
      />
    </SiteShell>
  );
}

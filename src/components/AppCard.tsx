import { ArrowUpRight } from "lucide-react";

type AppCardProps = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  accent: string;
};

export function AppCard({ name, tagline, description, url, icon, accent }: AppCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg"
          style={{ backgroundColor: accent, color: "var(--primary-foreground)" }}
        >
          {icon}
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{name}</h3>
        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          {tagline}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground">
          {url.replace("https://", "")}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Online
        </span>
      </div>
    </a>
  );
}

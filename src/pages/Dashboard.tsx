import { Box, Map, Activity, Database } from "lucide-react";
import { AppCard } from "@/components/AppCard";

const apps = [
  {
    name: "PointCloud",
    tagline: "3D Viewer",
    description:
      "Drag and drop a .las, .laz, or .ply file and render it instantly in the browser. Open scan output and explore in 3D — no installation required.",
    url: "https://pointcloud.opsdeck.co.za",
    icon: <Box className="h-5 w-5" strokeWidth={2} />,
    accent: "oklch(0.45 0.15 250)",
  },
  {
    name: "Route",
    tagline: "Mission Planner",
    description:
      "Plan DJI missions in the browser. Place waypoints on an interactive map, configure altitude, speed, gimbal angle and overlap, then export a .kmz ready for the controller.",
    url: "https://route.opsdeck.co.za",
    icon: <Map className="h-5 w-5" strokeWidth={2} />,
    accent: "oklch(0.5 0.14 180)",
  },
  {
    name: "Skydra",
    tagline: "Flight Analytics",
    description:
      "Ingest DJI logs and Litchi CSV files into a local-first dashboard. Battery health, telemetry, path visualization, and burned-in video overlays — raw log in, insights out.",
    url: "https://skydra.opsdeck.co.za",
    icon: <Activity className="h-5 w-5" strokeWidth={2} />,
    accent: "oklch(0.55 0.16 30)",
  },
  {
    name: "Vault",
    tagline: "Geospatial Storage",
    description:
      "Your geospatial data vault. Store, index, and serve orthophotos, point clouds, DEMs and raw imagery — searchable by location and date, accessible by every tool via API.",
    url: "https://vault.opsdeck.co.za",
    icon: <Database className="h-5 w-5" strokeWidth={2} />,
    accent: "oklch(0.4 0.05 250)",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <header className="border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-md bg-foreground flex items-center justify-center">
                <div className="h-2 w-2 rounded-sm bg-background" />
              </div>
              <span className="font-semibold tracking-tight text-foreground">
                OpsDeck
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Drone Operations Suite
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Your operations,
              <br />
              <span className="text-muted-foreground">in one place.</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-xl">
              Plan missions, analyze flights, explore point clouds, and manage geospatial
              data — every tool in your stack, one click away.
            </p>
          </div>
        </section>

        {/* Apps grid */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Applications · {apps.length}
            </h2>
            <div className="h-px flex-1 ml-6 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {apps.map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">opsdeck.co.za</span>
            <span>© {new Date().getFullYear()} OpsDeck</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import hexacopter from "@/assets/hexacopter-processed.jpg";

interface Tool {
  name: string;
  role: string;
  desc: string;
}

interface Category {
  label: string;
  code: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    label: "Fleet & Operations",
    code: "FLEET_OPS",
    tools: [
      { name: "Pocket-ID", role: "Identity & SSO", desc: "Unified authentication across all Ops Deck tools. One identity, every module." },
      { name: "Dispatch", role: "Missions, Crew, CRM, Invoicing", desc: "Plan missions, assign crew, manage clients, and generate invoices from a single command center." },
      { name: "Clearpath", role: "Compliance & Flight Planning", desc: "SACAA-ready flight plans, airspace checks, and regulatory compliance automation." },
      { name: "Tessera", role: "Grid Survey Dispatch", desc: "Automated grid-based survey planning. Define area, deploy pattern, capture data." },
    ],
  },
  {
    label: "Analytics & Data",
    code: "DATA_SYS",
    tools: [
      { name: "Uplink", role: "Flight Log Ingestion", desc: "Ingest, parse, and normalize flight logs from any drone manufacturer or controller." },
      { name: "Forge", role: "Photogrammetry Processing", desc: "Cloud-based orthomosaic and 3D model generation from aerial imagery datasets." },
      { name: "Pinpoint", role: "AI Georeferencing", desc: "Machine-learning powered coordinate alignment and spatial accuracy correction." },
      { name: "Vault", role: "Data Storage & Sharing", desc: "Encrypted project storage with granular sharing and access control per client." },
      { name: "Skydra", role: "Analytics & Maintenance", desc: "Fleet health metrics, usage patterns, and predictive maintenance scheduling." },
    ],
  },
  {
    label: "Live Operations",
    code: "LIVE_OPS",
    tools: [
      { name: "Sentinel", role: "Real-time Detection", desc: "Object detection and anomaly alerts during live flight operations." },
      { name: "Horizon", role: "Live Tracking", desc: "Real-time fleet position tracking with telemetry overlay and geofencing." },
      { name: "Iris", role: "Live Video Streaming", desc: "Low-latency video feed from drone cameras to ops center and stakeholders." },
      { name: "Rewind", role: "Flight Replay", desc: "Full 3D flight path reconstruction with synced telemetry and video playback." },
    ],
  },
  {
    label: "Intelligence & Hardware",
    code: "INTEL_HW",
    tools: [
      { name: "Bedrock", role: "Field Data Capture", desc: "Ground-truth data collection for calibration, validation, and site assessment." },
      { name: "Atlas", role: "3D Client Portal", desc: "Interactive 3D viewer for delivering processed models and maps to clients." },
      { name: "ShadowNet", role: "OSINT Intelligence", desc: "Open-source intelligence gathering and analysis for operational awareness." },
      { name: "SignalSense", role: "Human Detection via WiFi", desc: "Passive WiFi signal analysis for detecting human presence in operational zones." },
    ],
  },
];

const ToolDetails = () => (
  <section className="relative py-24 border-t border-border overflow-hidden">
    {/* Background image - very faded */}
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
      <img src={hexacopter} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>

    <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16">
      <div className="flex items-start justify-between mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label text-primary text-[10px] mb-3"
          >
            TOOL INDEX
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold"
          >
            Module Details
          </motion.h2>
        </div>

        {/* Decorative crosshair */}
        <motion.svg
          initial={{ opacity: 0, rotate: -90 }}
          whileInView={{ opacity: 0.2, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          viewBox="0 0 80 80"
          className="w-16 h-16 shrink-0 hidden md:block"
          fill="none"
        >
          <circle cx="40" cy="40" r="30" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="15" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="3" fill="hsl(14,100%,50%)" />
          <line x1="40" y1="0" x2="40" y2="25" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
          <line x1="40" y1="55" x2="40" y2="80" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="25" y2="40" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
          <line x1="55" y1="40" x2="80" y2="40" stroke="hsl(14,100%,50%)" strokeWidth="0.5" />
        </motion.svg>
      </div>

      <div className="space-y-20">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.code}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.05 }}
          >
            {/* Category header */}
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">{cat.label}</h3>
              </div>
              <span className="text-label text-muted-foreground text-[10px]">[{cat.code}]</span>
            </div>
            <div className="tech-line mb-6" />

            {/* Tool entries */}
            <div className="grid md:grid-cols-2 gap-4">
              {cat.tools.map((tool, ti) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: ti % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.05 }}
                  className="border border-border p-5 hover:border-primary transition-all group relative overflow-hidden"
                >
                  {/* Hover accent bar */}
                  <div className="absolute left-0 top-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">{tool.name}</h4>
                    <span className="text-label text-muted-foreground text-[9px]">{tool.role}</span>
                  </div>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolDetails;

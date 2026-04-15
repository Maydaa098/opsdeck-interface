import { motion } from "framer-motion";

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
  <section className="relative py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-label text-primary mb-3"
      >
        SYS::MODULES
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-20"
      >
        Tool Index
      </motion.h2>

      <div className="space-y-24">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.code}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 border border-primary rotate-45" />
              <h3 className="text-2xl md:text-3xl font-bold">{cat.label}</h3>
              <span className="text-label text-muted-foreground ml-auto">[{cat.code}]</span>
            </div>
            <div className="h-[1px] bg-border mb-8" />

            {/* Tool entries */}
            <div className="grid md:grid-cols-2 gap-[1px] bg-border">
              {cat.tools.map((tool, ti) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.05 }}
                  className="bg-background p-6 md:p-8 group hover:bg-card transition-colors border-l-2 border-transparent hover:border-primary"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {tool.name}
                    </h4>
                    <span className="text-label text-muted-foreground text-[10px]">{tool.role}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.desc}</p>
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

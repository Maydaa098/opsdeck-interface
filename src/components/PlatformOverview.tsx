import { motion } from "framer-motion";
import CrosshairSVG from "./CrosshairSVG";

const tools = [
  { id: "01", name: "Pocket-ID", role: "Identity & SSO" },
  { id: "02", name: "Dispatch", role: "Missions & CRM" },
  { id: "03", name: "Clearpath", role: "Compliance" },
  { id: "04", name: "Tessera", role: "Grid Surveys" },
  { id: "05", name: "Uplink", role: "Flight Logs" },
  { id: "06", name: "Forge", role: "Photogrammetry" },
  { id: "07", name: "Pinpoint", role: "AI Georef" },
  { id: "08", name: "Sentinel", role: "Detection" },
  { id: "09", name: "Bedrock", role: "Field Data" },
  { id: "10", name: "Vault", role: "Storage" },
  { id: "11", name: "Skydra", role: "Analytics" },
  { id: "12", name: "Horizon", role: "Live Track" },
  { id: "13", name: "Iris", role: "Video Stream" },
  { id: "14", name: "Atlas", role: "3D Portal" },
  { id: "15", name: "Rewind", role: "Flight Replay" },
  { id: "16", name: "ShadowNet", role: "OSINT Intel" },
  { id: "17", name: "SignalSense", role: "WiFi Detect" },
];

const PlatformOverview = () => (
  <section id="overview" className="relative py-32 overflow-hidden">
    {/* Decorative grid overlay */}
    <div className="absolute inset-0 grid-bg-fine opacity-50" />

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Section header */}
      <div className="flex items-start gap-6 mb-20">
        <CrosshairSVG className="text-primary mt-1 shrink-0" />
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label text-primary mb-3"
          >
            SYS::OVERVIEW
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold"
          >
            System Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            17 purpose-built tools forming a unified drone operations ecosystem. 
            Each module handles a specific domain — from identity to intelligence.
          </motion.p>
        </div>
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[1px] bg-border">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="bg-background p-5 group hover:bg-secondary transition-colors duration-300"
          >
            <span className="text-label text-muted-foreground text-[10px]">{tool.id}</span>
            <h3 className="font-semibold text-lg mt-2 group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <p className="text-label text-muted-foreground mt-1 text-[10px]">{tool.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative SVG divider */}
      <svg className="w-full h-8 mt-12 text-border" viewBox="0 0 1400 30" fill="none">
        <line x1="0" y1="15" x2="1400" y2="15" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="700" cy="15" r="4" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="700" cy="15" r="1.5" fill="currentColor" />
      </svg>
    </div>
  </section>
);

export default PlatformOverview;

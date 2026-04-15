import { motion } from "framer-motion";

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
  <section id="overview" className="relative py-24 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-8 md:px-16">
      {/* Section header */}
      <div className="flex items-start justify-between mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label text-primary text-[10px] mb-3"
          >
            SYSTEM OVERVIEW
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold"
          >
            17 Tools.
            <br />
            One Platform.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block max-w-xs text-muted-foreground font-mono text-xs leading-relaxed text-right mt-6"
        >
          Purpose-built modules forming a unified drone operations ecosystem.
          Each handles a specific domain — from identity to intelligence.
        </motion.p>
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="border border-border p-4 group hover:bg-foreground hover:text-background transition-colors duration-200 cursor-default"
          >
            <span className="text-label text-muted-foreground text-[9px] group-hover:text-background/50">{tool.id}</span>
            <h3 className="font-semibold text-sm mt-1 group-hover:text-background">
              {tool.name}
            </h3>
            <p className="text-label text-muted-foreground text-[9px] mt-1 group-hover:text-background/60">{tool.role}</p>
          </motion.div>
        ))}
        {/* Empty filler cell */}
        <div className="border border-border p-4 bg-muted/30" />
      </div>
    </div>
  </section>
);

export default PlatformOverview;

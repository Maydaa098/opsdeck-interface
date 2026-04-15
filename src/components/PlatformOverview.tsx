import { motion } from "framer-motion";
import droneAerial from "@/assets/drone-aerial.jpg";
import topoTexture from "@/assets/topo-texture.jpg";
import wireframe from "@/assets/opsdeck-wireframe.png";

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
  <section id="overview" className="relative border-t border-border">
    {/* Full-bleed cinematic image strip */}
    <div className="relative h-64 md:h-80 overflow-hidden">
      <motion.img
        src={droneAerial}
        alt="Drone aerial operations"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div className="absolute inset-0 bg-foreground/30 mix-blend-multiply" />
      <div className="absolute bottom-8 left-8 md:left-16 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-foreground text-label text-[10px] mb-2"
        >
          SYSTEM OVERVIEW
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-primary-foreground"
        >
          17 Tools. One Platform.
        </motion.h2>
      </div>
      <div className="sweep-line top-1/2" style={{ animationDelay: "1s" }} />
    </div>

    <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-muted-foreground font-mono text-sm leading-relaxed"
        >
          Purpose-built modules forming a unified drone operations ecosystem.
          Each handles a specific domain — from identity to intelligence.
        </motion.p>
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          viewBox="0 0 120 120"
          className="w-24 h-24 shrink-0 rotate-slow text-primary hidden md:block"
          fill="none"
        >
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
          <line x1="60" y1="0" x2="60" y2="120" stroke="currentColor" strokeWidth="0.3" />
          <line x1="0" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="0.3" />
        </motion.svg>
      </div>

      {/* Tool grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-border">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="bg-background p-4 group hover:bg-foreground hover:text-background transition-all duration-200 cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
              <img src={topoTexture} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <span className="text-label text-muted-foreground text-[9px] group-hover:text-background/50 relative z-10">{tool.id}</span>
            <h3 className="font-semibold text-sm mt-1 group-hover:text-background relative z-10">
              {tool.name}
            </h3>
            <p className="text-label text-muted-foreground text-[9px] mt-1 group-hover:text-background/60 relative z-10">{tool.role}</p>
          </motion.div>
        ))}
        <div className="bg-primary p-4 flex items-center justify-center">
          <span className="text-primary-foreground text-label text-[9px]">MORE COMING</span>
        </div>
      </div>

      {/* OpsDeck Wireframe Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="text-label text-primary text-[10px] mb-2">CONTROL CENTRE PREVIEW</p>
            <h3 className="text-3xl md:text-4xl font-bold">The Command Interface</h3>
          </div>
          <span className="text-label text-muted-foreground text-[10px] hidden md:block">v1.0 WIREFRAME DATASHEET</span>
        </div>
        <div className="tech-line mb-8" />
        <div className="relative border border-border overflow-hidden group">
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <img
            src={wireframe}
            alt="OpsDeck Control Centre wireframe showing fleet management, live map, telemetry, and app suite"
            className="w-full h-auto relative z-10 group-hover:scale-[1.02] transition-transform duration-700"
          />
          {/* Scan overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />
          {/* Corner markers */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary z-20" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary z-20" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-muted-foreground font-mono text-xs">
            Fleet tracking · Telemetry · Mission control · App suite integration
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full pulse-dot" />
            <span className="text-label text-primary text-[9px]">IN DEVELOPMENT</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlatformOverview;

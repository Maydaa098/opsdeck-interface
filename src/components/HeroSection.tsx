import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-stretch overflow-hidden">
    {/* Orange accent stripe */}
    <div className="hidden lg:block w-16 accent-stripe shrink-0 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground font-bold text-label whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.3em" }}
      >
        DRONE OPERATIONS PLATFORM
      </div>
    </div>

    {/* Main content area */}
    <div className="flex-1 flex flex-col">
      {/* Top nav bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-8 md:px-16 py-4 border-b border-border"
      >
        <span className="text-label text-muted-foreground text-[10px]">OPS DECK — DRONE OPERATIONS</span>
        <span className="text-label text-muted-foreground text-[10px]">OPS DECK / SYSTEMS FOR SOUTH AFRICA</span>
        <span className="hidden md:block text-label text-muted-foreground text-[10px]">SERIAL NO. 001</span>
      </motion.div>

      {/* Content split */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left content */}
        <div className="flex-1 px-8 md:px-16 py-16 lg:py-24 flex flex-col justify-center border-r border-border">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight"
          >
            Ops Deck
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-lg text-muted-foreground font-mono text-sm leading-relaxed"
          >
            Ops Deck is a unified drone operations platform engineered for
            commercial operators in South Africa. Built for precision,
            compliance, and scale, it integrates 17 purpose-built tools
            to eliminate fragmented workflows across fleet management,
            mission planning, analytics, and live operations.
          </motion.p>

          {/* Two feature blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-8 max-w-lg"
          >
            <div>
              <p className="text-label text-muted-foreground text-[10px] mb-2">PRECISION ENGINEERED</p>
              <h3 className="text-4xl font-bold">Fleet</h3>
              <p className="mt-2 text-muted-foreground font-mono text-xs leading-relaxed">
                A complete fleet management system built for precise, high-throughput drone operations.
              </p>
            </div>
            <div>
              <p className="text-label text-muted-foreground text-[10px] mb-2">MISSION READY</p>
              <h3 className="text-4xl font-bold">Control</h3>
              <p className="mt-2 text-muted-foreground font-mono text-xs leading-relaxed">
                Fits into current workflows with minimal setup, improving speed and compliance.
              </p>
            </div>
          </motion.div>

          {/* Spec table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 max-w-lg"
          >
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="bg-foreground text-background">
                  <th className="px-4 py-2 text-label text-[10px]">SPEC</th>
                  <th className="px-4 py-2 text-label text-[10px]">DETAIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["TOOLS", "17 INTEGRATED MODULES"],
                  ["REGION", "SOUTH AFRICA"],
                  ["COMPLIANCE", "SACAA READY"],
                  ["STATUS", "IN DEVELOPMENT"],
                  ["TRACKING", "REAL-TIME TELEMETRY"],
                  ["TARGET", "Q3 2026"],
                ].map(([spec, detail]) => (
                  <tr key={spec} className="border-b border-border">
                    <td className="px-4 py-2 text-label text-[10px] text-muted-foreground">{spec}</td>
                    <td className="px-4 py-2 text-label text-[10px]">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <div className="relative group">
              <button
                disabled
                className="border-2 border-muted-foreground/30 px-8 py-3 text-label text-[10px] text-muted-foreground/50 cursor-not-allowed"
              >
                LOGIN WITH POCKET-ID
              </button>
              <div className="absolute -bottom-6 left-0 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                COMING SOON
              </div>
            </div>
            <a
              href="#overview"
              className="border-2 border-foreground px-8 py-3 text-label text-[10px] hover:bg-foreground hover:text-background transition-all duration-300"
            >
              EXPLORE PLATFORM
            </a>
          </motion.div>
        </div>

        {/* Right side - technical diagram area */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center grid-bg-fine p-12">
          {/* Technical drone diagram SVG */}
          <svg viewBox="0 0 500 500" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center body */}
            <rect x="200" y="200" width="100" height="100" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />
            <rect x="220" y="220" width="60" height="60" stroke="hsl(0,0%,30%)" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="15" stroke="hsl(0,0%,20%)" strokeWidth="1" />
            <circle cx="250" cy="250" r="4" fill="hsl(0,0%,20%)" />

            {/* Arms */}
            <line x1="200" y1="200" x2="120" y2="120" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />
            <line x1="300" y1="200" x2="380" y2="120" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />
            <line x1="200" y1="300" x2="120" y2="380" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />
            <line x1="300" y1="300" x2="380" y2="380" stroke="hsl(0,0%,20%)" strokeWidth="1.5" />

            {/* Motors */}
            <circle cx="120" cy="120" r="25" stroke="hsl(0,0%,20%)" strokeWidth="1" />
            <circle cx="120" cy="120" r="12" stroke="hsl(0,0%,30%)" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="380" cy="120" r="25" stroke="hsl(0,0%,20%)" strokeWidth="1" />
            <circle cx="380" cy="120" r="12" stroke="hsl(0,0%,30%)" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="120" cy="380" r="25" stroke="hsl(0,0%,20%)" strokeWidth="1" />
            <circle cx="120" cy="380" r="12" stroke="hsl(0,0%,30%)" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="380" cy="380" r="25" stroke="hsl(0,0%,20%)" strokeWidth="1" />
            <circle cx="380" cy="380" r="12" stroke="hsl(0,0%,30%)" strokeWidth="0.5" strokeDasharray="3 3" />

            {/* Prop circles */}
            <circle cx="120" cy="120" r="40" stroke="hsl(0,0%,60%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="380" cy="120" r="40" stroke="hsl(0,0%,60%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="120" cy="380" r="40" stroke="hsl(0,0%,60%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="380" cy="380" r="40" stroke="hsl(0,0%,60%)" strokeWidth="0.5" strokeDasharray="4 4" />

            {/* Annotation dots and lines */}
            <circle cx="120" cy="120" r="2" fill="hsl(0,0%,20%)" />
            <line x1="95" y1="120" x2="30" y2="120" stroke="hsl(0,0%,40%)" strokeWidth="0.5" />
            <circle cx="30" cy="120" r="2" fill="hsl(0,0%,30%)" />

            <circle cx="380" cy="120" r="2" fill="hsl(0,0%,20%)" />
            <line x1="405" y1="120" x2="470" y2="120" stroke="hsl(0,0%,40%)" strokeWidth="0.5" />
            <circle cx="470" cy="120" r="2" fill="hsl(0,0%,30%)" />

            <circle cx="250" cy="200" r="2" fill="hsl(0,0%,20%)" />
            <line x1="250" y1="200" x2="250" y2="50" stroke="hsl(0,0%,40%)" strokeWidth="0.5" />
            <circle cx="250" cy="50" r="2" fill="hsl(0,0%,30%)" />

            <circle cx="250" cy="300" r="2" fill="hsl(0,0%,20%)" />
            <line x1="250" y1="300" x2="250" y2="450" stroke="hsl(0,0%,40%)" strokeWidth="0.5" />
            <circle cx="250" cy="450" r="2" fill="hsl(0,0%,30%)" />

            {/* Dimension lines */}
            <line x1="80" y1="70" x2="170" y2="70" stroke="hsl(0,0%,50%)" strokeWidth="0.3" />
            <line x1="80" y1="65" x2="80" y2="75" stroke="hsl(0,0%,50%)" strokeWidth="0.3" />
            <line x1="170" y1="65" x2="170" y2="75" stroke="hsl(0,0%,50%)" strokeWidth="0.3" />
          </svg>

          {/* Annotation labels */}
          <div className="absolute top-16 left-12 max-w-[140px]">
            <p className="text-label text-[9px] font-bold text-foreground">MOTOR UNIT</p>
            <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-tight">
              Brushless motor enabling precise thrust control and stable hover.
            </p>
          </div>
          <div className="absolute top-16 right-12 max-w-[140px] text-right">
            <p className="text-label text-[9px] font-bold text-foreground">FLIGHT CONTROLLER</p>
            <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-tight">
              Integrated control module processing telemetry, navigation, and system diagnostics.
            </p>
          </div>
          <div className="absolute bottom-24 left-12 max-w-[140px]">
            <p className="text-label text-[9px] font-bold text-foreground">GPS MODULE</p>
            <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-tight">
              High-precision positioning for autonomous waypoint navigation.
            </p>
          </div>
          <div className="absolute bottom-24 right-12 max-w-[140px] text-right">
            <p className="text-label text-[9px] font-bold text-foreground text-primary">Self-Diagnostic<br/>Failsafes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

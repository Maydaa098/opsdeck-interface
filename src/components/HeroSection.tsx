import { motion } from "framer-motion";
import hexacopter from "@/assets/hexacopter-processed.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-stretch overflow-hidden scanlines crt-vignette flicker">
    {/* Sweep line animation */}
    <div className="sweep-line top-[40%]" />
    <div className="sweep-line top-[70%]" style={{ animationDelay: "2s" }} />

    {/* Orange accent stripe */}
    <div className="hidden lg:block w-16 accent-stripe shrink-0 relative z-10">
      <div
        className="absolute top-1/2 left-1/2 text-primary-foreground font-bold text-label whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "translate(-50%, -50%) rotate(180deg)", letterSpacing: "0.3em" }}
      >
        DRONE OPERATIONS PLATFORM
      </div>
    </div>

    {/* Main content area */}
    <div className="flex-1 flex flex-col">
      {/* Top nav bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-8 md:px-16 py-4 border-b border-border relative"
      >
        <span className="text-label text-muted-foreground text-[10px]">OPS DECK — DRONE OPERATIONS</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full pulse-dot" />
          <span className="text-label text-muted-foreground text-[10px]">SYSTEM ACTIVE</span>
        </div>
        <span className="hidden md:block text-label text-muted-foreground text-[10px]">SERIAL NO. 001</span>
      </motion.div>

      {/* Content split */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left content */}
        <div className="flex-1 px-8 md:px-16 py-16 lg:py-20 flex flex-col justify-center border-r border-border relative">
          {/* Background hexacopter image - faded */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <img src={hexacopter} alt="" className="w-full h-full object-cover" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1 bg-primary mb-6"
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight glitch-text-auto"
              data-text="Ops Deck"
            >
              Ops Deck
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-lg text-muted-foreground font-mono text-sm leading-relaxed"
            >
              Ops Deck is a unified drone operations platform engineered for
              commercial operators in South Africa. Built for precision,
              compliance, and scale — 17 purpose-built tools integrated into
              one system.
            </motion.p>

            {/* Two feature blocks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 grid grid-cols-2 gap-8 max-w-lg"
            >
              <div className="border-l-2 border-primary pl-4">
                <p className="text-label text-muted-foreground text-[10px] mb-1">PRECISION ENGINEERED</p>
                <h3 className="text-3xl font-bold">Fleet</h3>
                <p className="mt-2 text-muted-foreground font-mono text-[11px] leading-relaxed">
                  Complete fleet management for high-throughput drone operations.
                </p>
              </div>
              <div className="border-l-2 border-border pl-4 hover:border-primary transition-colors">
                <p className="text-label text-muted-foreground text-[10px] mb-1">MISSION READY</p>
                <h3 className="text-3xl font-bold">Control</h3>
                <p className="mt-2 text-muted-foreground font-mono text-[11px] leading-relaxed">
                  Fits current workflows with minimal setup, improving compliance.
                </p>
              </div>
            </motion.div>

            {/* Spec table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 max-w-lg"
            >
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-foreground text-background">
                    <th className="px-4 py-2 text-label text-[10px]">SPEC</th>
                    <th className="px-4 py-2 text-label text-[10px]">OUTPUT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["TOOLS", "17 INTEGRATED MODULES"],
                    ["REGION", "SOUTH AFRICA"],
                    ["COMPLIANCE", "SACAA READY"],
                    ["TRACKING", "REAL-TIME TELEMETRY"],
                    ["TARGET", "Q3 2026"],
                  ].map(([spec, detail]) => (
                    <tr key={spec} className="border-b border-border hover:bg-muted/50 transition-colors">
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
              transition={{ delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <a
                href="https://github.com/Maydaa098/geo-spatial-sandbox.git"
                className="border-2 border-foreground px-8 py-3 text-label text-[10px] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                LOGIN WITH POCKET-ID
              </a>
              <a
                href="#overview"
                className="border-2 border-foreground px-8 py-3 text-label text-[10px] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                EXPLORE PLATFORM
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - 3D drone model embed */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 grid-bg-fine" />

          {/* Scan line overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-[1px] bg-primary/20 scan-line-anim" />
          </div>

          {/* 3D Model Embed */}
          <div className="absolute inset-0">
            <iframe
              src="https://sketchfab.com/models/376960b44dc1443d8fca685ab85cabc6/embed"
              className="w-full h-full border-none"
              title="DJI Phantom 2 Quadcopter"
              allow="autoplay; fullscreen; xr-spatial-tracking"
            />
          </div>

          {/* Overlay annotations */}
          <div className="absolute top-8 left-8 z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
            >
              <p className="text-label text-[9px] font-bold">MOTOR UNIT</p>
              <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-tight max-w-[130px]">
                Brushless motor with precise thrust vectoring.
              </p>
            </motion.div>
          </div>
          <div className="absolute top-8 right-8 z-10 text-right pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-label text-[9px] font-bold">FLIGHT CONTROLLER</p>
              <p className="font-mono text-[8px] text-muted-foreground mt-1 leading-tight max-w-[130px]">
                Integrated telemetry, navigation, diagnostics.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-16 left-8 z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-primary rounded-full pulse-dot" />
              <span className="text-label text-[9px] text-primary">LIVE MODEL</span>
            </motion.div>
          </div>
          <div className="absolute bottom-16 right-8 z-10 text-right pointer-events-none">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-2xl font-bold text-primary"
            >
              Self-Diagnostic
              <br />
              Failsafes
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

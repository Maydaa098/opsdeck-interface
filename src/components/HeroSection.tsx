import { motion } from "framer-motion";
import RadarSVG from "./RadarSVG";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden scanlines grid-bg">
    <RadarSVG />
    {/* Glitch lines */}
    <div className="glitch-line top-[30%]" />
    <div className="glitch-line top-[70%]" style={{ animationDelay: '3s' }} />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32">
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-between mb-16 text-label text-muted-foreground"
      >
        <span>SYS::OPS_DECK_v0.1</span>
        <span>ZA // COMMERCIAL UAV OPS</span>
        <span className="hidden md:block">STATUS: <span className="text-warning">BUILDING</span></span>
      </motion.div>

      {/* Main headline */}
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(4rem,12vw,11rem)] font-bold leading-[0.85] tracking-tight"
        >
          OPS
          <br />
          <span className="text-primary">DECK</span>
        </motion.h1>

        {/* Vertical text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden lg:block absolute -right-4 top-0 text-label text-muted-foreground"
          style={{ writingMode: 'vertical-rl' }}
        >
          DRONE OPERATIONS PLATFORM // ZA
        </motion.div>
      </div>

      {/* Subtitle block */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 max-w-2xl border-l-2 border-primary pl-6"
      >
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          The Complete Drone Operations Platform for South Africa
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          One platform to run your entire drone operation — fleet, missions, analytics, live tracking, compliance, and data.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-wrap gap-4 items-center"
      >
        <div className="relative group">
          <button
            disabled
            className="border-2 border-muted-foreground/30 px-8 py-4 text-label text-muted-foreground/50 cursor-not-allowed transition-all"
          >
            LOGIN WITH POCKET-ID
          </button>
          <div className="absolute -bottom-8 left-0 text-label text-xs text-warning opacity-0 group-hover:opacity-100 transition-opacity">
            COMING SOON
          </div>
        </div>
        <a
          href="#overview"
          className="border-2 border-primary px-8 py-4 text-label text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          EXPLORE PLATFORM
        </a>
      </motion.div>

      {/* Bottom indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6 text-label text-muted-foreground"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          17 INTEGRATED TOOLS
        </span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">SOUTH AFRICA</span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import topoTexture from "@/assets/topo-texture.jpg";

const segments = 17;
const filled = 5;

const StatusSection = () => (
  <section className="relative border-t border-border overflow-hidden">
    {/* Dark topo background band */}
    <div className="relative">
      <div className="absolute inset-0">
        <img src={topoTexture} alt="" className="w-full h-full object-cover opacity-80" loading="lazy" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-label text-primary text-[10px] mb-3"
            >
              STATUS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8 text-primary-foreground"
            >
              In Progress
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 font-mono text-sm leading-relaxed mb-4 max-w-lg"
            >
              Ops Deck is currently under development. Core systems are being
              built and tested. Check back soon or request early access.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mt-6"
            >
              <span className="w-3 h-3 bg-primary pulse-dot" />
              <span className="text-label text-primary text-[10px]">SYSTEMS BUILDING</span>
            </motion.div>
          </div>

          {/* Right - progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-label text-primary-foreground/60 text-[10px]">BUILD PROGRESS</span>
              <span className="text-label text-primary text-[10px] ml-auto">{Math.round((filled / segments) * 100)}%</span>
            </div>
            <div className="flex gap-[2px]">
              {Array.from({ length: segments }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className={`h-8 flex-1 origin-bottom ${
                    i < filled
                      ? "bg-primary"
                      : "bg-primary-foreground/10 border border-primary-foreground/20"
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-label text-primary-foreground/50 text-[10px]">{filled}/{segments} MODULES</span>
              <span className="text-label text-primary-foreground/50 text-[10px]">TARGET: Q3 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default StatusSection;

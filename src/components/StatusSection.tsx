import { motion } from "framer-motion";

const segments = 17;
const filled = 5;

const StatusSection = () => (
  <section className="relative py-24 border-t border-border">
    <div className="max-w-[1400px] mx-auto px-8 md:px-16">
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
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            In Progress
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm leading-relaxed mb-4 max-w-lg"
          >
            Ops Deck is currently under development. Core systems are being built and tested.
            Check back soon or request early access.
          </motion.p>
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
            <span className="text-label text-muted-foreground text-[10px]">BUILD PROGRESS</span>
            <span className="text-label text-primary text-[10px] ml-auto">{Math.round((filled / segments) * 100)}%</span>
          </div>
          <div className="flex gap-[2px]">
            {Array.from({ length: segments }).map((_, i) => (
              <div
                key={i}
                className={`h-6 flex-1 ${
                  i < filled
                    ? "bg-primary"
                    : "bg-muted border border-border"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-label text-muted-foreground text-[10px]">{filled}/{segments} MODULES</span>
            <span className="text-label text-muted-foreground text-[10px]">TARGET: Q3 2026</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default StatusSection;

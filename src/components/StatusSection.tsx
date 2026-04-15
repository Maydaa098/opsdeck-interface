import { motion } from "framer-motion";

const segments = 17;
const filled = 5;

const StatusSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label text-warning mb-3"
        >
          SYS::STATUS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Status:{" "}
          <span className="text-warning">In Progress</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-4"
        >
          Ops Deck is currently under development. Core systems are being built and tested.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-label text-muted-foreground"
        >
          CHECK BACK SOON OR REQUEST EARLY ACCESS
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-label text-muted-foreground text-[10px]">BUILD PROGRESS</span>
            <span className="text-label text-primary text-[10px] ml-auto">{Math.round((filled / segments) * 100)}%</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: segments }).map((_, i) => (
              <div
                key={i}
                className={`h-3 flex-1 ${
                  i < filled
                    ? "bg-primary"
                    : "bg-secondary border border-border"
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

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none select-none pointer-events-none"
      >
        WIP
      </motion.div>
    </div>
  </section>
);

export default StatusSection;

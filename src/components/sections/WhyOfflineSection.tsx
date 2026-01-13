import { motion } from "framer-motion";
import { Shield, Wifi, Lock, Zap, Smartphone, Globe, Users } from "lucide-react";

const advantages = [
  {
    icon: Wifi,
    title: "100% Offline",
    description: "No internet required.",
  },
  {
    icon: Lock,
    title: "No Accounts",
    description: "No sign-ups or tracking.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Data never leaves your device.",
  },
  {
    icon: Zap,
    title: "Fast On-Device",
    description: "Instant AI responses.",
  },
  {
    icon: Smartphone,
    title: "Secure by Design",
    description: "No cloud, no breaches.",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description: "No signal? No problem.",
  },
  {
    icon: Users,
    title: "AI for Everyone",
    description: "Accessible regardless of location or income.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhyOfflineSection = () => {
  return (
    <section id="why-omegagpt" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omega-purple/5 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-omega-purple/10 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-omega-glow/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="omega-symbol text-4xl mb-4 block animate-glow-pulse">Ω</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-omega">OmegaGPT</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            100% Offline AI Chat. Runs entirely on your device.
          </p>
        </motion.div>

        {/* FIRST Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-omega-purple/20 via-omega-glow/10 to-omega-purple/20 border border-omega-glow/30">
            <svg className="w-5 h-5 text-omega-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-foreground font-medium text-sm">
              <span className="text-omega-glow font-bold">FIRST</span> fully offline AI chat on iOS & Android
            </span>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-omega card-omega-hover group text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1 text-sm">
                {advantage.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOfflineSection;

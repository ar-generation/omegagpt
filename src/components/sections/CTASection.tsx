import { motion } from "framer-motion";
import StoreButtons from "../StoreButtons";

const CTASection = () => {
  return (
    <section className="py-28 relative">
      {/* Clean separation via spacing */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5">
            Your AI. <span className="text-gradient-omega">Your Device.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10">
            No accounts. No cloud. Just private AI.
          </p>

          {/* Larger CTA buttons */}
          <StoreButtons size="large" className="justify-center" />

          <p className="mt-8 text-sm text-muted-foreground/70">
            Free during early access
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
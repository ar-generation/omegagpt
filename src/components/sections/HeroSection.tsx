import { motion } from "framer-motion";
import StoreButtons from "../StoreButtons";
import heroBg from "@/assets/hero-bg.jpg";
import appScreenshot from "@/assets/app-screenshot.jpg";
import omegaSymbol from "@/assets/omega-symbol.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-background/70 z-0" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-omega-purple/15 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-omega-glow/8 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-8 lg:px-12 relative z-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Subtle badge - less prominent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span className="text-xs text-muted-foreground">Free During Early Access</span>
            </motion.div>

            {/* Headline - 2 lines */}
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight whitespace-nowrap">
              <span className="text-foreground inline-flex items-baseline"><img src={omegaSymbol} alt="Ω" className="h-[0.85em] w-auto inline-block align-baseline -mb-1" />megaGPT</span>
              <br />
              <span className="text-gradient-omega">Offline AI Chat</span>
            </h1>

            {/* Simple, single-sentence subheadline */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Fast, Free AI Chat — 100% Offline
            </p>

            {/* Prominent CTA buttons */}
            <StoreButtons size="large" className="justify-center lg:justify-start" />
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-t from-omega-glow/15 via-omega-purple/10 to-transparent blur-3xl scale-105" />
              
              {/* Phone frame */}
              <div className="relative w-56 sm:w-64 animate-float">
                <div className="bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[2.5rem] p-1.5 shadow-xl">
                  <div className="bg-background rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-b-xl z-10" />
                    
                    {/* Screen content */}
                    <img 
                      src={appScreenshot} 
                      alt="OmegaGPT app interface" 
                      className="w-full aspect-[9/19] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - more subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
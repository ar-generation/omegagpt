import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="omega-symbol text-2xl">Ω</span>
          <span className="font-display font-semibold text-lg text-foreground">OmegaGPT</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-omegagpt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Why OmegaGPT
          </a>
        </nav>

      </div>
    </motion.header>
  );
};

export default Header;

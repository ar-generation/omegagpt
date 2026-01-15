import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import omegaLogo from "@/assets/omegagpt-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={omegaLogo} 
            alt="OmegaGPT" 
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a href="#why-omegagpt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why OmegaGPT
            </a>
          </nav>
          
          <a 
            href="https://www.producthunt.com/products/omegagpt-offline-ai-chat?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-omegagpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1049819&theme=dark&t=1768345668503" 
              alt="OmegaGPT - Fast, Free AI Chat - 100% Offline | Product Hunt" 
              width="200" 
              height="43" 
              className="h-[36px] w-auto"
            />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

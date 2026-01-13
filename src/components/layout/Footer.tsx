import { Link } from "react-router-dom";
import StoreButtons from "../StoreButtons";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="omega-symbol text-2xl">Ω</span>
              <span className="font-display font-semibold text-lg text-foreground">OmegaGPT</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Private, accessible AI — owned by the user. 100% offline, no cloud, no accounts.
            </p>
            <StoreButtons size="small" />
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://ar-generation.com/omega-gpt/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://ar-generation.com/omega-gpt/terms-of-use.html" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:argeneration.com@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  argeneration.com@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AR Generation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/omegagpt-offline-ai-chat/id6751235569"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.argeneration.privategpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

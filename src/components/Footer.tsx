import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-glow opacity-20" />
      <div className="container px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-bold text-2xl mb-2">
              <span className="text-foreground">J</span>
              <span className="text-gradient">A</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive fill-destructive" /> by Jubaidul Alam
            </p>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a href="mailto:jubaidul.ctg.bd@gmail.com" whileHover={{ scale: 1.1, y: -2 }} className="p-3 rounded-xl bg-muted/50 border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all">
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
          <motion.button onClick={scrollToTop} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border hover:border-primary/40 text-sm text-muted-foreground hover:text-foreground transition-all group">
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

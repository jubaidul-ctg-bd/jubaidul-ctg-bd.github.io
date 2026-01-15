import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Morphing gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 blur-[100px] animate-morph"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-32 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] animate-morph"
        style={{ y, animationDelay: "-4s" }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/20 rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-accent/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ opacity }} className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Terminal-style badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-8"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">~/portfolio</span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </motion.div>

          {/* Main heading with staggered animation */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="overflow-hidden"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                <span className="text-foreground">Jubaidul</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="overflow-hidden"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                <span className="text-gradient">Alam</span>
                <span className="text-primary">.</span>
              </h1>
            </motion.div>
          </div>

          {/* Role with accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-2xl md:text-3xl font-mono text-muted-foreground">
              Senior Backend Engineer
            </p>
          </motion.div>

          {/* Description with highlighted keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Building <span className="text-foreground font-medium">scalable systems</span> and{" "}
            <span className="text-foreground font-medium">high-performance APIs</span> with expertise in{" "}
            <span className="text-primary">Node.js</span>,{" "}
            <span className="text-primary">TypeScript</span>, and{" "}
            <span className="text-primary">cloud infrastructure</span>.
          </motion.p>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-12"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Let's Talk
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group glass-effect" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group glass-effect" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#experience"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
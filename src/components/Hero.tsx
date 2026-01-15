import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Calendar } from "lucide-react";
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
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/8 blur-[120px] rounded-full"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-accent/8 blur-[100px] rounded-full"
        style={{ y }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-40 h-px bg-gradient-to-r from-accent/50 to-transparent hidden lg:block" />

      <motion.div style={{ opacity }} className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect border border-primary/30 mb-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="font-mono text-sm text-primary">Available for Opportunities</span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                  <span className="text-foreground">Md. Jubaidul</span>
                  <br />
                  <span className="text-gradient">Alam</span>
                  <span className="text-primary">.</span>
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                  Senior Backend Engineer
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                5+ years crafting <span className="text-foreground font-medium">scalable backend systems</span> and{" "}
                <span className="text-foreground font-medium">high-performance APIs</span>. Specialized in{" "}
                <span className="text-primary">Node.js</span>,{" "}
                <span className="text-primary">TypeScript</span>, and{" "}
                <span className="text-primary">cloud architecture</span>.
              </motion.p>

              {/* Location & Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
                className="flex flex-wrap items-center gap-6 mb-10 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Dhaka, Bangladesh
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  5+ Years Experience
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="#contact">
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Get In Touch
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group glass-effect" asChild>
                  <a href="#" download>
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-4 mt-10 pt-10 border-t border-border"
              >
                <span className="text-sm text-muted-foreground font-mono">Find me on</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-effect border border-border hover:border-primary/50 hover:text-primary transition-all group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-effect border border-border hover:border-primary/50 hover:text-primary transition-all group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:jubaer7521@gmail.com"
                  className="p-3 rounded-xl glass-effect border border-border hover:border-primary/50 hover:text-primary transition-all group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right content - Impact stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
                
                <div className="relative card-gradient rounded-3xl p-8 border border-border">
                  <div className="space-y-6">
                    <div className="text-center pb-6 border-b border-border">
                      <p className="font-mono text-xs text-muted-foreground mb-2">IMPACT METRICS</p>
                      <p className="text-sm text-muted-foreground">Building systems at scale</p>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="group">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-4xl font-bold text-gradient">2M+</span>
                          <span className="text-xs text-muted-foreground">users</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Healthcare Platform Users</p>
                      </div>
                      
                      <div className="group">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-4xl font-bold text-gradient-accent">50K+</span>
                          <span className="text-xs text-muted-foreground">daily</span>
                        </div>
                        <p className="text-sm text-muted-foreground">eTicket Transactions</p>
                      </div>
                      
                      <div className="group">
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-4xl font-bold text-gradient">99.9%</span>
                          <span className="text-xs text-muted-foreground">uptime</span>
                        </div>
                        <p className="text-sm text-muted-foreground">System Availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

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
            <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Md. Jubaidul Alam
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Senior Backend Engineer
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 text-muted-foreground mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Senior backend engineering professional with 5+ years of expertise in developing 
            robust, scalable applications. Specialized in Node.js, TypeScript, and cloud architecture. 
            Experienced in leading engineering teams and building systems that serve millions of users.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-8 mb-10 py-6 border-y border-border"
          >
            <div>
              <p className="text-3xl font-bold text-foreground">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">2M+</p>
              <p className="text-sm text-muted-foreground">Users Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">4</p>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">50K+</p>
              <p className="text-sm text-muted-foreground">Daily Transactions</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-muted-foreground">Connect:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jubaidul.ctg.bd@gmail.com"
              className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

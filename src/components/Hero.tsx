import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Sparkles, Code2, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-nobg.png";

const floatingIcons = [
  { icon: Code2, x: "10%", y: "20%", delay: 0, size: 20 },
  { icon: Server, x: "85%", y: "15%", delay: 1.5, size: 18 },
  { icon: Database, x: "75%", y: "75%", delay: 3, size: 16 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10 hidden lg:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon size={item.size} />
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-4 items-center">
            {/* Left content */}
            <div className="relative z-10">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
              </motion.div>

              {/* Name with letter animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-foreground mb-3 leading-[1.1] tracking-tight"
              >
                <span className="block">Md. Jubaidul</span>
                <span className="block mt-1">
                  <span className="text-gradient">Alam</span>
                </span>
              </motion.h1>

              {/* Title with typewriter feel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-8 bg-primary" />
                <p className="text-lg md:text-xl font-semibold text-primary tracking-wide uppercase">
                  Senior Full-Stack Engineer
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 text-muted-foreground mb-6"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Mirpur, Dhaka, Bangladesh</span>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
              >
                6+ years crafting production-grade web applications serving millions. Expert in{" "}
                <span className="text-foreground font-medium">Node.js</span>,{" "}
                <span className="text-foreground font-medium">TypeScript</span>,{" "}
                <span className="text-foreground font-medium">React</span> &{" "}
                <span className="text-foreground font-medium">cloud-native architectures</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300" asChild>
                  <a href="#contact">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-secondary hover:scale-105 transition-all duration-300" asChild>
                  <a href="/MD_JUBAIDUL_ALAM_Resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                {[
                  { icon: Github, href: "https://github.com/jubaidul-ctg-bd", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/md-jubaidul-alam-06a119118/", label: "LinkedIn" },
                  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=jubaidul.ctg.bd@gmail.com", label: "Email" },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.08, type: "spring", stiffness: 200 }}
                    className="p-3 rounded-xl bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50, damping: 15 }}
              className="relative flex justify-center lg:justify-end items-end"
            >
              {/* Decorative ring */}
              <motion.div
                className="absolute bottom-10 right-1/2 translate-x-1/2 lg:right-16 lg:translate-x-0 w-72 h-72 md:w-80 md:h-80 rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-16 right-1/2 translate-x-1/2 lg:right-24 lg:translate-x-0 w-56 h-56 md:w-64 md:h-64 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow */}
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 lg:right-8 lg:translate-x-0 w-72 h-72 rounded-full bg-primary/10 blur-[80px]" />
              
              {/* Image */}
              <div className="relative">
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
                <motion.img
                  src={profileImage}
                  alt="Md. Jubaidul Alam"
                  className="relative z-[1] w-[280px] md:w-[360px] lg:w-[420px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 lg:mt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "2M+", label: "Users Served" },
                { value: "4", label: "Companies" },
                { value: "50K+", label: "Daily Transactions" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm p-6 text-center group hover:bg-primary/5 transition-colors duration-300"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

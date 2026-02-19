import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground">Open to Opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight"
              >
                Md. Jubaidul Alam
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-xl md:text-2xl font-semibold text-gradient mb-4"
              >
                Senior Full-Stack Software Engineer
              </motion.p>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 text-muted-foreground mb-6"
              >
                <MapPin className="w-4 h-4" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                Senior Full-Stack Software Engineer with 6+ years of experience building and scaling production-grade web applications used by millions of users. Expert in
                <span className="text-foreground font-medium"> Node.js</span>,
                <span className="text-foreground font-medium"> NestJS</span>,
                <span className="text-foreground font-medium"> TypeScript</span>,
                <span className="text-foreground font-medium"> React</span>, and
                <span className="text-foreground font-medium"> cloud-native architectures</span>. 
                Proven track record delivering high-performance platforms in healthcare, transportation, and AI-driven products.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                  <a href="#contact">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-secondary" asChild>
                  <a href="/MD_JUBAIDUL_ALAM_Resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm text-muted-foreground">Connect:</span>
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="p-2.5 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-20 blur-sm"
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10"
                >
                  <img
                    src={profileImage}
                    alt="Md. Jubaidul Alam"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12 lg:hidden"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-20 blur-sm"
              />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
                <img
                  src={profileImage}
                  alt="Md. Jubaidul Alam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="font-mono text-sm text-primary">04.</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something<br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-gradient rounded-3xl p-8 md:p-12 border border-border shadow-elevated relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blur-[80px] rounded-full" />
            
            <div className="relative">
              {/* Contact cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {/* Email */}
                <motion.button
                  onClick={() => handleCopy("jubaidul.ctg.bd@gmail.com", "email")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-all duration-300 group text-left"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-mono text-muted-foreground block mb-1">EMAIL</span>
                    <span className="text-sm font-medium text-foreground break-all">
                      jubaidul.ctg.bd@gmail.com
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {copied === "email" ? (
                      <>
                        <Check className="w-3 h-3" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Click to copy
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Phone */}
                <motion.button
                  onClick={() => handleCopy("+8801831645310", "phone")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/40 transition-all duration-300 group text-left"
                >
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-mono text-muted-foreground block mb-1">PHONE</span>
                    <span className="text-sm font-medium text-foreground">
                      +880 1831 645310
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                    {copied === "phone" ? (
                      <>
                        <Check className="w-3 h-3" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Click to copy
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-muted/30 border border-border"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <span className="text-xs font-mono text-muted-foreground block mb-1">LOCATION</span>
                    <span className="text-sm font-medium text-foreground">
                      Mirpur, Dhaka
                    </span>
                    <span className="text-xs text-muted-foreground block">Bangladesh</span>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hero" size="lg" className="group text-lg px-8 py-6" asChild>
                    <a href="mailto:jubaidul.ctg.bd@gmail.com">
                      <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send me a message
                      <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </motion.div>
                <p className="text-sm text-muted-foreground mt-4">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jubaidul.ctg.bd@gmail.com",
      displayValue: "jubaidul.ctg.bd@gmail.com",
      copyKey: "email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801831645310",
      displayValue: "+880 1831 645310",
      copyKey: "phone",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mb-6 mx-auto"
          />
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Let's Work<span className="text-gradient"> Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02]" />

            <div className="relative">
              {/* Contact cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {contactMethods.map((method, i) => (
                  <motion.button
                    key={method.copyKey}
                    onClick={() => handleCopy(method.value, method.copyKey)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/60 hover:border-primary/20 transition-all duration-300 text-center group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{method.label}</p>
                      <p className="text-sm font-semibold text-foreground break-all">
                        {method.displayValue}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {copied === method.copyKey ? (
                        <>
                          <Check className="w-3 h-3 text-green-500" />
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
                ))}

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/30 border border-border/50 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-semibold text-foreground">Mirpur, Dhaka</p>
                    <p className="text-xs text-muted-foreground">Bangladesh, 1216</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group" asChild>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jubaidul.ctg.bd@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send me an email
                    <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

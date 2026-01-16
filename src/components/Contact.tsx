import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
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
          <div className="card-premium p-8 md:p-12">
            {/* Contact cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {contactMethods.map((method) => (
                <motion.button
                  key={method.copyKey}
                  onClick={() => handleCopy(method.value, method.copyKey)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all text-center group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                    <method.icon className="w-5 h-5" />
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

              {/* Location - not copyable */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary/50 text-center">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="text-sm font-semibold text-foreground">Mirpur, Dhaka</p>
                  <p className="text-xs text-muted-foreground">Bangladesh</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group" asChild>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jubaidul.ctg.bd@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send me an email
                  <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                I typically respond within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

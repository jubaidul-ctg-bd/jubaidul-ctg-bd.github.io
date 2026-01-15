import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react";
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
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-background rounded-lg border border-border p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Email */}
              <button
                onClick={() => handleCopy("jubaidul.ctg.bd@gmail.com", "email")}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-sm font-medium text-foreground break-all">
                    jubaidul.ctg.bd@gmail.com
                  </p>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  {copied === "email" ? (
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
              </button>

              {/* Phone */}
              <button
                onClick={() => handleCopy("+8801831645310", "phone")}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-medium text-foreground">
                    +880 1831 645310
                  </p>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  {copied === "phone" ? (
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
              </button>

              {/* Location */}
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 text-center">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="text-sm font-medium text-foreground">
                    Mirpur, Dhaka
                  </p>
                  <p className="text-xs text-muted-foreground">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <a href="mailto:jubaidul.ctg.bd@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send me an email
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
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

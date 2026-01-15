import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-card/50">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-gradient rounded-2xl p-8 md:p-12 border border-border shadow-card">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <a
                href="mailto:jubaidul.ctg.bd@gmail.com"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/30 transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="text-sm font-mono text-foreground text-center break-all">
                  jubaidul.ctg.bd@gmail.com
                </span>
              </a>

              <a
                href="tel:+8801831645310"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/30 transition-colors group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="text-sm font-mono text-foreground">+880 1831 645310</span>
              </a>

              <div className="flex flex-col items-center gap-3 p-4 rounded-xl">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground">Location</span>
                <span className="text-sm font-mono text-foreground text-center">
                  Mirpur, Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:jubaidul.ctg.bd@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send me a message
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { useRef } from "react";

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <div className="card-premium p-8">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Science in Computer Science and Engineering
                </h3>
                <p className="text-primary font-semibold mb-4">
                  International University of Business Agriculture and Technology (IUBAT)
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Dhaka, Bangladesh
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    2016 - 2020
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Programming Contest Champion", "Programming Club Member", "Data Structures", "Algorithms", "Software Engineering"].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

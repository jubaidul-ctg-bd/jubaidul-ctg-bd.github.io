import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { useRef } from "react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    location: "Dhaka, Bangladesh",
    period: "Jan 2017 - Dec 2020",
    tags: ["Programming Contest Champion", "Programming Club Member", "Data Structures", "Algorithms", "Software Engineering"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Hazi Muhammad Mohsin College, Chattogram",
    location: "Chattogram, Bangladesh",
    period: "Jan 2013 - Dec 2015",
    tags: ["Science", "Mathematics", "Physics"],
  },
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container px-6 relative z-10" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mb-6"
          />
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Academic Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-5">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0, 1] }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <BookOpen className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-primary/80 font-semibold mb-4 text-sm">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

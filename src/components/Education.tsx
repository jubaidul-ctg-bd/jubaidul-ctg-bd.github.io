import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-primary tracking-wider">04</span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Education<span className="text-primary">.</span>
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">
            Academic foundation in Computer Science with a strong focus on software engineering and problem-solving
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Academic Background</h3>
          </div>

          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl group-hover:text-gradient transition-all mb-1">
                        Bachelor of Science in Computer Science & Engineering
                      </h4>
                      <p className="text-primary font-mono text-sm">
                        International University of Business Agriculture and Technology (IUBAT)
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-2 text-sm font-mono bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap flex-shrink-0">
                    Jan 2017 - Dec 2020
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground ml-16 md:ml-16">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/70" />
                    Dhaka, Bangladesh
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/70" />
                    4 Years
                  </span>
                </div>

                <div className="mt-6 ml-16 md:ml-16 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Key Coursework & Activities:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development", "Competitive Programming"].map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* HSC */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-muted text-muted-foreground flex-shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl group-hover:text-gradient transition-all mb-1">
                        Higher Secondary Certificate (HSC)
                      </h4>
                      <p className="text-primary font-mono text-sm">
                        Govt. Hazi Muhammad Mohsin College
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-2 text-sm font-mono bg-muted text-muted-foreground rounded-full whitespace-nowrap flex-shrink-0">
                    Jan 2013 - Dec 2015
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground ml-16 md:ml-16">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/70" />
                    Chattogram, Bangladesh
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/70" />
                    Science Group
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

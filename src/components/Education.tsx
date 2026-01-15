import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";
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
            <span className="font-mono text-sm text-primary">04.</span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Education<span className="text-primary">.</span>
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">
            Academic foundation in Computer Science with continued professional development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Academic Background</h3>
            </div>

            <div className="space-y-4">
              <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <h4 className="font-bold text-lg group-hover:text-gradient transition-all">
                      B.Sc. in Computer Science & Engineering
                    </h4>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full whitespace-nowrap">
                    2017-2020
                  </span>
                </div>
                <p className="text-primary font-mono text-sm mb-2 ml-8">
                  International University of Business Agriculture and Technology
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm ml-8">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <h4 className="font-bold text-lg group-hover:text-gradient transition-all">
                      Higher Secondary Certificate (HSC)
                    </h4>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full whitespace-nowrap">
                    2013-2015
                  </span>
                </div>
                <p className="text-primary font-mono text-sm mb-2 ml-8">
                  Govt. Hazi Muhammad Mohsin College
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm ml-8">
                  <MapPin className="w-4 h-4" />
                  <span>Chattogram, Bangladesh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Recognition</h3>
            </div>

            <div className="card-gradient rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-500 group hover:-translate-y-1 h-[calc(100%-52px)]">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-5xl"
                >
                  🏆
                </motion.div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-gradient-accent transition-all">
                    National Hackathon Semi-Finalist
                  </h4>
                  <p className="text-accent font-mono text-sm">2024 • Team Lead</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led a team of 4 developers to build an innovative solution under tight deadlines. 
                Competed against 100+ teams nationwide, demonstrating strong leadership, problem-solving, 
                and rapid prototyping abilities.
              </p>

              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-6">
                <p className="text-sm text-accent font-mono">
                  Top 10 out of 100+ Teams Nationwide
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-mono bg-accent/10 text-accent rounded-lg border border-accent/20">
                  Innovation
                </span>
                <span className="px-3 py-1.5 text-xs font-mono bg-accent/10 text-accent rounded-lg border border-accent/20">
                  Team Leadership
                </span>
                <span className="px-3 py-1.5 text-xs font-mono bg-accent/10 text-accent rounded-lg border border-accent/20">
                  Rapid Prototyping
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
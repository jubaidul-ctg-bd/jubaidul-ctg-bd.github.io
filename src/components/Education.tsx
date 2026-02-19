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

        <div className="max-w-3xl space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="card-premium p-8">
                <div className="flex items-start gap-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg flex-shrink-0"
                  >
                    <BookOpen className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 + 0.4 }}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {item}
                        </motion.span>
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

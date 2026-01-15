import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "International University of Business Agriculture and Technology (IUBAT)",
    location: "Dhaka, Bangladesh",
    period: "2016 - 2020",
    achievements: ["Programming Contest Champion", "Active member of programming club"],
  },
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted/30 rounded-lg border border-border p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-3">{edu.school}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-background border border-border rounded text-muted-foreground"
                      >
                        {achievement}
                      </span>
                    ))}
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

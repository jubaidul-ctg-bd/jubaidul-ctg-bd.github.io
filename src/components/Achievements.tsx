import { motion, useInView } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { useRef } from "react";

const awards = [
  {
    position: "Champion",
    event: "IUBAT Intra University Programming Contest",
    date: "February 2020",
    icon: Trophy,
  },
  {
    position: "9th Place",
    event: "UITS Inter University Programming Contest",
    date: "January 2019",
    icon: Medal,
  },
  {
    position: "Champion",
    event: "JU CSE FEST ICT Olympiad",
    date: "January 2019",
    icon: Trophy,
  },
  {
    position: "9th Place",
    event: "IUB Inter University Programming Contest",
    date: "January 2018",
    icon: Medal,
  },
  {
    position: "3rd Place",
    event: "IUBAT Intra University Programming Contest",
    date: "November 2017",
    icon: Award,
  },
];

const highlights = [
  {
    title: "Healthcare Platform Architecture",
    description: "Designed secure APIs serving 2M+ registered patients with 99.9% uptime",
    company: "Grameen HealthTech",
  },
  {
    title: "Engineering Leadership",
    description: "Led cross-functional team of 8+ engineers building eTicketing platform",
    company: "Jatri Services Limited",
  },
  {
    title: "Scalable Infrastructure",
    description: "Built systems handling 50K+ daily transactions with real-time processing",
    company: "Multiple Companies",
  },
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Key accomplishments and competitive programming achievements throughout my career.
          </p>
        </motion.div>

        {/* Professional Highlights */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6">Professional Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg border border-border p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-xs text-primary font-medium">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Contests */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Programming Contests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-lg border border-border p-5 flex items-start gap-4"
              >
                <div className={`p-2 rounded-lg ${
                  award.position === "Champion" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  <award.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${
                    award.position === "Champion" ? "text-primary" : "text-foreground"
                  }`}>
                    {award.position}
                  </p>
                  <p className="text-sm text-foreground mt-1">{award.event}</p>
                  <p className="text-xs text-muted-foreground mt-1">{award.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

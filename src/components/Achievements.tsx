import { motion, useInView } from "framer-motion";
import { Trophy, Award, Medal, Star, TrendingUp, Zap } from "lucide-react";
import { useRef } from "react";

const awards = [
  { position: "Champion", event: "IUBAT Intra University Programming Contest", date: "February 2020", icon: Trophy, highlight: true },
  { position: "9th Place", event: "UITS Inter University Programming Contest", date: "January 2019", icon: Medal, highlight: false },
  { position: "Champion", event: "JU CSE FEST ICT Olympiad", date: "January 2019", icon: Trophy, highlight: true },
  { position: "9th Place", event: "IUB Inter University Programming Contest", date: "January 2018", icon: Medal, highlight: false },
  { position: "3rd Place", event: "IUBAT Intra University Programming Contest", date: "November 2017", icon: Award, highlight: false },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Healthcare Platform",
    metric: "2M+",
    description: "Patients served with 99.9% uptime",
    company: "Grameen HealthTech",
  },
  {
    icon: Zap,
    title: "Engineering Leadership",
    metric: "8+",
    description: "Engineers mentored and led",
    company: "Jatri Services Limited",
  },
  {
    icon: Star,
    title: "High Performance",
    metric: "50K+",
    description: "Daily transactions processed",
    company: "Multiple Companies",
  },
];

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 pattern-dots" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Recognition
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Achievements & Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Key accomplishments and competitive programming achievements throughout my career.
          </p>
        </motion.div>

        {/* Professional Highlights */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-foreground mb-8">Impact Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-premium p-6 h-full text-center">
                  <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-4xl font-bold text-gradient mb-2">{item.metric}</p>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Contests */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8">Programming Contests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              >
                <div className={`card-premium p-5 flex items-start gap-4 ${
                  award.highlight ? 'border-primary/30 bg-primary/5' : ''
                }`}>
                  <div className={`p-2.5 rounded-xl ${
                    award.highlight 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    <award.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`font-bold ${award.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {award.position}
                    </p>
                    <p className="text-sm text-foreground mt-1">{award.event}</p>
                    <p className="text-xs text-muted-foreground mt-1">{award.date}</p>
                  </div>
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

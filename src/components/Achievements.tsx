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
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="container px-6 relative z-10" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "3rem" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary rounded-full mb-6"
          />
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Achievements &<span className="text-gradient"> Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Key accomplishments and competitive programming achievements throughout my career.
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 h-full text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <motion.p
                      className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                      initial={{ scale: 0.5 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 150 }}
                    >
                      {item.metric}
                    </motion.p>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <p className="text-xs font-medium text-primary">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Contests */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Programming Contests
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className={`rounded-xl border p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-lg ${
                  award.highlight
                    ? 'border-primary/30 bg-primary/5 hover:shadow-primary/10'
                    : 'border-border bg-card/50 hover:border-primary/20 hover:shadow-primary/5'
                }`}>
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    award.highlight
                      ? 'bg-primary/20 text-primary'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    <award.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`font-bold ${award.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {award.position}
                    </p>
                    <p className="text-sm text-foreground/80 mt-1">{award.event}</p>
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

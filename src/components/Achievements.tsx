import { motion, useInView } from "framer-motion";
import { Trophy, Users, Server, Rocket, Target, Award, Code2, Medal, Star, Lightbulb } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const impactStats = [
  {
    icon: Users,
    value: 2000000,
    suffix: "+",
    label: "Patients Served",
    description: "Healthcare platform registered users",
  },
  {
    icon: Server,
    value: 50000,
    suffix: "+",
    label: "Daily Transactions",
    description: "eTicketing system processing",
  },
  {
    icon: Rocket,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building scalable systems",
  },
  {
    icon: Target,
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "High-availability infrastructure",
  },
];

// Updated based on exact resume awards
const awards = [
  {
    position: "Champion",
    event: "IUBAT Intra University Programming Contest",
    date: "February 2020",
    icon: Trophy,
    highlight: true,
  },
  {
    position: "9th Place",
    event: "UITS Inter University Programming Contest",
    date: "January 2019",
    icon: Medal,
    highlight: false,
  },
  {
    position: "Champion",
    event: "JU CSE FEST ICT Olympiad",
    date: "January 2019",
    icon: Trophy,
    highlight: true,
  },
  {
    position: "9th Place",
    event: "IUB Inter University Programming Contest",
    date: "January 2018",
    icon: Medal,
    highlight: false,
  },
  {
    position: "3rd Place",
    event: "IUBAT Intra University Programming Contest",
    date: "November 2017",
    icon: Award,
    highlight: false,
  },
];

const professionalHighlights = [
  {
    icon: Lightbulb,
    title: "System Architecture Leadership",
    company: "Grameen HealthTech",
    description: "Designed and implemented secure, high-performing APIs for patient care serving 2M+ registered users with 99.9% uptime.",
    tags: ["System Design", "API Architecture", "Healthcare"],
  },
  {
    icon: Star,
    title: "Engineering Team Leadership",
    company: "Jatri Services Limited",
    description: "Led a cross-functional team of 8+ engineers developing Bangladesh's leading public transportation eTicketing platform.",
    tags: ["Team Lead", "Mentorship", "Agile"],
  },
  {
    icon: Code2,
    title: "Scalable Infrastructure",
    company: "Multiple Companies",
    description: "Built microservices architectures handling 50K+ daily transactions with real-time processing capabilities.",
    tags: ["Microservices", "Scalability", "Performance"],
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    if (num % 1 !== 0) return num.toFixed(1);
    return num.toString();
  };

  return <span>{formatNumber(count)}{suffix}</span>;
};

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-6"
          >
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Achievements & Impact</span>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-border to-transparent" />
            <span className="font-mono text-sm text-primary tracking-wider">03</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Proven </span>
            <span className="text-gradient">Results</span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering measurable impact through scalable systems and engineering excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-primary" />
                
                <div className="relative card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="inline-flex p-2.5 rounded-xl mb-4 bg-primary/10">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <p className="text-3xl md:text-4xl font-bold mb-1 text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </p>
                  
                  <p className="font-medium text-foreground text-sm mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Professional Highlights</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {professionalHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 h-full group-hover:-translate-y-1">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary font-mono text-xs mb-3">{item.company}</p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section - Updated from Resume */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <Award className="w-5 h-5 text-accent" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Awards & Competitions</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                className="group"
              >
                <div className={`relative card-gradient rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 h-full ${
                  award.highlight 
                    ? 'border-primary/30 hover:border-primary/50' 
                    : 'border-border hover:border-primary/30'
                }`}>
                  {award.highlight && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${award.highlight ? 'bg-primary/20' : 'bg-secondary'}`}>
                      <award.icon className={`w-4 h-4 ${award.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-0.5 text-xs font-mono font-medium rounded ${
                        award.highlight 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {award.position}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-medium text-foreground leading-snug mb-2">
                    {award.event}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">{award.date}</p>
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

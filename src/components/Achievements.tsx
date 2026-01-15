import { motion, useInView } from "framer-motion";
import { Trophy, Users, Server, Rocket, Target, Award, Code2, Medal, Zap } from "lucide-react";
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

const programmingContests = [
  {
    position: "Champion",
    event: "IUBAT Intra University Programming Contest",
    year: "Feb 2020",
    highlight: true,
  },
  {
    position: "9th Place",
    event: "UITS Inter University Programming Contest",
    year: "Jan 2019",
    highlight: false,
  },
  {
    position: "Champion",
    event: "JU CSE FEST ICT Olympiad",
    year: "Jan 2019",
    highlight: true,
  },
  {
    position: "9th Place",
    event: "IUB Inter University Programming Contest",
    year: "Jan 2018",
    highlight: false,
  },
  {
    position: "3rd Place",
    event: "IUBAT Intra University Programming Contest",
    year: "Nov 2017",
    highlight: false,
  },
];

const careerHighlights = [
  {
    icon: Trophy,
    title: "National Hackathon Semi-Finalist",
    subtitle: "2024 • Team Lead",
    description: "Led a team of 4 developers to build an innovative solution. Top 10 out of 100+ teams nationwide.",
    tags: ["Innovation", "Team Leadership", "Rapid Prototyping"],
  },
  {
    icon: Award,
    title: "Led Cross-Functional Engineering Team",
    subtitle: "Jatri Services Limited • 2022-2024",
    description: "Managed 8+ engineers developing Bangladesh's leading public transportation eTicketing platform.",
    tags: ["Engineering Leadership", "Mentorship", "Architecture"],
  },
  {
    icon: Medal,
    title: "Architected Healthcare Platform",
    subtitle: "Grameen HealthTech • 2024-2025",
    description: "Designed secure, high-performing APIs for patient care serving 2M+ registered users nationwide.",
    tags: ["System Design", "Healthcare Tech", "Scalability"],
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
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">Impact & Recognition</span>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-border to-transparent" />
            <span className="font-mono text-sm text-primary tracking-wider">03</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Proven </span>
            <span className="text-gradient">Results</span>
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering measurable impact through scalable systems and engineering excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-primary" />
                
                <div className="relative card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-500 h-full">
                  <div className="inline-flex p-3 rounded-xl mb-4 bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <p className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </p>
                  
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Highlights */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Career Highlights</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="space-y-6">
            {careerHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20"
                        >
                          <item.icon className="w-8 h-8 text-primary" />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                          {item.title}
                        </h4>
                        <p className="text-primary font-mono text-sm mt-1 mb-3">{item.subtitle}</p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Contests */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <Code2 className="w-6 h-6 text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold">Programming Contests</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmingContests.map((contest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className={`card-gradient rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                  contest.highlight 
                    ? 'border-primary/40 hover:border-primary' 
                    : 'border-border hover:border-primary/40'
                }`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-mono font-semibold rounded-full ${
                      contest.highlight 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {contest.position}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{contest.year}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {contest.event}
                  </p>
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

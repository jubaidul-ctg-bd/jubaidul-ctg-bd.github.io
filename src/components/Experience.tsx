import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, Globe, Zap } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Pullsight.ai",
    location: "Bulgaria (Remote)",
    period: "Jul 2025 - Present",
    type: "Remote",
    description: [
      "Engineering backend infrastructure for an open-source AI code review platform deployed in customer infrastructure.",
      "Building a scalable system for automated code analysis, enabling code review delivery within minutes.",
      "Developing integrations with GitHub, GitLab, and Bitbucket for seamless pull request review automation.",
      "Implementing webhook handlers and API integrations for real-time PR analysis and feedback delivery.",
      "Collaborating with an international team on distributed system design and performance optimization.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "GitHub API", "GitLab API"],
    current: true,
    impact: "AI Code Review Platform",
  },
  {
    title: "Senior Software Engineer",
    company: "Grameen HealthTech Limited",
    location: "Dhaka, Bangladesh",
    period: "Sep 2024 - Oct 2025",
    type: "Full-time",
    description: [
      "Leading backend architecture and development for digital healthcare platforms, serving 2+ million registered patients.",
      "Built secure, high-performing APIs for patient care, appointment scheduling, and analytics.",
      "Integrated third-party healthcare services and payment gateways with robust error handling and retry mechanisms.",
      "Optimized database queries and implemented caching strategies, significantly improving system performance.",
      "Enhanced system reliability through comprehensive monitoring, logging, and alerting infrastructure.",
    ],
    tech: ["NestJS", "MongoDB", "Redis", "AWS", "Payment Gateways"],
    current: false,
    impact: "2M+ Patients Served",
  },
  {
    title: "Lead Software Engineer",
    company: "Jatri Services Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2022 - Aug 2024",
    type: "Full-time",
    description: [
      "Led a cross-functional engineering team developing an eTicketing platform for public transportation.",
      "Built scalable backend infrastructure, handling thousands of daily ticket bookings and real-time bus tracking.",
      "Collaborated with product and design teams to define technical requirements and delivery timelines.",
      "Managed server infrastructure on AWS EC2 with Nginx for load balancing and reverse proxy configuration.",
      "Mentored junior developers through code reviews, pair programming, and technical documentation.",
      "Analyzed system performance metrics, identifying areas for improvement and driving optimization efforts.",
    ],
    tech: ["Express.js", "MySQL", "Docker", "Nginx", "AWS EC2", "Socket.io"],
    current: false,
    impact: "50K+ Daily Transactions",
  },
  {
    title: "Software Engineer",
    company: "Shafa Care Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Dec 2021",
    type: "Full-time",
    description: [
      "Developed core backend systems for a telemedicine platform that connects doctors and patients.",
      "Built secure APIs for electronic prescriptions, appointment booking, and medical report management.",
      "Implemented role-based access control (RBAC) for a multi-tenant healthcare system.",
      "Coordinated with the frontend and mobile teams to ensure seamless API integration.",
      "Integrated third-party services, including SMS gateways, payment processors, and video conferencing APIs.",
    ],
    tech: ["Node.js", "PostgreSQL", "REST APIs", "JWT", "Video APIs", "SMS Gateway"],
    current: false,
    impact: "Telehealth Pioneer",
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-primary tracking-wider">01</span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Experience<span className="text-primary">.</span>
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            5+ years building scalable backend systems across healthcare, transportation, and AI sectors. 
            Focused on high-performance APIs, system architecture, and engineering leadership.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-20 pb-16 last:pb-0 group"
            >
              {/* Timeline node */}
              <div className={`absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                exp.current 
                  ? 'bg-primary border-primary shadow-glow' 
                  : 'bg-background border-muted-foreground group-hover:border-primary group-hover:bg-primary/20'
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Card */}
              <div className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-500 group-hover:shadow-elevated group-hover:-translate-y-1 relative overflow-hidden">
                {/* Badges row */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-mono font-medium bg-primary/10 text-primary rounded-full border border-primary/30 flex items-center gap-1.5">
                      <Zap className="w-3 h-3" />
                      CURRENT
                    </span>
                  )}
                  {exp.type === "Remote" && (
                    <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20 flex items-center gap-1.5">
                      <Globe className="w-3 h-3" />
                      REMOTE
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pr-24">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-mono text-sm">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/70" />
                    <span className="font-mono">{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary/70" />
                    {exp.location}
                  </span>
                </div>

                {/* Impact badge */}
                {exp.impact && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{exp.impact}</span>
                  </div>
                )}
                
                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-lg leading-none">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono bg-muted/50 text-muted-foreground rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

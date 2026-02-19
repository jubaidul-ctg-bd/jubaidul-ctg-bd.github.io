import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Pullsight.ai",
    companyUrl: "https://pullsight.ai/",
    location: "Bulgaria (Remote - Contract)",
    period: "Jul 2025 - Present",
    description: [
      "Engineering backend infrastructure for an open-source AI code review platform deployed in customer infrastructure.",
      "Building a scalable system for automated code analysis, enabling code review delivery within minutes.",
      "Developing integrations with GitHub, GitLab, and Bitbucket for seamless pull request review automation.",
      "Implementing webhook handlers and API integrations for real-time PR analysis and feedback delivery.",
      "Collaborating with an international team on distributed system design and performance optimization.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "GitHub API"],
    current: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Grameen HealthTech Limited",
    companyUrl: "https://ghl.healthcare/",
    location: "Dhaka, Bangladesh",
    period: "Sep 2024 - Oct 2025",
    description: [
      "Leading backend architecture and development for digital healthcare platforms, serving 2+ million registered patients.",
      "Built secure, high-performing APIs for patient care, appointment scheduling, and analytics.",
      "Integrated third-party healthcare services and payment gateways with robust error handling and retry mechanisms.",
      "Optimized database queries and implemented caching strategies, significantly improving system performance.",
      "Enhanced system reliability through comprehensive monitoring, logging, and alerting infrastructure.",
    ],
    tech: ["NestJS", "MongoDB", "Redis", "AWS"],
    current: false,
  },
  {
    title: "Lead Software Engineer",
    company: "Jatri Services Limited",
    companyUrl: "https://jatri.co/",
    location: "Dhaka, Bangladesh",
    period: "Jan 2022 - Aug 2024",
    description: [
      "Led a cross-functional engineering team developing an e-ticketing platform for public transportation.",
      "Built scalable backend infrastructure, handling thousands of daily ticket bookings and real-time bus tracking.",
      "Collaborated with product and design teams to define technical requirements and delivery timelines.",
      "Managed server infrastructure on AWS EC2 with Nginx for load balancing and reverse proxy configuration.",
      "Mentored junior developers through code reviews, pair programming, and technical documentation.",
    ],
    tech: ["Express.js", "MySQL", "Docker", "Nginx", "AWS EC2"],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Shafa Care Ltd.",
    companyUrl: "https://shafa.care/",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Dec 2021",
    description: [
      "Developed core backend systems for a telemedicine platform that connects doctors and patients.",
      "Built secure APIs for electronic prescriptions, appointment booking, and medical report management.",
      "Implemented role-based access control (RBAC) for a multi-tenant healthcare system.",
      "Coordinated with the frontend and mobile teams to ensure seamless API integration.",
      "Integrated third-party services, including SMS gateways, payment processors, and video conferencing APIs.",
    ],
    tech: ["Node.js", "PostgreSQL", "REST APIs", "JWT"],
    current: false,
  },
];

const ExperienceCard = ({ exp, index, isInView }: { exp: typeof experiences[0]; index: number; isInView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0, 1] }}
      className="group relative"
    >
      {/* Connector line for non-last items */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
      )}

      <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top row */}
        <div className="relative flex flex-wrap items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* Number badge */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
              exp.current
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-secondary text-muted-foreground'
            }`}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>
                {exp.current && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full"
                  >
                    Current
                  </motion.span>
                )}
              </div>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline text-sm"
              >
                {exp.company}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
              <Calendar className="w-3 h-3" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="relative space-y-2.5 mb-6 ml-16 md:ml-16">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.12 + i * 0.05 + 0.2 }}
              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="group-hover:text-foreground/80 transition-colors duration-300">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="relative flex flex-wrap gap-2 ml-16 md:ml-16">
          {exp.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

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
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Work History</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Professional
            <span className="text-gradient"> Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            6+ years building scalable systems across healthcare, transportation, and AI sectors.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="max-w-4xl space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

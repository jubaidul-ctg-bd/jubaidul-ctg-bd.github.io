import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Backend Engineer",
    company: "Pullsight.ai",
    location: "Bulgaria (Remote)",
    period: "Jul 2025 - Present",
    description: [
      "Engineering backend infrastructure for an open-source AI code review platform deployed in customer infrastructure.",
      "Building a scalable system for automated code analysis, enabling code review delivery within minutes.",
      "Developing integrations with GitHub, GitLab, and Bitbucket for seamless pull request review automation.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "GitHub API"],
    current: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Grameen HealthTech Limited",
    location: "Dhaka, Bangladesh",
    period: "Sep 2024 - Oct 2025",
    description: [
      "Led backend architecture for digital healthcare platforms, serving 2+ million registered patients.",
      "Built secure, high-performing APIs for patient care, appointment scheduling, and analytics.",
      "Optimized database queries and implemented caching strategies for improved performance.",
    ],
    tech: ["NestJS", "MongoDB", "Redis", "AWS"],
    current: false,
  },
  {
    title: "Lead Software Engineer",
    company: "Jatri Services Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2022 - Aug 2024",
    description: [
      "Led cross-functional engineering team developing an eTicketing platform for public transportation.",
      "Built scalable backend infrastructure, handling thousands of daily ticket bookings.",
      "Mentored junior developers through code reviews and pair programming.",
    ],
    tech: ["Express.js", "MySQL", "Docker", "Nginx", "AWS EC2"],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Shafa Care Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Dec 2021",
    description: [
      "Developed core backend systems for a telemedicine platform connecting doctors and patients.",
      "Built secure APIs for electronic prescriptions and appointment booking.",
      "Implemented role-based access control (RBAC) for a multi-tenant healthcare system.",
    ],
    tech: ["Node.js", "PostgreSQL", "REST APIs", "JWT"],
    current: false,
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
            <Briefcase className="w-4 h-4" />
            Work History
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            5+ years building scalable backend systems across healthcare, transportation, and AI sectors.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-primary border-primary' 
                    : 'bg-background border-muted-foreground/50'
                }`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Card */}
                <div className="card-premium p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold flex items-center gap-2">
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center justify-end gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </p>
                      <p className="flex items-center justify-end gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
      </div>
    </section>
  );
};

export default Experience;

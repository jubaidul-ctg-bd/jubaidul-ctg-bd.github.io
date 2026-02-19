import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
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
      "Analyzed system performance metrics, identifying areas for improvement and driving optimization efforts.",
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
            6+ years building scalable backend systems across healthcare, transportation, and AI sectors.
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
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  className={`absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-primary border-primary' 
                      : 'bg-background border-muted-foreground/50'
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </motion.div>

                {/* Card */}
                <div className="card-premium p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="px-2.5 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full"
                          >
                            Current
                          </motion.span>
                        )}
                      </div>
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold flex items-center gap-2 hover:underline"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
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
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 + 0.3 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.05 }}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
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

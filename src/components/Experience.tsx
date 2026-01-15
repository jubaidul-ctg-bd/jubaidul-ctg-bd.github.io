import { motion, useInView } from "framer-motion";
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
      "Led backend architecture and development for digital healthcare platforms, serving 2+ million registered patients.",
      "Built secure, high-performing APIs for patient care, appointment scheduling, and analytics.",
      "Integrated third-party healthcare services and payment gateways with robust error handling.",
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
      "Led a cross-functional engineering team developing an eTicketing platform for public transportation.",
      "Built scalable backend infrastructure, handling thousands of daily ticket bookings and real-time tracking.",
      "Managed server infrastructure on AWS EC2 with Nginx for load balancing.",
      "Mentored junior developers through code reviews and pair programming.",
    ],
    tech: ["Express.js", "MySQL", "Docker", "Nginx", "AWS EC2", "Socket.io"],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Shafa Care Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Dec 2021",
    description: [
      "Developed core backend systems for a telemedicine platform connecting doctors and patients.",
      "Built secure APIs for electronic prescriptions, appointment booking, and medical report management.",
      "Implemented role-based access control (RBAC) for a multi-tenant healthcare system.",
      "Integrated third-party services including SMS gateways and video conferencing APIs.",
    ],
    tech: ["Node.js", "PostgreSQL", "REST APIs", "JWT"],
    current: false,
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Work History</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            5+ years building scalable backend systems across healthcare, transportation, and AI sectors.
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
      "Implementing webhook handlers and API integrations for real-time PR analysis and feedback delivery.",
    ],
    current: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Grameen HealthTech Limited",
    location: "Dhaka, Bangladesh",
    period: "Sep 2024 - Oct 2025",
    description: [
      "Leading backend architecture and development for digital healthcare platforms, serving 2+ million registered patients.",
      "Built secure, high-performing APIs for patient care, appointment scheduling, and analytics.",
      "Optimized database queries and implemented caching strategies, significantly improving system performance.",
    ],
    current: false,
  },
  {
    title: "Lead Software Engineer",
    company: "Jatri Services Limited",
    location: "Dhaka, Bangladesh",
    period: "Jan 2022 - Aug 2024",
    description: [
      "Led a cross-functional engineering team developing an eTicketing platform for public transportation.",
      "Built scalable backend infrastructure, handling thousands of daily ticket bookings and real-time bus tracking.",
      "Managed server infrastructure on AWS EC2 with Nginx for load balancing and reverse proxy configuration.",
      "Mentored junior developers through code reviews, pair programming, and technical documentation.",
    ],
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Shafa Care Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Sep 2020 - Dec 2021",
    description: [
      "Developed core backend systems for a telemedicine platform that connects doctors and patients.",
      "Built secure APIs for electronic prescriptions, appointment booking, and medical report management.",
      "Implemented role-based access control (RBAC) for a multi-tenant healthcare system.",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building scalable systems and leading engineering teams across healthcare and transportation sectors.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                exp.current ? 'bg-primary shadow-glow' : 'bg-muted-foreground'
              }`} />

              <div className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-mono text-sm flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </p>
                    <p className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

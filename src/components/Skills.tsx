import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users, Network } from "lucide-react";
import { useRef, useState } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    description: "Core technologies for building robust backend systems",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "NestJS", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 75 },
    ],
  },
  {
    icon: Network,
    title: "Architecture & Protocols",
    description: "System design and communication patterns",
    skills: [
      { name: "Monolithic Architecture", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "WebSockets", level: 88 },
      { name: "Socket.io", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Database & ORM",
    description: "Data management and persistence layers",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "TypeORM", level: 85 },
      { name: "Sequelize", level: 82 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Infrastructure and deployment automation",
    skills: [
      { name: "Docker", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "Load Balancing", level: 82 },
      { name: "System Monitoring", level: 80 },
      { name: "Nginx", level: 85 },
      { name: "AWS EC2", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Methodologies",
    description: "Development workflow and collaboration",
    skills: [
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 92 },
      { name: "Jira", level: 88 },
      { name: "Confluence", level: 85 },
      { name: "Agile/Scrum", level: 90 },
    ],
  },
  {
    icon: Users,
    title: "Leadership & Soft Skills",
    description: "Team collaboration and mentorship",
    skills: [
      { name: "Team Leadership", level: 92 },
      { name: "Technical Mentoring", level: 90 },
      { name: "Strategic Planning", level: 85 },
      { name: "Problem Solving", level: 95 },
      { name: "Cross-functional Collaboration", level: 90 },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm text-primary tracking-wider">02</span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Core Skills<span className="text-primary">.</span>
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive toolkit built over 5+ years for developing robust, scalable backend applications 
            with a focus on clean architecture and high performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full card-gradient rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills with progress */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group/skill cursor-default"
                      onMouseEnter={() => setHoveredSkill(`${index}-${i}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono transition-all duration-300 ${
                          hoveredSkill === `${index}-${i}` ? 'opacity-100 text-primary' : 'opacity-0'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + i * 0.05, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </div>
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

export default Skills;

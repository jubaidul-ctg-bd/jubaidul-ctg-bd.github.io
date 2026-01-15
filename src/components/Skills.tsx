import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users, Zap } from "lucide-react";
import { useRef, useState } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    color: "primary",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Express.js", level: 92 },
      { name: "NestJS", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Database & ORM",
    color: "accent",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "TypeORM", level: 82 },
      { name: "Sequelize", level: 80 },
      { name: "Mongoose", level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    color: "primary",
    skills: [
      { name: "Docker", level: 88 },
      { name: "AWS EC2", level: 85 },
      { name: "CI/CD", level: 82 },
      { name: "GitHub Actions", level: 80 },
      { name: "Nginx", level: 85 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & APIs",
    color: "accent",
    skills: [
      { name: "REST APIs", level: 95 },
      { name: "WebSockets", level: 85 },
      { name: "Microservices", level: 80 },
      { name: "Git", level: 92 },
      { name: "Redis", level: 78 },
      { name: "Agile/Scrum", level: 88 },
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    color: "primary",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Technical Mentoring", level: 88 },
      { name: "Code Review", level: 92 },
      { name: "Problem Solving", level: 95 },
    ],
  },
  {
    icon: Zap,
    title: "Architecture",
    color: "accent",
    skills: [
      { name: "System Design", level: 85 },
      { name: "Clean Code", level: 90 },
      { name: "API Design", level: 92 },
      { name: "Scalability", level: 85 },
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
            <span className="font-mono text-sm text-primary">02.</span>
            <h2 className="text-4xl md:text-6xl font-bold">
              Skills<span className="text-primary">.</span>
            </h2>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="text-muted-foreground text-lg max-w-xl">
            A comprehensive toolkit for building robust, scalable backend systems.
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
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${
                    category.color === 'primary' 
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                      : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground'
                  } transition-all duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                {/* Skills with progress */}
                <div className="space-y-4">
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
                          className={`h-full rounded-full ${
                            category.color === 'primary'
                              ? 'bg-gradient-to-r from-primary to-primary/60'
                              : 'bg-gradient-to-r from-accent to-accent/60'
                          }`}
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
import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users, Network } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    skills: ["Node.js", "Express.js", "NestJS", "JavaScript", "TypeScript", "React", "Next.js", "Python"],
  },
  {
    icon: Network,
    title: "Architecture & Protocols",
    skills: ["Monolithic & Modular", "Microservices", "REST APIs", "WebSockets", "Socket.io", "RabbitMQ", "Kafka", "BullMQ"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "TypeORM", "Sequelize", "Mongoose"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD Pipelines", "GitHub Actions", "Nginx", "AWS EC2", "AWS RDS", "AWS S3", "Route 53", "Load Balancing"],
  },
  {
    icon: Wrench,
    title: "Tools & Methodologies",
    skills: ["Git", "GitHub", "Postman", "Jira", "Confluence", "Agile/Scrum", "Jest Testing"],
  },
  {
    icon: Users,
    title: "Leadership & Soft Skills",
    skills: ["Team Leadership", "Technical Mentoring", "Strategic Planning", "Problem Solving", "Cross-functional Collaboration"],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container px-6 relative z-10" ref={containerRef}>
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
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Skills &<span className="text-gradient"> Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit built over 6+ years for developing robust, scalable full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0, 1] }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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

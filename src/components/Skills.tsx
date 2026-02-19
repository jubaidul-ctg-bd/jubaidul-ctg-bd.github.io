import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users, Network } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    color: "from-blue-500 to-cyan-500",
    skills: ["Node.js", "Express.js", "NestJS", "JavaScript", "TypeScript", "React", "Next.js", "Python"],
  },
  {
    icon: Network,
    title: "Architecture & Protocols",
    color: "from-purple-500 to-pink-500",
    skills: ["Monolithic & Modular", "Microservices", "REST APIs", "WebSockets", "Socket.io", "RabbitMQ", "Kafka", "BullMQ"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    color: "from-green-500 to-emerald-500",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "TypeORM", "Sequelize", "Mongoose"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    color: "from-orange-500 to-amber-500",
    skills: ["Docker", "CI/CD Pipelines", "GitHub Actions", "Nginx", "AWS EC2", "AWS RDS", "AWS S3", "Route 53", "Load Balancing"],
  },
  {
    icon: Wrench,
    title: "Tools & Methodologies",
    color: "from-rose-500 to-red-500",
    skills: ["Git", "GitHub", "Postman", "Jira", "Confluence", "Agile/Scrum", "Jest Testing"],
  },
  {
    icon: Users,
    title: "Leadership & Soft Skills",
    color: "from-indigo-500 to-violet-500",
    skills: ["Team Leadership", "Technical Mentoring", "Strategic Planning", "Problem Solving", "Cross-functional Collaboration"],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit built over 6+ years for developing robust, scalable full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="card-premium p-6 h-full">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                  <category.icon className="w-5 h-5" />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.03 + 0.3 }}
                      className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
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

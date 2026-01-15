import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Node.js", "Express.js", "NestJS", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Architecture & APIs",
    skills: ["REST APIs", "Microservices", "Monolithic", "WebSockets", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "TypeORM", "Sequelize", "Mongoose"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS EC2", "Nginx", "CI/CD", "GitHub Actions", "Load Balancing"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "Jira", "Confluence", "Agile/Scrum"],
  },
  {
    title: "Leadership",
    skills: ["Team Leadership", "Technical Mentoring", "Code Review", "Strategic Planning"],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Technical Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive toolkit built over 5+ years for developing robust, scalable backend applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/30 rounded-lg p-6 border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-background border border-border rounded-md text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
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

export default Skills;

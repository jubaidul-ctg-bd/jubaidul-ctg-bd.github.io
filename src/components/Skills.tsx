import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    skills: ["Node.js", "Express.js", "NestJS", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "TypeORM", "Sequelize", "Mongoose"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD Pipelines", "AWS EC2", "GitHub Actions", "Nginx", "Load Balancing"],
  },
  {
    icon: Wrench,
    title: "Tools & Methodologies",
    skills: ["REST APIs", "WebSockets", "Microservices", "Git", "Postman", "Agile/Scrum"],
  },
  {
    icon: Users,
    title: "Leadership",
    skills: ["Team Leadership", "Technical Mentoring", "Strategic Planning", "Problem Solving"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/50">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all group hover:shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

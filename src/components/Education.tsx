import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Awards</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border">
              <h4 className="font-bold text-lg mb-2">B.Sc. in Computer Science & Engineering</h4>
              <p className="text-primary font-mono text-sm mb-2">
                International University of Business Agriculture and Technology (IUBAT)
              </p>
              <p className="text-muted-foreground text-sm">Jan 2017 - Dec 2020</p>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border">
              <h4 className="font-bold text-lg mb-2">Higher Secondary Certificate (HSC)</h4>
              <p className="text-primary font-mono text-sm mb-2">
                Govt. Hazi Muhammad Mohsin College, Chattogram
              </p>
              <p className="text-muted-foreground text-sm">Jan 2013 - Dec 2015</p>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Recognition</h3>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="font-bold text-lg">National Hackathon Semi-Finalist</h4>
                  <p className="text-primary font-mono text-sm">2024 - Team Lead</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Achieved semi-finalist position at a national hackathon, leading a team to develop an innovative solution under tight deadlines.
              </p>
            </div>

            <div className="mt-6 card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient mb-2">5+</p>
                <p className="text-muted-foreground text-sm">Years of Professional Experience</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-center">
                <p className="text-4xl font-bold text-gradient mb-2">2M+</p>
                <p className="text-muted-foreground text-sm">Users Served on Healthcare Platforms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

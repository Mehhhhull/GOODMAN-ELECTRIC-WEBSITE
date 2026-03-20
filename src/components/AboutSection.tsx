import { motion } from "framer-motion";
import { Shield, Zap, Clock } from "lucide-react";

const values = [
  { icon: Shield, title: "Safety First", text: "Every job is completed to the highest safety standards and BC electrical code." },
  { icon: Zap, title: "Quality Work", text: "Clean, professional installations that last — no shortcuts, no callbacks." },
  { icon: Clock, title: "Reliable Service", text: "We show up on time, communicate clearly, and finish on schedule." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl font-bold text-heading mb-4">
            Your Trusted <br /> <span className="bg-[#14B897] text-white px-2 py-1">Electrical Partner</span>
          </h2>
          
          <p className="text-body leading-relaxed">
            At Goodman Electric, we take pride in delivering clean, high-quality electrical installations built for long-term safety, reliability, and performance. Whether you’re upgrading a home, building a commercial space, or wiring a new property from the ground up, our team brings professionalism and precision to every stage of the project.
          </p>

          <p className="mt-6 text-lg font-semibold text-black leading-relaxed border-l-4 border-[#14B897] pl-4">
            “We don’t just install electrical systems.
            <br />
            <span className="text-[#14B897]">
              We elevate the spaces people live and work in
            </span>”
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-md border border-transparent hover:border-border hover:bg-background transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-heading mb-1">{v.title}</h3>
              <p className="text-sm text-body leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
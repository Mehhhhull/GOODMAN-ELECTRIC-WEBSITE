import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Sparkles, CalendarCheck, MessageSquare } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "Fully licensed and insured for your peace of mind on every project." },
  { icon: Ruler, title: "Code Compliant", text: "All work meets or exceeds BC electrical code requirements." },
  { icon: Sparkles, title: "Clean Installations", text: "We leave your space cleaner than we found it — every time." },
  { icon: CalendarCheck, title: "Reliable Timelines", text: "Projects completed on time and on budget, with no surprises." },
  { icon: MessageSquare, title: "Clear Communication", text: "You'll always know what's happening, when, and why." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Why Choose <span className="bg-[#14B897] text-white px-2 py-1">Goodman Electric</span>
        </motion.h2>

        <div className="space-y-0 divide-y divide-border">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-start gap-4 py-5 px-3 -mx-3 rounded-md hover:bg-background transition-colors duration-200 cursor-default"
            >
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                <p.icon className="w-4 h-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-heading">{p.title}</h3>
                <p className="text-sm text-body mt-0.5">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

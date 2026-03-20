import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import panelImg from "@/assets/project-panel.jpg";
import evImg from "@/assets/project-ev.jpg";
import lightingImg from "@/assets/project-lighting.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import outdoorImg from "@/assets/project-outdoor.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";

const projects = [
  { img: panelImg, title: "Panel Upgrade", desc: "200A residential panel upgrade in Surrey with whole-home surge protection." },
  { img: evImg, title: "EV Charger Install", desc: "Level 2 EV charger installation for a Langley homeowner — clean conduit run." },
  { img: lightingImg, title: "Recessed Lighting", desc: "Full pot light layout and installation for a modern Burnaby living room." },
  { img: commercialImg, title: "Commercial Fit-Out", desc: "Complete electrical for a new retail space in Richmond — lighting, data, power." },
  { img: outdoorImg, title: "Landscape Lighting", desc: "Low-voltage pathway and garden lighting for a White Rock residence." },
  { img: kitchenImg, title: "Kitchen Renovation", desc: "Under-cabinet LEDs, pendant fixtures, and dedicated circuits in Coquitlam." },
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-20 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-heading mb-4">Recent Projects</h2>
          <p className="text-body max-w-xl">
            A look at some of our completed work across the Lower Mainland.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-md overflow-hidden border border-border cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-background">{p.title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-background/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xs text-background/80 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;

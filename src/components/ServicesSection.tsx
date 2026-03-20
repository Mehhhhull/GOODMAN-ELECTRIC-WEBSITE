import { motion } from "framer-motion";
import { Home, Building2, ChevronRight } from "lucide-react";

const residential = [
  "Panel upgrades & replacements",
  "Knob & tube rewiring",
  "Lighting design & installation",
  "EV charger installation",
  "Home renovations & additions",
  "Smoke & CO detector installation",
  "Dedicated circuits (hot tubs, AC units)",
  "Troubleshooting & repairs",
];

const commercial = [
  "Tenant improvements & fit-outs",
  "Office & retail lighting",
  "Data & communication wiring",
  "Emergency & exit lighting",
  "Code compliance upgrades",
  "New construction electrical",
  "Parking lot & exterior lighting",
  "Electrical maintenance contracts",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-heading mb-4">Our Services</h2>
          <p className="text-body max-w-xl mx-auto">
            Full-service electrical solutions for residential and commercial
            properties across the Lower Mainland.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="bg-surface border border-border rounded-md p-8 transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Residential Services
              </h3>
            </div>
            <ul className="space-y-3">
              {residential.map((s) => (
                <li key={s} className="group/item flex items-center gap-3 text-sm text-body hover:text-foreground transition-colors duration-200 cursor-default">
                  <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-primary text-primary-foreground border border-primary rounded-md p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-primary-foreground/15 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">
                Commercial Services
              </h3>
            </div>
            <ul className="space-y-3">
              {commercial.map((s) => (
                <li key={s} className="group/item flex items-center gap-3 text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors duration-200 cursor-default">
                  <ChevronRight className="w-3.5 h-3.5 text-primary-foreground/70 flex-shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

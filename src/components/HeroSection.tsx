import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";

const trustItems = [
  "Licensed & Insured",
  "Residential + Commercial",
  "New Builds + Renovations",
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      {/* Layered subtle gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(168_80%_40%_/_0.06),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(168_80%_40%_/_0.03),_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-primary tracking-wide mb-4"
            >
              Licensed & Insured Electricians — Lower Mainland, BC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-tight text-heading mb-6"
            >
              Reliable Electrical Services Built for{" "}
              <span className="text-primary">Safety & Performance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-body leading-relaxed mb-8 max-w-lg"
            >
              Residential and commercial electrical services across the Lower
              Mainland — new builds, renovations, upgrades, and maintenance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {trustItems.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-sm text-body"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:6048970308"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-md hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
                Call Now
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-xs text-muted-foreground"
            >
              604-897-0308 · Free estimates on all projects
            </motion.p>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-md overflow-hidden border border-border transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/10">
              <img
                src={heroImg}
                alt="Licensed electrician working on a residential electrical panel in the Lower Mainland BC"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Accent detail */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-md -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

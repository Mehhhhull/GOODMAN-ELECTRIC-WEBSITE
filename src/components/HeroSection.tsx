import { motion } from "framer-motion";
import { Phone, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-electrician.jpg";

const trustItems = [
  "Licensed & Insured",
  "Residential + Commercial",
  "New Builds + Renovations",
  "Serving the Lower Mainland"
];

const HeroSection = () => {
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  return (
    <section className="relative pt-16 pb-12 md:pt-32 md:pb-24 bg-background overflow-visible">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(168_80%_40%_/_0.06),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(168_80%_40%_/_0.03),_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div className="order-2 md:order-1">

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.2] sm:leading-tight text-heading mb-6"
            >
              Powering Your Vision With Precision,{" "}
              <span className="text-primary">
                Integrity & Modern Electrical Expertise
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-body leading-relaxed mb-8 max-w-md md:max-w-lg"
            >
              Reliable electrical services for residential and commercial projects—covering new construction, renovations, upgrades, and maintenance across the Lower Mainland.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-x-4 gap-y-2 mb-6"
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
              className="flex flex-wrap gap-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <div className="relative">
                <button
                  onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                  className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-md hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
                  Call Now
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showPhoneDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showPhoneDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-0 right-0 md:left-0 md:right-auto bg-white border border-border rounded-md shadow-lg z-50 min-w-[200px] w-full md:w-auto max-h-[60vh] overflow-y-auto"
                  >
                    <a
                      href="tel:6048970308"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-border"
                      onClick={() => setShowPhoneDropdown(false)}
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Manny</div>
                        <div className="text-body">604-897-0308</div>
                      </div>
                    </a>

                    <a
                      href="tel:6044469360"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      onClick={() => setShowPhoneDropdown(false)}
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Nav</div>
                        <div className="text-body">604-446-9360</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="rounded-md overflow-hidden border border-border transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/10">
              <img
                src={heroImg}
                alt="Licensed electrician working on a residential electrical panel in the Lower Mainland BC"
                className="w-full h-[220px] sm:h-auto object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-md -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
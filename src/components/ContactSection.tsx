import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

  return (
    <section id="contact" className="py-20 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Get In <span className="bg-[#14B897] text-white px-2 py-1">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-semibold text-heading mb-2">Thank you!</p>
                <p className="text-sm text-body">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-[#14B897] p-6 rounded-lg">
                {[
                  { id: "name", label: "Name", type: "text", required: true, placeholder: "Enter your full name" },
                  { id: "phone", label: "Phone", type: "tel", required: false, placeholder: "604-123-4567" },
                  { id: "email", label: "Email", type: "email", required: true, placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
                        focused === field.id ? "text-white" : "text-white/90"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
                      focused === "message" ? "text-white" : "text-white/90"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your electrical project..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#14B897] font-semibold text-sm rounded-md hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-semibold text-heading mb-3">Contact Information</h3>
              <div className="space-y-3 text-sm text-body">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p>Manny: <a href="tel:6048970308" className="text-primary font-medium hover:underline transition-colors">604-897-0308</a></p>
                    <p>Nav: <a href="tel:6044469360" className="text-primary font-medium hover:underline transition-colors">604-446-9360</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:goodmanelectricltd@gmail.com" className="text-primary font-medium hover:underline transition-colors">
                    goodmanelectricltd@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Service Area: Lower Mainland, BC</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="tel:6048970308"
                className="group flex items-center justify-center gap-2 w-full px-5 py-2.5 border border-border text-foreground font-medium text-sm rounded-md hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
                Call Manny
              </a>
              <a
                href="tel:6044469360"
                className="group flex items-center justify-center gap-2 w-full px-5 py-2.5 border border-border text-foreground font-medium text-sm rounded-md hover:border-primary hover:text-primary transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
                Call Nav
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

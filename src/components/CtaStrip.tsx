import { Phone, ArrowRight } from "lucide-react";

const CtaStrip = () => {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-lg font-semibold text-center sm:text-left">
          Ready to start your electrical project?
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground text-primary font-semibold text-sm rounded-md hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:6048970308"
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
            604-897-0308
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;

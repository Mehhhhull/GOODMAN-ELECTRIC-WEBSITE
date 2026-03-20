import { Phone, ArrowRight } from "lucide-react";

const CtaStrip = () => {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* LEFT TEXT */}
        <div className="text-center sm:text-left max-w-xl">
          <p className="text-lg font-semibold mb-1">
            Ready to start your project? Let’s power your vision.
          </p>
          <p className="text-sm text-primary-foreground/80">
            We proudly serve clients across the Lower Mainland with fast, friendly, and reliable electrical service.
          </p>
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground text-primary font-semibold text-sm rounded-md hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="tel:6048970308"
            className="group inline-flex items-center gap-2 px-4 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            604-897-0308
          </a>

          <a
            href="tel:6044469360"
            className="group inline-flex items-center gap-2 px-4 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-md hover:bg-primary-foreground/10 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            604-446-9360
          </a>

        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
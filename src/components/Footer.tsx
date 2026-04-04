import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm">

        {/* Brand */}
        <div className="space-y-2">
          <p className="font-semibold text-heading">Goodman Electric</p>
          <p className="text-body text-xs">
            Lower Mainland & Surrounding Regions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold text-heading mb-3">Quick Links</p>
          <div className="flex flex-col gap-2 text-body text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="font-semibold text-heading mb-3">Connect</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/goodmanelectricltd?igsh=Z29sbzlidGUwbWdl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-body">
        ©2026 Goodman Electric. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
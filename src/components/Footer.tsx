const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-body">
        <p>© {new Date().getFullYear()} Goodman Electric Ltd. All rights reserved.</p>
        <p>Serving the Lower Mainland, British Columbia</p>
      </div>
    </footer>
  );
};

export default Footer;

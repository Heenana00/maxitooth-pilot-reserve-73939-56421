import logo from "@/assets/maxitooth_logo_full.png";

const Footer = () => {
  return (
    <footer className="bg-jet-black text-silver py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={logo} alt="MaxiTooth - Advanced Natural Care" className="h-20 w-auto" />
            <p className="text-sm text-silver/70">
              Advanced Natural Care for the modern generation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-soft-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-soft-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-soft-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/our-products" className="hover:text-soft-white transition-colors">
                  Our Products
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-soft-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-soft-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-soft-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-soft-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-graphite/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-silver/70">
          <p>© 2025 Maxitooth. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/maxitooth/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-soft-white transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://medial.app/user/maxitooth-e17e52b233f16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-soft-white transition-colors"
            >
              Medial
            </a>
            <a href="#" className="hover:text-soft-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

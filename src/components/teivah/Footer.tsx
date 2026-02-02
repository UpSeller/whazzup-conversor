import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#0066a0] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Address */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">Av. Atlântica, 1000 - Copacabana,</p>
            <p className="text-sm md:text-base">Rio de Janeiro - RJ</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-sm md:text-base">(21) 1234-5678</p>
            <p className="text-sm md:text-base">contato@teivah.com.br</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-[#0066a0]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-[#0066a0]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-[#0066a0]" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} Teivah. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

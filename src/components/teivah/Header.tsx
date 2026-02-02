import { Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="w-full">
      {/* Top bar with location */}
      <div className="bg-[#0066a0] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Rio de Janeiro Brazil</span>
          <span>Rio de Janeiro, Brasil</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-4xl font-bold">
              <span className="text-[#0066a0]">T</span>
              <span className="text-[#ffc107]">ë</span>
              <span className="text-[#0066a0]">ivah</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#0066a0] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu & Search bar */}
        {isSearchOpen && (
          <div className="mt-4 max-w-7xl mx-auto">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066a0]"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

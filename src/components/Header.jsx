import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { href: '#home', label: 'Trang chủ' },
  { href: '#about', label: 'Về chúng tôi' },
  { href: '#menu', label: 'Thực đơn' },
  { href: '#contact', label: 'Liên hệ' },
];

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <UtensilsCrossed size={18} className="text-white" />
            </div>
            <span
              className={`font-rubik font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Tiệm Ăn <span className="text-orange-500">Đăng Minh</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-rubik font-medium text-sm rounded-sm transition-all duration-200 hover:text-orange-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-700 hover:text-orange-500'
                  : 'text-white hover:text-orange-300'
              }`}
              aria-label="Giỏ hàng"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-sm rounded-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Đặt Bàn
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-sm transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg border-t border-gray-100 mt-2">
          <nav className="flex flex-col py-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-6 py-3 font-rubik font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="inline-flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-sm rounded-sm transition-all duration-200 w-full justify-center"
              >
                Đặt Bàn Ngay
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

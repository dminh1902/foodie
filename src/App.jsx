import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Promo from './components/Promo';
import About from './components/About';
import MenuSection from './components/MenuSection';
import CTA from './components/CTA';
import CartSidebar from './components/CartSidebar';
import SuccessModal from './components/SuccessModal';
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Promo />
          <About />
          <MenuSection />
          <CTA />
        </main>
        <Footer />
        <CartSidebar />
        <SuccessModal />
      </div>
    </CartProvider>
  );
}

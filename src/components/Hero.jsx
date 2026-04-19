import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1600&h=900&fit=crop&auto=format')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-orange-400 font-rubik text-lg md:text-xl mb-4 tracking-wide">
            Chào mừng đến với
          </p>
          <h1 className="font-rubik font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6">
            Món ngon mỗi ngày tại{' '}
            <span className="text-orange-500">Cầu Giấy!</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Chuyên phục vụ các món ăn ngon, đồ ăn nhanh, burger, pizza và thức uống
            với hương vị tuyệt hảo. Giao hàng tận nơi nhanh chóng và tiện lợi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-base rounded-sm transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:shadow-xl"
            >
              Xem Thực Đơn
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 hover:border-orange-500 text-white hover:text-orange-400 font-rubik font-semibold text-base rounded-sm transition-all duration-300"
            >
              Về Chúng Tôi
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-white font-rubik font-bold text-3xl">500+</p>
              <p className="text-gray-400 text-sm mt-1">Món ăn</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-white font-rubik font-bold text-3xl">10K+</p>
              <p className="text-gray-400 text-sm mt-1">Khách hàng</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-white font-rubik font-bold text-3xl">4.9★</p>
              <p className="text-gray-400 text-sm mt-1">Đánh giá</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#promo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Cuộn xuống"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

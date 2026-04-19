import { Bike } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CTA() {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=600&fit=crop&auto=format')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 font-rubik font-medium mb-3">Giao hàng nhanh</p>
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-white leading-tight tracking-tight mb-5">
              Đặt Hàng Ngay,{' '}
              <span className="text-orange-500">Giao Hàng Tận Nơi!</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Chúng tôi giao hàng đến tận cửa nhà bạn trong vòng 30 phút.
              Đồ ăn luôn nóng hổi, thơm ngon như vừa ra lò.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-base rounded-sm transition-all duration-300 shadow-lg"
              >
                <Bike size={20} />
                {totalItems > 0 ? `Xem giỏ hàng (${totalItems})` : 'Đặt Hàng Ngay'}
              </button>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-orange-500 text-white hover:text-orange-400 font-rubik font-semibold text-base rounded-sm transition-all duration-300"
              >
                Xem Thực Đơn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '30 phút', label: 'Giao hàng nhanh', color: 'border-orange-500' },
              { value: '100%', label: 'Tươi ngon', color: 'border-amber-400' },
              { value: '10K+', label: 'Khách hàng', color: 'border-green-400' },
              { value: '4.9★', label: 'Đánh giá', color: 'border-sky-400' },
            ].map(stat => (
              <div
                key={stat.label}
                className={`bg-white/5 backdrop-blur-sm border-l-4 ${stat.color} p-5 rounded-lg`}
              >
                <p className="font-rubik font-bold text-2xl text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

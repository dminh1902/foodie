import { CheckCircle2 } from 'lucide-react';

const features = [
  'Nguyên liệu tươi sạch, an toàn vệ sinh thực phẩm',
  'Chế biến theo công thức riêng, đậm đà hương vị',
  'Không gian ấm cúng, phù hợp gia đình và nhóm bạn',
  'Giao hàng nhanh trong vòng 30 phút',
  'Giá cả hợp lý, chính sách ưu đãi hấp dẫn',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format"
                alt="Tiệm Ăn Đăng Minh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <p className="font-rubik font-bold text-4xl">10+</p>
              <p className="font-rubik text-sm mt-1 text-orange-100">Năm kinh nghiệm</p>
            </div>
          </div>

          <div>
            <p className="text-orange-500 font-rubik font-medium mb-3">Về Chúng Tôi</p>
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-gray-900 leading-tight tracking-tight mb-6">
              Tiệm Ăn Đăng Minh &mdash;{' '}
              <span className="text-orange-500">Nơi Hội Tụ Hương Vị</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Chúng tôi tự hào phục vụ những món ăn ngon, được chế biến từ nguyên liệu
              tươi sạch, đảm bảo an toàn vệ sinh thực phẩm. Với hơn 10 năm kinh nghiệm,
              Tiệm Ăn Đăng Minh luôn được khách hàng tin tưởng và yêu mến.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#menu"
              className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold rounded-sm transition-all duration-300 shadow-md hover:shadow-orange-500/30 hover:shadow-lg"
            >
              Xem Thực Đơn Ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

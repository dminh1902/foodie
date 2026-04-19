import { Sparkles, Zap, Coffee, Bike } from 'lucide-react';

const promos = [
  {
    icon: Sparkles,
    title: 'Món Mới Mỗi Ngày',
    desc: 'Thực đơn phong phú, đổi mới hàng ngày với nhiều lựa chọn hấp dẫn.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Zap,
    title: 'Đồ Ăn Nhanh',
    desc: 'Burger, pizza, gà rán chuẩn vị, nóng giòn, thơm ngon tuyệt vời.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
  },
  {
    icon: Coffee,
    title: 'Thức Uống Đa Dạng',
    desc: 'Trà sữa, nước ép, sinh tố tươi ngon, mát lạnh, bổ dưỡng.',
    color: 'bg-sky-50',
    iconColor: 'text-sky-500',
    iconBg: 'bg-sky-100',
  },
  {
    icon: Bike,
    title: 'Giao Hàng Siêu Tốc',
    desc: 'Giao hàng nhanh chóng trong vòng 30 phút, đảm bảo đồ còn nóng.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100',
  },
];

export default function Promo() {
  return (
    <section id="promo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.color} p-8 rounded-lg group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center`}
              >
                <div className={`${item.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5`}>
                  <Icon size={28} className={item.iconColor} />
                </div>
                <h3 className="font-rubik font-semibold text-gray-900 text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

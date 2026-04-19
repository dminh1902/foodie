import { useState } from 'react';
import { Star, ShoppingCart, Plus } from 'lucide-react';
import { menuItems, categories, formatPrice } from '../data/menuItems';
import { useCart } from '../context/CartContext';

function MenuCard({ item }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-rubik font-semibold px-2.5 py-1 rounded-sm`}>
          {item.badge}
        </span>
        <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-rubik font-semibold px-2 py-1 rounded-sm">
          {item.discount}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            {item.categoryLabel}
          </span>
          <span className="text-gray-200">•</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            <span className="text-xs text-gray-500 font-medium">
              {item.rating} ({item.reviews})
            </span>
          </div>
        </div>

        <h3 className="font-rubik font-semibold text-gray-900 text-base mb-3 leading-snug">
          {item.name}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-rubik font-bold text-orange-500 text-lg">
              {formatPrice(item.price)}
            </span>
            <span className="text-gray-400 text-xs line-through ml-2">
              {formatPrice(item.originalPrice)}
            </span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`mt-3 w-full flex items-center justify-center gap-2 py-2.5 font-rubik font-semibold text-sm rounded-sm transition-all duration-200 ${
            added
              ? 'bg-green-500 text-white'
              : 'bg-orange-500 hover:bg-orange-600 text-white'
          }`}
        >
          {added ? (
            <>
              <span>Đã thêm!</span>
            </>
          ) : (
            <>
              <Plus size={16} />
              <span>Thêm vào giỏ</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-2">Thực Đơn</p>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Các Món Ăn <span className="text-orange-500">Nổi Bật</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Khám phá những món ăn ngon nhất được chế biến từ nguyên liệu tươi sạch,
            đảm bảo hương vị tuyệt hảo mỗi ngày.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 font-rubik font-medium text-sm rounded-sm border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

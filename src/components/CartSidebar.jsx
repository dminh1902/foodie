import { useEffect, useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/menuItems';

const SHIPPING_FEE = 15000;

export default function CartSidebar() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    increaseQty,
    decreaseQty,
    placeOrder,
  } = useCart();

  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
    return () => document.body.classList.remove('cart-open');
  }, [isCartOpen]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Vui lòng nhập họ và tên';
    if (!form.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Số điện thoại không hợp lệ';
    if (!form.address.trim()) errs.address = 'Vui lòng nhập địa chỉ nhận hàng';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setForm({ name: '', phone: '', address: '', note: '' });
    setErrors({});
    placeOrder();
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-orange-500" />
            <h2 className="font-rubik font-semibold text-gray-900 text-lg">
              Giỏ hàng
            </h2>
            {totalItems > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 transition-colors duration-200"
            aria-label="Đóng giỏ hàng"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center px-8">
              <ShoppingBag size={48} className="text-gray-200 mb-4" />
              <p className="font-rubik font-medium text-gray-500">Giỏ hàng trống</p>
              <p className="text-gray-400 text-sm mt-1">Hãy thêm món ăn yêu thích của bạn</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-3 p-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-rubik font-medium text-gray-900 text-sm leading-snug truncate">
                      {item.name}
                    </h4>
                    <p className="text-orange-500 font-rubik font-semibold text-sm mt-0.5">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition-colors text-gray-600"
                        aria-label="Giảm số lượng"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-rubik font-semibold text-gray-900 text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-400 hover:text-orange-500 transition-colors text-gray-600"
                        aria-label="Tăng số lượng"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                      aria-label="Xóa sản phẩm"
                    >
                      <Trash2 size={16} />
                    </button>
                    <span className="font-rubik font-semibold text-gray-900 text-sm">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mx-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tạm tính</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>Phí giao hàng</span>
                <span>{formatPrice(SHIPPING_FEE)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-rubik font-semibold text-gray-900">Tổng cộng</span>
                <span className="font-rubik font-bold text-orange-500 text-lg">
                  {formatPrice(totalPrice + SHIPPING_FEE)}
                </span>
              </div>
            </div>
          )}

          {cartItems.length > 0 && (
            <form onSubmit={handleSubmit} className="px-4 pb-6">
              <h3 className="font-rubik font-semibold text-gray-900 text-base mb-4 pb-2 border-b border-gray-100">
                Thông tin giao hàng
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-3 py-2.5 border rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0912 345 678"
                    className={`w-full px-3 py-2.5 border rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Địa chỉ nhận hàng <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Số nhà, tên đường, quận/huyện..."
                    className={`w-full px-3 py-2.5 border rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all ${
                      errors.address ? 'border-red-400 bg-red-50' : 'border-gray-200'
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ghi chú
                  </label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    placeholder="Ít đá, ít đường, không hành..."
                    rows={2}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-base rounded-sm transition-all duration-200 shadow-md hover:shadow-orange-500/30 hover:shadow-lg"
              >
                Xác nhận đặt hàng
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

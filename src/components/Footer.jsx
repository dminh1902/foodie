import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [form, setForm] = useState({
    name: '', phone: '', guests: '2', datetime: '', note: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Vui lòng nhập họ và tên';
    if (!form.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại';
    if (!form.datetime) errs.datetime = 'Vui lòng chọn ngày giờ';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', guests: '2', datetime: '', note: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
                <UtensilsCrossed size={18} className="text-white" />
              </div>
              <span className="font-rubik font-bold text-xl text-white tracking-tight">
                Tiệm Ăn <span className="text-orange-500">Đăng Minh</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Chuyên phục vụ các món ăn ngon, đồ ăn nhanh, burger, pizza và thức uống
              với hương vị tuyệt hảo tại Cầu Giấy, Hà Nội.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube, href: '#', label: 'Youtube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-rubik font-semibold text-white text-lg mb-5 relative after:absolute after:bottom-0 after:-mb-2 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500 pb-2">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Điện thoại</p>
                  <a href="tel:0912345678" className="text-gray-200 hover:text-orange-400 transition-colors text-sm font-medium">
                    0912.345.678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:tiemandangminh@gmail.com" className="text-gray-200 hover:text-orange-400 transition-colors text-sm font-medium break-all">
                    tiemandangminh@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Địa chỉ</p>
                  <p className="text-gray-200 text-sm font-medium">
                    Số 89 Cầu Giấy, P. Quan Hoa, Hà Nội
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-rubik font-semibold text-white text-lg mb-5 relative after:absolute after:bottom-0 after:-mb-2 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500 pb-2">
              Giờ Mở Cửa
            </h3>
            <ul className="space-y-3">
              {[
                { day: 'Thứ 2 - Thứ 6', time: '08:00 - 22:00' },
                { day: 'Thứ 7', time: '09:00 - 23:00' },
                { day: 'Chủ nhật', time: '10:00 - 21:00' },
              ].map(item => (
                <li key={item.day} className="flex items-center gap-3">
                  <Clock size={14} className="text-orange-500 flex-shrink-0" />
                  <div className="flex justify-between w-full">
                    <span className="text-gray-400 text-sm">{item.day}</span>
                    <span className="text-gray-200 text-sm font-medium">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
                Đang mở cửa
              </p>
              <p className="text-gray-400 text-xs mt-1">Giao hàng trong vòng 30 phút</p>
            </div>
          </div>

          <div className="relative z-50">
            <h3 className="font-rubik font-semibold text-white text-lg mb-5 relative after:absolute after:bottom-0 after:-mb-2 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500 pb-2">
              Đặt Bàn
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 size={48} className="text-green-400 mb-3" />
                <p className="font-rubik font-semibold text-white text-lg">Đặt bàn thành công!</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Chúng tôi sẽ liên hệ xác nhận trong ít phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Họ và tên *"
                    className={`w-full px-3 py-2.5 bg-gray-800 border rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all relative z-50 ${
                      errors.name ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Số điện thoại *"
                    className={`w-full px-3 py-2.5 bg-gray-800 border rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all relative z-50 ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-sm text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all relative z-50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} người</option>
                    ))}
                  </select>

                  <div>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={form.datetime}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 bg-gray-800 border rounded-sm text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all relative z-50 ${
                        errors.datetime ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                  </div>
                </div>
                {errors.datetime && <p className="text-red-400 text-xs -mt-1">{errors.datetime}</p>}

                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  placeholder="Ghi chú (không bắt buộc)"
                  rows={2}
                  className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none relative z-50"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-sm rounded-sm transition-all duration-200 shadow-md hover:shadow-orange-500/20 hover:shadow-lg relative z-50"
                >
                  Đặt Bàn Ngay
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tiệm Ăn Đăng Minh. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}

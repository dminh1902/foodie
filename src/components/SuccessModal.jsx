import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SuccessModal() {
  const { showSuccessModal, setShowSuccessModal } = useCart();

  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showSuccessModal]);

  if (!showSuccessModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setShowSuccessModal(false)}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center animate-scale-up">
        <button
          onClick={() => setShowSuccessModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Đóng"
        >
          <X size={20} />
        </button>

        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={44} className="text-green-500" />
        </div>

        <h2 className="font-rubik font-bold text-2xl text-gray-900 mb-3">
          Đặt hàng thành công!
        </h2>

        <p className="text-gray-500 leading-relaxed mb-6">
          Tiệm Ăn Đăng Minh đang chuẩn bị đơn hàng và sẽ giao đến bạn sớm nhất.
        </p>

        <div className="bg-orange-50 rounded-lg p-4 mb-6">
          <p className="text-orange-600 text-sm font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse inline-block"></span>
            Dự kiến giao hàng trong 30 phút
          </p>
        </div>

        <button
          onClick={() => setShowSuccessModal(false)}
          className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-rubik font-semibold text-base rounded-sm transition-all duration-200 shadow-md hover:shadow-orange-500/30 hover:shadow-lg"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

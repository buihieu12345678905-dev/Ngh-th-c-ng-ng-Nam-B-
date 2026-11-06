import React from 'react';
import { Compass, BookOpen, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-stone-200 bg-[#F5F1E8] text-stone-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-300/80">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-serif font-bold text-stone-900">
                Nghề Thủ Công Đông Nam Bộ
              </span>
              <span className="text-xs font-mono font-semibold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded">
                Mã: G03
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm mb-4">
              Dự án nghiên cứu, số hóa và lưu trữ tương tác các làng nghề thủ công truyền thống 6 tỉnh thành vùng Đông Nam Bộ: TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Tây Ninh, Bà Rịa - Vũng Tàu và Bình Phước.
            </p>
            <div className="text-[11px] text-stone-500 font-sans">
              Khoa Văn hóa Dân gian & Di sản Dân tộc học · 2026
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 mb-3">
              Điều hướng chuyên mục
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button
                  onClick={() => onNavigate('map')}
                  className="hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  Bản đồ di sản 6 tỉnh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  Kho tàng kỹ nghệ & Làng nghề
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('workshops')}
                  className="hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  Xưởng ảo tương tác (Gốm, Sơn mài, Bánh tráng)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artisans')}
                  className="hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  Chân dung nghệ nhân & Đề án bảo tồn
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  Khảo thí tri thức & Nhận chứng nhận
                </button>
              </li>
            </ul>
          </div>

          {/* Local Heritage Units (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 mb-3">
              Các địa phương thuộc vùng Đông Nam Bộ
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
              <div>· Bình Dương (Gốm, Sơn mài)</div>
              <div>· Đồng Nai (Gốm, Mây tre)</div>
              <div>· Tây Ninh (Bánh tráng, Muối)</div>
              <div>· TP. Hồ Chí Minh (Đúc đồng, Kim hoàn)</div>
              <div>· Bà Rịa - Vũng Tàu (Muối, Mắm)</div>
              <div>· Bình Phước (Thổ cẩm, Đan lát)</div>
            </div>
            <div className="mt-4 p-3 bg-white/70 rounded-lg border border-stone-200 text-[11px] text-stone-500">
              Bảo tồn di sản sống là trao truyền niềm tự hào và sinh kế bền vững cho các thế hệ tương lai.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © 2026 Nghiên cứu Di sản Văn hóa Thủ công Đông Nam Bộ. Mã đề tài: G03.
          </div>
          <div className="flex items-center gap-4">
            <span>Dữ liệu mở vì giáo dục văn hóa</span>
            <span aria-hidden="true">·</span>
            <span>Bộ Văn hóa, Thể thao và Du lịch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

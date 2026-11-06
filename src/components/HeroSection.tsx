import React from 'react';
import { ArrowRight, Sparkles, MapPin, Award, Hammer, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onExploreMap: () => void;
  onOpenWorkshop: () => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMap,
  onOpenWorkshop,
  onExploreCatalog,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-stone-200 bg-[#F5F0E6]/50">
      {/* Decorative architectural background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#78350F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Curatorial Header Decker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-sans mb-4">
          <span>Công trình nghiên cứu văn hóa dân gian</span>
          <span aria-hidden="true">·</span>
          <span>Đề tài: Nghề thủ công Đông Nam Bộ</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-amber-800 font-semibold">MÃ ĐỀ TÀI: G03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              Bản Sắc Kỹ Nghệ Bách Nghệ Vùng Đất Phương Nam
            </h1>

            <p className="text-lg text-stone-700 leading-relaxed max-w-2xl font-sans mb-8">
              Từ men xanh đồng trổ Biên Hòa vang danh quốc tế, lớp sơn ta mài nước sâu thẳm Tương Bình Hiệp, 
              cho đến vạt bánh tráng phơi sương Trảng Bàng đẫm gió ngàn và ngọn lửa đúc đồng An Hội hơn thế kỷ. 
              Khám phá không gian số tương tác bảo tồn và tái hiện tinh hoa nghề thủ công truyền thống 6 tỉnh thành Đông Nam Bộ.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenWorkshop}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-600"
              >
                <span>Trải nghiệm xưởng ảo</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <button
                onClick={onExploreMap}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Bản đồ 6 tỉnh Đông Nam Bộ</span>
              </button>

              <button
                onClick={onExploreCatalog}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-stone-700 hover:text-stone-900 hover:underline underline-offset-4 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-500" />
                <span>Hồ sơ kỹ nghệ</span>
              </button>
            </div>
          </div>

          {/* Right Column: Curatorial Showcase Plate */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 text-xs text-stone-500 font-sans">
                <span className="uppercase tracking-wider font-medium text-amber-900">Tiêu điểm nghiên cứu G03</span>
                <span>6 Địa phương trọng điểm</span>
              </div>

              {/* Showcase highlights */}
              <div className="py-4 space-y-3.5 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-50/70 border border-stone-200/80">
                  <div className="w-8 h-8 rounded-md bg-teal-100 flex items-center justify-center text-teal-800 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Gốm men xanh đồng trổ (Đồng Nai)</h3>
                    <p className="text-xs text-stone-600 mt-0.5">Huy chương vàng Triển lãm Paris 1925 · Men tro rơm kết hợp ô-xít đồng bí truyền.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-50/70 border border-stone-200/80">
                  <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center text-amber-900 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Sơn mài Tương Bình Hiệp (Bình Dương)</h3>
                    <p className="text-xs text-stone-600 mt-0.5">Di sản phi vật thể Quốc gia · 25 công đoạn mài nước với lòng bàn tay trần.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-50/70 border border-stone-200/80">
                  <div className="w-8 h-8 rounded-md bg-orange-100 flex items-center justify-center text-orange-900 shrink-0 mt-0.5">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Bánh tráng phơi sương (Tây Ninh)</h3>
                    <p className="text-xs text-stone-600 mt-0.5">Di sản Quốc gia · Kỹ nghệ nướng mắt cua than đước & canh sương trời 3h sáng.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Chế tác thủ công bản địa</span>
                <span className="font-mono text-stone-700">100% Nguyên liệu phương Nam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Utility Ribbon */}
        <div className="mt-12 pt-6 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-700">
          <div>
            <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">06</div>
            <div className="text-xs text-stone-600 mt-1 uppercase tracking-wide">Tỉnh, thành Đông Nam Bộ</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-amber-900 tabular-nums">160+</div>
            <div className="text-xs text-stone-600 mt-1 uppercase tracking-wide">Năm lịch sử gìn giữ nghề</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">03</div>
            <div className="text-xs text-stone-600 mt-1 uppercase tracking-wide">Di sản phi vật thể Quốc gia</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-amber-900 tabular-nums">25+</div>
            <div className="text-xs text-stone-600 mt-1 uppercase tracking-wide">Công đoạn thủ công chuẩn mực</div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PotteryWorkshop } from './PotteryWorkshop';
import { LacquerWorkshop } from './LacquerWorkshop';
import { RicePaperWorkshop } from './RicePaperWorkshop';
import { Sparkles, Compass, Flame, Droplets, Sun } from 'lucide-react';

interface WorkshopHubProps {
  initialWorkshop?: string;
}

export const WorkshopHub: React.FC<WorkshopHubProps> = ({ initialWorkshop = 'pottery' }) => {
  const [activeWorkshop, setActiveWorkshop] = useState<string>(
    initialWorkshop.includes('son_mai')
      ? 'lacquer'
      : initialWorkshop.includes('banh_trang')
      ? 'rice_paper'
      : 'pottery'
  );

  return (
    <section id="workshop-hub" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold mb-1.5">
            Không gian thực hành số
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Xưởng Ảo Chế Tác Kỹ Nghệ Thủ Công
          </h2>
        </div>

        {/* Workshop Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto">
          <button
            onClick={() => setActiveWorkshop('pottery')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeWorkshop === 'pottery'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-teal-700" />
            <span>Gốm Biên Hòa & Lái Thiêu</span>
          </button>

          <button
            onClick={() => setActiveWorkshop('lacquer')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeWorkshop === 'lacquer'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-amber-800" />
            <span>Sơn mài Tương Bình Hiệp</span>
          </button>

          <button
            onClick={() => setActiveWorkshop('rice_paper')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeWorkshop === 'rice_paper'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-orange-600" />
            <span>Bánh tráng phơi sương Trảng Bàng</span>
          </button>
        </div>
      </div>

      {/* Render Active Workshop */}
      <div>
        {activeWorkshop === 'pottery' && <PotteryWorkshop />}
        {activeWorkshop === 'lacquer' && <LacquerWorkshop />}
        {activeWorkshop === 'rice_paper' && <RicePaperWorkshop />}
      </div>
    </section>
  );
};

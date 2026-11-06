import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenWorkshop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenWorkshop }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('overview')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap shrink-0">
              Đông Nam Bộ · Di Sản Thủ Công
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300 whitespace-nowrap">
              Mã: G03
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('map')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'map' ? 'text-amber-900 font-semibold underline underline-offset-8 decoration-amber-600' : 'hover:text-stone-900'
            }`}
          >
            Bản đồ làng nghề
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'catalog' ? 'text-amber-900 font-semibold underline underline-offset-8 decoration-amber-600' : 'hover:text-stone-900'
            }`}
          >
            Kho tàng kỹ nghệ
          </button>
          <button
            onClick={() => onNavigate('workshops')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'workshops' ? 'text-amber-900 font-semibold underline underline-offset-8 decoration-amber-600' : 'hover:text-stone-900'
            }`}
          >
            Xưởng ảo tương tác
          </button>
          <button
            onClick={() => onNavigate('artisans')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'artisans' ? 'text-amber-900 font-semibold underline underline-offset-8 decoration-amber-600' : 'hover:text-stone-900'
            }`}
          >
            Chân dung nghệ nhân
          </button>
          <button
            onClick={() => onNavigate('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              activeTab === 'quiz' ? 'text-amber-900 font-semibold underline underline-offset-8 decoration-amber-600' : 'hover:text-stone-900'
            }`}
          >
            Thử thách G03
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenWorkshop}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Vào xưởng chế tác</span>
          </button>
        </div>
      </div>
    </header>
  );
};

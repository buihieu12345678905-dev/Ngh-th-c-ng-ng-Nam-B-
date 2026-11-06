import React, { useState } from 'react';
import { CRAFT_VILLAGES, PROVINCES_DATA } from '../data/craftsData';
import { CraftVillage, CraftCategory, ProvinceKey } from '../types/craft';
import { Search, Filter, Volume2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { audioAmbience } from '../utils/audioAmbience';

interface CraftCatalogProps {
  onSelectCraft: (craft: CraftVillage) => void;
  onOpenWorkshop: (craftId: string) => void;
}

export const CraftCatalog: React.FC<CraftCatalogProps> = ({ onSelectCraft, onOpenWorkshop }) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: 'Tất cả lĩnh vực' },
    { key: 'ceramics', label: 'Gốm sứ mỹ nghệ' },
    { key: 'lacquer', label: 'Sơn mài truyền thống' },
    { key: 'culinary', label: 'Ẩm thực thủ công' },
    { key: 'metal', label: 'Kim khí & Đúc đồng' },
    { key: 'bamboo_weaving', label: 'Mây tre đan' },
    { key: 'textile', label: 'Dệt thổ cẩm' },
  ];

  const filteredCrafts = CRAFT_VILLAGES.filter((craft) => {
    const matchesProvince = selectedProvince === 'all' || craft.provinceKey === selectedProvince;
    const matchesCategory = selectedCategory === 'all' || craft.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      craft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.vietnameseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.signatureTechnique.toLowerCase().includes(searchQuery.toLowerCase()) ||
      craft.iconicProducts.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesProvince && matchesCategory && matchesSearch;
  });

  const handlePlaySound = (type: 'kiln' | 'lacquer' | 'bronze' | 'morning_mist', id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingAudio === id) {
      audioAmbience.stop();
      setPlayingAudio(null);
    } else {
      audioAmbience.play(type);
      setPlayingAudio(id);
    }
  };

  return (
    <section id="craft-catalog" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold mb-1.5">
            Bảo tàng tư liệu di sản
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Kho Tàng Kỹ Nghệ Bách Nghệ Đông Nam Bộ
          </h2>
        </div>
        <p className="text-sm text-stone-600 max-w-md">
          Tổng mục lưu trữ các làng nghề truyền thống tiêu biểu, hồ sơ công nghệ chế tác và danh mục sản phẩm gia bảo.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 mb-8">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên nghề, sản phẩm, tuyệt kỹ (ví dụ: men xanh đồng, sơn ta, bánh tráng, sáp ong, gà trống...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all shadow-2xs"
          />
        </div>

        {/* Category Filter Buttons (Functional segmented buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.key
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Province Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-500 font-medium">Địa bàn:</span>
          <button
            onClick={() => setSelectedProvince('all')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              selectedProvince === 'all'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tất cả (6 tỉnh thành)
          </button>
          {PROVINCES_DATA.map((prov) => (
            <button
              key={prov.key}
              onClick={() => setSelectedProvince(prov.key)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                selectedProvince === prov.key
                  ? 'bg-amber-900 text-white font-semibold'
                  : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {prov.name}
            </button>
          ))}
        </div>
      </div>

      {/* Craft Cards Grid (Refined Museum Editorial 2-Col & 3-Col Layout) */}
      {filteredCrafts.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-stone-200">
          <p className="text-base text-stone-600">Không tìm thấy làng nghề phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={() => {
              setSelectedProvince('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrafts.map((craft) => (
            <div
              key={craft.id}
              onClick={() => onSelectCraft(craft)}
              className="group bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              <div>
                {/* Clean unboxed metadata with separators - NO PILLS */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-sans">
                  <span className="font-semibold text-amber-900">{craft.provinceName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{craft.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{craft.establishedPeriod.split('–')[0]}</span>
                </div>

                {/* Primary Title */}
                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors mb-2">
                  {craft.name}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                  {craft.shortDescription}
                </p>

                {/* Signature Technique Teaser */}
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-700 mb-4">
                  <span className="font-semibold text-stone-900 block mb-0.5">Tuyệt kỹ đặc trưng:</span>
                  <span className="italic line-clamp-2">{craft.signatureTechnique}</span>
                </div>

                {/* Iconic Products */}
                <div className="space-y-1 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                    Sản phẩm biểu tượng:
                  </span>
                  <ul className="text-xs text-stone-600 space-y-1">
                    {craft.iconicProducts.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                {craft.audioAmbienceType ? (
                  <button
                    onClick={(e) => handlePlaySound(craft.audioAmbienceType!, craft.id, e)}
                    className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      playingAudio === craft.id
                        ? 'bg-amber-100 text-amber-900 font-semibold'
                        : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                    }`}
                    title="Nghe âm thanh thực địa"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${playingAudio === craft.id ? 'text-amber-700 animate-pulse' : ''}`} />
                    <span>{playingAudio === craft.id ? 'Đang phát' : 'Âm thanh'}</span>
                  </button>
                ) : (
                  <span className="text-xs text-stone-400">{craft.heritageStatus}</span>
                )}

                <div className="flex items-center gap-2">
                  {(craft.id === 'gom_bien_hoa' || craft.id === 'son_mai_tuong_binh_hiep' || craft.id === 'banh_trang_trang_bang') && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWorkshop(craft.id);
                      }}
                      className="px-2.5 py-1 text-xs font-medium bg-stone-900 hover:bg-stone-800 text-white rounded transition-colors cursor-pointer"
                    >
                      Xưởng ảo
                    </button>
                  )}

                  <span className="text-xs font-semibold text-amber-900 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Chi tiết <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

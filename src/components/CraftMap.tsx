import React, { useState } from 'react';
import { PROVINCES_DATA, CRAFT_VILLAGES } from '../data/craftsData';
import { ProvinceKey, CraftVillage } from '../types/craft';
import { MapPin, Sparkles, ArrowRight, Layers, Volume2, Info } from 'lucide-react';
import { audioAmbience } from '../utils/audioAmbience';

interface CraftMapProps {
  onSelectCraft: (craft: CraftVillage) => void;
  onOpenWorkshop: (craftId: string) => void;
}

export const CraftMap: React.FC<CraftMapProps> = ({ onSelectCraft, onOpenWorkshop }) => {
  const [selectedProvinceKey, setSelectedProvinceKey] = useState<ProvinceKey>('binh_duong');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const selectedProvince = PROVINCES_DATA.find((p) => p.key === selectedProvinceKey) || PROVINCES_DATA[0];
  const provinceCrafts = CRAFT_VILLAGES.filter((c) => c.provinceKey === selectedProvinceKey);

  const handlePlaySound = (type: 'kiln' | 'lacquer' | 'bronze' | 'morning_mist', id: string) => {
    if (playingAudio === id) {
      audioAmbience.stop();
      setPlayingAudio(null);
    } else {
      audioAmbience.play(type);
      setPlayingAudio(id);
    }
  };

  return (
    <section id="craft-map" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1.5">
            Phân bố không gian di sản
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Bản Đồ Làng Nghề Thủ Công 6 Tỉnh Đông Nam Bộ
          </h2>
        </div>
        <p className="text-sm text-stone-600 max-w-md">
          Nhấp chọn từng tỉnh thành trên bản đồ địa chính miền Đông để khám phá nguồn gốc đất sét, củi lửa, thớ mây và bí truyền hàng trăm năm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs relative">
          {/* Province selector pills as interactive button filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {PROVINCES_DATA.map((prov) => {
              const isActive = prov.key === selectedProvinceKey;
              return (
                <button
                  key={prov.key}
                  onClick={() => setSelectedProvinceKey(prov.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {prov.name}
                </button>
              );
            })}
          </div>

          {/* SVG Map of Southeast Vietnam */}
          <div className="relative w-full aspect-[4/3] bg-[#FAF8F5] rounded-xl border border-stone-200/90 overflow-hidden flex items-center justify-center p-4">
            {/* Soft grid lines */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#78350F_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Geographical Representation of Southeast Region */}
            <svg viewBox="0 0 600 480" className="w-full h-full drop-shadow-xs select-none">
              {/* Province Polygons stylized representation */}
              
              {/* 1. Bình Phước (North) */}
              <path
                d="M 230,30 L 380,40 L 410,120 L 340,160 L 260,150 L 220,90 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'binh_phuoc'
                    ? 'fill-red-700/80 stroke-red-900 stroke-2'
                    : 'fill-stone-200/70 hover:fill-red-100 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('binh_phuoc')}
              />
              <text x="310" y="90" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                Bình Phước
              </text>

              {/* 2. Tây Ninh (West/Northwest) */}
              <path
                d="M 120,80 L 220,90 L 230,170 L 190,240 L 110,210 L 80,140 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'tay_ninh'
                    ? 'fill-amber-600/80 stroke-amber-800 stroke-2'
                    : 'fill-stone-200/70 hover:fill-amber-100 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('tay_ninh')}
              />
              <text x="160" y="155" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                Tây Ninh
              </text>

              {/* 3. Bình Dương (Center) */}
              <path
                d="M 230,170 L 310,165 L 320,230 L 270,270 L 210,250 L 190,240 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'binh_duong'
                    ? 'fill-amber-800/80 stroke-amber-950 stroke-2'
                    : 'fill-stone-200/70 hover:fill-amber-100 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('binh_duong')}
              />
              <text x="255" y="215" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                Bình Dương
              </text>

              {/* 4. Đồng Nai (East/Northeast) */}
              <path
                d="M 310,165 L 420,130 L 490,190 L 460,310 L 370,330 L 320,230 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'dong_nai'
                    ? 'fill-teal-700/80 stroke-teal-900 stroke-2'
                    : 'fill-stone-200/70 hover:fill-teal-100 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('dong_nai')}
              />
              <text x="390" y="235" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                Đồng Nai
              </text>

              {/* 5. TP. Hồ Chí Minh (South/Center) */}
              <path
                d="M 210,250 L 270,270 L 320,300 L 290,390 L 240,430 L 200,340 L 190,260 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'tphcm'
                    ? 'fill-stone-800/80 stroke-stone-950 stroke-2'
                    : 'fill-stone-200/70 hover:fill-stone-300 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('tphcm')}
              />
              <text x="250" y="325" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                TP. Hồ Chí Minh
              </text>

              {/* 6. Bà Rịa - Vũng Tàu (Southeast Coastal) */}
              <path
                d="M 320,300 L 370,330 L 440,330 L 450,400 L 380,440 L 320,390 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  selectedProvinceKey === 'ba_ria_vung_tau'
                    ? 'fill-sky-700/80 stroke-sky-950 stroke-2'
                    : 'fill-stone-200/70 hover:fill-sky-100 stroke-stone-300 stroke-1'
                }`}
                onClick={() => setSelectedProvinceKey('ba_ria_vung_tau')}
              />
              <text x="375" y="375" textAnchor="middle" className="text-[12px] font-sans font-medium fill-stone-800 pointer-events-none">
                Bà Rịa - Vũng Tàu
              </text>

              {/* Coastline hint & East Sea */}
              <text x="490" y="440" className="text-[13px] font-serif italic fill-stone-400">
                Biển Đông
              </text>

              {/* River lines (Sông Đồng Nai, Sông Sài Gòn) */}
              <path
                d="M 340,160 Q 300,210 280,260 T 260,330 T 280,390"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.6"
              />
              <text x="315" y="275" className="text-[10px] font-sans fill-blue-600 italic">
                Sông Sài Gòn - Đồng Nai
              </text>

              {/* Interactive Craft Location Markers with Pulse */}
              {/* Bien Hoa Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('dong_nai')}>
                <circle cx="340" cy="245" r="7" className="fill-teal-600 stroke-white stroke-2" />
                <circle cx="340" cy="245" r="14" className="stroke-teal-500 stroke-1 fill-none opacity-40 animate-ping" />
                <text x="352" y="249" className="text-[10px] font-sans font-bold fill-teal-900">Gốm Biên Hòa</text>
              </g>

              {/* Tuong Binh Hiep Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('binh_duong')}>
                <circle cx="245" cy="225" r="7" className="fill-amber-800 stroke-white stroke-2" />
                <circle cx="245" cy="225" r="14" className="stroke-amber-600 stroke-1 fill-none opacity-40 animate-ping" />
                <text x="180" y="222" className="text-[10px] font-sans font-bold fill-amber-950">Sơn mài TBH</text>
              </g>

              {/* Trang Bang Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('tay_ninh')}>
                <circle cx="165" cy="185" r="7" className="fill-orange-600 stroke-white stroke-2" />
                <text x="120" y="175" className="text-[10px] font-sans font-bold fill-orange-950">Bánh tráng phơi sương</text>
              </g>

              {/* An Hoi Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('tphcm')}>
                <circle cx="248" cy="295" r="7" className="fill-stone-900 stroke-white stroke-2" />
                <text x="260" y="299" className="text-[10px] font-sans font-bold fill-stone-900">Đúc đồng An Hội</text>
              </g>

              {/* Long Dien Salt Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('ba_ria_vung_tau')}>
                <circle cx="390" cy="380" r="7" className="fill-sky-700 stroke-white stroke-2" />
                <text x="402" y="385" className="text-[10px] font-sans font-bold fill-sky-950">Muối Long Điền</text>
              </g>

              {/* Bu Gia Map Textile Marker */}
              <g className="cursor-pointer" onClick={() => setSelectedProvinceKey('binh_phuoc')}>
                <circle cx="320" cy="80" r="7" className="fill-red-700 stroke-white stroke-2" />
                <text x="332" y="75" className="text-[10px] font-sans font-bold fill-red-950">Thổ cẩm S'tiêng</text>
              </g>
            </svg>

            {/* Micro Caption */}
            <div className="absolute bottom-3 left-4 text-[11px] text-stone-500 font-sans flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded border border-stone-200">
              <Info className="w-3.5 h-3.5 text-stone-400" />
              <span>Nhấp các điểm tròn hoặc địa phận để xem hồ sơ chi tiết</span>
            </div>
          </div>
        </div>

        {/* Right Column: Province Inspector Card (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono text-amber-800 uppercase tracking-wider font-semibold">
                {selectedProvince.administrativeTitle}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
                {selectedProvince.name}
              </h3>
            </div>
            <div className="text-xs text-stone-500 text-right">
              <div>Vùng Đông Nam Bộ</div>
              <div className="font-semibold text-stone-700">{provinceCrafts.length} Nghề tiêu biểu</div>
            </div>
          </div>

          {/* Province Craft Summary */}
          <p className="text-sm text-stone-700 my-4 leading-relaxed">
            {selectedProvince.craftSummary}
          </p>

          {/* Craft Villages in this Province */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Làng nghề & Tinh hoa thủ công trực thuộc
            </div>

            {provinceCrafts.map((craft) => (
              <div
                key={craft.id}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4 className="font-semibold text-stone-900 text-base">
                    {craft.name}
                  </h4>
                  <span className="text-xs font-medium text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-200 shrink-0">
                    {craft.categoryLabel}
                  </span>
                </div>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                  {craft.shortDescription}
                </p>

                {/* Metadata in clean unboxed text */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span>{craft.heritageStatus}</span>
                  <span aria-hidden="true">·</span>
                  <span>{craft.establishedPeriod.split('–')[0]}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200/80">
                  {/* Sound ambience button if available */}
                  {craft.audioAmbienceType && (
                    <button
                      onClick={() => handlePlaySound(craft.audioAmbienceType!, craft.id)}
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded transition-colors cursor-pointer ${
                        playingAudio === craft.id
                          ? 'bg-amber-100 text-amber-900 font-semibold'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                      }`}
                      title="Nghe âm thanh thực địa làng nghề"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${playingAudio === craft.id ? 'text-amber-700 animate-pulse' : ''}`} />
                      <span>{playingAudio === craft.id ? 'Đang phát âm thanh' : 'Nghe âm thanh lò'}</span>
                    </button>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={() => onSelectCraft(craft)}
                      className="text-xs font-semibold text-amber-900 hover:text-amber-950 underline underline-offset-4 cursor-pointer"
                    >
                      Xem hồ sơ
                    </button>
                    {(craft.id === 'gom_bien_hoa' || craft.id === 'son_mai_tuong_binh_hiep' || craft.id === 'banh_trang_trang_bang') && (
                      <button
                        onClick={() => onOpenWorkshop(craft.id)}
                        className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <span>Vào xưởng</span>
                        <ArrowRight className="w-3 h-3 text-amber-300" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Natural Highlights */}
          <div className="mt-5 pt-4 border-t border-stone-200">
            <div className="text-xs text-stone-500 mb-2">Đặc sản & Dấu ấn địa phương:</div>
            <div className="flex flex-wrap gap-1.5">
              {selectedProvince.highlights.map((h, i) => (
                <span key={i} className="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

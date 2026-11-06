import React, { useState } from 'react';
import { RotateCw, Flame, CheckCircle, Sparkles, RefreshCw, Award } from 'lucide-react';

export const PotteryWorkshop: React.FC = () => {
  const [clayType, setClayType] = useState<'dong_nai' | 'tan_phuoc_khanh'>('dong_nai');
  const [vesselShape, setVesselShape] = useState<'luc_binh' | 'cu_toi' | 'au_gom'>('luc_binh');
  const [pattern, setPattern] = useState<'dragon' | 'lotus' | 'rooster' | 'floral'>('dragon');
  const [glaze, setGlaze] = useState<'vert_de_bien_hoa' | 'celadon' | 'da_luon' | 'amber'>('vert_de_bien_hoa');
  const [isSpinning, setIsSpinning] = useState<boolean>(true);
  const [isFired, setIsFired] = useState<boolean>(false);
  const [kilnTemp, setKilnTemp] = useState<number>(1250);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const glazeColors: Record<string, { name: string; fill: string; stroke: string; desc: string }> = {
    vert_de_bien_hoa: {
      name: 'Men Xanh Đồng Trổ (Vert de Biên Hòa)',
      fill: isFired ? '#0D5F54' : '#6EE7B7',
      stroke: '#042F2C',
      desc: 'Công thức tro rơm rạ kết hợp ô-xít đồng bí truyền, đoạt huy chương vàng Paris 1925.'
    },
    celadon: {
      name: 'Men Ngọc Celadon Cổ Điển',
      fill: isFired ? '#5F8D78' : '#A7F3D0',
      stroke: '#2D4A3E',
      desc: 'Sắc ngọc thanh tao mô phỏng gốm ngọc thời Lý - Trần.'
    },
    da_luon: {
      name: 'Men Da Lươn Lái Thiêu',
      fill: isFired ? '#78350F' : '#D97706',
      stroke: '#451A03',
      desc: 'Men son tự nhiên màu da lươn trầm ấm, mộc mạc của gốm Bình Dương.'
    },
    amber: {
      name: 'Men Cánh Gián Hỏa Biến',
      fill: isFired ? '#9A3412' : '#FDBA74',
      stroke: '#431407',
      desc: 'Sắc nâu cánh gián biến ảo dưới ngọn lửa lò bầu trên 1.200°C.'
    }
  };

  const handleFireKiln = () => {
    setIsFired(true);
    setShowCertificate(true);
  };

  const handleReset = () => {
    setIsFired(false);
    setShowCertificate(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold">
            Xưởng chế tác tương tác · Gốm Biên Hòa & Lái Thiêu
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            Bàn Xoay Gốm & Khắc Vạch Chạm Lộng Tô Men
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSpinning(!isSpinning)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Dừng bàn xoay' : 'Quay bàn xoay'}</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Làm lại</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Visual Pottery Simulator (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-[#F7F4EE] rounded-xl border border-stone-200 relative overflow-hidden min-h-[380px]">
          {/* Kiln Heat Overlay if fired */}
          {isFired && (
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent pointer-events-none" />
          )}

          {/* SVG Potter Wheel and Ceramic Vessel */}
          <div className="relative w-64 h-72 flex items-center justify-center">
            <svg viewBox="0 0 240 280" className="w-full h-full drop-shadow-md select-none">
              {/* Wheel Stand */}
              <ellipse cx="120" cy="255" rx="90" ry="16" fill="#D6CEBE" stroke="#A8A29E" strokeWidth="2" />
              <ellipse cx="120" cy="252" rx="75" ry="12" fill="#E7E5E4" />

              {/* Clay Vase Geometry */}
              <g className={`transition-all duration-700 ${isSpinning && !isFired ? 'opacity-95' : ''}`}>
                {vesselShape === 'luc_binh' && (
                  <path
                    d="M 90,40 C 90,65 110,80 110,110 C 70,140 60,195 80,240 L 160,240 C 180,195 170,140 130,110 C 130,80 150,65 150,40 Z"
                    fill={glazeColors[glaze].fill}
                    stroke={glazeColors[glaze].stroke}
                    strokeWidth="3"
                  />
                )}

                {vesselShape === 'cu_toi' && (
                  <path
                    d="M 100,30 L 140,30 L 140,90 C 190,130 190,210 150,240 L 90,240 C 50,210 50,130 100,90 Z"
                    fill={glazeColors[glaze].fill}
                    stroke={glazeColors[glaze].stroke}
                    strokeWidth="3"
                  />
                )}

                {vesselShape === 'au_gom' && (
                  <path
                    d="M 60,70 L 180,70 C 185,140 170,220 140,240 L 100,240 C 70,220 55,140 60,70 Z"
                    fill={glazeColors[glaze].fill}
                    stroke={glazeColors[glaze].stroke}
                    strokeWidth="3"
                  />
                )}

                {/* Mouth & Rim details */}
                <ellipse cx="120" cy={vesselShape === 'au_gom' ? 70 : 38} rx={vesselShape === 'au_gom' ? 60 : 28} ry="7" fill={isFired ? '#115E59' : '#D1D5DB'} stroke={glazeColors[glaze].stroke} strokeWidth="2" />

                {/* Carved Motifs (Khắc chìm chạm lộng) */}
                {pattern === 'dragon' && (
                  <g opacity={isFired ? 0.85 : 0.6} stroke="#FDE68A" strokeWidth="1.5" fill="none">
                    <path d="M 100,160 Q 120,135 140,165 T 120,195" />
                    <circle cx="102" cy="158" r="2" fill="#FDE68A" />
                    <path d="M 108,150 Q 115,140 125,148" />
                    <path d="M 130,175 Q 145,185 135,200" />
                  </g>
                )}

                {pattern === 'lotus' && (
                  <g opacity={isFired ? 0.9 : 0.6} stroke="#FEF08A" strokeWidth="1.5" fill="none">
                    <path d="M 120,150 C 110,170 115,190 120,200 C 125,190 130,170 120,150 Z" />
                    <path d="M 105,165 C 100,180 110,195 118,200" />
                    <path d="M 135,165 C 140,180 130,195 122,200" />
                  </g>
                )}

                {pattern === 'rooster' && (
                  <g opacity={isFired ? 0.9 : 0.6} stroke="#FCA5A5" strokeWidth="1.5" fill="none">
                    <circle cx="110" cy="155" r="5" fill="#EF4444" />
                    <path d="M 115,158 Q 130,160 135,180" />
                    <path d="M 120,180 L 125,195" />
                    <path d="M 130,175 Q 145,165 140,150" />
                  </g>
                )}

                {pattern === 'floral' && (
                  <g opacity={isFired ? 0.85 : 0.6} stroke="#FEF08A" strokeWidth="1.5" fill="none">
                    <circle cx="120" cy="170" r="6" fill="#FBBF24" />
                    <circle cx="120" cy="158" r="4" />
                    <circle cx="120" cy="182" r="4" />
                    <circle cx="108" cy="170" r="4" />
                    <circle cx="132" cy="170" r="4" />
                  </g>
                )}

                {/* Glaze sheen highlight */}
                {isFired && (
                  <path
                    d="M 95,80 Q 90,140 100,200"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.4"
                    fill="none"
                  />
                )}
              </g>
            </svg>
          </div>

          <div className="mt-4 text-center">
            <div className="text-sm font-semibold text-stone-800">
              {isFired ? 'Gốm đã nung hoàn thiện (Nhiệt độ 1.250°C)' : 'Gốm mộc đang tạo dáng & chấm men'}
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              {glazeColors[glaze].name}
            </div>
          </div>
        </div>

        {/* Right Column: Artisan Controls & Formulation (6 cols) */}
        <div className="lg:col-span-6 space-y-5">
          {/* Step 1: Clay Selection */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
              1. Chọn cốt đất sét địa phương
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setClayType('dong_nai')}
                className={`p-3 text-left rounded-lg border text-xs transition-colors cursor-pointer ${
                  clayType === 'dong_nai'
                    ? 'border-amber-800 bg-amber-50/70 text-stone-900 font-medium'
                    : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                }`}
              >
                <div className="font-semibold text-stone-900">Sét vàng sông Đồng Nai</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Chịu nhiệt cao, dẻo dai, hợp nung men ngọc</div>
              </button>
              <button
                onClick={() => setClayType('tan_phuoc_khanh')}
                className={`p-3 text-left rounded-lg border text-xs transition-colors cursor-pointer ${
                  clayType === 'tan_phuoc_khanh'
                    ? 'border-amber-800 bg-amber-50/70 text-stone-900 font-medium'
                    : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                }`}
              >
                <div className="font-semibold text-stone-900">Sét trắng Tân Phước Khánh</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Mịn xốp, bắt màu men tro da lươn chuẩn xác</div>
              </button>
            </div>
          </div>

          {/* Step 2: Vessel Shape */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
              2. Dáng vuốt gốm (Kiểu thức Nam Bộ)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setVesselShape('luc_binh')}
                className={`py-2 px-3 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                  vesselShape === 'luc_binh'
                    ? 'border-amber-800 bg-amber-900 text-white font-medium'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                Lục bình cổ cao
              </button>
              <button
                onClick={() => setVesselShape('cu_toi')}
                className={`py-2 px-3 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                  vesselShape === 'cu_toi'
                    ? 'border-amber-800 bg-amber-900 text-white font-medium'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                Bình củ tỏi phúc lộc
              </button>
              <button
                onClick={() => setVesselShape('au_gom')}
                className={`py-2 px-3 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                  vesselShape === 'au_gom'
                    ? 'border-amber-800 bg-amber-900 text-white font-medium'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                Âu gốm cúc đại đóa
              </button>
            </div>
          </div>

          {/* Step 3: Carved Motif */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
              3. Hoa văn khắc vạch chạm lộng
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPattern('dragon')}
                className={`p-2.5 text-xs rounded-lg border text-left transition-colors cursor-pointer ${
                  pattern === 'dragon' ? 'border-teal-700 bg-teal-50 text-teal-900 font-medium' : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                Rồng mây thời Nguyễn
              </button>
              <button
                onClick={() => setPattern('lotus')}
                className={`p-2.5 text-xs rounded-lg border text-left transition-colors cursor-pointer ${
                  pattern === 'lotus' ? 'border-teal-700 bg-teal-50 text-teal-900 font-medium' : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                Hoa sen liên hoa
              </button>
              <button
                onClick={() => setPattern('rooster')}
                className={`p-2.5 text-xs rounded-lg border text-left transition-colors cursor-pointer ${
                  pattern === 'rooster' ? 'border-teal-700 bg-teal-50 text-teal-900 font-medium' : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                Gà trống Lái Thiêu
              </button>
              <button
                onClick={() => setPattern('floral')}
                className={`p-2.5 text-xs rounded-lg border text-left transition-colors cursor-pointer ${
                  pattern === 'floral' ? 'border-teal-700 bg-teal-50 text-teal-900 font-medium' : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                Cúc vạn thọ phương Nam
              </button>
            </div>
          </div>

          {/* Step 4: Enamel Glaze Selection */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
              4. Dòng men bí truyền
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(glazeColors).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setGlaze(key as any)}
                  className={`p-2.5 text-xs rounded-lg border text-left transition-colors cursor-pointer ${
                    glaze === key ? 'border-amber-800 bg-amber-50 text-amber-950 font-semibold' : 'border-stone-200 bg-white text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.fill }} />
                    <span className="truncate">{item.name.split('(')[0]}</span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 mt-1.5 italic">
              {glazeColors[glaze].desc}
            </p>
          </div>

          {/* Step 5: Kiln Firing */}
          <div className="pt-2">
            {!isFired ? (
              <button
                onClick={handleFireKiln}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-orange-700 hover:bg-orange-800 text-white font-semibold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4 text-orange-200" />
                <span>Nung lò rồng liên hoàn (1.250°C)</span>
              </button>
            ) : (
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl">
                <div className="flex items-center gap-2 text-teal-900 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-teal-700" />
                  <span>Tác phẩm gốm đã hoàn thành xuất sắc!</span>
                </div>
                <p className="text-xs text-teal-800 mt-1 leading-relaxed">
                  Men {glazeColors[glaze].name} đã kết tinh đạt độ bóng sâu, hoa văn chạm lộng hiển lộ tinh xảo theo chuẩn mực gốm mỹ nghệ Đông Nam Bộ.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Certificate Modal / Badge when fired */}
      {showCertificate && (
        <div className="mt-8 p-6 bg-gradient-to-r from-stone-900 to-amber-950 text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300 font-mono">
                Chứng thư chế tác số · Đề tài G03
              </div>
              <h4 className="text-lg font-serif font-bold text-white">
                Kiệt Tác Gốm Mỹ Nghệ {glazeColors[glaze].name.split('(')[0]}
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Cốt đất: {clayType === 'dong_nai' ? 'Sét Đồng Nai' : 'Sét Tân Phước Khánh'} · Dáng: {vesselShape} · Hoa văn: {pattern}
              </p>
            </div>
          </div>

          <div className="text-xs text-right text-stone-300 shrink-0">
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded border border-amber-400/40">
              Đạt chuẩn kỹ nghệ Đông Nam Bộ
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

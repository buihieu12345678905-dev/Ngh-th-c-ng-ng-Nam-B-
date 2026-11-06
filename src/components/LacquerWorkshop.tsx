import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, RefreshCw, Award, CheckCircle, Droplets, Hand } from 'lucide-react';
import { audioAmbience } from '../utils/audioAmbience';

export const LacquerWorkshop: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [polishProgress, setPolishProgress] = useState<number>(0);
  const [isHandPolished, setIsHandPolished] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);

  // Setup scratchable water-polishing canvas when entering step 4
  useEffect(() => {
    if (currentStep === 4 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill canvas with opaque dark lacquer resin layer
      ctx.fillStyle = '#1C1917'; // Dark then resin
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add slight textured resin noise
      ctx.fillStyle = '#292524';
      for (let i = 0; i < 50; i++) {
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 3, 3);
      }
    }
  }, [currentStep]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    audioAmbience.play('lacquer');
    scratch(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    scratch(e);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    audioAmbience.stop();
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    // Erase the top dark resin layer with water-grinding radius
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Increment polish progress estimate
    setPolishProgress((prev) => Math.min(100, prev + 1.2));
  };

  const handleResetPolish = () => {
    setPolishProgress(0);
    setIsHandPolished(false);
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#1C1917';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold">
            Di sản phi vật thể quốc gia · Sơn mài Tương Bình Hiệp (Bình Dương)
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            Tuyệt Kỹ Mài Nước & Cẩn Ốc Xà Cừ Cổ Truyền
          </h3>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg text-xs font-medium">
          {[1, 2, 3, 4].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                currentStep === step
                  ? 'bg-amber-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Công đoạn {step}
            </button>
          ))}
        </div>
      </div>

      {/* Workshop Step Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
        {/* Step 1: Bó Vóc */}
        {currentStep === 1 && (
          <>
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center min-h-[360px]">
              <div className="w-64 h-48 bg-[#D4A373] rounded-lg shadow-inner relative flex items-center justify-center border-4 border-[#8B5E34]">
                <div className="absolute inset-2 border border-dashed border-[#A9714B] opacity-60 flex items-center justify-center">
                  <span className="text-xs font-mono text-[#582F0E]">Vóc gỗ dầu mít tự nhiên</span>
                </div>
                <div className="px-4 py-2 bg-stone-900/80 text-white text-xs rounded backdrop-blur-xs">
                  Phủ vải màn & mùn cưa mịn
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-4 max-w-sm">
                Cốt vóc được quét 3 lớp sơn sống, bọc vải màn để tránh nứt toác theo thời tiết nhiệt đới.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider">
                Công đoạn 01 · Chuẩn bị cốt vóc
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Bó Vóc Bằng Vải Màn & Nhựa Sơn Ta Tự Nhiên
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                Để bức tranh hay chiếc bình sơn mài Tương Bình Hiệp trường tồn hàng thế kỷ, công đoạn làm vóc đòi hỏi sự kiên nhẫn tột cùng. Nghệ nhân dùng gỗ dầu mít già ngâm tẩm, dùng bột mùn cưa mịn nhồi với nhựa sơn sống trát kín các thớ gỗ, sau đó bọc lớp vải màn dẻo dai rồi ủ trong buồng ẩm từ 7 đến 10 ngày.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Chuyển sang: Cẩn ốc xà cừ & vỏ trứng →
                </button>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Inlay Eggshell & Mother-of-pearl */}
        {currentStep === 2 && (
          <>
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center min-h-[360px]">
              <div className="w-64 h-52 bg-[#2D2A26] rounded-lg shadow-md relative p-4 flex items-center justify-center overflow-hidden border-2 border-stone-800">
                {/* Visual inlay of phoenix and lotus */}
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-200/90 via-emerald-100 to-white/90 border border-amber-300 shadow-xs flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-amber-600 animate-pulse" />
                  </div>
                  <div className="text-xs text-amber-100 font-serif font-bold mt-3">
                    Xà cừ ngũ sắc & vỏ trứng vịt
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">
                    Khảm tỉ mỉ từng mảnh ghép &lt; 1mm
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-4 max-w-sm">
                Vỏ trứng vịt tạo sắc trắng ngà nứt rạn tự nhiên; vỏ ốc xà cừ biển đổi sắc óng ánh theo góc nhìn.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider">
                Công đoạn 02 · Nghệ thuật khảm cẩn
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Cẩn Vỏ Ốc Xà Cừ Ngũ Sắc & Dán Vỏ Trứng Chim
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                Nét tinh hoa độc nhất của sơn mài Tương Bình Hiệp là kỹ nghệ khảm trứng và ốc xà cừ. Nghệ nhân dùng vỏ trứng vịt đã luộc chín, bóc sạch màng trong, dùng dùi gỗ gõ nhẹ tạo vân rạn li ti rồi dán ghép từng mẩu nhỏ tạo hình hoa sen, cánh chim hạc trắng tinh khôi mà không loại sơn dầu nào sánh kịp.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Chuyển sang: Phủ sơn then & ủ buồng ẩm →
                </button>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Layering with Sơn Then */}
        {currentStep === 3 && (
          <>
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center min-h-[360px]">
              <div className="w-64 h-52 bg-[#0C0A09] rounded-lg shadow-xl relative p-4 flex flex-col items-center justify-center border border-stone-900">
                <div className="w-12 h-12 rounded-full bg-amber-900/30 border border-amber-600/40 flex items-center justify-center text-amber-500 mb-2">
                  <Droplets className="w-6 h-6 animate-bounce" />
                </div>
                <div className="text-xs text-stone-300 font-serif">Nhựa sơn ta đen tuyền (Sơn then)</div>
                <div className="text-[10px] text-stone-500 mt-1">Phủ 7 - 12 lớp phủ kín hoàn toàn mặt tranh</div>
                <div className="mt-3 text-[11px] px-2.5 py-1 bg-stone-800 text-amber-300 rounded border border-stone-700">
                  Ủ buồng ẩm kín gió 5 ngày
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider">
                Công đoạn 03 · Phủ sơn & dưỡng ẩm
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Phủ Nhiều Lớp Sơn Ta Then Đen & Ủ Kín Gió
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                Nhựa sơn ta từ cây sơn tự nhiên có đặc tính khác biệt: càng gặp khí hậu ẩm ướt lại càng nhanh khô và đanh cứng. Nghệ nhân quét từng lớp sơn then đen phủ kín các chi tiết ốc cẩn, sau đó đặt trong phòng ủ kín gió có phun sương ẩm. Sau khi khô, toàn bộ bức tranh chìm sâu dưới lớp sơn đen huyền bí.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-5 py-2.5 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Vào khu vực Mài Nước tương tác (Công đoạn then chốt) →
                </button>
              </div>
            </div>
          </>
        )}

        {/* Step 4: Interactive Water Polishing Canvas */}
        {currentStep === 4 && (
          <>
            {/* Interactive Polishing Canvas on Left */}
            <div className="lg:col-span-6 bg-[#FAF7F2] p-6 rounded-xl border border-stone-200 flex flex-col items-center justify-center relative min-h-[380px]">
              <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-lg border-2 border-stone-800 cursor-crosshair">
                {/* Revealed Artwork Underneath (Glistening gold and mother-of-pearl lotus & bird) */}
                <div className={`absolute inset-0 bg-[#2A1810] flex flex-col items-center justify-center p-4 transition-all ${isHandPolished ? 'brightness-125' : ''}`}>
                  {/* Decorative lacquer background illustration */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <radialGradient id="lacquerGold" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FEF08A" />
                        <stop offset="60%" stopColor="#CA8A04" />
                        <stop offset="100%" stopColor="#854D0E" />
                      </radialGradient>
                      <linearGradient id="pearlShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="30%" stopColor="#E0F2FE" />
                        <stop offset="70%" stopColor="#FEE2E2" />
                        <stop offset="100%" stopColor="#FEF08A" />
                      </linearGradient>
                    </defs>

                    {/* Lacquer Background Glow */}
                    <circle cx="100" cy="100" r="85" fill="#451A03" opacity="0.8" />

                    {/* Mother of pearl lotus petals */}
                    <path d="M 100,60 C 85,85 85,115 100,135 C 115,115 115,85 100,60 Z" fill="url(#pearlShimmer)" stroke="#FDE68A" strokeWidth="1" />
                    <path d="M 80,85 C 65,100 75,125 95,135 C 80,120 75,100 80,85 Z" fill="url(#pearlShimmer)" />
                    <path d="M 120,85 C 135,100 125,125 105,135 C 120,120 125,100 120,85 Z" fill="url(#pearlShimmer)" />

                    {/* Eggshell Inlay Pattern (Trứng rạn) */}
                    <g opacity="0.85" stroke="#451A03" strokeWidth="0.5" fill="#FEF9C3">
                      <polygon points="98,140 102,140 100,145" />
                      <polygon points="92,142 96,141 94,147" />
                      <polygon points="104,142 108,141 106,147" />
                      <polygon points="90,148 100,152 95,155" />
                      <polygon points="102,152 110,148 105,155" />
                    </g>

                    {/* Golden foliage & Phoenix Feather */}
                    <path d="M 70,140 Q 100,165 130,140" stroke="url(#lacquerGold)" strokeWidth="3" fill="none" />
                    <circle cx="100" cy="50" r="3" fill="#FDE047" />
                    <text x="100" y="175" textAnchor="middle" className="text-[8px] font-serif fill-amber-200">
                      TƯƠNG BÌNH HIỆP · G03
                    </text>
                  </svg>

                  {/* Gloss sheen overlay if hand polished */}
                  {isHandPolished && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-amber-200/20 pointer-events-none" />
                  )}
                </div>

                {/* Scratchable Top Canvas (Resin Layer) */}
                <canvas
                  ref={canvasRef}
                  width={288}
                  height={288}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  className="absolute inset-0 w-full h-full touch-none select-none"
                  style={{ display: polishProgress >= 96 ? 'none' : 'block' }}
                />
              </div>

              {/* Interaction instructions */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Dùng chuột hoặc ngón tay chà miết để mài nước bóc lớp sơn đen</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-36 bg-stone-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-amber-800 h-full transition-all duration-200"
                      style={{ width: `${Math.min(100, polishProgress)}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono text-stone-700 tabular-nums">
                    {Math.min(100, Math.round(polishProgress))}%
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4 Controls on Right */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider">
                Công đoạn 04 · Mài nước & Đánh bóng
              </span>
              <h4 className="text-xl font-serif font-bold text-stone-900">
                Kỹ Nghệ Mài Nước & Xoa Bóng Bằng Lòng Bàn Tay
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                Người thợ dùng than củi mù u mài ngập trong nước sạch. Khi mài đến độ thích hợp, lớp xà cừ ngũ sắc và vỏ trứng tinh khôi sẽ phát lộ rực rỡ từ đáy sâu của lớp sơn đen. 
              </p>

              {polishProgress >= 70 && !isHandPolished && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-950">
                    <Hand className="w-4 h-4 text-amber-800" />
                    <span>Mặt tranh đã lộ rõ! Bạn có thể thực hiện công đoạn bí truyền cuối cùng:</span>
                  </div>
                  <button
                    onClick={() => setIsHandPolished(true)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Đánh bóng bằng lòng bàn tay trần (Hoàn tất tác phẩm)</span>
                  </button>
                </div>
              )}

              {isHandPolished && (
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl">
                  <div className="flex items-center gap-2 text-teal-900 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-700" />
                    <span>Tuyệt tác sơn mài Tương Bình Hiệp đã đạt độ bóng sâu như gương!</span>
                  </div>
                  <p className="text-xs text-teal-800 mt-1 leading-relaxed">
                    Nhiệt lượng tự nhiên từ lòng bàn tay kết hợp bột than lá chuối đã kích hoạt độ bóng quang học vĩnh cửu của nhựa sơn ta Đông Nam Bộ.
                  </p>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleResetPolish}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg bg-white cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Mài lại từ đầu</span>
                </button>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-amber-900 font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Quay lại công đoạn 1
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sun, Moon, Flame, Wind, CheckCircle, Award, RotateCcw } from 'lucide-react';
import { audioAmbience } from '../utils/audioAmbience';

export const RicePaperWorkshop: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [nightHour, setNightHour] = useState<number>(3); // 3 AM ideal dew hour
  const [ricePaperState, setRicePaperState] = useState<'liquid' | 'sun_dried' | 'baked' | 'dew_cured'>('liquid');
  const [isBaked, setIsBaked] = useState<boolean>(false);

  const handleSteamBake = () => {
    setStage(2);
    setRicePaperState('sun_dried');
  };

  const handleCharcoalToast = () => {
    setIsBaked(true);
    setStage(3);
    setRicePaperState('baked');
  };

  const handleDewCatch = () => {
    audioAmbience.play('morning_mist');
    setStage(4);
    setRicePaperState('dew_cured');
  };

  const handleReset = () => {
    audioAmbience.stop();
    setStage(1);
    setRicePaperState('liquid');
    setIsBaked(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold">
            Di sản phi vật thể quốc gia · Bánh tráng phơi sương Trảng Bàng (Tây Ninh)
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            Kỹ Nghệ Nướng Than Mắt Cua & Hứng Sương Đêm
          </h3>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg bg-stone-50 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Làm mẻ bánh mới</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Visual Simulator Plate (6 cols) */}
        <div className="lg:col-span-6 bg-[#FAF7F2] p-8 rounded-xl border border-stone-200 flex flex-col items-center justify-center relative min-h-[380px] overflow-hidden">
          {/* Visual stage representation */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Bamboo rack background */}
            <div className="w-64 h-64 rounded-full border-4 border-amber-800/40 bg-[#FDFBF7] shadow-inner relative flex items-center justify-center p-3">
              {/* Bamboo weave grid lines */}
              <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[repeating-linear-gradient(45deg,#78350F,#78350F_2px,transparent_2px,transparent_10px)]" />
              <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[repeating-linear-gradient(-45deg,#78350F,#78350F_2px,transparent_2px,transparent_10px)]" />

              {/* The Round Rice Paper Sheet */}
              <div
                className={`w-52 h-52 rounded-full transition-all duration-700 flex items-center justify-center relative shadow-xs ${
                  ricePaperState === 'liquid'
                    ? 'bg-white/80 border border-white'
                    : ricePaperState === 'sun_dried'
                    ? 'bg-amber-50/90 border border-amber-200 opacity-90'
                    : ricePaperState === 'baked'
                    ? 'bg-[#FEF3C7] border-2 border-amber-400'
                    : 'bg-[#FFFBEB] border-2 border-amber-300 shadow-md ring-4 ring-amber-200/50'
                }`}
              >
                {/* Visual texture & bubbles */}
                {ricePaperState === 'liquid' && (
                  <div className="text-center">
                    <span className="text-xs text-stone-400 font-sans">Bột gạo Nàng Miên hấp hơi nước</span>
                  </div>
                )}

                {ricePaperState === 'sun_dried' && (
                  <div className="text-center">
                    <Sun className="w-8 h-8 text-amber-500 mx-auto animate-spin" style={{ animationDuration: '12s' }} />
                    <span className="text-xs text-amber-900 font-medium block mt-1">Phơi vỉ tre đón nắng gắt</span>
                  </div>
                )}

                {ricePaperState === 'baked' && (
                  <div className="relative w-full h-full rounded-full flex items-center justify-center p-4">
                    {/* Tiny "mat cua" toast bubbles */}
                    <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-amber-600/60" />
                    <div className="absolute top-16 right-10 w-3 h-3 rounded-full bg-amber-600/60" />
                    <div className="absolute bottom-12 left-16 w-2.5 h-2.5 rounded-full bg-amber-600/60" />
                    <div className="absolute bottom-14 right-14 w-2 h-2 rounded-full bg-amber-600/60" />
                    <div className="absolute top-24 left-24 w-3.5 h-3.5 rounded-full bg-amber-600/50" />
                    <div className="text-center">
                      <Flame className="w-7 h-7 text-orange-600 mx-auto" />
                      <span className="text-xs text-amber-950 font-bold block mt-1">Bọt khí "Mắt Cua" phồng xốp</span>
                    </div>
                  </div>
                )}

                {ricePaperState === 'dew_cured' && (
                  <div className="relative w-full h-full rounded-full flex items-center justify-center p-4">
                    {/* Dew droplets on translucent surface */}
                    <div className="absolute top-6 left-14 w-2 h-2 rounded-full bg-sky-400/80 animate-pulse" />
                    <div className="absolute top-12 right-12 w-2.5 h-2.5 rounded-full bg-sky-400/80 animate-pulse" />
                    <div className="absolute bottom-10 left-12 w-2 h-2 rounded-full bg-sky-400/80 animate-pulse" />
                    <div className="text-center">
                      <Moon className="w-8 h-8 text-sky-800 mx-auto" />
                      <span className="text-xs text-amber-950 font-serif font-bold block mt-1">
                        Ngậm sương đêm dẻo mềm
                      </span>
                      <span className="text-[10px] text-stone-600 block">Đặc sản Trảng Bàng hoàn hảo</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="text-xs uppercase font-mono tracking-wider text-amber-900 font-semibold">
              Trạng thái bánh:
            </div>
            <div className="text-sm font-semibold text-stone-800 mt-0.5">
              {ricePaperState === 'liquid' && 'Bánh ướt tráng 2 lớp mỏng hơi nước'}
              {ricePaperState === 'sun_dried' && 'Bánh phơi khô se mặt trên vỉ tre'}
              {ricePaperState === 'baked' && 'Bánh nướng than đước nổi hạt mắt cua giòn xốp'}
              {ricePaperState === 'dew_cured' && 'Bánh ngậm trọn giọt sương đêm Tây Ninh mềm dẻo đặc trưng'}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Process Steps (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Step 1 */}
          <div className={`p-4 rounded-xl border transition-colors ${stage === 1 ? 'border-amber-800 bg-amber-50/50' : 'border-stone-200 bg-stone-50/40'}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-semibold text-amber-800">Bước 1 · Tráng bánh 2 lớp</span>
              {stage > 1 && <CheckCircle className="w-4 h-4 text-teal-600" />}
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Gạo Nàng Miên xay mịn, pha chút muối tinh khiết. Tráng màng thứ nhất đậy nắp hấp chín, rồi tráng lớp thứ hai chồng lên để bánh đạt độ dày lý tưởng.
            </p>
            {stage === 1 && (
              <button
                onClick={handleSteamBake}
                className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Tráng xong → Đưa ra vỉ tre phơi nắng
              </button>
            )}
          </div>

          {/* Step 2 */}
          <div className={`p-4 rounded-xl border transition-colors ${stage === 2 ? 'border-amber-800 bg-amber-50/50' : 'border-stone-200 bg-stone-50/40'}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-semibold text-amber-800">Bước 2 · Nắng gắt Tây Ninh</span>
              {stage > 2 && <CheckCircle className="w-4 h-4 text-teal-600" />}
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Trải bánh trên giàn tre dài 2m dưới nắng trời hanh gắt Tây Ninh từ 30 đến 45 phút cho mặt bánh săn se lại.
            </p>
            {stage === 2 && (
              <button
                onClick={handleCharcoalToast}
                className="px-4 py-2 bg-orange-700 hover:bg-orange-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Bánh se mặt → Nướng lướt than hồng
              </button>
            )}
          </div>

          {/* Step 3 */}
          <div className={`p-4 rounded-xl border transition-colors ${stage === 3 ? 'border-amber-800 bg-amber-50/50' : 'border-stone-200 bg-stone-50/40'}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-semibold text-amber-800">Bước 3 · Nướng bọt khí mắt cua</span>
              {stage > 3 && <CheckCircle className="w-4 h-4 text-teal-600" />}
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Dùng kẹp tre trở thoăn thoắt trên bếp than đước rực hồng. Bánh nở bọt khí nhỏ li ti như "mắt cua", không để cháy sém.
            </p>
            {stage === 3 && (
              <button
                onClick={handleDewCatch}
                className="px-4 py-2 bg-sky-800 hover:bg-sky-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Canh giờ phơi sương đêm (2h - 4h sáng)</span>
              </button>
            )}
          </div>

          {/* Step 4: Finished result */}
          {stage === 4 && (
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-semibold text-sm">
                <Award className="w-4 h-4 text-teal-700" />
                <span>Mẻ Bánh Tráng Phơi Sương Trảng Bàng Đạt Chuẩn Di Sản!</span>
              </div>
              <p className="text-xs text-teal-800 leading-relaxed">
                Chiếc bánh ngậm vừa vặn sương mai lúc {nightHour}h sáng, dẻo mềm dính tay, sẵn sàng cuốn kèm thịt luộc bắp giò và hơn 30 vị rau rừng sông Vàm Cỏ Đông (lá cóc, đọt xoài, lá lụa, quế vị...).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

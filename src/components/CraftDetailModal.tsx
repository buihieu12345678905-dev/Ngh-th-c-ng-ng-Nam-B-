import React from 'react';
import { CraftVillage } from '../types/craft';
import { X, Volume2, Sparkles, MapPin, Calendar, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { audioAmbience } from '../utils/audioAmbience';

interface CraftDetailModalProps {
  craft: CraftVillage | null;
  onClose: () => void;
  onOpenWorkshop: (craftId: string) => void;
}

export const CraftDetailModal: React.FC<CraftDetailModalProps> = ({ craft, onClose, onOpenWorkshop }) => {
  if (!craft) return null;

  const handlePlaySound = () => {
    if (craft.audioAmbienceType) {
      audioAmbience.play(craft.audioAmbienceType);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl border border-stone-300 shadow-xl overflow-hidden my-8">
        {/* Header Bar */}
        <div className="p-6 md:p-8 bg-stone-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Đóng hộp thoại"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Clean unboxed metadata */}
          <div className="flex items-center gap-2 text-xs text-amber-300 font-sans uppercase tracking-widest mb-2">
            <span>{craft.provinceName}</span>
            <span aria-hidden="true">·</span>
            <span>{craft.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{craft.heritageStatus}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white max-w-xl">
            {craft.vietnameseTitle}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{craft.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Khởi lập: {craft.establishedPeriod}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Audio Ambience & Workshop banner if applicable */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-stone-100 rounded-xl border border-stone-200">
            {craft.audioAmbienceType ? (
              <button
                onClick={handlePlaySound}
                className="flex items-center gap-2 text-xs font-semibold text-amber-900 hover:text-amber-950 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-amber-700" />
                <span>Nghe âm thanh thực địa làng nghề</span>
              </button>
            ) : (
              <span className="text-xs text-stone-500">Làng nghề truyền thống Đông Nam Bộ</span>
            )}

            {(craft.id === 'gom_bien_hoa' || craft.id === 'son_mai_tuong_binh_hiep' || craft.id === 'banh_trang_trang_bang') && (
              <button
                onClick={() => {
                  onClose();
                  onOpenWorkshop(craft.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-900 text-white rounded-lg hover:bg-amber-950 transition-colors cursor-pointer"
              >
                <span>Mở xưởng chế tác ảo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Historical Narrative */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-amber-900 uppercase tracking-wider mb-2">
              01. Bối cảnh lịch sử & Nguồn gốc hình thành
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              {craft.historicalContext}
            </p>
          </div>

          {/* Signature Technique */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <h3 className="text-xs font-mono font-semibold text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Tuyệt kỹ bí truyền & Dấu ấn riêng biệt</span>
            </h3>
            <p className="text-sm font-serif italic text-amber-950 mt-1">
              "{craft.signatureTechnique}"
            </p>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-amber-900 uppercase tracking-wider mb-4">
              02. Chu trình công nghệ & Kỹ nghệ thủ công chuẩn mực
            </h3>
            <div className="space-y-3">
              {craft.processSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-stone-200">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900">{s.title}</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raw Materials & Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <h4 className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Nguyên phụ liệu bản địa
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {craft.rawMaterials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <h4 className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Sản phẩm tiêu biểu
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5">
                {craft.iconicProducts.map((prod, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>{prod}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Preservation & Modern Artisans */}
          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-xs font-mono font-semibold text-amber-900 uppercase tracking-wider mb-2">
              03. Công tác bảo tồn & Nghệ nhân truyền đời
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              {craft.preservationEfforts}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-700">
              <span className="font-semibold text-stone-900">Nghệ nhân tiêu biểu:</span>
              {craft.notableArtisans.map((art, idx) => (
                <span key={idx} className="bg-stone-200/80 px-2 py-0.5 rounded text-stone-800">
                  {art}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="p-4 px-6 md:px-8 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-mono">Dữ liệu bảo tồn di sản · Mã G03</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

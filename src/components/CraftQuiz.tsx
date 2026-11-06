import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/craftsData';
import { Award, CheckCircle2, XCircle, RotateCcw, Share2, Sparkles, Printer } from 'lucide-react';

export const CraftQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [nameSubmitted, setNameSubmitted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setNameSubmitted(false);
  };

  return (
    <section id="craft-quiz" className="py-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 pb-6 border-b border-stone-200">
        <span className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold">
          Thử thách tri thức di sản · Đề tài G03
        </span>
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
          Khảo Thí Tinh Hoa Bách Nghệ Đông Nam Bộ
        </h2>
        <p className="text-sm text-stone-600 max-w-lg mx-auto mt-2">
          Kiểm tra hiểu biết của bạn về lịch sử, nguyên liệu và tuyệt kỹ của các làng nghề truyền thống phương Nam để nhận chứng nhận danh dự.
        </p>
      </div>

      {!quizCompleted ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xs">
          {/* Progress & Province Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 text-xs text-stone-500 mb-6">
            <span className="font-semibold text-amber-900">
              Địa bàn: {currentQ.province}
            </span>
            <span className="font-mono tabular-nums">
              Câu {currentIdx + 1} / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          {/* Question Text */}
          <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 mb-6 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, idx) => {
              let optStyle = 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800';
              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  optStyle = 'border-teal-600 bg-teal-50 text-teal-950 font-medium ring-1 ring-teal-500';
                } else if (idx === selectedOption) {
                  optStyle = 'border-red-500 bg-red-50 text-red-950';
                } else {
                  optStyle = 'border-stone-200 bg-stone-50 text-stone-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                >
                  <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isAnswered && (
            <div className={`p-4 rounded-xl border mb-6 ${selectedOption === currentQ.correctAnswer ? 'bg-teal-50/80 border-teal-200' : 'bg-amber-50/80 border-amber-200'}`}>
              <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                {selectedOption === currentQ.correctAnswer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <span className="text-teal-900">Chính xác!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-red-900">Chưa chính xác!</span>
                  </>
                )}
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả & Nhận chứng nhận'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Certificate View */
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border-4 border-[#8B5E34] p-8 md:p-12 shadow-md relative bg-[radial-gradient(#F5F0E6_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Inner Border */}
            <div className="border border-stone-300 p-6 md:p-8 rounded-xl text-center relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                <Award className="w-8 h-8" />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-amber-900 font-bold mb-2">
                HỘI ĐỒNG BẢO TỒN VĂN HÓA DÂN GIAN ĐÔNG NAM BỘ · MÃ ĐỀ TÀI: G03
              </div>

              <h3 className="text-2xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight mb-2">
                CHỨNG NHẬN TINH HOA DI SẢN
              </h3>

              <p className="text-xs text-stone-500 uppercase tracking-wider mb-6">
                Chứng nhận thành tích khảo thí kiến thức nghề thủ công truyền thống phương Nam
              </p>

              {/* Recipient Name Entry or Display */}
              {!nameSubmitted ? (
                <div className="max-w-md mx-auto my-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <label className="text-xs font-semibold text-stone-700 block mb-2">
                    Nhập họ tên của bạn để in lên chứng thư:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm bg-white rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    />
                    <button
                      onClick={() => {
                        if (userName.trim()) setNameSubmitted(true);
                      }}
                      className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold rounded-lg cursor-pointer"
                    >
                      Xác nhận
                    </button>
                  </div>
                </div>
              ) : (
                <div className="my-6">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-amber-950 underline decoration-amber-600 underline-offset-8">
                    {userName}
                  </div>
                </div>
              )}

              <p className="text-sm text-stone-700 max-w-lg mx-auto leading-relaxed my-4">
                Đã hoàn thành xuất sắc đợt khảo cứu với số điểm:{' '}
                <span className="font-bold font-mono text-amber-900 text-base tabular-nums">
                  {score}/{QUIZ_QUESTIONS.length}
                </span>{' '}
                câu hỏi. Thể hiện sự am tường sâu sắc về kỹ nghệ Gốm Biên Hòa - Lái Thiêu, Sơn mài Tương Bình Hiệp, Bánh tráng Trảng Bàng, Đúc đồng An Hội, Muối Long Điền và Thổ cẩm S’tiêng.
              </p>

              {/* Seal and Signatures */}
              <div className="grid grid-cols-2 gap-8 pt-8 mt-6 border-t border-stone-200 text-xs text-stone-600">
                <div className="text-center">
                  <div className="font-semibold text-stone-900">Ban Đề tài Nghiên cứu</div>
                  <div className="text-[11px] text-stone-500 mt-1">Đề tài G03 · Đông Nam Bộ</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-red-700/80 text-red-800 text-[10px] font-mono font-bold flex items-center justify-center rotate-[-12deg] mb-1">
                    CHỨNG THỰC
                  </div>
                  <div className="text-[11px] text-stone-500">Số lưu trữ: G03-2026-DNB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khảo thí lại từ đầu</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>In chứng thư danh dự</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

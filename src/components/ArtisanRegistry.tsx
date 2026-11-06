import React from 'react';
import { Award, Heart, ShieldCheck, ExternalLink, Sparkles, Flame, UserCheck } from 'lucide-react';

export const ArtisanRegistry: React.FC = () => {
  const masterArtisans = [
    {
      name: 'Nghệ nhân Nhân dân Nguyễn Văn Quý',
      craft: 'Sơn mài Tương Bình Hiệp (Bình Dương)',
      yearsOfService: 'Hơn 55 năm gắn bó với nghề sơn mài',
      achievement: 'Truyền nhân đời thứ tư của dòng họ làm sơn thếp, người bảo tồn thành công kỹ thuật cẩn trứng rạn tự nhiên và phục dựng các bức hoành phi câu đối sơn son thếp vàng cổ.',
      quote: 'Nhựa sơn ta như dòng máu trong huyết quản. Càng mài dưới nước, tranh càng sáng; người làm nghề càng chịu khó nhọc, tác phẩm mới có hồn.'
    },
    {
      name: 'Nghệ nhân Ưu tú Hoàng Ngọc Hiến',
      craft: 'Gốm Biên Hòa (Đồng Nai)',
      yearsOfService: '48 năm đắp vuốt và sáng tạo men',
      achievement: 'Tốt nghiệp Trường Mỹ nghệ Biên Hòa, thành công phục chế công thức men xanh đồng trổ (vert de Bien Hoa) thời kỳ 1925 và chế tác những bình đôn voi đạt kỷ lục quốc gia.',
      quote: 'Gốm Biên Hòa khác lạ ở chỗ vừa có nét phóng khoáng mộc mạc của sông nước phương Nam, vừa có sự đài các bác học của kỹ thuật vẽ men Tây phương.'
    },
    {
      name: 'Bà Phạm Thị Đương',
      craft: 'Bánh tráng phơi sương Trảng Bàng (Tây Ninh)',
      yearsOfService: '60 năm thức khuya canh hứng sương trời',
      achievement: 'Người giữ ngọn lửa của di sản văn hóa phi vật thể quốc gia, gìn giữ bí quyết pha bột gạo Nàng Miên và canh sương đêm phương Nam từ thời con gái.',
      quote: 'Trời cho vùng đất Trảng Bàng ngọn gió đêm và giọt sương mát ngọt. Không có cái sương đêm lành lạnh ấy thì không bao giờ có chiếc bánh tráng dẻo thơm.'
    },
    {
      name: 'Nghệ nhân Ba Thắng (Trần Văn Thắng)',
      craft: 'Đúc đồng An Hội (Gò Vấp, TP.HCM)',
      yearsOfService: 'Gần 50 năm bên lò luyện đồng',
      achievement: 'Truyền nhân đời thứ ba dòng họ Trần gốc Quảng Nam tại Sài Gòn, nắm giữ bí quyết làm khuôn sáp ong và pha tỷ lệ đồng đỏ tạo âm thanh đại hồng chung ngân vang cả cây số.',
      quote: 'Đúc đồ thờ cúng thì tâm người thợ phải trong sáng như đồng nóng chảy. Sai một ly là tiếng chuông đục ngầu, chiếc lư hương mất đi vẻ trang nghiêm.'
    }
  ];

  const preservationPrograms = [
    {
      title: 'Đề án Bảo tồn Làng Sơn mài Tương Bình Hiệp (5,4 ha)',
      organization: 'UBND Tỉnh Bình Dương & Sở Văn hóa, Thể thao và Du lịch',
      details: 'Xây dựng không gian trưng bày di sản, trung tâm sản xuất tập trung xử lý nước thải đạt chuẩn sinh thái và phát triển tour du lịch trải nghiệm cho học sinh, sinh viên.',
      badge: 'Chính sách trọng điểm'
    },
    {
      title: 'Số hóa hoa văn gốm mỹ nghệ Biên Hòa thế kỷ XX',
      organization: 'Trường CĐ Mỹ thuật Trang trí Đồng Nai & Hiệp hội Gốm mỹ nghệ',
      details: 'Lưu trữ và lập bản đồ 3D cho hơn 500 mẫu hoa văn rồng mây, phù điêu men ngọc và đôn voi phục vụ nghiên cứu và ứng dụng sản xuất hiện đại.',
      badge: 'Công nghệ số'
    },
    {
      title: 'Lễ hội Văn hóa Bánh tráng phơi sương Trảng Bàng',
      organization: 'UBND Thị xã Trảng Bàng, Tỉnh Tây Ninh',
      details: 'Sự kiện văn hóa du lịch quy mô lớn tổ chức định kỳ 2 năm/lần nhằm tôn vinh các gia đình nghệ nhân và quảng bá đặc sản Tây Ninh ra quốc tế.',
      badge: 'Lễ hội di sản'
    }
  ];

  return (
    <section id="artisan-registry" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold mb-1.5">
            Báu vật nhân văn sống
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900">
            Chân Dung Nghệ Nhân & Sứ Mệnh Bảo Tồn
          </h2>
        </div>
        <p className="text-sm text-stone-600 max-w-md">
          Tôn vinh những đôi bàn tay tài hoa gìn giữ hồn cốt dân tộc qua bao thăng trầm thời cuộc giữa vùng kinh tế sôi động bậc nhất Việt Nam.
        </p>
      </div>

      {/* Artisans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {masterArtisans.map((artisan, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Clean unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold mb-2">
                <span>{artisan.craft}</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-500 font-normal">{artisan.yearsOfService}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {artisan.name}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {artisan.achievement}
              </p>

              {/* Artisan Quote */}
              <blockquote className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/60 text-xs font-serif italic text-stone-800 leading-relaxed">
                "{artisan.quote}"
              </blockquote>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5 text-amber-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Nghệ nhân bảo tồn di sản G03</span>
              </span>
              <span className="text-stone-400">Đông Nam Bộ</span>
            </div>
          </div>
        ))}
      </div>

      {/* Preservation & Modern Initiatives Section */}
      <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-stone-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/80 mb-6">
          <div>
            <span className="text-xs font-mono font-semibold text-amber-900 uppercase tracking-wider">
              Hành động thiết thực
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
              Chương Trình Bảo Tồn & Chuyển Đổi Sinh Thái
            </h3>
          </div>
          <span className="text-xs text-stone-600 max-w-xs">
            Kết hợp gìn giữ kỹ nghệ truyền thống với công nghệ xanh và phát triển du lịch di sản bền vững.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preservationPrograms.map((prog, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
              <span className="text-[11px] font-mono font-semibold text-amber-800 uppercase tracking-wider block mb-2">
                {prog.badge}
              </span>
              <h4 className="font-serif font-bold text-base text-stone-900 mb-2">
                {prog.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {prog.details}
              </p>
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Cơ quan chủ trì: {prog.organization}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

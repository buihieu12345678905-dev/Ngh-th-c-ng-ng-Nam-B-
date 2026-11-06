import { CraftVillage, ProvinceInfo, QuizQuestion } from '../types/craft';

export const PROVINCES_DATA: ProvinceInfo[] = [
  {
    key: 'binh_duong',
    name: 'Bình Dương',
    administrativeTitle: 'Tỉnh Bình Dương',
    coordinates: { x: 42, y: 48 },
    craftSummary: 'Cái nôi gốm sứ và sơn mài nức tiếng phương Nam với bề dày hơn 160 năm lịch sử',
    highlights: ['Gốm sứ Lái Thiêu & Tân Phước Khánh', 'Sơn mài Tương Bình Hiệp (Di sản Quốc gia)', 'Điêu khắc gỗ Thủ Dầu Một'],
    craftIds: ['gom_binh_duong', 'son_mai_tuong_binh_hiep', 'moc_thu_dau_mot']
  },
  {
    key: 'dong_nai',
    name: 'Đồng Nai',
    administrativeTitle: 'Tỉnh Đồng Nai',
    coordinates: { x: 58, y: 55 },
    craftSummary: 'Cố đô gốm mỹ nghệ Biên Hòa vang danh quốc tế cùng nghề đan lát, mộc mỹ nghệ Chợ Đồn',
    highlights: ['Gốm Biên Hòa men xanh đồng trổ', 'Mây tre đan Tân Triều - Phước Bình', 'Mộc mỹ nghệ Chợ Đồn'],
    craftIds: ['gom_bien_hoa', 'may_tre_tan_trieu', 'moc_cho_don']
  },
  {
    key: 'tay_ninh',
    name: 'Tây Ninh',
    administrativeTitle: 'Tỉnh Tây Ninh',
    coordinates: { x: 26, y: 35 },
    craftSummary: 'Vùng đất tâm linh và di sản ẩm thực thủ công tráng lệ dưới chân núi Bà Đen',
    highlights: ['Bánh tráng phơi sương Trảng Bàng (Di sản Quốc gia)', 'Muối tôm Tây Ninh', 'Chằm nón lá Ninh Sơn'],
    craftIds: ['banh_trang_trang_bang', 'muoi_tom_tay_ninh', 'non_la_ninh_son']
  },
  {
    key: 'tphcm',
    name: 'TP. Hồ Chí Minh',
    administrativeTitle: 'Thành phố Hồ Chí Minh',
    coordinates: { x: 44, y: 68 },
    craftSummary: 'Trung tâm giao thương đô hội với những làng nghề kim khí, đèn lồng và thêu may truyền đời',
    highlights: ['Đúc đồng An Hội (Gò Vấp)', 'Kim hoàn & chạm bạc Chợ Lớn', 'Lồng đèn Phú Bình (Q.11)'],
    craftIds: ['duc_dong_an_hoi', 'kim_hoan_cho_lon', 'long_den_phu_binh']
  },
  {
    key: 'ba_ria_vung_tau',
    name: 'Bà Rịa - Vũng Tàu',
    administrativeTitle: 'Tỉnh Bà Rịa - Vũng Tàu',
    coordinates: { x: 65, y: 78 },
    craftSummary: 'Xứ diêm nghiệp ngàn đời, làng chài ủ nước mắm truyền thống và thủ công mỹ nghệ miền duyên hải',
    highlights: ['Nghề làm muối An Ngãi - Long Điền', 'Chế biến nước mắm Phước Hải', 'Mỹ nghệ vỏ sò ốc Vũng Tàu'],
    craftIds: ['muoi_long_dien', 'nuoc_mam_phuoc_hai', 'my_nghe_so_oc']
  },
  {
    key: 'binh_phuoc',
    name: 'Bình Phước',
    administrativeTitle: 'Tỉnh Bình Phước',
    coordinates: { x: 48, y: 22 },
    craftSummary: 'Địa bàn tụ hội tinh hoa dệt thổ cẩm, đan lát cổ truyền của đồng bào S’tiêng, Chơro',
    highlights: ['Dệt thổ cẩm S’tiêng Bù Gia Mập', 'Đan lát mây tre truyền thống', 'Chế biến điều thủ công'],
    craftIds: ['tho_cam_stieng', 'dan_lat_binh_phuoc', 'dieu_rang_cui']
  }
];

export const CRAFT_VILLAGES: CraftVillage[] = [
  {
    id: 'gom_bien_hoa',
    name: 'Gốm Biên Hòa',
    vietnameseTitle: 'Gốm Mỹ Nghệ Biên Hòa · Trường Phái Men Đồng Trổ',
    provinceKey: 'dong_nai',
    provinceName: 'Đồng Nai',
    category: 'ceramics',
    categoryLabel: 'Gốm sứ mỹ nghệ',
    heritageStatus: 'Làng nghề truyền thống trên 150 năm',
    establishedPeriod: 'Cuối thế kỷ XIX (khoảng 1878) – Phát triển rực rỡ từ 1903',
    location: 'Phường Bửu Long & Tân Vạn, TP. Biên Hòa, Tỉnh Đồng Nai',
    shortDescription: 'Dòng gốm mỹ nghệ kết hợp tinh hoa gốm bản địa Nam Bộ, gốm Cây Mai và kỹ thuật tạo men hiện đại của Pháp, nổi tiếng với sắc men xanh đồng trổ (Vert de Bien Hoa) từng đoạt huy chương vàng tại Triển lãm Quốc tế Paris 1925 và 1932.',
    historicalContext: 'Lịch sử gốm Biên Hòa gắn liền với sông Đồng Nai giàu nguồn đất sét cao lanh và cát thạch anh. Năm 1903, Trường Mỹ nghệ Biên Hòa (tiền thân Trường Cao đẳng Mỹ thuật Trang trí Đồng Nai) được thành lập. Sự kết hợp giữa nghệ nhân chạm khắc gốm Cây Mai và vợ chồng hiệu trưởng Balick đã đưa gốm Biên Hòa trở thành một hiện tượng mỹ thuật trang trí Đông Dương vang danh thế giới.',
    iconicProducts: [
      'Bình gốm hoa văn rồng cuộn men xanh đồng trổ',
      'Đôn voi Biên Hòa (đôn thú biểu tượng phương Nam)',
      'Tượng phù điêu tứ linh, hoa sen men ngọc celadon',
      'Đĩa trang trí chạm lộng khắc chìm tô men đa sắc'
    ],
    rawMaterials: [
      'Đất sét trắng pha đất sét vàng sông Đồng Nai',
      'Men tro rơm rạ kết hợp ô-xít đồng tự nhiên (men xanh rêu đồng)',
      'Cát thạch anh mịn và đá son nghiền lọc'
    ],
    processSteps: [
      { step: 1, title: 'Tuyển lọc đất & Luyện sét', description: 'Đất sét khai thác từ phù sa cổ được ngâm lắng trong bể lọc, nhồi dẻo kỹ để loại bỏ tạp chất và bọt khí.' },
      { step: 2, title: 'Tạo dáng trên bàn xoay', description: 'Nghệ nhân dùng đôi tay điêu luyện vuốt dáng sản phẩm trên bàn xoay gỗ hoặc ép khuôn thạch cao đối với các khối phù điêu lớn.' },
      { step: 3, title: 'Khắc chìm hoa văn (Chạm lộng)', description: 'Đây là nét đặc thù nhất: khi gốm đạt độ ẩm "da thuộc", nghệ nhân dùng dao khắc rạch sâu từng đường nét rồng, hoa sen, chim muông.' },
      { step: 4, title: 'Chấm men & Tô màu', description: 'Men tro rơm phối hợp ô-xít kim loại được nghệ nhân chấm cẩn thận vào từng khoang rãnh khắc chìm để men không bị loang lẫn.' },
      { step: 5, title: 'Đun lò củi rồng (Lò bầu)', description: 'Nung trong lò bầu từ 1.200°C – 1.250°C liên tục 3 ngày đêm, tạo nên hiệu ứng men hỏa biến lóng lánh độc bản.' }
    ],
    signatureTechnique: 'Kỹ thuật "Khắc vạch chạm lộng tô men" kết hợp men xanh đồng trổ (vert de Bien Hoa) với công thức tro trấu bí truyền.',
    preservationEfforts: 'Hợp tác xã gốm Tân Vạn cùng Trường CĐ Mỹ thuật Trang trí Đồng Nai đang số hóa hoa văn cổ, mở các tour trải nghiệm làm gốm và xuất khẩu gốm mỹ nghệ sang thị trường Âu - Mỹ.',
    notableArtisans: ['Cố nghệ nhân Võ Ngọc Liễn', 'Nghệ nhân ưu tú Hoàng Ngọc Hiến', 'Nghệ nhân men gốm Nguyễn Văn Bảy'],
    colorTheme: '#0F766E',
    accentBg: 'bg-teal-900',
    badgeColor: 'border-teal-700 text-teal-800 bg-teal-50',
    audioAmbienceType: 'kiln'
  },
  {
    id: 'son_mai_tuong_binh_hiep',
    name: 'Sơn mài Tương Bình Hiệp',
    vietnameseTitle: 'Làng Sơn Mài Tương Bình Hiệp · Tuyệt Kỹ Mài Nước Cổ Truyền',
    provinceKey: 'binh_duong',
    provinceName: 'Bình Dương',
    category: 'lacquer',
    categoryLabel: 'Sơn mài truyền thống',
    heritageStatus: 'Di sản phi vật thể Quốc gia',
    establishedPeriod: 'Thế kỷ XVIII (khoảng những năm 1750)',
    location: 'Xã Tương Bình Hiệp, TP. Thủ Dầu Một, Tỉnh Bình Dương',
    shortDescription: 'Cái nôi của dòng tranh và đồ gia dụng sơn mài truyền thống trứ danh phương Nam. Trải qua hơn 25 công đoạn mài và ủ khắt khe với nhựa sơn ta tự nhiên, tạo nên bề mặt bóng sâu hun hút, bền đẹp hàng trăm năm không bong tróc.',
    historicalContext: 'Vào giữa thế kỷ XVIII, các bậc tiền hiền từ miền Trung và đất Thăng Long di cư vào khai hoang vùng Tương Bình Hiệp ven sông Sài Gòn mang theo nghề sơn thếp. Nơi đây có khí hậu ẩm ấm lý tưởng cho nhựa cây sơn ta đông cứng và bóng đẹp. Trải qua các thế hệ, nghệ nhân Tương Bình Hiệp sáng tạo thêm kỹ thuật cẩn vỏ trứng, dát vàng bạc quỳ, cẩn ốc xà cừ óng ánh.',
    iconicProducts: [
      'Bình phong sơn mài phong cảnh làng quê Việt Nam',
      'Hộp đựng trang sức khảm ốc xà cừ và vỏ trứng chim',
      'Tranh sơn mài khắc nét vàng mười (hoàng kim)',
      'Bàn ghế, lọ hoa, khay trà sơn mài cao cấp xuất khẩu'
    ],
    rawMaterials: [
      'Gỗ dầu mít hoặc gỗ giáng hương làm vóc',
      'Nhựa sơn ta (chiết xuất từ cây sơn Phú Thọ kết hợp sơn vườn)',
      'Vỏ ốc xà cừ biển, vỏ trứng vịt, vàng quỳ, bạc quỳ',
      'Bột đá son, mùn cưa và vải màn bó vóc'
    ],
    processSteps: [
      { step: 1, title: 'Bó vóc (Làm nền)', description: 'Dùng vải màn, mùn cưa mịn và sơn sống quét bó kín cốt gỗ để chống nứt nẻ và co ngót.' },
      { step: 2, title: 'Cẩn ốc xà cừ & Dán vỏ trứng', description: 'Cắt gọt từng mảnh vỏ ốc ngũ sắc hoặc đập dập vỏ trứng vịt ghép thành hình hoa sen, cánh chim, rồng phụng.' },
      { step: 3, title: 'Thếp vàng & Phủ nhiều lớp sơn ta', description: 'Phủ từng lớp sơn then đen tuyền, sơn cánh gián rồi đưa vào buồng ủ kín gió ẩm từ 3 đến 5 ngày cho lớp sơn tự khô.' },
      { step: 4, title: 'Mài nước liên tục', description: 'Dùng giấy ráp mịn, than củi mù u mài ngập trong nước sạch để bóc tách từng lớp sơn, để lộ ra những mảng ốc xà cừ và vỏ trứng lấp lánh.' },
      { step: 5, title: 'Đánh bóng bằng lòng bàn tay', description: 'Công đoạn kỳ công nhất: nghệ nhân dùng bột than lá chuối và chính lòng bàn tay ấm áp xoa miết liên hồi cho tới khi sơn mài sáng bóng như gương.' }
    ],
    signatureTechnique: 'Kỹ thuật "Mài nước bóc lớp" và "Ủ buồng ẩm gió", đánh bóng bề mặt bằng lòng bàn tay trần không dùng hóa chất.',
    preservationEfforts: 'Được Bộ VHTTDL ghi danh Di sản văn hóa phi vật thể Quốc gia năm 2016. Tỉnh Bình Dương đã phê duyệt Đề án Bảo tồn và Phát triển làng nghề sơn mài Tương Bình Hiệp rộng 5,4 ha kết hợp du lịch di sản.',
    notableArtisans: ['Nghệ nhân Nhân dân Nguyễn Văn Quý', 'Nghệ nhân Ưu tú Trương Quan Tịnh', 'Họa sĩ sơn mài Lê Bá Đảng'],
    colorTheme: '#78350F',
    accentBg: 'bg-amber-950',
    badgeColor: 'border-amber-700 text-amber-900 bg-amber-50',
    audioAmbienceType: 'lacquer'
  },
  {
    id: 'banh_trang_trang_bang',
    name: 'Bánh tráng phơi sương Trảng Bàng',
    vietnameseTitle: 'Nghề Làm Bánh Tráng Phơi Sương Trảng Bàng · Tinh Hoa Ẩm Thực',
    provinceKey: 'tay_ninh',
    provinceName: 'Tây Ninh',
    category: 'culinary',
    categoryLabel: 'Ẩm thực thủ công',
    heritageStatus: 'Di sản phi vật thể Quốc gia',
    establishedPeriod: 'Thế kỷ XIX (khoảng 1850)',
    location: 'Thị xã Trảng Bàng, Tỉnh Tây Ninh',
    shortDescription: 'Di sản văn hóa phi vật thể quốc gia với quy trình chế biến độc nhất vô nhị: dùng hơi nước tráng bánh hai lớp, phơi dưới nắng giòn Tây Ninh, nướng than phồng mắt cua rồi chờ sương đêm buông xuống để hứng sương tinh khiết tạo độ dẻo thơm.',
    historicalContext: 'Tương truyền vào thời khai hoang lập ấp ven rạch Tây Ninh, một người phụ nữ nghèo để quên mâm bánh tráng nướng ngoài trời qua đêm. Sáng sớm thức giấc, bà tiếc của mang vào ăn thử thì phát hiện chiếc bánh tráng ngậm sương đêm trở nên dẻo quánh, ăn kèm rau rừng và thịt luộc ngon kỳ lạ. Từ đó, người dân Trảng Bàng nâng tầm thành một nghệ thuật ẩm thực độc bản.',
    iconicProducts: [
      'Bánh tráng phơi sương Trảng Bàng nguyên bản',
      'Bánh tráng cuốn thịt luộc kèm hơn 30 loại rau rừng sông Vàm Cỏ',
      'Bánh tráng ớt muối tôm dẻo gập',
      'Bánh tráng nướng mè vàng giòn'
    ],
    rawMaterials: [
      'Gạo Nàng Miên hoặc Nàng Thơm thuần chủng không pha tạp',
      'Muối hạt biển Cần Giờ rang sạch xay nhuyễn',
      'Nước giếng ngọt Trảng Bàng tinh khiết',
      'Sương đêm Tây Ninh (khoảng 2h00 - 4h30 sáng)'
    ],
    processSteps: [
      { step: 1, title: 'Xay bột & Pha nước tráng', description: 'Gạo vo kỹ, ngâm nước một đêm rồi xay mịn. Thêm chút muối trắng để bánh đậm đà và có độ dẻo dai.' },
      { step: 2, title: 'Tráng bánh 2 lớp hơi nước', description: 'Tráng màng mỏng thứ nhất, đậy nắp vung tre hấp chín, rồi tiếp tục tráng lớp thứ hai chồng lên để bánh dày dặn vừa độ.' },
      { step: 3, title: 'Phơi vỉ tre dưới nắng giòn', description: 'Trải bánh trên những liếp tre đan thưa dài 2m, phơi dưới nắng gắt khoảng 30 - 45 phút cho bánh se mặt khô giòn.' },
      { step: 4, title: 'Nướng than hồng phồng mắt cua', description: 'Dùng kẹp tre trở đều bánh trên bếp than đước rực hồng, chỉ nướng vừa tới khi bánh nổi bọt khí li ti gọi là "mắt cua".' },
      { step: 5, title: 'Thức đêm đón sương trời', description: 'Khoảng 2 đến 4 giờ sáng, khi sương đêm đọng dầy trên cành lá, người thợ mang bánh ra phơi. Hơi sương ngấm đều giúp bánh dẻo mềm mà không bị ỉu rách.' }
    ],
    signatureTechnique: 'Bí quyết "Canh sương đêm" và nướng lướt than hồng tạo hạt mắt cua trắng xốp.',
    preservationEfforts: 'Được công nhận Di sản văn hóa phi vật thể Quốc gia năm 2016. Lễ hội Văn hóa Bánh tráng phơi sương Trảng Bàng được tổ chức định kỳ 2 năm/lần thu hút hàng vạn du khách.',
    notableArtisans: ['Bà Phạm Thị Đương (người giữ nghề hơn 60 năm)', 'Nghệ nhân Trần Văn Hên', 'Cơ sở Bánh tráng Hoàng Minh'],
    colorTheme: '#D97706',
    accentBg: 'bg-amber-800',
    badgeColor: 'border-orange-600 text-orange-950 bg-orange-50',
    audioAmbienceType: 'morning_mist'
  },
  {
    id: 'duc_dong_an_hoi',
    name: 'Đúc đồng An Hội',
    vietnameseTitle: 'Làng Đúc Đồng An Hội · Giữ Lửa Đỉnh Đồng Tâm Linh Nam Bộ',
    provinceKey: 'tphcm',
    provinceName: 'TP. Hồ Chí Minh',
    category: 'metal',
    categoryLabel: 'Kim khí đúc đồng',
    heritageStatus: 'Làng nghề truyền thống trên 150 năm',
    establishedPeriod: 'Giữa thế kỷ XIX (khoảng 1860)',
    location: 'Đường An Hội, Phường 8, Quận Gò Vấp, TP. Hồ Chí Minh',
    shortDescription: 'Làng đúc đồng truyền thống lâu đời bậc nhất Sài Gòn - Gia Định, chuyên chế tác các bộ đồ thờ cúng, đại hồng chung, đỉnh hương tam sự ngũ sự cho các đình chùa và gia đình khắp Nam Kỳ lục tỉnh.',
    historicalContext: 'Nghề đúc đồng do cụ Trần Văn Kế và các nghệ nhân tài hoa gốc Quảng Nam mang vào vùng đất Gò Vấp lập nghiệp từ giữa thế kỷ XIX. Nơi đây từng có hàng chục lò đúc ngày đêm rực lửa dọc con rạch Bến Cát, phục vụ nhu cầu thờ phụng tín ngưỡng tâm linh của người dân phương Nam.',
    iconicProducts: [
      'Bộ đỉnh đồng ngũ sự chạm khắc song long chầu nguyệt',
      'Đại hồng chung (chuông đồng) nặng hàng tấn cho các tự viện',
      'Chân đèn bát quái, lư hương mắt tre cổ',
      'Tượng đồng Bồ Tát, tượng danh nhân lịch sử'
    ],
    rawMaterials: [
      'Đồng thau đỏ, đồng mắt cua nguyên chất',
      'Đất sét phù sa đào sâu dưới lòng đất trộn trấu mục',
      'Sáp ong tự nhiên trộn tro trấu để nắn mẫu chi tiết',
      'Than đước và gió bễ thổi liên tục'
    ],
    processSteps: [
      { step: 1, title: 'Nắn cốt đất & Chế tác mẫu sáp ong', description: 'Đắp đất làm ruột, sau đó dùng sáp ong khắc trạm tỉ mỉ từng hoa văn rồng bay, mây lượn bao quanh.' },
      { step: 2, title: 'Bọc áo khuôn ngoài', description: 'Quét nhiều lớp đất bùn sét nhuyễn pha trấu để bọc kín mẫu sáp, sau đó đem sấy khô bằng than củi.' },
      { step: 3, title: 'Nung khuôn & Đốt sáp thoát nhiệt', description: 'Nung khuôn ở nhiệt độ cao, sáp ong nóng chảy chảy ra ngoài tạo khoảng rỗng chính xác tuyệt đối cho hoa văn.' },
      { step: 4, title: 'Nấu đồng sôi & Rót kim loại', description: 'Đồng đỏ được nấu chảy trong nồi lò luyện đạt trên 1.100°C rồi rót vào miệng khuôn nhịp nhàng không được đứt dòng.' },
      { step: 5, title: 'Dỡ khuôn & Chạm khắc gọt nguội', description: 'Sau khi nguội, dỡ bỏ lớp đất, nghệ nhân dùng ve đục bằng thép gọt ba-ớ, chạm tỉa chi tiết và đánh bóng sáng ánh hoàng kim.' }
    ],
    signatureTechnique: 'Kỹ thuật làm khuôn "Sáp ong mẫu chảy" và công thức pha chế đồng thanh tao âm vang ngân xa cho chuông chùa.',
    preservationEfforts: 'Các nghệ nhân trẻ họ Trần tiếp tục giữ ngọn lửa nghề bằng việc áp dụng công nghệ số hóa 3D để tạo mẫu sáp phức tạp kết hợp đúc thủ công, duy trì các đơn đặt hàng chùa chiền trong và ngoài nước.',
    notableArtisans: ['Cụ Trần Văn Thắng', 'Nghệ nhân Ba Thắng', 'Nghệ nhân Trần Văn Nhơn'],
    colorTheme: '#B45309',
    accentBg: 'bg-stone-900',
    badgeColor: 'border-amber-600 text-stone-900 bg-amber-100',
    audioAmbienceType: 'bronze'
  },
  {
    id: 'muoi_long_dien',
    name: 'Nghề làm muối Long Điền',
    vietnameseTitle: 'Diêm Nghiệp Long Điền · Hạt Muối Trắng Tinh Khiết Miền Biển',
    provinceKey: 'ba_ria_vung_tau',
    provinceName: 'Bà Rịa - Vũng Tàu',
    category: 'culinary',
    categoryLabel: 'Nghề làm muối truyền thống',
    heritageStatus: 'Làng nghề truyền thống tiêu biểu',
    establishedPeriod: 'Đầu thế kỷ XIX (thời vua Gia Long)',
    location: 'Xã An Ngãi, Thị trấn Long Điền, Tỉnh Bà Rịa - Vũng Tàu',
    shortDescription: 'Cánh đồng muối An Ngãi - Long Điền với hàng trăm héc-ta là vựa muối lâu đời và lớn nhất Đông Nam Bộ. Kỹ nghệ làm muối phơi nước kết tinh trên nền đất nện thủ công tạo nên hạt muối to đều, trắng tinh, vị mặn thanh hậu ngọt đặc trưng.',
    historicalContext: 'Từ thời các chúa Nguyễn khai khẩn đất Bà Rịa, diêm dân đã tận dụng độ mặn cao và số giờ nắng trên 2.400 giờ/năm của vùng duyên hải Đông Nam Bộ để lập nên các ruộng muối "ô nại". Muối Long Điền nổi tiếng là nguồn nguyên liệu không thể thiếu để ủ nên những giọt nước mắm Phước Hải trứ danh.',
    iconicProducts: [
      'Muối hạt truyền thống phơi nền đất nện',
      'Muối hột trải bạt tinh khiết xuất khẩu',
      'Muối hầm niêu đất nung cho thực dưỡng',
      'Muối khoáng biển thảo dược ngâm chân'
    ],
    rawMaterials: [
      'Nước biển Đông sạch ven vịnh Gành Rái',
      'Đất sét dẻo lu lèn chặt làm đáy ruộng',
      'Nắng gió biển nhiệt đới Đông Nam Bộ'
    ],
    processSteps: [
      { step: 1, title: 'Đắp bờ & Lu lèn phẳng đáy ruộng', description: 'Dùng con lăn đá tròn kéo tay nện đất nhiều lần cho mặt ruộng trơ phẳng, ngăn nước biển thấm mất.' },
      { step: 2, title: 'Dẫn thủy nhập điền', description: 'Đón con triều cường dẫn nước biển mặn vào các hồ lắng lọc bùn cát tự nhiên.' },
      { step: 3, title: 'Phơi chạt nâng độ mặn', description: 'Nước biển được chuyển qua các cấp ruộng chịu nắng liên tục nhiều ngày để bốc hơi, cô đặc thành nước chạt đậm đặc.' },
      { step: 4, title: 'Tháo nước chạt vào ô kết tinh', description: 'Nước chạt đạt độ mặn 25 Bé (Baumé) được dẫn vào ô nại phơi tiếp dưới nắng trưa gắt gao.' },
      { step: 5, title: 'Cào muối & Gom đụn hạt ngọc', description: 'Khi các tinh thể muối trắng kết tủa lấp lánh như pha lê, diêm dân dùng cào gỗ gom thành từng đụn muối hình chóp nón đón gió ráo nước.' }
    ],
    signatureTechnique: 'Kỹ thuật lu lèn "chân ruộng trơ đất" và canh độ mặn bốc hơi tự nhiên bằng mắt thường.',
    preservationEfforts: 'UBND tỉnh Bà Rịa - Vũng Tàu quy hoạch bảo vệ diện tích đồng muối truyền thống, hỗ trợ chuyển giao công nghệ muối sạch trải bạt và phát triển mô hình du lịch trải nghiệm diêm nghiệp hoàng hôn.',
    notableArtisans: ['Bác Ba Cào (lão diêm dân 50 năm bám ruộng)', 'Hợp tác xã Diêm nghiệp An Ngãi'],
    colorTheme: '#0284C7',
    accentBg: 'bg-sky-950',
    badgeColor: 'border-sky-700 text-sky-900 bg-sky-50',
    audioAmbienceType: 'morning_mist'
  },
  {
    id: 'tho_cam_stieng',
    name: 'Dệt thổ cẩm người S’tiêng',
    vietnameseTitle: 'Dệt Thổ Cẩm S’tiêng Bù Gia Mập · Bản Hòa Tấu Rừng Già',
    provinceKey: 'binh_phuoc',
    provinceName: 'Bình Phước',
    category: 'textile',
    categoryLabel: 'Dệt thổ cẩm dân tộc',
    heritageStatus: 'Di sản phi vật thể Quốc gia',
    establishedPeriod: 'Cổ truyền hàng trăm năm của người S’tiêng bản địa',
    location: 'Huyện Bù Gia Mập & Hớn Quản, Tỉnh Bình Phước',
    shortDescription: 'Di sản văn hóa phi vật thể quốc gia lưu giữ vũ trụ quan sống động của đồng bào S’tiêng miền Đông. Khung dệt dẹp đặt ngang đùi, hoa văn kỷ hà kết hợp màu nhuộm từ rễ cây và vỏ cây rừng sâu tạo nên những tấm váy, tấm chăn dệt bền đẹp vĩnh cửu.',
    historicalContext: 'Người S’tiêng là cư dân bản địa lâu đời nhất tại vùng rừng núi Bình Phước. Phụ nữ S’tiêng từ nhỏ đã được bà và mẹ dạy cách kéo sợi bông, tìm vỏ cây rừng nhuộm màu. Tấm thổ cẩm không chỉ là y phục mà còn là của hồi môn thiêng liêng, vật trao duyên và lễ vật trong các lễ hội đâm trâu, mừng lúa mới.',
    iconicProducts: [
      'Váy dệt thổ cẩm truyền thống hoa văn cồng chiêng',
      'Khăn choàng dệt tay hoa văn mắt cú và thần rừng',
      'Túi đeo vai bách hoa dệt sợi bông rừng',
      'Tấm đắp thổ cẩm lễ hội nghi lễ S’tiêng'
    ],
    rawMaterials: [
      'Sợi bông gòn rừng tự nhiên se tay',
      'Vỏ tràm, củ nâu, lá chàm nhuộm màu chàm và đen',
      'Củ nghệ rừng nhuộm vàng, hạt cây rơ-mát nhuộm đỏ',
      'Khung dệt bằng ống tre và gỗ rừng dẹp'
    ],
    processSteps: [
      { step: 1, title: 'Khai thác thảo mộc & Nhuộm màu', description: 'Đập giập vỏ cây rừng ngâm ủ trong chum sành nhiều tuần để chiết xuất các gam màu tự nhiên bền màu tuyệt đối.' },
      { step: 2, title: 'Kéo sợi & Đảo sợi bông', description: 'Bông rừng tách hạt, bật tơi rồi se trên con suốt bằng gỗ để tạo sợi chỉ dẻo dai.' },
      { step: 3, title: 'Căng dây sợi trên khung cọc', description: 'Sắp xếp sợi dọc và sợi ngang tạo các nhịp màu đen, đỏ, trắng, vàng đan xen theo mẫu thức cổ truyền.' },
      { step: 4, title: 'Dệt luồn thoi bằng tay', description: 'Người thợ ngồi bệt, chân đạp thanh gỗ, đôi tay thoăn thoắt luồn que thoi gỗ đưa từng sợi chỉ đan khít chặt chẽ.' },
      { step: 5, title: 'Tạo hoa văn nổi kỷ hà', description: 'Dùng ngón tay nhặt từng sợi chỉ tạo các khối hình học đối xứng mô phỏng dòng suối, ngọn núi và muông thú rừng già.' }
    ],
    signatureTechnique: 'Phương pháp dệt "ngồi dẹp căng sợi bằng lưng" và kỹ thuật nhuộm màu hoàn toàn bằng rễ vỏ cây thảo mộc hoang dã.',
    preservationEfforts: 'Huyện Bù Gia Mập thành lập các Câu lạc bộ Dệt thổ cẩm truyền thống thôn bản, đưa thổ cẩm S’tiêng vào các sự kiện văn hóa du lịch Vườn Quốc gia Bù Gia Mập.',
    notableArtisans: ['Nghệ nhân Thị Rưng (giữ lửa dệt thổ cẩm hơn 40 năm)', 'Nghệ nhân Điểu Đới'],
    colorTheme: '#DC2626',
    accentBg: 'bg-red-950',
    badgeColor: 'border-red-700 text-red-900 bg-red-50',
    audioAmbienceType: 'morning_mist'
  },
  {
    id: 'gom_binh_duong',
    name: 'Gốm Tân Phước Khánh - Lái Thiêu',
    vietnameseTitle: 'Gốm Gia Dụng & Mỹ Nghệ Lái Thiêu · Hồn Đất Bình Dương',
    provinceKey: 'binh_duong',
    provinceName: 'Bình Dương',
    category: 'ceramics',
    categoryLabel: 'Gốm đất nung & men sứ',
    heritageStatus: 'Làng nghề truyền thống trên 150 năm',
    establishedPeriod: 'Giữa thế kỷ XIX (khoảng 1860)',
    location: 'Thị xã Tân Uyên & TP. Thuận An, Tỉnh Bình Dương',
    shortDescription: 'Lò gốm cổ truyền bên sông Sài Gòn chuyên sản xuất dòng gốm gia dụng bình dị: chén bát vẽ con gà trống, chậu kiểng men da lươn, lu khạp chứa nước in sâu trong ký ức bao thế hệ người dân Nam Bộ.',
    historicalContext: 'Được khai sinh bởi những dòng họ thợ gốm Triều Châu, Phúc Kiến và người Việt lập nghiệp ven rạch Lái Thiêu và gò Tân Phước Khánh. Với nguồn đất sét sét dẻo và củi cao su dồi dào, những lò rồng (lò bao) dài hàng chục mét đỏ lửa quanh năm, cung cấp đồ gốm men cho toàn bộ vựa lúa Đồng bằng sông Cửu Long.',
    iconicProducts: [
      'Chén bát dĩa vẽ hoa cúc và chú gà trống Lái Thiêu',
      'Lu khạp da lươn trữ nước mưa mát lành',
      'Chậu kiểng đất nung trồng mai vàng bonsai',
      'Heo đất tiết kiệm vẽ tay sặc sỡ'
    ],
    rawMaterials: [
      'Đất sét trắng sét vàng Tân Phước Khánh',
      'Men tro rơm kết hợp đá son và rỉ sắt tạo men da lươn',
      'Củi cao su đượm nhiệt lửa lò rồng'
    ],
    processSteps: [
      { step: 1, title: 'Nhồi đất sét dẻo', description: 'Đất sét ngâm ủ, dùng trâu đạp hoặc máy nhồi dẻo quánh như bột bánh.' },
      { step: 2, title: 'In khuôn hoặc vuốt tay', description: 'Vuốt tay các loại lu khạp to hoặc ép khuôn chén dĩa con gà.' },
      { step: 3, title: 'Vẽ hoa văn phong cảnh dân gian', description: 'Thợ vẽ dùng cọ lông thỏ vẽ vút tay hình gà trống gáy sáng, hoa cúc, tôm cá sống động.' },
      { step: 4, title: 'Tráng men da lươn tự nhiên', description: 'Nhúng hoặc dội men tro pha bùn son tạo lớp áo men nâu vàng mộc mạc.' },
      { step: 5, title: 'Nung lò rồng liên hoàn', description: 'Xếp hàng vạn sản phẩm vào lò rồng dài 50-80m men theo triền dốc, nung lửa củi 1.100°C.' }
    ],
    signatureTechnique: 'Nét vẽ phóng bút tả thực "Gà trống - Hoa cúc" vẽ men lướt cực nhanh trên sản phẩm mộc.',
    preservationEfforts: 'Chính quyền tỉnh hỗ trợ chuyển đổi lò nung củi sang lò gas sạch khói để bảo vệ môi trường trong lòng đô thị, đồng thời tổ chức Festival Gốm sứ Bình Dương.',
    notableArtisans: ['Nghệ nhân Vương Hồng Sển (nghiên cứu)', 'Cơ sở Gốm Vườn Nhà Gốm', 'Lò gốm Bà Lụa'],
    colorTheme: '#EA580C',
    accentBg: 'bg-amber-900',
    badgeColor: 'border-amber-600 text-amber-900 bg-amber-50',
    audioAmbienceType: 'kiln'
  },
  {
    id: 'may_tre_tan_trieu',
    name: 'Mây tre đan Tân Triều',
    vietnameseTitle: 'Mây Tre Đan Tân Triều & Phước Bình · Sợi Dẻo Phương Nam',
    provinceKey: 'dong_nai',
    provinceName: 'Đồng Nai',
    category: 'bamboo_weaving',
    categoryLabel: 'Mây tre đan thủ công',
    heritageStatus: 'Làng nghề truyền thống tiêu biểu',
    establishedPeriod: 'Đầu thế kỷ XX',
    location: 'Cù lao Tân Triều, Huyện Vĩnh Cửu, Tỉnh Đồng Nai',
    shortDescription: 'Làng nghề đan lát tinh xảo trên cù lao sông Đồng Nai, dùng mây rừng và tre nứa chuốt bóng để đan nên giỏ quà bưởi Tân Triều, lồng bàn, thuyền nan xuất khẩu sang châu Âu.',
    historicalContext: 'Cù lao Tân Triều bốn bề sông nước Đồng Nai bao bọc, nổi tiếng với vườn bưởi sum sê. Để thu hoạch và vận chuyển bưởi không bị dập xước, bà con nông dân đã tự tay đan những chiếc rổ, sọt mây chắc chắn. Dần dà kỹ thuật đan nan cài hoa phát triển thành làng nghề mỹ nghệ danh tiếng.',
    iconicProducts: [
      'Giỏ mây đựng đặc sản bưởi đường lá cam',
      'Lồng bàn mây tre nan kép chống côn trùng',
      'Đèn lồng tre uốn nghệ thuật trang trí resort',
      'Bàn ghế mây đan tự nhiên bền chắc'
    ],
    rawMaterials: ['Mây song rừng Vĩnh Cửu', 'Tre mỡ, tre gai già đủ tuổi', 'Dây bời lời ngâm nước'],
    processSteps: [
      { step: 1, title: 'Khai thác tre mây đủ tuổi', description: 'Chỉ chọn những cây mây dẻo, tre già không bị mọt sâu.' },
      { step: 2, title: 'Luộc & Hun khói chống mọt', description: 'Ngâm bùn hoặc hun khói rơm tạo màu cánh gián tự nhiên không hóa chất.' },
      { step: 3, title: 'Chuốt nan mỏng đều tăm tắp', description: 'Dùng dao bài sắc bén chuốt từng sợi nan mây nhẵn bóng không xơ xước.' },
      { step: 4, title: 'Đan hoa văn cài nan đôi', description: 'Đan lóng mốt, lóng đôi, hoa thị tạo hoa văn vững chắc chịu lực tốt.' },
      { step: 5, title: 'Nẹp cạp & Hoàn thiện', description: 'Buộc cạp bằng dây mây cật dẻo quánh, xông sấy khô ráo.' }
    ],
    signatureTechnique: 'Kỹ thuật "Nẹp cạp mây cật" và kỹ nghệ hun khói lá cây tạo màu hổ phách bền bỉ.',
    preservationEfforts: 'Kết hợp cùng tour du lịch sinh thái Vườn bưởi Tân Triều và cung cấp giỏ quà mây thủ công cao cấp.',
    notableArtisans: ['Cụ Năm Đan', 'Nghệ nhân Nguyễn Văn Được'],
    colorTheme: '#15803D',
    accentBg: 'bg-emerald-950',
    badgeColor: 'border-emerald-700 text-emerald-900 bg-emerald-50',
    audioAmbienceType: 'morning_mist'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Dòng men nào được coi là "linh hồn" và phát minh đặc sắc nhất của Trường Mỹ nghệ Biên Hòa (Đồng Nai) từng đoạt giải quốc tế tại Paris?',
    options: [
      'Men ngọc celadon thời Lý',
      'Men xanh đồng trổ (Vert de Bien Hoa)',
      'Men rạn da lươn màu nâu đất',
      'Men lam cô-ban thời Lê sơ'
    ],
    correctAnswer: 1,
    explanation: 'Men xanh đồng trổ (Vert de Bien Hoa) là sáng tạo độc bản của Trường Mỹ nghệ Biên Hòa kết hợp tro rơm rạ với ô-xít đồng, từng gây chấn động tại Triển lãm Paris 1925 và 1932.',
    province: 'Đồng Nai'
  },
  {
    id: 2,
    question: 'Làng sơn mài Tương Bình Hiệp nổi tiếng với kỹ thuật độc đáo nào để tạo độ bóng sâu hút mà không cần vec-ni hóa chất?',
    options: [
      'Xịt sơn bóng PU công nghiệp',
      'Mài ngập trong nước và miết bóng bằng lòng bàn tay trần',
      'Phơi dưới nắng gắt 7 ngày liên tục',
      'Ngâm tẩm dầu hỏa và nung nhiệt độ cao'
    ],
    correctAnswer: 1,
    explanation: 'Nghệ nhân Tương Bình Hiệp mài tranh ngập trong nước lạnh với than củi mù u rồi dùng chính lòng bàn tay ấm áp xoa miết liên hồi với bột than lá chuối để đạt độ bóng sâu vĩnh cửu.',
    province: 'Bình Dương'
  },
  {
    id: 3,
    question: 'Công đoạn quan trọng và độc đáo nhất tạo nên hương vị dẻo mềm của bánh tráng phơi sương Trảng Bàng (Tây Ninh) là gì?',
    options: [
      'Tráng bột cùng với đường thốt nốt',
      'Thức khuya canh hứng sương đêm trời từ 2h - 4h sáng',
      'Ngâm bột bánh trong nước dừa xiêm',
      'Ủ trong hầm rượu gia truyền 3 tháng'
    ],
    correctAnswer: 1,
    explanation: 'Bánh tráng sau khi nướng lướt than hồng phải được đem hứng sương đêm phương Nam trong khoảng 2 - 4 giờ sáng để ngậm no hơi sương tự nhiên, trở nên mềm dẻo đặc biệt.',
    province: 'Tây Ninh'
  },
  {
    id: 4,
    question: 'Làng đúc đồng An Hội (Gò Vấp, TP.HCM) sử dụng chất liệu tự nhiên nào để chạm khắc hoa văn mẫu trước khi đổ đồng nóng chảy?',
    options: [
      'Sáp ong tự nhiên trộn tro trấu mịn',
      'Bột thạch cao trộn xi măng trắng',
      'Nhựa cao su non ép nguội',
      'Đất sét sống không nung'
    ],
    correctAnswer: 0,
    explanation: 'Nghệ nhân An Hội dùng sáp ong tự nhiên để nắn tạo hoa văn rồng bay phụng múa. Khi nung khuôn, sáp ong tan chảy thoát ra ngoài để lại hốc rỗng chính xác đến từng mi-li-mét.',
    province: 'TP. Hồ Chí Minh'
  },
  {
    id: 5,
    question: 'Cánh đồng muối Long Điền (An Ngãi, Bà Rịa - Vũng Tàu) sử dụng phương pháp truyền thống nào để làm đáy ruộng giữ nước biển?',
    options: [
      'Lát gạch men bóng toàn bộ',
      'Lu lèn phẳng trơ nền đất sét tự nhiên (chân ruộng nện)',
      'Đổ bê tông cốt thép chống thấm',
      'Trải cát trắng mịn dày 50cm'
    ],
    correctAnswer: 1,
    explanation: 'Diêm dân An Ngãi - Long Điền dùng con lăn đá tròn kéo tay nện hàng trăm lượt trên nền đất sét dẻo cho đến khi trơ phẳng lỳ, ngăn nước ngấm mà vẫn giữ được khoáng chất thanh ngọt của muối biển.',
    province: 'Bà Rịa - Vũng Tàu'
  },
  {
    id: 6,
    question: 'Đồng bào S’tiêng tại Bình Phước tạo nên những gam màu rực rỡ trên thổ cẩm cổ truyền bằng nguồn nguyên liệu nào?',
    options: [
      'Hóa chất nhuộm màu công nghiệp nhập khẩu',
      'Vỏ tràm, củ nâu, củ nghệ rừng và thảo mộc tự nhiên',
      'Màu bột vẽ dầu acrylic',
      'Mực nang từ biển cả'
    ],
    correctAnswer: 1,
    explanation: 'Phụ nữ S’tiêng vào rừng thu hái vỏ cây tràm, củ nâu, nghệ rừng và các loại rễ lá hoang dã giã nhuyễn ngâm ủ để nhuộm sợi bông, tạo sắc màu bền đẹp vĩnh cửu theo năm tháng.',
    province: 'Bình Phước'
  },
  {
    id: 7,
    question: 'Hình tượng trang trí dân gian nào đã trở thành biểu tượng kinh điển trên bát đĩa gốm Lái Thiêu (Bình Dương)?',
    options: [
      'Cá chép vượt vũ môn',
      'Con gà trống gáy sáng vươn mình và bông hoa cúc',
      'Cánh buồm đỏ thắm ngoài vịnh',
      'Chim hạc ngậm cành sen'
    ],
    correctAnswer: 1,
    explanation: 'Hình ảnh chú gà trống đỏ gáy vang đón bình minh phóng bút bên khóm hoa cúc là nét vẽ đặc trưng nổi tiếng nhất của dòng gốm gia dụng mộc mạc Lái Thiêu.',
    province: 'Bình Dương'
  },
  {
    id: 8,
    question: 'Vùng Đông Nam Bộ bao gồm 6 tỉnh, thành phố nào dưới đây?',
    options: [
      'TP.HCM, Bình Dương, Đồng Nai, Tây Ninh, Bà Rịa - Vũng Tàu, Bình Phước',
      'TP.HCM, Long An, Tiền Giang, Bến Tre, Đồng Nai, Bình Dương',
      'Lâm Đồng, Đắk Nông, Bình Phước, Tây Ninh, TP.HCM, Cần Thơ',
      'TP.HCM, Bình Thuận, Ninh Thuận, Đồng Nai, Vũng Tàu, Bình Dương'
    ],
    correctAnswer: 0,
    explanation: 'Vùng Đông Nam Bộ gồm 6 đơn vị hành chính: TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Tây Ninh, Bà Rịa - Vũng Tàu và Bình Phước.',
    province: 'Đông Nam Bộ'
  }
];

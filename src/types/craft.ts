export type ProvinceKey = 'binh_duong' | 'dong_nai' | 'tay_ninh' | 'tphcm' | 'ba_ria_vung_tau' | 'binh_phuoc';

export type CraftCategory = 'ceramics' | 'lacquer' | 'metal' | 'bamboo_weaving' | 'textile' | 'culinary' | 'woodworking';

export interface CraftVillage {
  id: string;
  name: string;
  vietnameseTitle: string;
  provinceKey: ProvinceKey;
  provinceName: string;
  category: CraftCategory;
  categoryLabel: string;
  heritageStatus: 'Di sản phi vật thể Quốc gia' | 'Làng nghề truyền thống trên 150 năm' | 'Làng nghề truyền thống tiêu biểu';
  establishedPeriod: string;
  location: string;
  shortDescription: string;
  historicalContext: string;
  iconicProducts: string[];
  rawMaterials: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  signatureTechnique: string;
  preservationEfforts: string;
  notableArtisans: string[];
  colorTheme: string;
  accentBg: string;
  badgeColor: string;
  audioAmbienceType?: 'kiln' | 'lacquer' | 'bronze' | 'morning_mist';
}

export interface ProvinceInfo {
  key: ProvinceKey;
  name: string;
  administrativeTitle: string;
  coordinates: { x: number; y: number };
  craftSummary: string;
  highlights: string[];
  craftIds: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  province: string;
}

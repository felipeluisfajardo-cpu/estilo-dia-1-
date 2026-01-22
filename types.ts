
export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
}

export interface Brand {
  name: string;
  specialty: string;
  description: string;
  image: string;
}

export interface RegionTrend {
  id: string;
  name: string;
  title: string;
  concept: string;
  details: string;
  image: string;
}

export type RegionId = 'europa' | 'asia' | 'america' | 'escandinavia';

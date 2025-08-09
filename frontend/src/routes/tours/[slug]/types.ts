// src/routes/tours/[slug]/types.ts
export interface TourStop {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
  audioUrl?: string;
  imageUrl?: string;
  orderIndex: number;
  historicalPeriod?: string;
  keyFacts?: string[];
}

export interface TourData {
  id: string;
  slug: string;
  title: string;
  description: string;
  city: string;
  duration: number;
  coverImage: string;
  stops: TourStop[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TourMeta {
  title: string;
  description: string;
  image: string;
  keywords: string;
}

export interface TourPageData {
  tour: TourData;
  meta: TourMeta;
}
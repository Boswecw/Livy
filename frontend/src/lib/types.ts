export interface Tour {
    id: string;
    slug: string;
    title: string;
    description: string;
    city: string;
    duration: number;
    coverImage: string;
    isPublished: boolean;
    stops: Stop[];
  }
  
  export interface Stop {
    id: string;
    tourId: string;
    orderIndex: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    radiusM: number;
    audioUrl?: string;
    imageUrl?: string;
  }
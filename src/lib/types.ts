// src/lib/types.ts

export interface TourStop {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number; // meters for proximity detection
  audioUrl?: string;
  imageUrl?: string;
  orderIndex: number;
  historicalPeriod?: string;
  keyFacts: string[];
  estimatedDuration: number; // minutes
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  region: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: number; // minutes
  distance: number; // miles
  stops: TourStop[];
  imageUrl: string;
  isPremium: boolean;
  tags: string[];
  historicalEra: string;
  featured: boolean;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  stopId?: string;
}

export interface QuestionResponse {
  question: string;
  answer: string;
  sources: string[];
  confidence: number;
  timestamp: number;
}

export interface UserPreferences {
  audioAutoplay: boolean;
  offlineMode: boolean;
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  language: string;
}
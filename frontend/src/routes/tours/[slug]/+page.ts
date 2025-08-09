// src/routes/tours/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { TourData, TourPageData } from '$lib/types';

// Mock data
const mockTours: Record<string, TourData> = {
  'lexington-heritage': {
    id: '1',
    slug: 'lexington-heritage',
    title: 'Lexington Heritage Loop',
    description: 'Walk through the birthplace of American democracy. From Henry Clay\'s mansion to Civil War battlefields, experience the pivotal moments that shaped a nation.',
    city: 'Lexington, KY',
    duration: 90,
    coverImage: '/images/tours/lexington-heritage-cover.jpg',
    isPublished: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
    stops: [
      {
        id: 'stop-1',
        title: 'Henry Clay Estate - Ashland',
        description: 'The magnificent estate of the "Great Compromiser," where American political history was shaped through decades of influential leadership.',
        latitude: 38.0297,
        longitude: -84.4661,
        radius: 50,
        audioUrl: '/audio/tours/lexington/stop-1.mp3',
        imageUrl: '/images/tours/lexington/ashland-estate.jpg',
        orderIndex: 1,
        historicalPeriod: '1811-1852',
        keyFacts: [
          'Home of Henry Clay, "The Great Compromiser"',
          'Site of crucial political negotiations',
          'Preserved 19th-century architecture'
        ]
      },
      {
        id: 'stop-2',
        title: 'Mary Todd Lincoln House',
        description: 'Childhood home of Abraham Lincoln\'s wife, where the future First Lady spent her formative years in Kentucky\'s Bluegrass region.',
        latitude: 38.0406,
        longitude: -84.4977,
        radius: 40,
        audioUrl: '/audio/tours/lexington/stop-2.mp3',
        imageUrl: '/images/tours/lexington/mary-todd-house.jpg',
        orderIndex: 2,
        historicalPeriod: '1818-1839',
        keyFacts: [
          'Childhood home of Mary Todd Lincoln',
          'Georgian-style architecture',
          'Insight into 19th-century family life'
        ]
      }
    ]
  },
  'louisville-riverfront': {
    id: '2',
    slug: 'louisville-riverfront',
    title: 'Louisville Riverfront Journey',
    description: 'Discover Louisville\'s maritime heritage along the Ohio River. From steamboat era to modern commerce, uncover the stories that built the Falls City.',
    city: 'Louisville, KY',
    duration: 75,
    coverImage: '/images/tours/louisville-riverfront-cover.jpg',
    isPublished: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
    stops: [
      {
        id: 'stop-1',
        title: 'Belle of Louisville',
        description: 'Historic steamboat that represents Louisville\'s golden age of river commerce and passenger travel on the Ohio River.',
        latitude: 38.2542,
        longitude: -85.7594,
        radius: 60,
        audioUrl: '/audio/tours/louisville/stop-1.mp3',
        imageUrl: '/images/tours/louisville/belle-of-louisville.jpg',
        orderIndex: 1,
        historicalPeriod: '1914-Present',
        keyFacts: [
          'Last operating steamboat of its era',
          'National Historic Landmark',
          'Symbol of river commerce heritage'
        ]
      }
    ]
  }
};

function generateKeywords(tour: TourData): string {
  const baseKeywords = [tour.city.toLowerCase(), 'history', 'tour'];
  const titleWords = tour.title.toLowerCase().split(' ').filter((word: string) => word.length > 2);
  return [...baseKeywords, ...titleWords].join(', ');
}

export const load: PageLoad = async ({ params }): Promise<TourPageData> => {
  const tour = mockTours[params.slug];

  if (!tour) {
    throw error(404, 'Tour not found');
  }

  if (!tour.isPublished) {
    throw error(403, 'Tour not available');
  }

  return {
    tour,
    meta: {
      title: tour.title,
      description: tour.description,
      image: tour.coverImage,
      keywords: generateKeywords(tour)
    }
  };
};
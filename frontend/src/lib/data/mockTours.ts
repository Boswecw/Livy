import type { Tour } from '$lib/types';

export const mockTours: Tour[] = [
  {
    id: '1',
    slug: 'lexington-heritage-loop',
    title: 'Lexington Heritage Loop',
    description: 'Explore Civil War era Lexington through key historical sites',
    city: 'Lexington, KY',
    duration: 75,
    coverImage: '/images/lexington-hero.jpg',
    isPublished: true,
    stops: [
      {
        id: '1',
        tourId: '1',
        orderIndex: 1,
        title: 'Historic Courthouse',
        description: 'Built in 1900, this courthouse witnessed many pivotal moments...',
        latitude: 38.0497,
        longitude: -84.5001,
        radiusM: 50,
        audioUrl: '/audio/courthouse.mp3',
        imageUrl: '/images/courthouse.jpg'
      }
      // Add more stops...
    ]
  }
];
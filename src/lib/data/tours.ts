// src/lib/data/tours.ts
import type { Tour, TourStop } from '$lib/types';

// Lexington Heritage Loop Stops
const lexingtonStops: TourStop[] = [
  {
    id: 'lexington-battle-green',
    title: 'Lexington Battle Green',
    description: 'The hallowed ground where the "shot heard round the world" was fired on April 19, 1775. This triangular common witnessed the first armed confrontation between British troops and American colonists, marking the beginning of the Revolutionary War.',
    latitude: 42.4473,
    longitude: -71.2245,
    radius: 50,
    audioUrl: '/audio/lexington-battle-green.mp3',
    imageUrl: '/images/lexington-battle-green.jpg',
    orderIndex: 1,
    historicalPeriod: 'Revolutionary War Era',
    keyFacts: [
      'First battle of the Revolutionary War occurred here',
      '8 colonists were killed in the initial skirmish',
      'Captain John Parker led the Lexington militia',
      'The green has been preserved as a memorial since 1799'
    ],
    estimatedDuration: 15
  },
  {
    id: 'hancock-clarke-house',
    title: 'Hancock-Clarke House',
    description: 'The parsonage where Samuel Adams and John Hancock were staying when Paul Revere arrived to warn them of the approaching British troops. This 1738 house represents the danger faced by colonial leaders on the eve of revolution.',
    latitude: 42.4461,
    longitude: -71.2266,
    radius: 30,
    audioUrl: '/audio/hancock-clarke-house.mp3',
    imageUrl: '/images/hancock-clarke-house.jpg',
    orderIndex: 2,
    historicalPeriod: 'Colonial Period',
    keyFacts: [
      'Home of Reverend Jonas Clarke',
      'Samuel Adams and John Hancock stayed here',
      'Paul Revere arrived here around midnight',
      'Now houses Revolutionary War artifacts'
    ],
    estimatedDuration: 12
  },
  {
    id: 'munroe-tavern',
    title: 'Munroe Tavern',
    description: 'Built in 1735, this tavern served as the British headquarters and field hospital during their retreat from Concord. The juxtaposition of its peaceful colonial architecture with its wartime history tells the story of a community caught in revolution.',
    latitude: 42.4423,
    longitude: -71.2156,
    radius: 35,
    audioUrl: '/audio/munroe-tavern.mp3',
    imageUrl: '/images/munroe-tavern.jpg',
    orderIndex: 3,
    historicalPeriod: 'Revolutionary War Era',
    keyFacts: [
      'British headquarters during retreat from Concord',
      'Served as field hospital for wounded soldiers',
      'President George Washington dined here in 1789',
      'Operated as a tavern from 1735 to 1850'
    ],
    estimatedDuration: 10
  },
  {
    id: 'old-belfry',
    title: 'Old Belfry',
    description: 'This 1761 bell tower once stood at the center of Lexington life, calling townspeople to worship and warning of danger. Its bell rang out on the morning of April 19, 1775, alerting the community to the approaching crisis.',
    latitude: 42.4481,
    longitude: -71.2251,
    radius: 25,
    audioUrl: '/audio/old-belfry.mp3',
    imageUrl: '/images/old-belfry.jpg',
    orderIndex: 4,
    historicalPeriod: 'Colonial Period',
    keyFacts: [
      'Built in 1761 as the town meeting house bell tower',
      'Warned townspeople of British approach',
      'Moved to current location in 1910',
      'Bell was cast by Paul Revere\'s foundry'
    ],
    estimatedDuration: 8
  },
  {
    id: 'lexington-visitor-center',
    title: 'Lexington Visitor Center',
    description: 'Your gateway to understanding the full scope of April 19, 1775. The center houses artifacts, interactive exhibits, and the stories of ordinary people who became part of an extraordinary moment in American history.',
    latitude: 42.4469,
    longitude: -71.2242,
    radius: 40,
    audioUrl: '/audio/visitor-center.mp3',
    imageUrl: '/images/lexington-visitor-center.jpg',
    orderIndex: 5,
    historicalPeriod: 'Modern Interpretation',
    keyFacts: [
      'Houses Revolutionary War artifacts',
      'Features interactive timeline of events',
      'Offers multimedia presentations',
      'Starting point for many historic tours'
    ],
    estimatedDuration: 20
  }
];

// Boston Freedom Trail Stops (abbreviated for demo)
const bostonStops: TourStop[] = [
  {
    id: 'boston-common',
    title: 'Boston Common',
    description: 'America\'s oldest public park, established in 1634. This 50-acre green space has witnessed everything from Puritan sermons to Revolutionary War encampments, making it the perfect starting point for understanding Boston\'s layered history.',
    latitude: 42.3601,
    longitude: -71.0589,
    radius: 100,
    audioUrl: '/audio/boston-common.mp3',
    imageUrl: '/images/boston-common.jpg',
    orderIndex: 1,
    historicalPeriod: 'Colonial to Modern',
    keyFacts: [
      'Oldest public park in America (1634)',
      'Used for military training during Revolutionary War',
      'Site of public hangings until 1817',
      'Central gathering place for protests and celebrations'
    ],
    estimatedDuration: 15
  },
  {
    id: 'faneuil-hall',
    title: 'Faneuil Hall',
    description: 'The "Cradle of Liberty" where Samuel Adams and other patriots planned the Boston Tea Party and debated independence. This Georgian brick building embodies the spirit of American democracy in its very architecture.',
    latitude: 42.3601,
    longitude: -71.0548,
    radius: 50,
    audioUrl: '/audio/faneuil-hall.mp3',
    imageUrl: '/images/faneuil-hall.jpg',
    orderIndex: 2,
    historicalPeriod: 'Revolutionary War Era',
    keyFacts: [
      'Called the "Cradle of Liberty"',
      'Meeting place for revolutionary planning',
      'Built in 1743, expanded in 1805',
      'Still hosts town meetings today'
    ],
    estimatedDuration: 18
  }
];

// Sample Tours
export const sampleTours: Tour[] = [
  {
    id: 'lexington-heritage-loop',
    slug: 'lexington-heritage-loop',
    title: 'Lexington Heritage Loop',
    description: 'Walk in the footsteps of the Minutemen and experience the events that sparked the American Revolution. This immersive tour brings you to the exact locations where ordinary colonists became extraordinary patriots, forever changing the course of history. From the Battle Green where the first shots were fired to the Hancock-Clarke House where revolutionary leaders planned their resistance, every stop reveals new layers of the struggle for independence.',
    shortDescription: 'Revolutionary War sites and colonial history in historic Lexington',
    region: 'Lexington, MA',
    difficulty: 'Easy',
    duration: 90,
    distance: 1.5,
    stops: lexingtonStops,
    imageUrl: '/images/lexington-battle-green-hero.jpg',
    isPremium: false,
    tags: ['Revolutionary War', 'Colonial History', 'Walking Tour', 'Minutemen', 'Patriots'],
    historicalEra: '1775-1783',
    featured: true
  },
  {
    id: 'boston-freedom-trail',
    slug: 'boston-freedom-trail',
    title: 'Boston Freedom Trail',
    description: 'Follow the red brick road through 16 historically significant sites that tell the story of the American Revolution. This premium audio experience features expert historians, immersive soundscapes, and exclusive access to stories not found in guidebooks. From the Boston Common to the Bunker Hill Monument, discover how a group of colonial rebels became the founders of a nation.',
    shortDescription: 'The complete Revolutionary Boston experience with premium audio',
    region: 'Boston, MA',
    difficulty: 'Moderate',
    duration: 180,
    distance: 2.5,
    stops: bostonStops,
    imageUrl: '/images/boston-freedom-trail-hero.jpg',
    isPremium: true,
    tags: ['Revolutionary War', 'Premium', 'Urban History', 'Freedom Trail', 'Colonial Boston'],
    historicalEra: '1630-1776',
    featured: true
  },
  {
    id: 'salem-witch-trials',
    slug: 'salem-witch-trials',
    title: 'Salem Witch Trials: Fear and Hysteria',
    description: 'Explore the dark chapter of American history when fear and superstition led to the execution of 20 innocent people. This haunting tour takes you through the actual locations of the 1692 witch trials, examining the social tensions and religious extremism that created one of history\'s most tragic miscarriages of justice.',
    shortDescription: 'Dark history of the 1692 Salem witch trials',
    region: 'Salem, MA',
    difficulty: 'Easy',
    duration: 120,
    distance: 1.8,
    stops: [], // Would be populated with Salem-specific stops
    imageUrl: '/images/salem-witch-house.jpg',
    isPremium: true,
    tags: ['Colonial History', 'Dark Tourism', 'Witch Trials', 'Social History'],
    historicalEra: '1692',
    featured: false
  },
  {
    id: 'plymouth-pilgrim-story',
    slug: 'plymouth-pilgrim-story',
    title: 'Plymouth: The Pilgrim Story',
    description: 'Discover the real story of the Mayflower passengers and their first year in the New World. Beyond the myths and legends, this tour reveals the harsh realities, cultural encounters, and survival strategies that shaped the Plymouth Colony and influenced American identity for centuries to come.',
    shortDescription: 'The true story of the Mayflower and Plymouth Colony',
    region: 'Plymouth, MA',
    difficulty: 'Easy',
    duration: 105,
    distance: 1.2,
    stops: [], // Would be populated with Plymouth-specific stops
    imageUrl: '/images/plymouth-rock.jpg',
    isPremium: false,
    tags: ['Colonial History', 'Pilgrims', 'Mayflower', 'Early America'],
    historicalEra: '1620-1650',
    featured: false
  }
];

// Helper function to get tour by slug
export function getTourBySlug(slug: string): Tour | undefined {
  return sampleTours.find(tour => tour.slug === slug);
}

// Helper function to get featured tours
export function getFeaturedTours(): Tour[] {
  return sampleTours.filter(tour => tour.featured);
}

// Helper function to get tours by region
export function getToursByRegion(region: string): Tour[] {
  return sampleTours.filter(tour => 
    tour.region.toLowerCase().includes(region.toLowerCase())
  );
}

// Helper function to get tours by tag
export function getToursByTag(tag: string): Tour[] {
  return sampleTours.filter(tour => 
    tour.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}
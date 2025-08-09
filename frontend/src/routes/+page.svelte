<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { Tour } from '$lib/types';
  import TourCard from '$lib/components/TourCard.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  
  // Import tour images
  import lexingtonHeritageTour from '$lib/assets/tours/lexington-heritage-tour.jpg';
  import louisvilleRiverfrontTour from '$lib/assets/tours/louisville-riverfront-tour.jpg';

  // SvelteKit props (to prevent warnings)
  export let data = undefined;
  export let params = undefined;

  let featuredTours: Tour[] = [];
  let loading = true;

  onMount(async () => {
    // Simulate API call - replace with actual backend
    featuredTours = [
      {
        id: '1',
        slug: 'lexington-heritage-loop',
        title: 'Lexington Heritage Loop',
        description: 'Discover the birthplace of American liberty through an immersive walking tour of historic Lexington. From the Battle Green to Hancock-Clarke House, experience the events that sparked the Revolutionary War.',
        shortDescription: 'Revolutionary War sites and colonial history',
        region: 'Lexington, MA',
        difficulty: 'Easy',
        duration: 90,
        distance: 1.5,
        stops: [],
        imageUrl: lexingtonHeritageTour,
        isPremium: false,
        tags: ['Revolutionary War', 'Colonial History', 'Walking Tour'],
        historicalEra: '1775-1783',
        featured: true
      },
      {
        id: '2', 
        slug: 'louisville-riverfront-heritage',
        title: 'Louisville Riverfront Heritage',
        description: 'Explore the historic Ohio River waterfront where Louisville began. From steamboat era commerce to modern development, discover the stories of trade, transportation, and transformation along the river that built a city.',
        shortDescription: 'Historic riverfront and steamboat legacy',
        region: 'Louisville, KY',
        difficulty: 'Easy',
        duration: 120,
        distance: 2.0,
        stops: [],
        imageUrl: louisvilleRiverfrontTour,
        isPremium: true,
        tags: ['Riverfront History', 'Steamboat Era', 'Commerce'],
        historicalEra: '1800-1900',
        featured: true
      }
    ];
    loading = false;
  });
</script>

<svelte:head>
  <title>Livy - Immersive History Tours</title>
  <meta name="description" content="Discover history through location-aware audio tours. Experience the past where it happened with Livy's immersive storytelling technology." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900">
  <Navigation />
  
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <!-- Roman Column Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="columns-pattern"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div class="text-center">
        <!-- Laurel Wreath Logo (same as navbar) -->
        <div class="flex justify-center mb-8">
          <div class="laurel-hero-logo">
            <svg width="120" height="120" viewBox="0 0 120 120" class="text-amber-400">
              <!-- Left laurel branch -->
              <path d="M20 60 Q25 30, 40 42 Q45 54, 42 60 Q45 66, 40 78 Q25 90, 20 60" 
                    fill="currentColor" opacity="0.9"/>
              <path d="M40 60 Q45 36, 54 45 Q57 54, 54 60 Q57 66, 54 75 Q45 84, 40 60" 
                    fill="currentColor" opacity="0.8"/>
              <path d="M54 60 Q57 42, 62 48 Q64 54, 62 60 Q64 66, 62 72 Q57 78, 54 60" 
                    fill="currentColor" opacity="0.7"/>
              
              <!-- Right laurel branch -->
              <path d="M100 60 Q95 30, 80 42 Q75 54, 78 60 Q75 66, 80 78 Q95 90, 100 60" 
                    fill="currentColor" opacity="0.9"/>
              <path d="M80 60 Q75 36, 66 45 Q63 54, 66 60 Q63 66, 66 75 Q75 84, 80 60" 
                    fill="currentColor" opacity="0.8"/>
              <path d="M66 60 Q63 42, 58 48 Q56 54, 58 60 Q56 66, 58 72 Q63 78, 66 60" 
                    fill="currentColor" opacity="0.7"/>
              
              <!-- Center Letter L -->
              <text x="60" y="72" text-anchor="middle" class="text-4xl font-serif font-bold fill-current">L</text>
              
              <!-- Decorative outer ring -->
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
              
              <!-- Small decorative elements -->
              <circle cx="60" cy="20" r="2" fill="currentColor" opacity="0.6"/>
              <circle cx="60" cy="100" r="2" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
        </div>

        <!-- LIVY Text (now separate from logo) -->
        <h1 class="text-6xl md:text-8xl font-serif text-amber-100 mb-4 tracking-wider">
          LIVY
        </h1>
        
        <!-- Tagline -->
        <div class="flex justify-center mb-6">
          <div class="bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px w-64 mb-4"></div>
        </div>
        <p class="text-xl md:text-2xl text-amber-300 mb-2 font-serif italic tracking-wide">
          THE TRAIL OF HISTORY
        </p>
        
        <!-- Main Headline -->
        <h2 class="text-4xl md:text-6xl font-serif text-amber-100 mb-6 tracking-wide">
          History Where You <span class="text-amber-400">Stand</span>
        </h2>
        
        <p class="text-xl md:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the past like never before with immersive, location-aware 
          historical tours that bring stories to life exactly where they happened. Walk 
          through time with GPS precision, expert narratives, and AI-enhanced insights 
          that transform ordinary streets into extraordinary journeys through history.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="roman-button primary">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Explore Tours</span>
          </button>
          <button class="roman-button secondary">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Discover More</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Tours Section -->
  <section class="py-16 bg-stone-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-serif text-amber-100 mb-4">Featured Tours</h2>
        <div class="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        <p class="text-stone-300 text-lg max-w-2xl mx-auto">
          Step into history with our carefully curated tours that bring the past to life through immersive storytelling and expert narration.
        </p>
      </div>

      {#if loading}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each Array(2) as _}
            <div class="parchment-card animate-pulse">
              <div class="h-48 bg-stone-600 rounded-lg mb-4"></div>
              <div class="h-6 bg-stone-600 rounded mb-2"></div>
              <div class="h-4 bg-stone-600 rounded mb-4"></div>
              <div class="h-10 bg-stone-600 rounded"></div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each featuredTours as tour}
            <TourCard {tour} />
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="feature-card">
          <div class="feature-icon">🗺️</div>
          <h3 class="text-xl font-serif text-amber-100 mb-3">GPS-Guided</h3>
          <p class="text-stone-300">Automatically triggered content as you explore historical locations in the real world.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🎧</div>
          <h3 class="text-xl font-serif text-amber-100 mb-3">Immersive Audio</h3>
          <p class="text-stone-300">Professional narration with ambient soundscapes that transport you to another era.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3 class="text-xl font-serif text-amber-100 mb-3">AI Historian</h3>
          <p class="text-stone-300">Ask questions and get instant, contextual answers powered by historical knowledge AI.</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .columns-pattern {
    background-image: 
      repeating-linear-gradient(90deg, 
        transparent 0px, 
        transparent 80px, 
        rgba(245, 158, 11, 0.1) 80px, 
        rgba(245, 158, 11, 0.1) 100px
      );
    height: 100%;
  }

  .laurel-hero-logo {
    filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.5));
    animation: gentle-float 6s ease-in-out infinite;
  }

  @keyframes gentle-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(1deg); }
  }

  .roman-button {
    padding: 2rem 2rem;
    font-family: serif;
    font-size: 1.125rem;
    font-weight: 500;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    transform: scale(1);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .roman-button:hover {
    transform: scale(1.05);
  }

  .roman-button.primary {
    background-color: rgb(217 119 6);
    color: rgb(41 37 36);
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
  }

  .roman-button.primary:hover {
    background-color: rgb(245 158 11);
  }

  .roman-button.secondary {
    background-color: transparent;
    color: rgb(254 243 199);
    border: 2px solid rgb(251 191 36);
  }

  .roman-button.secondary:hover {
    background-color: rgb(251 191 36);
    color: rgb(41 37 36);
  }

  .roman-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  .roman-button:hover::before {
    left: 100%;
  }

  .parchment-card {
    background: linear-gradient(to bottom right, rgb(254 252 232), rgb(254 243 199));
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    position: relative;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
  }

  .parchment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, transparent 45%, rgba(139, 69, 19, 0.1) 50%, transparent 55%),
      linear-gradient(-45deg, transparent 45%, rgba(139, 69, 19, 0.1) 50%, transparent 55%);
    border-radius: inherit;
    opacity: 0.3;
  }

  .feature-card {
    text-align: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(41, 37, 36, 0.8), rgba(68, 64, 60, 0.6));
    border-radius: 12px;
    border: 1px solid rgba(245, 158, 11, 0.2);
    backdrop-filter: blur(10px);
  }

  .feature-icon {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.3));
  }

  /* Enhanced text effects */
  h1 {
    text-shadow: 0 0 30px rgba(245, 158, 11, 0.3);
  }

  h2 {
    text-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
  }
</style>
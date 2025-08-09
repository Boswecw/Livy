<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { Tour } from '$lib/types';
  import TourCard from '$lib/components/TourCard.svelte';
  import Navigation from '$lib/components/Navigation.svelte';

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
        imageUrl: '/images/lexington-battle-green.jpg',
        isPremium: false,
        tags: ['Revolutionary War', 'Colonial History', 'Walking Tour'],
        historicalEra: '1775-1783',
        featured: true
      },
      {
        id: '2', 
        slug: 'boston-freedom-trail',
        title: 'Boston Freedom Trail',
        description: 'Follow the red brick road through 16 historically significant sites that tell the story of the American Revolution. A premium audio experience with expert historians.',
        shortDescription: 'The complete Revolutionary Boston experience',
        region: 'Boston, MA',
        difficulty: 'Moderate',
        duration: 180,
        distance: 2.5,
        stops: [],
        imageUrl: '/images/boston-freedom-trail.jpg',
        isPremium: true,
        tags: ['Revolutionary War', 'Premium', 'Urban History'],
        historicalEra: '1630-1776',
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
        <!-- Laurel Crown Logo -->
        <div class="flex justify-center mb-8">
          <div class="laurel-crown">
            <svg width="120" height="80" viewBox="0 0 120 80" class="text-amber-400">
              <path d="M20 40 Q35 20, 50 40 Q65 20, 80 40 Q95 20, 110 40" 
                    stroke="currentColor" stroke-width="3" fill="none"/>
              <path d="M20 40 Q35 60, 50 40 Q65 60, 80 40 Q95 60, 110 40" 
                    stroke="currentColor" stroke-width="3" fill="none"/>
              <text x="60" y="50" text-anchor="middle" class="text-xl font-serif fill-current">LIVY</text>
            </svg>
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-serif text-amber-100 mb-6 tracking-wide">
          History Comes <span class="text-amber-400">Alive</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the past where it happened. Immersive audio tours powered by location awareness and AI storytelling.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="roman-button primary">
            <span>Explore Tours</span>
          </button>
          <button class="roman-button secondary">
            <span>Learn More</span>
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

  .laurel-crown {
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.3));
  }

  .roman-button {
    @apply px-8 py-4 font-serif text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105;
    position: relative;
    overflow: hidden;
  }

  .roman-button.primary {
    @apply bg-amber-600 text-stone-900 hover:bg-amber-500;
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
  }

  .roman-button.secondary {
    @apply bg-transparent text-amber-100 border-2 border-amber-400 hover:bg-amber-400 hover:text-stone-900;
  }

  .roman-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .roman-button:hover::before {
    left: 100%;
  }

  .parchment-card {
    @apply bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg;
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
    @apply text-center p-6;
    background: linear-gradient(135deg, rgba(41, 37, 36, 0.8), rgba(68, 64, 60, 0.6));
    border-radius: 12px;
    border: 1px solid rgba(245, 158, 11, 0.2);
    backdrop-filter: blur(10px);
  }

  .feature-icon {
    @apply text-4xl mb-4;
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.3));
  }
</style>
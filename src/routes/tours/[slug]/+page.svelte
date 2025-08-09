<!-- src/routes/tours/[slug]/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import type { Tour, TourStop, UserLocation } from '$lib/types';
  import Navigation from '$lib/components/Navigation.svelte';
  import TourMap from '$lib/components/TourMap.svelte';
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';
  import StopCard from '$lib/components/StopCard.svelte';

  export let data: { tour: Tour };
  
  let tour: Tour;
  let userLocation: UserLocation | null = null;
  let currentStopIndex = 0;
  let isNearStop = false;
  let mapContainer: HTMLElement;
  let showAudioPlayer = false;

  $: tour = data.tour;
  $: currentStop = tour?.stops[currentStopIndex];

  onMount(async () => {
    // Get user location
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
          });
        });
        
        userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: Date.now()
        };
        
        checkProximityToStops();
      } catch (error) {
        console.warn('Could not get user location:', error);
      }
    }
  });

  const checkProximityToStops = () => {
    if (!userLocation || !tour) return;
    
    tour.stops.forEach((stop, index) => {
      const distance = calculateDistance(
        userLocation!.latitude, userLocation!.longitude,
        stop.latitude, stop.longitude
      );
      
      if (distance <= stop.radius) {
        isNearStop = true;
        currentStopIndex = index;
        showAudioPlayer = true;
      }
    });
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
  };

  const selectStop = (index: number) => {
    currentStopIndex = index;
    showAudioPlayer = true;
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };
</script>

<svelte:head>
  <title>{tour?.title || 'Tour'} - Livy</title>
  <meta name="description" content={tour?.description || 'Immersive historical tour experience'} />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900">
  <Navigation />
  
  {#if tour}
    <!-- Hero Section -->
    <section class="relative pt-16 pb-8">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('{tour.imageUrl}');">
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div class="text-center text-white">
          <!-- Breadcrumb -->
          <nav class="mb-6">
            <ol class="flex justify-center space-x-2 text-sm">
              <li><a href="/" class="text-amber-300 hover:text-amber-200">Home</a></li>
              <li class="text-stone-300">/</li>
              <li><a href="/tours" class="text-amber-300 hover:text-amber-200">Tours</a></li>
              <li class="text-stone-300">/</li>
              <li class="text-stone-300">{tour.title}</li>
            </ol>
          </nav>

          <div class="historical-era-badge">
            {tour.historicalEra}
          </div>
          
          <h1 class="text-4xl md:text-6xl font-serif text-amber-100 mb-4 tracking-wide">
            {tour.title}
          </h1>
          
          <p class="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
            {tour.description}
          </p>

          <!-- Tour Stats -->
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <div class="stat-badge">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatDuration(tour.duration)}
            </div>
            
            <div class="stat-badge">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {tour.distance} miles
            </div>

            <div class="stat-badge">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {tour.stops.length} stops
            </div>

            <div class="stat-badge difficulty-{tour.difficulty.toLowerCase()}">
              {tour.difficulty}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Map Section -->
        <div class="space-y-6">
          <div class="parchment-section">
            <h2 class="section-title">Tour Map</h2>
            <div class="map-container">
              <TourMap 
                {tour} 
                {userLocation} 
                {currentStopIndex}
                on:stopSelected={(e) => selectStop(e.detail)}
              />
            </div>
          </div>

          <!-- Current Location Status -->
          {#if userLocation}
            <div class="location-status" class:near-stop={isNearStop}>
              {#if isNearStop}
                <div class="status-icon text-emerald-400">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-emerald-400">You're near a tour stop!</p>
                  <p class="text-sm text-stone-300">Audio content is now available</p>
                </div>
              {:else}
                <div class="status-icon text-amber-400">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-amber-400">Location tracked</p>
                  <p class="text-sm text-stone-300">Walk to tour stops to unlock content</p>
                </div>
              {/if}
            </div>
          {/if}
        </div>

        <!-- Tour Stops Section -->
        <div class="space-y-6">
          <div class="parchment-section">
            <h2 class="section-title">Tour Stops</h2>
            <div class="stops-list">
              {#each tour.stops as stop, index}
                <StopCard 
                  {stop} 
                  {index}
                  active={index === currentStopIndex}
                  completed={index < currentStopIndex}
                  on:select={() => selectStop(index)}
                />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Audio Player -->
    {#if showAudioPlayer && currentStop}
      <AudioPlayer 
        stop={currentStop}
        on:close={() => showAudioPlayer = false}
      />
    {/if}
  {:else}
    <!-- Loading State -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="laurel-spinner mb-4"></div>
        <p class="text-amber-100 font-serif">Loading tour...</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .historical-era-badge {
    @apply inline-block bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-serif font-medium mb-4 border border-amber-400/30;
  }

  .stat-badge {
    @apply flex items-center gap-2 bg-black/30 text-amber-100 px-4 py-2 rounded-lg backdrop-blur-sm border border-amber-400/20;
  }

  .stat-badge.difficulty-easy { @apply bg-emerald-600/20 text-emerald-300 border-emerald-400/30; }
  .stat-badge.difficulty-moderate { @apply bg-amber-600/20 text-amber-300 border-amber-400/30; }
  .stat-badge.difficulty-challenging { @apply bg-red-600/20 text-red-300 border-red-400/30; }

  .parchment-section {
    @apply bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg;
    background-image: 
      radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
    position: relative;
  }

  .parchment-section::before {
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

  .section-title {
    @apply text-2xl font-serif font-bold text-stone-800 mb-4 relative z-10;
  }

  .map-container {
    @apply relative z-10 h-96 rounded-lg overflow-hidden border-2 border-amber-200;
  }

  .location-status {
    @apply flex items-center gap-4 p-4 rounded-lg border transition-all duration-300;
    background: rgba(41, 37, 36, 0.9);
    border-color: rgba(245, 158, 11, 0.2);
  }

  .location-status.near-stop {
    background: rgba(5, 150, 105, 0.1);
    border-color: rgba(5, 150, 105, 0.3);
  }

  .status-icon {
    @apply flex-shrink-0;
  }

  .stops-list {
    @apply space-y-4 relative z-10;
  }

  .laurel-spinner {
    @apply w-8 h-8 border-4 border-amber-400/20 border-t-amber-400 rounded-full animate-spin mx-auto;
  }

  /* Decorative Roman corners */
  .parchment-section::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 20px;
    height: 20px;
    border-left: 2px solid rgba(139, 69, 19, 0.3);
    border-top: 2px solid rgba(139, 69, 19, 0.3);
    z-index: 20;
  }
</style>
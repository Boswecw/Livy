<!-- src/lib/components/TourCard.svelte -->
<script lang="ts">
  import type { Tour } from '$lib/types';
  
  export let tour: Tour;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-emerald-600 bg-emerald-100';
      case 'Moderate': return 'text-amber-600 bg-amber-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-stone-600 bg-stone-100';
    }
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };
</script>

<article class="tour-card group cursor-pointer" role="button" tabindex="0">
  <div class="card-content">
    <!-- Image Container -->
    <div class="image-container">
      <div class="tour-image" style="background-image: url('{tour.imageUrl}');">
        <!-- Premium Badge -->
        {#if tour.isPremium}
          <div class="premium-badge">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Premium
          </div>
        {/if}
        
        <!-- Difficulty Badge -->
        <div class="difficulty-badge {getDifficultyColor(tour.difficulty)}">
          {tour.difficulty}
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="card-body">
      <!-- Historical Era -->
      <div class="historical-era">
        {tour.historicalEra}
      </div>

      <!-- Title -->
      <h3 class="tour-title">
        {tour.title}
      </h3>

      <!-- Location -->
      <div class="location">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {tour.region}
      </div>

      <!-- Description -->
      <p class="tour-description">
        {tour.shortDescription}
      </p>

      <!-- Stats -->
      <div class="tour-stats">
        <div class="stat">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {formatDuration(tour.duration)}
        </div>
        
        <div class="stat">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          {tour.distance} mi
        </div>

        <div class="stat">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {tour.stops.length} stops
        </div>
      </div>

      <!-- Tags -->
      <div class="tour-tags">
        {#each tour.tags.slice(0, 3) as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>

      <!-- Action Button -->
      <div class="card-actions">
        <button class="tour-action-btn">
          <span>Explore Tour</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Roman Border Decoration -->
  <div class="roman-border"></div>
</article>

<style>
  .tour-card {
    position: relative;
    overflow: hidden;
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    transform: scale(1);
    background: linear-gradient(135deg, #fef7cd 0%, #fde68a 100%);
    border: 2px solid rgba(245, 158, 11, 0.3);
  }

  .tour-card:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
  }

  .card-content {
    position: relative;
    z-index: 10;
    height: 100%;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 200px;
  }

  .tour-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: #8b7355;
    position: relative;
    transition: transform 0.3s ease;
  }

  .group:hover .tour-image {
    transform: scale(1.1);
  }

  .tour-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
  }

  .premium-badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background-color: rgb(245 158 11);
    color: rgb(146 64 14);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }

  .difficulty-badge {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 10;
  }

  .card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .historical-era {
    color: rgb(180 83 9);
    font-size: 0.875rem;
    font-family: serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .tour-title {
    font-size: 1.25rem;
    font-family: serif;
    font-weight: 700;
    color: rgb(41 37 36);
    line-height: 1.25;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgb(87 83 78);
    font-size: 0.875rem;
  }

  .tour-description {
    color: rgb(68 64 60);
    font-size: 0.875rem;
    line-height: 1.625;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tour-stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(87 83 78);
    font-size: 0.875rem;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .tour-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background-color: rgb(231 229 228);
    color: rgb(68 64 60);
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .card-actions {
    padding-top: 0.5rem;
  }

  .tour-action-btn {
    width: 100%;
    background-color: rgb(217 119 6);
    color: rgb(254 243 199);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-family: serif;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }

  .tour-action-btn:hover {
    background-color: rgb(180 83 9);
    box-shadow: 0 6px 16px rgba(245, 158, 11, 0.3);
  }

  .roman-border {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: 
      linear-gradient(45deg, transparent 40%, rgba(139, 69, 19, 0.1) 50%, transparent 60%),
      linear-gradient(-45deg, transparent 40%, rgba(139, 69, 19, 0.1) 50%, transparent 60%);
    opacity: 0.3;
  }

  .roman-border::before,
  .roman-border::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(245, 158, 11, 0.4);
  }

  .roman-border::before {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
  }

  .roman-border::after {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
  }

  /* Text truncation utility */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
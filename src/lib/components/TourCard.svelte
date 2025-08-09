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
    @apply relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl;
    background: linear-gradient(135deg, #fef7cd 0%, #fde68a 100%);
    border: 2px solid rgba(245, 158, 11, 0.3);
  }

  .tour-card:hover {
    box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
  }

  .card-content {
    @apply relative z-10 h-full;
  }

  .image-container {
    @apply relative overflow-hidden;
    height: 200px;
  }

  .tour-image {
    @apply w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110;
    background-color: #8b7355;
    position: relative;
  }

  .tour-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
  }

  .premium-badge {
    @apply absolute top-3 left-3 bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
  }

  .difficulty-badge {
    @apply absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10;
  }

  .card-body {
    @apply p-6 space-y-4;
  }

  .historical-era {
    @apply text-amber-700 text-sm font-serif font-medium uppercase tracking-wide;
  }

  .tour-title {
    @apply text-xl font-serif font-bold text-stone-800 leading-tight;
  }

  .location {
    @apply flex items-center gap-2 text-stone-600 text-sm;
  }

  .tour-description {
    @apply text-stone-700 text-sm leading-relaxed line-clamp-2;
  }

  .tour-stats {
    @apply flex items-center justify-between text-stone-600 text-sm;
  }

  .stat {
    @apply flex items-center gap-1;
  }

  .tour-tags {
    @apply flex flex-wrap gap-2;
  }

  .tag {
    @apply bg-stone-200 text-stone-700 px-2 py-1 rounded-md text-xs font-medium;
  }

  .card-actions {
    @apply pt-2;
  }

  .tour-action-btn {
    @apply w-full bg-amber-600 hover:bg-amber-700 text-amber-50 px-4 py-3 rounded-lg font-serif font-medium transition-all duration-200 flex items-center justify-center gap-2;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
  }

  .tour-action-btn:hover {
    box-shadow: 0 6px 16px rgba(245, 158, 11, 0.3);
  }

  .roman-border {
    @apply absolute inset-0 pointer-events-none;
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
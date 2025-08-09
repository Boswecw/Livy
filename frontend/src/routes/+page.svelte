<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import laurelLogo from '$lib/assets/logos/laurel-logo.svg';
  // Satisfy Svelte's prop checks (even if you don't use them)
  export let data: unknown;
  export let params: Record<string, string>;
</script>

<svelte:head>
  <title>Livy - Immersive History Tours</title>
  <meta name="description" content="Discover history through location-aware audio tours. Experience the past where it happened with Livy's immersive storytelling technology." />
</svelte:head>

<!-- Navigation -->
<Navigation />

<!-- Hero Section -->
<section class="relative pt-20 pb-16 min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900"></div>

  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <!-- Large Gold Circle with Laurel Wreath Overlay -->
    <div class="flex justify-center mb-8">
      <div class="hero-logo-container relative">
        <!-- Gold Circle Background -->
        <div class="w-32 h-32 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-2xl shadow-amber-400/40"></div>
        
        <!-- Your Laurel Wreath Logo Overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <!-- Replace this img src with your laurel wreath logo file -->
          <img 
            src={laurelLogo} 
            alt="Livy Laurel Wreath Logo" 
            class="w-100 h-100 filter drop-shadow-lg"
          />
          <!-- Alternative if you're using SVG directly:
          <svg width="96" height="96" viewBox="0 0 496 496" class="hero-laurel-overlay">
            Your SVG content here
          </svg>
          -->
        </div>
      </div>
    </div>

    <!-- Main Title -->
    <h1 class="text-6xl md:text-8xl font-serif text-amber-100 mb-4 tracking-wider font-bold">
      LIVY
    </h1>

    <!-- Tagline -->
    <div class="flex justify-center mb-6">
      <div class="bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px w-64"></div>
    </div>

    <p class="text-xl md:text-2xl text-amber-300 mb-2 font-serif italic tracking-wide">
      THE TRAIL OF HISTORY
    </p>

    <!-- Main Headline -->
    <h2 class="text-4xl md:text-6xl font-serif text-amber-100 mb-6 tracking-wide">
      History Where You <span class="text-amber-400">Stand</span>
    </h2>

    <!-- Description -->
    <p class="text-xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
      Experience the past like never before with immersive, location-aware
      historical tours that bring stories to life exactly where they happened.
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/tours" class="bg-amber-600 hover:bg-amber-500 text-stone-900 px-8 py-4 rounded-lg font-serif font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
        <span>Explore Tours</span>
      </a>
      <a href="/about" class="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 rounded-lg font-serif font-medium text-lg transition-all duration-300">
        <span>Learn More</span>
      </a>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-16 bg-stone-800/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-serif text-amber-100 mb-4 font-bold">Featured Tours</h2>
      <div class="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
      <p class="text-stone-300 text-lg max-w-2xl mx-auto">
        Step into history with our carefully curated tours that bring the past to life.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Feature 1 -->
      <div class="text-center p-6 bg-stone-800/80 backdrop-blur-md border border-amber-400/20 rounded-lg">
        <div class="text-4xl mb-4">🗺️</div>
        <h3 class="text-xl font-serif text-amber-100 mb-3 font-semibold">GPS-Guided</h3>
        <p class="text-stone-300">Automatically triggered content as you explore historical locations.</p>
      </div>

      <!-- Feature 2 -->
      <div class="text-center p-6 bg-stone-800/80 backdrop-blur-md border border-amber-400/20 rounded-lg">
        <div class="text-4xl mb-4">🎧</div>
        <h3 class="text-xl font-serif text-amber-100 mb-3 font-semibold">Immersive Audio</h3>
        <p class="text-stone-300">Professional narration with ambient soundscapes.</p>
      </div>

      <!-- Feature 3 -->
      <div class="text-center p-6 bg-stone-800/80 backdrop-blur-md border border-amber-400/20 rounded-lg">
        <div class="text-4xl mb-4">🤖</div>
        <h3 class="text-xl font-serif text-amber-100 mb-3 font-semibold">AI Historian</h3>
        <p class="text-stone-300">Get instant, contextual answers powered by AI.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-logo-container {
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
    animation: heroGlow 4s ease-in-out infinite alternate;
  }
  
  .hero-logo-container:hover {
    transform: scale(1.05);
  }
  
  .hero-logo-container::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: backgroundPulse 6s ease-in-out infinite alternate;
  }
  
  .hero-laurel-overlay {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
    transition: all 0.3s ease;
  }
  
  .hero-logo-container:hover .hero-laurel-overlay {
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6));
  }
  
  @keyframes heroGlow {
    from {
      filter: drop-shadow(0 8px 16px rgba(251, 191, 36, 0.4));
    }
    to {
      filter: drop-shadow(0 12px 24px rgba(251, 191, 36, 0.6));
    }
  }
  
  @keyframes backgroundPulse {
    from {
      transform: scale(0.8);
      opacity: 0.3;
    }
    to {
      transform: scale(1.2);
      opacity: 0.6;
    }
  }
</style>
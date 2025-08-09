<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  
  let scrollY = 0;
  let mounted = false;

  onMount(() => {
    mounted = true;
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Parallax effect for scroll decoration
  $: scrollOffset = mounted ? scrollY * 0.5 : 0;
</script>

<svelte:head>
  <title>About Livy - Immersive History Tours</title>
  <meta name="description" content="Discover the story behind Livy, the revolutionary history tour app that brings the past to life through location-aware technology and immersive storytelling." />
</svelte:head>

<svelte:window bind:scrollY />

<div class="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900">
  <Navigation />
  
  <!-- Hero Section -->
  <section class="relative pt-20 pb-16 overflow-hidden">
    <!-- Animated background columns -->
    <div class="absolute inset-0 opacity-5" style="transform: translateY({scrollOffset}px)">
      <div class="columns-background"></div>
    </div>
    
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="laurel-crown-large mb-8">
        <svg width="150" height="100" viewBox="0 0 150 100" class="text-amber-400">
          <path d="M25 50 Q42 25, 60 50 Q78 25, 95 50 Q112 25, 130 50" 
                stroke="currentColor" stroke-width="4" fill="none"/>
          <path d="M25 50 Q42 75, 60 50 Q78 75, 95 50 Q112 75, 130 50" 
                stroke="currentColor" stroke-width="4" fill="none"/>
          <text x="77" y="60" text-anchor="middle" class="text-2xl font-serif fill-current">LIVY</text>
        </svg>
      </div>

      <h1 class="text-5xl md:text-7xl font-serif text-amber-100 mb-6">
        About <span class="text-amber-400">Livy</span>
      </h1>
      
      <p class="text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
        Named after the great Roman historian Titus Livius, our app transforms how we experience history—making the past accessible, engaging, and unforgettable.
      </p>
    </div>
  </section>

  <!-- Main Content - Parchment Scroll Design -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="parchment-scroll">
        <!-- Scroll Header -->
        <div class="scroll-header">
          <div class="scroll-rod"></div>
        </div>

        <!-- Scroll Content -->
        <div class="scroll-content">
          <!-- Origin Story -->
          <div class="scroll-section">
            <div class="roman-numeral">I.</div>
            <h2 class="scroll-title">Our Genesis</h2>
            <div class="ornamental-line"></div>
            
            <p class="scroll-text">
              In the spirit of Titus Livius, who chronicled Rome's history to preserve it for future generations, 
              we created Livy to bridge the gap between past and present. Where traditional history feels distant 
              and abstract, we make it immediate and personal.
            </p>
            
            <p class="scroll-text">
              Our journey began with a simple question: What if you could walk in the footsteps of history 
              and hear the stories of the past exactly where they unfolded? What if technology could make 
              you a witness to the events that shaped our world?
            </p>
          </div>

          <!-- Mission Section -->
          <div class="scroll-section">
            <div class="roman-numeral">II.</div>
            <h2 class="scroll-title">Our Mission</h2>
            <div class="ornamental-line"></div>
            
            <blockquote class="scroll-quote">
              "To make history not just something you learn about, but something you experience."
            </blockquote>
            
            <p class="scroll-text">
              Livy transforms static historical sites into immersive experiences. Using GPS technology 
              and expert storytelling, we deliver contextual content precisely when and where it matters most. 
              Every step becomes a journey through time.
            </p>

            <div class="feature-grid">
              <div class="feature-item">
                <div class="feature-icon">📍</div>
                <h4>Location-Aware</h4>
                <p>Content triggers automatically as you explore</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🎭</div>
                <h4>Expert Storytelling</h4>
                <p>Crafted by historians and audio professionals</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🧠</div>
                <h4>AI-Enhanced</h4>
                <p>Get answers to your historical questions instantly</p>
              </div>
            </div>
          </div>

          <!-- Technology Section -->
          <div class="scroll-section">
            <div class="roman-numeral">III.</div>
            <h2 class="scroll-title">Our Innovation</h2>
            <div class="ornamental-line"></div>
            
            <p class="scroll-text">
              Livy represents the convergence of cutting-edge technology and timeless storytelling. 
              Our platform combines GPS precision, offline capabilities, and AI-powered Q&A to create 
              seamless historical experiences.
            </p>

            <div class="tech-showcase">
              <div class="tech-item">
                <h4>Offline-First Design</h4>
                <p>Download tours and explore without connectivity concerns</p>
              </div>
              <div class="tech-item">
                <h4>Proximity Detection</h4>
                <p>Precise location tracking triggers content at the perfect moment</p>
              </div>
              <div class="tech-item">
                <h4>Intelligent Q&A</h4>
                <p>RAG-powered AI provides contextual historical information</p>
              </div>
            </div>
          </div>

          <!-- Vision Section -->
          <div class="scroll-section">
            <div class="roman-numeral">IV.</div>
            <h2 class="scroll-title">Our Vision</h2>
            <div class="ornamental-line"></div>
            
            <p class="scroll-text">
              We envision a world where every historical site becomes a portal to the past, where learning 
              history is as engaging as living it. From the cobblestones of colonial Lexington to the 
              ancient ruins of Rome, Livy will be your guide through time.
            </p>
            
            <p class="scroll-text">
              Our platform will expand to support museums, educational institutions, and tourism boards 
              worldwide, creating a global network of immersive historical experiences. Through partnerships 
              and white-label solutions, we're building the future of location-based education.
            </p>

            <div class="vision-stats">
              <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">Planned Tour Locations</div>
              </div>
              <div class="stat">
                <div class="stat-number">10k+</div>
                <div class="stat-label">Beta Users</div>
              </div>
              <div class="stat">
                <div class="stat-number">95%</div>
                <div class="stat-label">User Satisfaction</div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="scroll-section final-section">
            <div class="ornamental-line-double"></div>
            <h2 class="scroll-title-large">Join the Journey</h2>
            
            <p class="scroll-text-large">
              Experience history like never before. Download Livy and step into the stories 
              that shaped our world.
            </p>

            <div class="cta-buttons">
              <button class="roman-cta primary">Start Your First Tour</button>
              <button class="roman-cta secondary">Explore All Tours</button>
            </div>
          </div>
        </div>

        <!-- Scroll Footer -->
        <div class="scroll-footer">
          <div class="scroll-rod"></div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .columns-background {
    background-image: 
      repeating-linear-gradient(90deg, 
        transparent 0px, 
        transparent 120px, 
        rgba(245, 158, 11, 0.1) 120px, 
        rgba(245, 158, 11, 0.1) 140px
      );
    height: 100%;
  }

  .laurel-crown-large {
    filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4));
    animation: gentle-float 6s ease-in-out infinite;
  }

  @keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .parchment-scroll {
    @apply relative mx-auto max-w-4xl;
    background: linear-gradient(180deg, #fef7cd 0%, #fde68a 50%, #fef7cd 100%);
    border-radius: 20px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      inset 0 0 40px rgba(139, 69, 19, 0.1);
    position: relative;
  }

  .parchment-scroll::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
      repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px);
    border-radius: inherit;
    pointer-events: none;
  }

  .scroll-header, .scroll-footer {
    @apply relative h-8 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 mx-4;
    border-radius: 10px;
  }

  .scroll-header {
    @apply mb-8 mt-6;
  }

  .scroll-footer {
    @apply mt-8 mb-6;
  }

  .scroll-rod {
    @apply absolute left-1/2 top-1/2 w-16 h-3 bg-amber-900 rounded-full transform -translate-x-1/2 -translate-y-1/2;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .scroll-content {
    @apply px-8 md:px-16 pb-8 relative z-10;
  }

  .scroll-section {
    @apply mb-16 last:mb-0;
  }

  .roman-numeral {
    @apply text-6xl font-serif text-amber-700 opacity-50 text-center mb-4;
    text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.3);
  }

  .scroll-title {
    @apply text-3xl md:text-4xl font-serif text-stone-800 text-center mb-6 leading-tight;
  }

  .scroll-title-large {
    @apply text-4xl md:text-5xl font-serif text-stone-800 text-center mb-6 leading-tight;
  }

  .ornamental-line {
    @apply w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8;
  }

  .ornamental-line-double {
    @apply w-48 h-2 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8 relative;
  }

  .ornamental-line-double::after {
    content: '';
    @apply absolute top-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent;
  }

  .scroll-text {
    @apply text-stone-700 text-lg leading-relaxed mb-6 text-justify;
    font-family: 'Georgia', serif;
  }

  .scroll-text-large {
    @apply text-stone-700 text-xl leading-relaxed mb-8 text-center;
    font-family: 'Georgia', serif;
  }

  .scroll-quote {
    @apply text-2xl font-serif text-stone-800 text-center italic mb-8 px-8 py-6 border-l-4 border-r-4 border-amber-600 bg-gradient-to-r from-amber-100/50 to-amber-50/50;
  }

  .feature-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 my-8;
  }

  .feature-item {
    @apply text-center p-4 bg-amber-50/50 rounded-lg border border-amber-200;
  }

  .feature-item h4 {
    @apply font-serif text-stone-800 text-lg mb-2;
  }

  .feature-item p {
    @apply text-stone-600 text-sm;
  }

  .feature-icon {
    @apply text-3xl mb-3;
  }

  .tech-showcase {
    @apply space-y-4 my-8;
  }

  .tech-item {
    @apply p-4 border-l-4 border-amber-600 bg-gradient-to-r from-amber-100/30 to-transparent;
  }

  .tech-item h4 {
    @apply font-serif text-stone-800 text-lg mb-2;
  }

  .tech-item p {
    @apply text-stone-600;
  }

  .vision-stats {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6 my-8;
  }

  .stat {
    @apply text-center p-6 bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg shadow-md;
  }

  .stat-number {
    @apply text-4xl font-serif font-bold text-amber-800 mb-2;
  }

  .stat-label {
    @apply text-stone-700 font-medium;
  }

  .final-section {
    @apply text-center py-8 bg-gradient-to-r from-amber-100/30 via-amber-50/50 to-amber-100/30 rounded-lg;
  }

  .cta-buttons {
    @apply flex flex-col sm:flex-row gap-4 justify-center mt-8;
  }

  .roman-cta {
    @apply px-8 py-4 font-serif text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105;
  }

  .roman-cta.primary {
    @apply bg-amber-600 text-stone-900 hover:bg-amber-700;
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
  }

  .roman-cta.secondary {
    @apply bg-transparent text-amber-800 border-2 border-amber-600 hover:bg-amber-600 hover:text-stone-900;
  }
</style>
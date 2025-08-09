<!-- src/lib/components/Navigation.svelte - Gold Circle with Laurel Overlay -->
<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import laurelLogo from '$lib/assets/logos/laurel-logo.svg';
  let mobileMenuOpen = false;
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/map', label: 'Map' },
    { href: '/about', label: 'About' }
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-stone-800/95 backdrop-blur-lg border-b border-amber-400/20" 
     class:shadow-lg={scrolled}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo with Gold Circle + Laurel Overlay -->
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-3 group">
          <!-- Gold Circle with Laurel Wreath Overlay -->
          <div class="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
            <!-- Gold Circle Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300"></div>
            
            <!-- Your Laurel Wreath Logo Overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
              <!-- Replace this img src with your laurel wreath logo file -->
              <img 
                src={laurelLogo} 
                alt="Livy Logo" 
                class="w-14 h-14 filter drop-shadow-sm"
              />
              <!-- Alternative if you're using SVG directly:
              <svg width="32" height="32" viewBox="0 0 496 496" class="laurel-overlay">
                Your SVG content here
              </svg>
              -->
            </div>
          </div>
          <span class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors font-bold">
            LIVY
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          {#each navItems as item}
            <a 
              href={item.href}
              class="text-stone-300 hover:text-amber-300 px-3 py-2 text-sm font-serif font-medium transition-colors duration-200 relative"
              class:text-amber-400={$page.url.pathname === item.href}
            >
              {item.label}
              {#if $page.url.pathname === item.href}
                <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"></div>
              {/if}
            </a>
          {/each}
        </div>
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a href="/tours" class="bg-amber-600 hover:bg-amber-500 text-stone-900 px-6 py-2 rounded-lg font-serif font-medium transition-all duration-300 transform hover:scale-105">
          Start Tour
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          on:click={toggleMobileMenu}
          class="text-stone-300 hover:text-amber-300 p-2 rounded-md transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-stone-800/98 backdrop-blur-md border-b border-amber-400/20">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each navItems as item}
          <a
            href={item.href}
            class="block text-stone-300 hover:text-amber-300 px-3 py-2 text-base font-serif font-medium transition-colors"
            class:text-amber-400={$page.url.pathname === item.href}
            on:click={() => mobileMenuOpen = false}
          >
            {item.label}
          </a>
        {/each}
        <a href="/tours" class="block bg-amber-600 hover:bg-amber-500 text-stone-900 px-3 py-2 mt-4 rounded-lg font-serif font-medium text-center transition-colors">
          Start Tour
        </a>
      </div>
    </div>
  {/if}
</nav>

<style>
  .laurel-overlay {
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transition: all 0.3s ease;
  }
  
  .group:hover .laurel-overlay {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
  }
</style>
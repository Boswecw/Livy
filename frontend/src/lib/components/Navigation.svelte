<!-- src/lib/components/Navigation.svelte - FIXED -->
<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
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
      
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-3 group">
          <!-- Simple Laurel Logo -->
          <div class="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
            <span class="text-stone-900 font-serif font-bold text-lg">L</span>
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
<!-- src/lib/components/Navigation.svelte -->
<script lang="ts">
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

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
   class:scrolled>
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex justify-between items-center h-16">
    <!-- Logo -->
    <div class="flex items-center">
      <a href="/" class="flex items-center space-x-3 group">
        <!-- Laurel Wreath with L -->
        <div class="laurel-logo">
          <svg width="44" height="44" viewBox="0 0 44 44" class="text-amber-400 group-hover:text-amber-300 transition-colors">
            <!-- Left laurel branch -->
            <path d="M8 22 Q10 12, 15 16 Q17 20, 16 22 Q17 24, 15 28 Q10 32, 8 22" 
                  fill="currentColor" opacity="0.9"/>
            <path d="M15 22 Q17 14, 20 17 Q21 20, 20 22 Q21 24, 20 27 Q17 30, 15 22" 
                  fill="currentColor" opacity="0.8"/>
            
            <!-- Right laurel branch -->
            <path d="M36 22 Q34 12, 29 16 Q27 20, 28 22 Q27 24, 29 28 Q34 32, 36 22" 
                  fill="currentColor" opacity="0.9"/>
            <path d="M29 22 Q27 14, 24 17 Q23 20, 24 22 Q23 24, 24 27 Q27 30, 29 22" 
                  fill="currentColor" opacity="0.8"/>
            
            <!-- Center Letter L -->
            <text x="22" y="28" text-anchor="middle" class="text-lg font-serif font-bold fill-current">L</text>
            
            <!-- Optional subtle glow effect -->
            <circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
          </svg>
        </div>
        <span class="text-2xl font-serif text-amber-100 group-hover:text-amber-300 transition-colors">
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
            class="nav-link"
            class:active={$page.url.pathname === item.href}
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>

    <!-- CTA Button -->
    <div class="hidden md:block">
      <button class="cta-button">
        <span>Start Tour</span>
      </button>
    </div>

    <!-- Mobile menu button -->
    <div class="md:hidden">
      <button
        on:click={toggleMobileMenu}
        class="mobile-menu-button"
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
  <div class="md:hidden mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {#each navItems as item}
        <a
          href={item.href}
          class="mobile-nav-link"
          class:active={$page.url.pathname === item.href}
          on:click={() => mobileMenuOpen = false}
        >
          {item.label}
        </a>
      {/each}
      <button class="mobile-cta-button">
        Start Tour
      </button>
    </div>
  </div>
{/if}
</nav>

<style>
nav {
  background: rgba(41, 37, 36, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
}

nav.scrolled {
  background: rgba(41, 37, 36, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.laurel-logo {
  filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.4));
  transition: all 0.3s ease;
}

.laurel-logo:hover {
  filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.6));
  transform: scale(1.05);
}

.nav-link {
  color: #d6d3d1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
}

.nav-link:hover {
  color: #fcd34d;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f59e0b, transparent);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: #fbbf24;
}

.cta-button {
  background-color: #d97706;
  color: #1c1917;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 500;
  transition: all 0.2s ease;
  transform: scale(1);
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
}

.cta-button:hover {
  background-color: #f59e0b;
  transform: scale(1.05);
}

.mobile-menu-button {
  color: #d6d3d1;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-button:hover {
  color: #fcd34d;
}

.mobile-menu {
  background: rgba(41, 37, 36, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(245, 158, 11, 0.2);
  animation: slideDown 0.2s ease-out;
}

.mobile-nav-link {
  color: #d6d3d1;
  display: block;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 500;
  transition: color 0.2s ease;
  text-decoration: none;
}

.mobile-nav-link:hover {
  color: #fcd34d;
}

.mobile-nav-link.active {
  color: #fbbf24;
  background-color: rgba(41, 37, 36, 0.5);
}

.mobile-cta-button {
  background-color: #d97706;
  color: #1c1917;
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0.75rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 500;
  transition: background-color 0.2s ease;
  border: none;
  cursor: pointer;
}

.mobile-cta-button:hover {
  background-color: #f59e0b;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
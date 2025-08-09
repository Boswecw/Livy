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
          <a href="/" class="flex items-center space-x-2 group">
            <!-- Simplified Laurel Logo -->
            <div class="laurel-logo">
              <svg width="40" height="30" viewBox="0 0 40 30" class="text-amber-400 group-hover:text-amber-300 transition-colors">
                <path d="M5 15 Q12 8, 20 15 Q28 8, 35 15" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M5 15 Q12 22, 20 15 Q28 22, 35 15" stroke="currentColor" stroke-width="2" fill="none"/>
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
    }
  
    .nav-link {
      @apply text-stone-300 hover:text-amber-300 px-3 py-2 text-sm font-serif font-medium transition-all duration-200;
      position: relative;
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
      @apply text-amber-400;
    }
  
    .cta-button {
      @apply bg-amber-600 hover:bg-amber-500 text-stone-900 px-6 py-2 rounded-lg font-serif font-medium transition-all duration-200 transform hover:scale-105;
      box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
    }
  
    .mobile-menu-button {
      @apply text-stone-300 hover:text-amber-300 p-2 rounded-md transition-colors;
    }
  
    .mobile-menu {
      background: rgba(41, 37, 36, 0.98);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(245, 158, 11, 0.2);
      animation: slideDown 0.2s ease-out;
    }
  
    .mobile-nav-link {
      @apply text-stone-300 hover:text-amber-300 block px-3 py-2 text-base font-serif font-medium transition-colors;
    }
  
    .mobile-nav-link.active {
      @apply text-amber-400 bg-stone-800/50;
    }
  
    .mobile-cta-button {
      @apply bg-amber-600 hover:bg-amber-500 text-stone-900 block w-full text-center px-3 py-2 mt-4 rounded-lg font-serif font-medium transition-colors;
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
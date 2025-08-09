<!-- src/lib/components/Layout.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import Navigation from '$lib/components/Navigation.svelte';
  
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  $: currentPath = $page.url.pathname;
</script>

<svelte:head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #292524;
      color: #f5f5f4;
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    /* Global text selection styling */
    ::selection {
      background-color: rgba(245, 158, 11, 0.3);
      color: #f5f5f4;
    }
    
    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #1c1917;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #78716c;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #a8a29e;
    }
  </style>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900">
  <Navigation />
  
  <main>
    <slot />
  </main>
  
  <!-- Footer -->
  <footer class="bg-stone-900/80 border-t border-amber-400/20 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <!-- Laurel Logo -->
            <div class="laurel-footer-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" class="text-amber-400">
                <!-- Left laurel branch -->
                <path d="M6 16 Q8 8, 12 12 Q13 15, 12 16 Q13 17, 12 20 Q8 24, 6 16" 
                      fill="currentColor" opacity="0.9"/>
                <path d="M12 16 Q13 10, 15 12 Q16 15, 15 16 Q16 17, 15 20 Q13 22, 12 16" 
                      fill="currentColor" opacity="0.8"/>
                
                <!-- Right laurel branch -->
                <path d="M26 16 Q24 8, 20 12 Q19 15, 20 16 Q19 17, 20 20 Q24 24, 26 16" 
                      fill="currentColor" opacity="0.9"/>
                <path d="M20 16 Q19 10, 17 12 Q16 15, 17 16 Q16 17, 17 20 Q19 22, 20 16" 
                      fill="currentColor" opacity="0.8"/>
                
                <!-- Center Letter L -->
                <text x="16" y="20" text-anchor="middle" class="text-sm font-serif font-bold fill-current">L</text>
              </svg>
            </div>
            <span class="text-xl font-serif text-amber-100 font-bold">LIVY</span>
          </div>
          <p class="text-stone-300 text-sm leading-relaxed max-w-md">
            History where you stand. Immersive, location-aware tours that bring the past to life through modern technology and expert storytelling.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-amber-100 font-serif font-semibold mb-4">Explore</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/tours" class="text-stone-300 hover:text-amber-300 transition-colors">Tours</a></li>
            <li><a href="/map" class="text-stone-300 hover:text-amber-300 transition-colors">Map</a></li>
            <li><a href="/about" class="text-stone-300 hover:text-amber-300 transition-colors">About</a></li>
            <li><a href="/help" class="text-stone-300 hover:text-amber-300 transition-colors">Help</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h3 class="text-amber-100 font-serif font-semibold mb-4">Connect</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-stone-300 hover:text-amber-300 transition-colors">Contact Us</a></li>
            <li><a href="#" class="text-stone-300 hover:text-amber-300 transition-colors">Support</a></li>
            <li><a href="#" class="text-stone-300 hover:text-amber-300 transition-colors">Privacy</a></li>
            <li><a href="#" class="text-stone-300 hover:text-amber-300 transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-stone-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-stone-400 text-sm">
          © {new Date().getFullYear()} Livy. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-stone-400 hover:text-amber-300 transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </a>
          <a href="#" class="text-stone-400 hover:text-amber-300 transition-colors">
            <span class="sr-only">GitHub</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  .laurel-footer-logo {
    filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.3));
  }
</style>
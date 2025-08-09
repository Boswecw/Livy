<!-- src/lib/components/Layout.svelte - Emergency fix with inline CSS -->
<script lang="ts">
  import { page } from '$app/stores';
  
  export let children: any;
  
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
      background-color: #f8f6f1;
      color: #1c1c1c;
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
    }
    
    .nav {
      background: rgba(248, 246, 241, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(166, 166, 166, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 1rem 0;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 800;
      color: #1c1c1c;
      text-decoration: none;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-link {
      background: none;
      border: none;
      color: #1c1c1c;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    
    .nav-link:hover {
      color: #c8a165;
      background: rgba(200, 161, 101, 0.1);
    }
    
    .hero {
      background: linear-gradient(135deg, rgba(166, 166, 166, 0.05) 0%, #f8f6f1 100%);
      padding: 5rem 0;
      text-align: center;
    }
    
    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .hero-title {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #1c1c1c;
    }
    
    .hero-tagline {
      color: #c8a165;
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: 0.3rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: #a6a6a6;
      max-width: 600px;
      margin: 0 auto 3rem;
      line-height: 1.7;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #c8a165 0%, #b8956b 100%);
      color: #1c1c1c;
      padding: 0.875rem 2rem;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      margin: 0.5rem;
    }
    
    .btn-primary:hover {
      background: linear-gradient(135deg, #b8956b 0%, #1c1c1c 100%);
      color: #f8f6f1;
      transform: translateY(-2px);
    }
    
    .section {
      padding: 5rem 0;
    }
    
    .content-grid {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: #1c1c1c;
    }
    
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(166, 166, 166, 0.1);
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .tour-image {
      width: 100%;
      height: 240px;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      color: white;
    }
    
    .tour-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #1c1c1c;
    }
    
    .tour-description {
      color: #a6a6a6;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    .footer {
      background: linear-gradient(135deg, rgba(166, 166, 166, 0.05) 0%, rgba(28, 28, 28, 0.02) 100%);
      padding: 4rem 0 2rem;
      text-align: center;
      border-top: 1px solid rgba(166, 166, 166, 0.2);
    }
  </style>
</svelte:head>

<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <span style="font-size: 2rem; margin-right: 0.75rem;">🏛️</span>
      LIVY
    </a>
    <div class="nav-links">
      <button class="nav-link" on:click={() => scrollToSection('home')}>Home</button>
      <button class="nav-link" on:click={() => scrollToSection('tours')}>Tours</button>
      <button class="nav-link" on:click={() => scrollToSection('about')}>About</button>
      <a href="/map" class="nav-link">Map</a>
    </div>
  </div>
</nav>

<main>
  {@render children()}
</main>
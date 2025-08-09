<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  // Image assets (Vite-processed)
  import lexingtonTourImage from '$lib/assets/tours/lexington-heritage-tour.jpg';
  import louisvilleTourImage from '$lib/assets/tours/louisville-riverfront-tour.jpg';
  import livyNavbarLogo from '$lib/assets/logos/livy-logo-navbar.svg';
  import livyHeroLogo from '$lib/assets/logos/livy-logo-hero.svg';

  // Social icons
  import appleIcon from '$lib/assets/icons/apple.svg';
  import xIcon from '$lib/assets/icons/x.svg';
  import instagramIcon from '$lib/assets/icons/instagram.svg';

  // Decorative assets (add these files)
  // Place at: frontend/src/lib/assets/decor/
  import scrollTop from '$lib/assets/decor/scroll-top.svg';
  import scrollBottom from '$lib/assets/decor/scroll-bottom.svg';
  import laurelCorner from '$lib/assets/decor/laurel-corner.svg';

  let activeSection: 'home' | 'tours' | 'about' = 'home';

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id as typeof activeSection;
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => observer.observe(section));
  });

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

<svelte:head>
  <title>Livy: Trail of History - Immersive Historical Tours</title>
  <meta name="description" content="Experience history where it happened with GPS-guided tours, expert narratives, and AI-powered insights." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f8f6f1 0%, #f5f2eb 50%, #f0ede4 100%);
    color: #1a1a1a;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }
  :global(html) { scroll-behavior: smooth; }
  :global(::-webkit-scrollbar) { width: 8px; }
  :global(::-webkit-scrollbar-track) { background: rgba(166,166,166,0.1); }
  :global(::-webkit-scrollbar-thumb) { background: linear-gradient(180deg, #c8a165, #b8956b); border-radius: 4px; }
  :global(nav:not(.main-nav)) { display: none !important; }

  /* Nav */
  .main-nav {
    position: fixed; inset: 0 0 auto 0; z-index: 1000;
    background: rgba(248,246,241,0.85); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(200,161,101,0.2);
    transition: all .3s ease;
  }
  .nav-container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; height: 80px; }
  .logo { display: flex; align-items: center; font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 800; color: #1a1a1a; text-decoration: none; transition: transform .3s; }
  .logo:hover { transform: scale(1.05); }
  .logo-icon { width: 2.5rem; height: 2.5rem; margin-right: .75rem; filter: drop-shadow(0 2px 8px rgba(200,161,101,.3)); }
  .nav-links { display: flex; gap: 3rem; align-items: center; }
  .nav-link {
    background: none; border: 0; color: #1a1a1a; font-size: 1rem; font-weight: 500; cursor: pointer;
    padding: .75rem 1.5rem; border-radius: 50px; letter-spacing: .025em; position: relative;
    transition: all .3s cubic-bezier(.4,0,.2,1);
  }
  .nav-link.active { color: #c8a165; background: rgba(200,161,101,.1); }
  .nav-link:hover { color: #c8a165; background: rgba(200,161,101,.15); transform: translateY(-2px); }
  .nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 50%; width: 0; height: 2px;
    background: linear-gradient(90deg, #c8a165, #d4b26a); transform: translateX(-50%); transition: width .3s;
  }
  .nav-link.active::after, .nav-link:hover::after { width: 80%; }

  /* Hero */
  .hero {
    min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative;
    background: linear-gradient(135deg, rgba(248,246,241,.9) 0%, rgba(245,242,235,.95) 50%, rgba(240,237,228,.9) 100%);
    overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(circle at 25% 25%, rgba(200,161,101,.05) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(166,166,166,.05) 0%, transparent 50%);
    pointer-events: none;
  }
  .hero-content { max-width: 1200px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 2; }
  .hero-columns { display: flex; justify-content: center; align-items: center; margin-bottom: 4rem; gap: 5rem; }
  .roman-column {
    width: 4rem; height: 20rem; border-radius: .5rem;
    background: linear-gradient(180deg, #e5e5e5 0%, #d4d4d4 20%, #a6a6a6 50%, #9ca3af 80%, #8b8b8b 100%);
    box-shadow: inset 0 4px 8px rgba(255,255,255,.3), inset 0 -4px 8px rgba(0,0,0,.1), 0 8px 32px rgba(0,0,0,.1);
    transform: perspective(800px) rotateX(5deg);
    animation: columnFloat 8s ease-in-out infinite;
    position: relative;
  }
  .roman-column:nth-child(1) { animation-delay: 0s; }
  .roman-column:nth-child(3) { animation-delay: 2s; }
  .roman-column::before { content: ''; position: absolute; top: -12px; left: -8px; right: -8px; height: 24px; border-radius: 8px; background: linear-gradient(180deg, #f0f0f0, #d4d4d4); box-shadow: 0 4px 16px rgba(0,0,0,.2); }
  .roman-column::after  { content: ''; position: absolute; bottom: -16px; left: -12px; right: -12px; height: 32px; border-radius: 12px; background: linear-gradient(180deg, #d4d4d4, #a6a6a6); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
  @keyframes columnFloat { 0%,100%{transform:perspective(800px) rotateX(5deg) translateY(0)} 50%{transform:perspective(800px) rotateX(5deg) translateY(-8px)} }
  .hero-logo-container { display: flex; flex-direction: column; align-items: center; }
  .hero-logo-icon { width: 12rem; margin-bottom: 2rem; filter: drop-shadow(0 8px 32px rgba(200,161,101,.3)); }
  .hero-tagline { color: #c8a165; font-size: clamp(1.2rem, 2.5vw, 1.75rem); font-weight: 600; letter-spacing: .5rem; margin-bottom: 3rem; text-transform: uppercase; position: relative; }
  .hero-tagline::before, .hero-tagline::after { content: ''; position: absolute; top: 50%; width: 4rem; height: 2px; background: linear-gradient(90deg, transparent, #c8a165, transparent); }
  .hero-tagline::before { left: -6rem; } .hero-tagline::after { right: -6rem; }
  .hero-subtitle { font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 600; color: #1a1a1a; margin-bottom: 1.5rem; }
  .hero-description { font-size: clamp(1.125rem, 2vw, 1.375rem); color: #6b7280; max-width: 800px; margin: 0 auto 4rem; line-height: 1.8; font-weight: 300; }
  .cta-buttons { display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    background: linear-gradient(135deg, #c8a165 0%, #d4b26a 50%, #e0c575 100%);
    color: #1a1a1a; padding: 1.25rem 3rem; border: none; border-radius: 60px; font-weight: 600; font-size: 1.125rem; cursor: pointer;
    text-decoration: none; display: inline-flex; align-items: center; gap: .75rem; transition: all .4s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 8px 32px rgba(200,161,101,.3), inset 0 1px 0 rgba(255,255,255,.3);
  }
  .btn-primary:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 16px 48px rgba(200,161,101,.4), inset 0 1px 0 rgba(255,255,255,.4); }
  .btn-secondary {
    background: transparent; color: #1a1a1a; border: 2px solid #c8a165; padding: 1.25rem 3rem; border-radius: 60px; font-weight: 600; font-size: 1.125rem; cursor: pointer;
    text-decoration: none; display: inline-flex; align-items: center; gap: .75rem; transition: all .4s cubic-bezier(.4,0,.2,1);
  }
  .btn-secondary:hover { border-color: #d4b26a; transform: translateY(-4px) scale(1.02); box-shadow: 0 16px 48px rgba(200,161,101,.2); }

  /* Sections */
  .section { padding: 8rem 0; position: relative; }
  .section-alternate { background: rgba(255,255,255,.4); }
  .container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
  .section-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; text-align: center; margin-bottom: 1rem; position: relative; }
  .section-title::after { content: ''; position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: linear-gradient(90deg, #c8a165, #d4b26a, #c8a165); border-radius: 2px; }
  .section-subtitle { font-size: 1.25rem; color: #6b7280; text-align: center; margin-bottom: 5rem; max-width: 600px; margin-left: auto; margin-right: auto; }

  /* Tour cards */
  .tours-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 3rem; margin-top: 4rem; }
  .tour-card {
    background: rgba(255,255,255,.8); border-radius: 24px; overflow: hidden; cursor: pointer; backdrop-filter: blur(10px);
    box-shadow: 0 16px 64px rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255,.5); transition: transform .5s cubic-bezier(.4,0,.2,1), box-shadow .5s;
  }
  .tour-card:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 32px 80px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.6); }
  .tour-image { height: 320px; background-size: cover; background-position: center; background-repeat: no-repeat; position: relative; overflow: hidden; }
  .tour-image::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,.3); z-index: 1; }
  .tour-content { padding: 2.5rem; }
  .tour-meta { display: flex; gap: 1.5rem; margin-bottom: 1rem; font-size: .9rem; font-weight: 500; }
  .tour-duration { color: #c8a165; display: flex; align-items: center; gap: .5rem; }
  .tour-location { color: #6b7280; display: flex; align-items: center; gap: .5rem; }
  .tour-title { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; margin-bottom: 1.25rem; }
  .tour-description { color: #4b5563; margin-bottom: 2.5rem; line-height: 1.7; font-size: 1.05rem; }
  .tour-button { background: linear-gradient(135deg, #c8a165, #d4b26a); color: #1a1a1a; padding: 1rem 2rem; border: 0; border-radius: 50px; font-weight: 600; cursor: pointer; transition: transform .3s, box-shadow .3s; display: inline-flex; align-items: center; gap: .75rem; box-shadow: 0 4px 16px rgba(200,161,101,.3); }
  .tour-button:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,161,101,.4); }

  /* About: Papyrus Panel w/ Rods & Laurels */
  .about-papyrus {
    /* Papyrus look */
    background-color: #e3d324;
    background-image: url('/textures/shine-caro.png'); /* put file at: frontend/static/textures/shine-caro.png */
    background-repeat: repeat;
    color: #2a1f14;

    /* Layout */
    max-width: 900px;
    margin: 0 auto;
    padding: 5.5rem clamp(1rem, 3vw, 2rem) 5.5rem; /* extra room for rods */

    /* Style */
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 14px;
    box-shadow: 0 8px 24px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.3);
    line-height: 1.75;
    font-family: Georgia, 'Times New Roman', serif;

    /* For absolute decorations */
    position: relative;
    overflow: visible;
  }
  .about-papyrus::after {
    content: ""; position: absolute; inset: 0; pointer-events: none; border-radius: 14px;
    background:
      radial-gradient(120% 80% at 50% 0%, rgba(0,0,0,.06), transparent 55%),
      radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,.06), transparent 55%);
  }

  /* Scroll rods (top/bottom) */
  .scroll-rod {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: min(760px, 92%);
    max-width: 760px;
    pointer-events: none;
    filter: drop-shadow(0 6px 10px rgba(0,0,0,.2));
    z-index: 3;
  }
  .scroll-rod.top {
    top: -24px;            /* sits just above the parchment */
  }
  .scroll-rod.bottom {
    bottom: -24px;         /* sits just below the parchment */
  }

  /* Corner laurels */
  .laurel-corner {
    position: absolute;
    width: clamp(46px, 6vw, 64px);
    height: auto;
    opacity: 0.18;
    z-index: 2;
    filter: drop-shadow(0 2px 3px rgba(0,0,0,.08));
  }
  .laurel-corner.tl { top: 10px; left: 10px; }
  .laurel-corner.tr { top: 10px; right: 10px; transform: scaleX(-1); }
  .laurel-corner.bl { bottom: 10px; left: 10px; transform: scaleY(-1); }
  .laurel-corner.br { bottom: 10px; right: 10px; transform: scale(-1, -1); }

  .about-title { font-family: 'Playfair Display', serif; font-size: clamp(1.75rem, 4vw, 2.25rem); text-align: center; margin: 0 0 .5rem; position: relative; z-index: 4; }
  .about-kicker { text-align: center; color: #4b3e25; margin: 0 0 1.25rem; position: relative; z-index: 4; }
  .about-outro { margin-top: 1rem; font-weight: 500; position: relative; z-index: 4; }

  /* Laurel divider inside panel */
  .laurel-divider { display: block; width: min(320px, 80%); margin: .25rem auto 1rem; color: #c8a165; position: relative; z-index: 4; }

  .social-links { display: flex; justify-content: center; gap: 2rem; margin-top: 3rem; position: relative; z-index: 4; }
  .social-link {
    display: flex; align-items: center; justify-content: center; width: 60px; height: 60px;
    background: linear-gradient(135deg, #c8a165, #d4b26a); color: #1a1a1a; text-decoration: none; border-radius: 50%;
    font-size: 1.5rem; transition: transform .3s, box-shadow .3s; box-shadow: 0 8px 24px rgba(200,161,101,.3);
  }
  .social-link:hover { transform: translateY(-4px) scale(1.1); box-shadow: 0 12px 32px rgba(200,161,101,.4); }
  .about-papyrus .social-links img { width: 32px; height: 32px; object-fit: contain; }

  /* Cards under papyrus */
  .about-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin: 4rem 0; }
  .about-card { background: rgba(255,255,255,.8); padding: 3rem; border-radius: 20px; box-shadow: 0 12px 40px rgba(0,0,0,.08); backdrop-filter: blur(10px); border: 1px solid rgba(200,161,101,.1); transition: transform .4s, box-shadow .4s; }
  .about-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,.12); }
  .about-card-header { display: flex; align-items: center; margin-bottom: 2rem; }
  .about-card-icon { font-size: 3rem; margin-right: 1.5rem; }
  .about-card-title { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 600; }
  .about-card-content { font-size: 1.125rem; line-height: 1.7; color: #4b5563; }

  .contact-card {
    text-align: center; background: rgba(255,255,255,.9); padding: 4rem 3rem; border-radius: 24px; margin-top: 4rem;
    backdrop-filter: blur(15px); box-shadow: 0 20px 60px rgba(0,0,0,.1); border: 1px solid rgba(200,161,101,.2);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .hero-columns { gap: 3rem; }
    .roman-column { width: 3rem; height: 15rem; }
    .tours-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .nav-container { padding: 0 1rem; height: 70px; }
    .nav-links { gap: 1.5rem; }
    .nav-link { padding: .5rem 1rem; font-size: .9rem; }
    .hero-columns { gap: 2rem; }
    .roman-column { width: 2.5rem; height: 12rem; }
    .hero-tagline::before, .hero-tagline::after { display: none; }
    .cta-buttons { flex-direction: column; align-items: center; }
    .features-grid, .about-grid { grid-template-columns: 1fr; }
    .container { padding: 0 1rem; }
    .section { padding: 4rem 0; }
  }
  @media (max-width: 480px) {
    .hero-columns { display: none; }
    .hero-logo-icon { width: 8rem; }
    .logo-icon { width: 2rem; height: 2rem; }
    .tours-grid { grid-template-columns: 1fr; gap: 2rem; }
    .tour-card, .feature-card, .about-card { margin: 0 1rem; }
  }
</style>

<!-- Nav -->
<nav class="main-nav">
  <div class="nav-container">
    <a href="/" class="logo">
      <img src={livyNavbarLogo} alt="Livy Logo" class="logo-icon" />
      LIVY
    </a>
    <div class="nav-links">
      <button class="nav-link" class:active={activeSection === 'home'} on:click={() => scrollToSection('home')}>Home</button>
      <button class="nav-link" class:active={activeSection === 'tours'} on:click={() => scrollToSection('tours')}>Tours</button>
      <button class="nav-link" class:active={activeSection === 'about'} on:click={() => scrollToSection('about')}>About</button>
      <a href="/map" class="nav-link">Map</a>
    </div>
  </div>
</nav>

<!-- Hero -->
<section id="home" class="hero">
  <div class="hero-content">
    <div class="hero-columns">
      <div class="roman-column"></div>
      <div class="hero-logo-container">
        <img src={livyHeroLogo} alt="Livy: Trail of History" class="hero-logo-icon" />
        <div class="hero-tagline">The Trail of History</div>
      </div>
      <div class="roman-column"></div>
    </div>

    <h2 class="hero-subtitle">History Where You Stand</h2>
    <p class="hero-description">
      Experience the past like never before with immersive, location-aware historical tours that bring stories to life
      exactly where they happened. Walk through time with GPS precision, expert narratives, and AI-enhanced insights.
    </p>

    <div class="cta-buttons">
      <button class="btn-primary" on:click={() => scrollToSection('tours')}>🗺️ Explore Tours</button>
      <button class="btn-secondary" on:click={() => scrollToSection('about')}>📖 Discover More</button>
    </div>
  </div>
</section>

<!-- Tours -->
<section id="tours" class="section">
  <div class="container">
    <h2 class="section-title">Featured Journeys</h2>
    <p class="section-subtitle">
      Step into history with our carefully curated tours, each a gateway to understanding the events and people that shaped our world.
    </p>

    <div class="tours-grid">
      <div class="tour-card">
        <div class="tour-image" style={`background-image: url('${lexingtonTourImage}')`}></div>
        <div class="tour-content">
          <div class="tour-meta">
            <span class="tour-duration">⏱️ 75 minutes</span>
            <span class="tour-location">📍 Lexington, KY</span>
          </div>
          <h3 class="tour-title">Lexington Heritage Loop</h3>
          <p class="tour-description">
            Journey through the heart of Civil War‑era Lexington: pivotal decisions, contested streets, and preserved architecture that tell America’s defining story.
          </p>
          <button class="tour-button">🚶‍♀️ Begin Your Journey</button>
        </div>
      </div>

      <div class="tour-card">
        <div class="tour-image" style={`background-image: url('${louisvilleTourImage}')`}></div>
        <div class="tour-content">
          <div class="tour-meta">
            <span class="tour-duration">⏱️ 60 minutes</span>
            <span class="tour-location">📍 Louisville, KY</span>
          </div>
          <h3 class="tour-title">Louisville Riverfront Stories</h3>
          <p class="tour-description">
            Follow the Ohio’s currents through steamboats, trade, and the communities that built a gateway to the American frontier.
          </p>
          <button class="tour-button">⛵ Embark on Adventure</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features -->
<section class="section section-alternate">
  <div class="container">
    <h2 class="section-title">Experience History Differently</h2>
    <p class="section-subtitle">Cutting‑edge tech meets timeless storytelling.</p>

    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">📍</span>
        <h3 class="feature-title">Precision Location Awareness</h3>
        <p class="feature-description">See the stories that unfolded right where you stand.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">📱</span>
        <h3 class="feature-title">Complete Offline Access</h3>
        <p class="feature-description">Download tours and explore without connectivity concerns.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🤖</span>
        <h3 class="feature-title">AI‑Powered Discovery</h3>
        <p class="feature-description">Ask about any stop and get context grounded in sources.</p>
      </div>
    </div>
  </div>
</section>

<!-- About (Papyrus + Rods + Corner Laurels + Cards + Contact) -->
<section id="about" class="section">
  <div class="container">
    <div class="about-papyrus">
      <!-- Decorative rods -->
      <img src={scrollTop} alt="" class="scroll-rod top" aria-hidden="true" />
      <img src={scrollBottom} alt="" class="scroll-rod bottom" aria-hidden="true" />

      <!-- Corner laurels -->
      <img src={laurelCorner} alt="" class="laurel-corner tl" aria-hidden="true" />
      <img src={laurelCorner} alt="" class="laurel-corner tr" aria-hidden="true" />
      <img src={laurelCorner} alt="" class="laurel-corner bl" aria-hidden="true" />
      <img src={laurelCorner} alt="" class="laurel-corner br" aria-hidden="true" />

      <!-- Laurel divider -->
      <svg class="laurel-divider" viewBox="0 0 600 60" aria-hidden="true">
        <path d="M300 30h-90" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
        <path d="M300 30h90"  stroke="currentColor" stroke-width="4" stroke-linecap="round" />
        <path d="M190 30c-18-10-28-26-30-44 16 6 31 16 44 30-6 5-9 9-14 14z" fill="currentColor" />
        <path d="M210 30c-16-8-24-20-26-34 13 5 25 12 36 22-4 5-6 8-10 12z" fill="currentColor" />
        <path d="M410 30c18-10 28-26 30-44-16 6-31 16-44 30 6 5 9 9 14 14z" fill="currentColor" />
        <path d="M390 30c16-8 24-20 26-34-13 5-25 12-36 22 4 5 6 8 10 12z" fill="currentColor" />
      </svg>

      <h2 class="about-title">About Livy</h2>
      <p class="about-kicker"><em>Inspired by a historian who preserved the memory of a nation.</em></p>

      <p>
        Our name, <strong>Livy</strong>, honors <em>Titus Livius</em> (59&nbsp;BC – AD&nbsp;17), the Roman historian
        whose monumental <em>Ab&nbsp;Urbe&nbsp;Condita</em> (“From the Founding of the City”) traced Rome’s story from
        its legendary beginnings to the age of Augustus.
      </p>
      <p>
        Born in Patavium (modern Padua), Livy wrote with eloquence and moral clarity, celebrating civic duty, resilience,
        and the lessons of the past. He aimed to safeguard memory; we aim to do the same—helping you explore the places
        where history happened with GPS‑guided tours, audio storytelling, and AI‑assisted context.
      </p>
      <p class="about-outro">
        Livy the historian connected people to the stories that shaped them. <br />
        <strong>Livy the app</strong> brings those stories to where you stand.
      </p>

      <div class="cta-buttons" style="margin-top:1.5rem">
        <a href="mailto:hello@livy.app" class="btn-primary">📧 Connect With Us</a>
        <button class="btn-secondary" on:click={() => scrollToSection('tours')}>🏛️ Begin Exploring</button>
      </div>

      <div class="social-links">
        <a href="https://apps.apple.com/app/livy-trail-of-history" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Download Livy on the App Store">
          <img src={appleIcon} alt="Apple App Store" />
        </a>
        <a href="https://x.com/livyhistory" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Follow Livy on X">
          <img src={xIcon} alt="X" />
        </a>
        <a href="https://instagram.com/livytrailofhistory" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Follow Livy on Instagram">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="about-grid">
      <div class="about-card">
        <div class="about-card-header">
          <span class="about-card-icon">🎯</span>
          <h3 class="about-card-title">Our Mission</h3>
        </div>
        <div class="about-card-content">
          To democratize historical exploration and make the profound stories of our past accessible, engaging, and deeply meaningful for everyone.
        </div>
      </div>
      <div class="about-card">
        <div class="about-card-header">
          <span class="about-card-icon">🏛️</span>
          <h3 class="about-card-title">Our Vision</h3>
        </div>
        <div class="about-card-content">
          A world where every street corner becomes a classroom, every building tells its story, and every person can walk through time.
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="contact-card">
      <h3 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem;">
        Crafted by History Enthusiasts
      </h3>
      <p style="font-size: 1.25rem; line-height: 1.7; color: #4b5563; max-width: 700px; margin: 0 auto 3rem;">
        Livy is built by historians, technologists, designers, and storytellers who share a passion for bringing the past to life.
      </p>
      <div class="cta-buttons">
        <a href="mailto:hello@livy.app" class="btn-primary">📧 Connect With Us</a>
        <button class="btn-secondary" on:click={() => scrollToSection('tours')}>🏛️ Begin Exploring</button>
      </div>
    </div>
  </div>
</section>

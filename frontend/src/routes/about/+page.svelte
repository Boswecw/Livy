<script lang="ts">
    // Social icons
    import appleIcon from '$lib/assets/icons/apple.svg';
    import xIcon from '$lib/assets/icons/x.svg';
    import instagramIcon from '$lib/assets/icons/instagram.svg';
  
    // Decorative SVGs
    import scrollTop from '$lib/assets/decor/scroll-top.svg';
    import scrollBottom from '$lib/assets/decor/scroll-bottom.svg';
    import laurelCorner from '$lib/assets/decor/laurel-corner.svg';
  </script>
  
  <svelte:head>
    <title>About — Livy: Trail of History</title>
    <meta
      name="description"
      content="Learn the story behind Livy — inspired by Titus Livius — and our mission to bring history to where you stand."
    />
  </svelte:head>
  
  <style>
    /* Global tweaks */
    :global(body) {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, #f8f6f1 0%, #f5f2eb 50%, #f0ede4 100%);
    }
  
    .about-container {
      position: relative;
      text-align: center;
      padding: 4rem 2rem;
      max-width: 900px;
      margin: 0 auto;
    }
  
    .papyrus {
      background-color: #e3d324;
      background-image: url('/shine-caro.png'); /* papyrus texture */
      padding: 3rem;
      border: 2px solid #c4a000;
      font-family: 'Garamond', 'Times New Roman', serif;
      font-size: 1.15rem;
      line-height: 1.7;
      position: relative;
      z-index: 2;
    }
  
    /* Scroll rods */
    .scroll-rod {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 700px;
      z-index: 3;
    }
    .scroll-rod.top {
      top: 0;
      transform: translate(-50%, -50%);
    }
    .scroll-rod.bottom {
      bottom: 0;
      transform: translate(-50%, 50%);
    }
  
    /* Laurels */
    .laurel {
      position: absolute;
      width: 60px;
      height: 60px;
      opacity: 0.15;
      z-index: 1;
    }
    .laurel.top-left {
      top: 10px;
      left: 10px;
    }
    .laurel.top-right {
      top: 10px;
      right: 10px;
      transform: scaleX(-1);
    }
    .laurel.bottom-left {
      bottom: 10px;
      left: 10px;
      transform: scaleY(-1);
    }
    .laurel.bottom-right {
      bottom: 10px;
      right: 10px;
      transform: scale(-1, -1);
    }
  
    /* Social links */
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1.4rem;
      margin-top: 1.6rem;
    }
    .social-link {
      display: grid;
      place-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c8a165, #d4b26a);
      box-shadow: 0 8px 24px rgba(200, 161, 101, 0.3);
    }
    .social-link img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  </style>
  
  <section class="about-container">
    <!-- Scroll rod top -->
    <img src={scrollTop} alt="" class="scroll-rod top" />
  
    <!-- Laurels -->
    <img src={laurelCorner} alt="" class="laurel top-left" />
    <img src={laurelCorner} alt="" class="laurel top-right" />
    <img src={laurelCorner} alt="" class="laurel bottom-left" />
    <img src={laurelCorner} alt="" class="laurel bottom-right" />
  
    <!-- Papyrus section -->
    <div class="papyrus">
      <h2>About Livy</h2>
      <p>
        Named after <em>Titus Livius</em>, the Roman historian whose monumental work
        <em>Ab Urbe Condita</em> preserved the memory of Rome’s rise, Livy is our inspiration
        for preserving and sharing the stories that shape our world.
      </p>
      <p>
        This project carries forward Livy’s legacy in the digital age — blending historical
        scholarship with immersive technology to engage, educate, and inspire.
      </p>
  
      <div class="social-links">
        <a href="https://apps.apple.com/app/livy-trail-of-history" class="social-link">
          <img src={appleIcon} alt="Apple App Store" />
        </a>
        <a href="https://x.com/livyhistory" class="social-link">
          <img src={xIcon} alt="X" />
        </a>
        <a href="https://instagram.com/livytrailofhistory" class="social-link">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </div>
  
    <!-- Scroll rod bottom -->
    <img src={scrollBottom} alt="" class="scroll-rod bottom" />
  </section>
  
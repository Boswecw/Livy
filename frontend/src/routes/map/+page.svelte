<script lang="ts">
    import Map from '$lib/components/Map.svelte';
  </script>
  
  <svelte:head>
    <title>Map - Livy</title>
    <link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
  </svelte:head>
  
  <div class="space-y-6">
    <h1 class="font-serif text-3xl text-livy-black">Historical Map</h1>
    <Map />
  </div>
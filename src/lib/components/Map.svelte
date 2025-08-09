<script lang="ts">
    import { onMount } from 'svelte';
    import maplibregl from 'maplibre-gl';
    
    export let center: [number, number] = [-84.5, 38.05]; // Lexington, KY
    export let zoom: number = 14;
    
    let mapContainer: HTMLDivElement;
    let map: maplibregl.Map;
    
    onMount(() => {
      map = new maplibregl.Map({
        container: mapContainer,
        style: 'https://demotiles.maplibre.org/style.json',
        center,
        zoom
      });
      
      // Add user location control
      map.addControl(new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));
      
      return () => map.remove();
    });
  </script>
  
  <div bind:this={mapContainer} class="w-full h-96 rounded-lg overflow-hidden"></div>
  
  <style>
    :global(.maplibregl-map) {
      font-family: inherit;
    }
  </style>
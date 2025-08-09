<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import "../app.css";

  // Declare params so Svelte doesn't warn
  export let params: Record<string, string>;
</script>

<div class="min-h-screen bg-gradient-to-b from-stone-900 via-stone-800 to-amber-900">
  <slot />
</div>

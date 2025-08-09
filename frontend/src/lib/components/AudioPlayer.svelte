<script lang="ts">
    export let audioUrl: string;
    export let title: string;
    
    let audio: HTMLAudioElement;
    let playing = false;
    let currentTime = 0;
    let duration = 0;
    
    function togglePlay() {
      if (playing) {
        audio.pause();
      } else {
        audio.play();
      }
    }
    
    function updateTime() {
      currentTime = audio.currentTime;
      duration = audio.duration || 0;
    }
  </script>
  
  <div class="bg-livy-black text-livy-parchment p-4 rounded-lg">
    <audio 
      bind:this={audio} 
      src={audioUrl} 
      on:play={() => playing = true}
      on:pause={() => playing = false}
      on:timeupdate={updateTime}
      on:loadedmetadata={updateTime}
    ></audio>
    
    <div class="flex items-center gap-4">
      <button 
        on:click={togglePlay}
        class="bg-livy-gold p-2 rounded-full hover:bg-opacity-80"
      >
        {playing ? '⏸️' : '▶️'}
      </button>
      
      <div class="flex-1">
        <h4 class="font-medium">{title}</h4>
        <div class="text-sm text-livy-stone">
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
          {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  </div>
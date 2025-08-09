<script lang="ts">
    export let tour: {
      id: string;
      title: string;
      description: string;
      duration: number;
      coverImage: string;
      city: string;
    };
  </script>
  
  <!-- Roman temple-inspired card design -->
  <div class="group bg-white rounded-lg shadow-lg overflow-hidden border border-livy-stone/20 hover:shadow-xl transition-all duration-300">
    <!-- Image with overlay -->
    <div class="relative h-48 overflow-hidden">
      <img 
        src={tour.coverImage} 
        alt={tour.title} 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <!-- Gradient overlay for text readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-livy-black/60 to-transparent"></div>
      
      <!-- Duration badge -->
      <div class="absolute top-4 right-4 bg-livy-black/80 text-livy-parchment px-3 py-1 rounded-full text-sm font-medium">
        {tour.duration} min
      </div>
      
      <!-- City badge -->
      <div class="absolute bottom-4 left-4 text-livy-parchment">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-livy-gold rounded-full"></div>
          <span class="text-sm font-medium">{tour.city}</span>
        </div>
      </div>
    </div>
    
    <!-- Content with Roman proportions -->
    <div class="p-6">
      <!-- Classical title -->
      <h3 class="font-serif text-xl font-bold text-livy-black mb-3 group-hover:text-livy-gold transition-colors">
        {tour.title}
      </h3>
      
      <!-- Description -->
      <p class="text-livy-stone leading-relaxed mb-6 line-clamp-3">
        {tour.description}
      </p>
      
      <!-- Action area with Roman architectural elements -->
      <div class="flex items-center justify-between pt-4 border-t border-livy-stone/20">
        <!-- Decorative element -->
        <div class="flex items-center space-x-1">
          <div class="w-1 h-6 bg-livy-gold rounded-full"></div>
          <div class="w-1 h-4 bg-livy-stone rounded-full"></div>
          <div class="w-1 h-6 bg-livy-gold rounded-full"></div>
        </div>
        
        <!-- CTA Button -->
        <a 
          href="/tours/{tour.id}" 
          class="group-hover:bg-livy-gold bg-livy-black text-livy-parchment px-6 py-2 rounded font-medium transition-all duration-200 hover:shadow-md"
        >
          Begin Journey
        </a>
      </div>
    </div>
  </div>
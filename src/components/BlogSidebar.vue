<template>
  <aside
    class="w-80 h-ful bg-esen-purple flex-shrink-0"
  >
    <!-- Autor -->
    <div class="text-center pt-5 border-b-2 pb-4">
      <img
        :src="selectedPost.authorImage"
        class="w-28 h-28 object-cover mx-auto rounded-lg"
      />

      <h2 class="mt-4 text-xl font-spartan font-bold text-white">
        {{ selectedPost.author }}
      </h2>

      <p class="text-white font-google">
        {{ selectedPost.career }}
      </p>
    </div>

    <!-- Otros blogs -->
    <div class="mt-6 ml-4">
      <h3 class="font-bold font-spartan text-xl mb-4 text-white">
        Otros posts
      </h3>

      <div class="space-y-2 font-google">
        <button
          v-for="post in posts"
          :key="post.id"
          @click="$emit('change-post', post)"
          class="w-[285px] text-left p-3 rounded-lg transition text-white"
          :class="
            selectedPost.id === post.id
              ? 'bg-esen-blue border border-esen-blue text-white font-spartan text-lg'
              : 'hover:bg-esen-blue/60'
          "
        >
          {{ post.title }}
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  posts: Array,
  selectedPost: Object
})

defineEmits(['change-post'])
</script>

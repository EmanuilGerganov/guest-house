<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    <div class="relative h-64 overflow-hidden">
      <img
        :src="image"
        :alt="$t(title)"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      >
    </div>
    <div class="p-8">
      <div class="flex items-center gap-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="text-paragraph font-medium">{{ $t(time) }}</span>
      </div>
      <h3 class="text-2xl font-bold mb-4 text-heading">
        {{ $t(title) }}
      </h3>
      <p class="text-paragraph font-light leading-[1.9em]">
        {{ $t(description) }}
      </p>
    </div>
  </div>
</template>

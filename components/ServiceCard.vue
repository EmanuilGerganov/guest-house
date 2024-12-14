<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- <div class="rounded-4xl shadow-sm hover:shadow-lg transition-shadow duration-300"> -->
  <div>
    <div class="fill-secondary mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        width="50"
        viewBox="0 0 512 512"
      >
        <path :d="icon" />
      </svg>
    </div>
    <div class="flex gap-6">
      <div>
        <h3 class="font-bold text-xl mb-2.5 text-heading">
          {{ $t(title) }}
        </h3>
        <p class="text-paragraph text-sm font-light leading-[2em]">
          {{ $t(description) }}
        </p>
      </div>
    </div>
  </div>
</template>

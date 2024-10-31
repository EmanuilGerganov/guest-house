<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from './Button.vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)
const menuItems = ['Начало', 'Настаняване', 'Галерия', 'Услуги', 'Контакти']
const { locale } = useI18n()

const currentLanguage = computed(() => locale.value)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function toggleLanguage() {
  locale.value = locale.value === 'bg' ? 'en' : 'bg'
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const hamburgerPath
  = 'M3 6h18L3 6zm0 6h18L3 12zm0 6h18L3 18zm0 0h18L3 18zm0-6h18L3 12zm0-6h18L3 6z'
const housePath
  = 'M3 12l9-9 9 9M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6'

const menuIconPath = computed(() => {
  return isMenuOpen.value ? housePath : hamburgerPath
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[scrolled ? 'bg-white shadow-md' : 'bg-transparent']"
  >
    <div
      class="flex justify-between items-center h-16 md:h-24 px-6 max-w-6xl mx-auto py-5"
    >
      <div id="logo">
        <div
          class="text-2xl uppercase font-bold" :class="[
            scrolled ? 'text-gray-800' : 'text-white',
          ]"
        >
          Grancharova
        </div>
      </div>
      <div
        id="language-selector"
        class="md:order-3"
      >
        <button
          :class="[scrolled ? 'text-gray-800' : 'text-white']"
          @click="toggleLanguage"
        >
          {{ currentLanguage.toUpperCase() }}
        </button>
      </div>
      <!-- Desktop menu -->
      <div
        id="menu"
        class="hidden md:block md:order-2"
      >
        <ul class="flex gap-4 text-lg font-semibold">
          <li
            v-for="item in menuItems"
            :key="item"
          >
            <a
              :href="`#${item.toLowerCase()}`"
              class="hover:text-green-500 transition-colors" :class="[
                scrolled ? 'text-gray-800' : 'text-white',
              ]"
            >{{ item }}</a>
          </li>
        </ul>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden order-2 relative w-6 h-6 focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-all duration-300"
          :class="scrolled ? 'text-gray-800' : 'text-white'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            :d="menuIconPath"
            class="transition-all duration-300"
          />
        </svg>
      </button>
      <!-- Mobile menu -->
      <div
        :class="[
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
        class="w-64 bg-green-800 text-white p-6 md:hidden fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30"
      >
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">
            Menu
          </h2>
          <button
            class="text-white"
            @click="isMenuOpen = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul class="space-y-4">
          <li
            v-for="item in menuItems"
            :key="item"
          >
            <a
              :href="`#${item.toLowerCase()}`"
              class="block py-2 hover:bg-green-700 transition-colors rounded px-2"
            >{{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- Overlay -->
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
        @click="isMenuOpen = false"
      />
      <div
        id="book-now"
        class="hidden md:block md:order-4"
      >
        <Button>
          {{ $t("book") }}
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any additional styles here if needed */
.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.3s ease-in-out;
}

.rotate-enter-from,
.rotate-leave-to {
  transform: rotate(180deg);
}
</style>

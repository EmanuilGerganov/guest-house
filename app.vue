<script setup>
import { computed, ref } from 'vue'

const checkInDate = ref('')
const checkOutDate = ref('')
const adults = ref(1)
const children = ref(0)

const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})
</script>

<template>
  <div>
    <Header />
    <main
      class="font-sans"
    >
      <section
        id="hero"
        class="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="assets/hero.jpg"
          alt="Hero image"
          class="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div
          class="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12"
        >
          <div
            id="hero-content"
            class="text-white lg:text-left lg:max-w-[500px]"
          >
            <h1 class="text-[34px] md:text-[64px] leading-[34px] md:leading-[64px] font-bold mb-4">
              {{ $t("house_name") }}
            </h1>
            <p class="mb-6 text-lg">
              <!-- {{ $t("tagline") }} -->
              Our slopes are the perfect place to practice your skills or take on a new challenge. Plus, our charming town is the perfect place to relax after a long day on the slopes.
            </p>
          </div>
          <div
            id="hero-booking"
            class="bg-white rounded-3xl shadow-xl p-6 md:p-[50px] w-full max-w-md"
          >
            <h2
              class="text-[26px] font-bold tracking-[1px] leading-[32.5px] text-gray-800 mb-4 uppercase"
            >
              {{ $t("find_availability") }}
            </h2>
            <p class="leading-[1.9em] text-paragraph font-light mb-8">
              {{ $t("availability_description") }}
            </p>
            <form>
              <div class="space-y-4">
                <div class="relative">
                  <input
                    id="check-in-date"
                    v-model="checkInDate"
                    type="date"
                    class="h-14 peer w-full px-3 py-2 text-gray-700  border
                     border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    :min="today"
                  >
                  <label
                    for="check-in-date"
                    class="absolute left-3 -top-2.5 bg-white px-1 text-sm
                     text-gray-600 transition-all peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5
                        peer-focus:text-sm peer-focus:text-primary-500"
                  >
                    {{ $t("check_in_date") }}
                  </label>
                </div>
                <div class="relative mb-4">
                  <input
                    id="check-out-date"
                    v-model="checkOutDate"
                    type="date"
                    class="h-14 peer w-full px-3 py-2 text-gray-700  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    :min="today"
                  >
                  <label
                    for="check-out-date"
                    class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
                  >
                    {{ $t("check_out_date") }}
                  </label>
                </div>
                <div class="flex gap-4">
                  <div class="relative flex-1">
                    <label
                      for="adults"
                      class=" left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
                    >
                      {{ $t("adults") }}
                    </label>
                    <input
                      id="adults"
                      v-model="adults"
                      type="number"
                      min="1"
                      max="10"
                      class="h-14 peer w-full px-3 py-2 text-gray-700
                        border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                  </div>
                  <div class="relative flex-1">
                    <label
                      for="children"
                      class="left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
                    >
                      {{ $t("child") }}
                    </label>
                    <input
                      id="children"
                      v-model="children"
                      type="number"
                      min="0"
                      max="10"
                      class="h-14 peer w-full px-3 py-2 text-gray-700
                        border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                  </div>
                </div>
              </div>
              <Button class="w-full mt-6 py-2.5">
                {{ $t("find_availability") }}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section id="video">
        <div
          class="max-w-6xl mx-auto px-6 lg:px-8 py-16
           flex flex-col lg:flex-row gap-12"
        >
          <img src="assets/house.jpg" alt="Video" class="w-full lg:w-2/3 h-full object-cover order-2 lg:order-1">
          <div class="order-1 lg:order-2">
            <h2 class="text-4xl font-extrabold mb-4 uppercase text-heading">
              Reconnect with <span class="text-secondary">nature</span>
            </h2>
            <div class="w-14 border-2 border-black rounded-md mb-[18px]" />
            <div class="flex items-center">
              <p class="leading-[1.9em] text-paragraph font-light">
                Spend your vacation at a chalet! These cozy, rustic cabins offer all the peace and quiet you need to relax and recharge. A chalet is the perfect place to escape.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- <section id="rooms">
        <h2 class="text-4xl font-bold mb-4">
          {{ $t("rooms_title") }}
        </h2>
      </section> -->
      <section
        id="about"
        class="max-w-6xl mx-auto px-6 lg:px-8 lg:py-16"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-8">
          <div class="flex items-center">
            <h2 class="text-4xl font-bold">
              OUR <span class="text-secondary">GALLERY</span>
            </h2>
          </div>
          <div class="flex items-center">
            <p class="leading-[1.9em] text-paragraph font-light">
              Check out our latest video about some of the best winter vacation
              destinations! From skiing in the Rockies to soaking up the sun in
              the Caribbean, we’ve got you covered.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="aspect-square bg-gray-200" />
          <div class="aspect-square bg-gray-200" />
          <div class="aspect-square bg-gray-200" />
        </div>
      </section>
      <section id="activities">
        <div
          class="max-w-6xl mx-auto px-6 lg:px-8 py-16
           flex flex-col lg:flex-row gap-12"
        >
          <div class="w-full lg:w-1/2">
            <h2 class="text-4xl font-bold mb-12">
              A perfect way to escape the <span class="text-secondary">winter</span> blues!
            </h2>
            <p class="leading-[1.9em] text-paragraph font-light mb-10">
              Check out our latest video about some of the best winter vacation
              destinations! From skiing in the Rockies to soaking up the sun in
              the Caribbean, we’ve got you covered.
            </p>
            <div>
              <div class="flex gap-4 mb-5 border-b border-gray-200 pb-5 border-solid">
                <div class="fill-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 512 512">
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2.5">
                    Location
                  </h3>
                  <p class="text-paragraph text-sm font-light mb-4 leading-[2em]">
                    This place is located in the heart of the slopes. This will give you easier access to the slopes and make it easier to get lessons.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 mb-5 border-b border-gray-200 pb-5 border-solid">
                <div class="fill-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" height="36" width="45" viewBox="0 0 576 512">
                    <path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2.5">
                    Enhanced Clean
                  </h3>
                  <p class="text-paragraph text-sm font-light mb-4 leading-[2em]">
                    We work hard to ensure that your ski resort or vacation home is clean and ready for your next visit.
                  </p>
                </div>
              </div>
              <div class="flex gap-4 mb-5">
                <div class="fill-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 512 512">
                    <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold mb-2.5">
                    Self check-in
                  </h3>
                  <p class="text-paragraph text-sm font-light mb-4 leading-[2em]">
                    This ski vacation self check in is perfect for those who love to ski! With all of the necessary supplies at your fingertips, you'll be able to hit the slopes as soon as you arrive!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="assets/ski.jpg" alt="Activities" class="w-full lg:w-1/2 h-full object-cover">
        </div>
      </section>
      <section id="services">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
          <img src="assets/activity.jpg" alt="Activities" class="w-full lg:w-1/2 h-full object-cover">
          <div class="w-full lg:w-1/2">
            <h2 class="text-4xl font-bold mb-4">
              A winter <span class="text-secondary">ski</span> vacation that the whole family can enjoy
            </h2>
            <p class="leading-[1.9em] text-paragraph font-light">
              Check out our latest video about some of the best winter vacation
              destinations! From skiing in the Rockies to soaking up the sun in
              the Caribbean, we’ve got you covered.
            </p>
          </div>
        </div>
      </section>
      <section id="vacation-services">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <h2 class="text-4xl font-bold mb-4 uppercase">
            Vacation <span class="text-secondary">services</span>
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
            <div class="aspect-square bg-gray-200" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: transparent;
}

input[type="date"]:focus::-webkit-datetime-edit-text,
input[type="date"]:focus::-webkit-datetime-edit-month-field,
input[type="date"]:focus::-webkit-datetime-edit-day-field,
input[type="date"]:focus::-webkit-datetime-edit-year-field,
input[type="date"]:not(:placeholder-shown)::-webkit-datetime-edit-text,
input[type="date"]:not(:placeholder-shown)::-webkit-datetime-edit-month-field,
input[type="date"]:not(:placeholder-shown)::-webkit-datetime-edit-day-field,
input[type="date"]:not(:placeholder-shown)::-webkit-datetime-edit-year-field {
  color: #374151;
}
</style>

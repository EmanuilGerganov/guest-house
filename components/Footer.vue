<template>
  <footer
    id="footer"
    class="bg-white border-t border-gray-200 mt-16"
  >
    <div
      id="top-footer"
      class="flex flex-col md:flex-row py-16 gap-12 px-6 max-w-6xl mx-auto justify-between"
    >
      <div class="flex-1">
        <address class="not-italic">
          <h5 class="text-4xl font-bold mb-8 uppercase text-heading">
            {{ $t('contacts') }}
          </h5>
          <div class="space-y-4 text-paragraph">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="font-semibold text-lg">
                0888 123 456
              </div>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>grancharova@gmail.com</div>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>ул. "Струма" 2, гр. Банско, България</div>
            </div>
          </div>
        </address>
      </div>
      <div class="flex-1">
        <h4 class="text-4xl font-bold mb-8 uppercase text-heading">
          {{ $t('newsletter') }}
        </h4>
        <p class="text-paragraph mb-6 leading-[1.9em] font-light">
          {{ $t('newsletter_description') }}
        </p>
        <form class="space-y-4">
          <div class="relative">
            <input
              type="email"
              placeholder="Електронна поща"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
          </div>
          <button
            type="submit"
            class="w-full md:w-auto bg-black text-white font-bold px-8 py-3 rounded-4xl hover:bg-opacity-80 transition-all duration-300"
          >
            {{ $t('send') }}
          </button>
        </form>
      </div>
    </div>
    <div
      id="bottom-footer"
      class="border-t border-gray-200 py-6"
    >
      <div class="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
        © {{ new Date().getFullYear() }} Grancharova Guest House. {{ $t('all_rights_reserved') }}
      </div>
    </div>
  </footer>
</template>

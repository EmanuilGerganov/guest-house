export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'bg',
  fallbackLocale: 'en',
  messages: {
    bg: {
      house_name: 'Грънчарова Къща за Гости',
      welcome: 'Добре дошли',
      home: 'Начало',
      rooms: 'Стаи',
      services: 'Услуги',
      contacts: 'Контакти',
      book_now: 'Резервация',
      tagline: 'Спокойна почивка в уютна и красива къща. В центъра на Банско и близо до гарата. Апартаменти за 2-4 човека. Закуска.',
      book: 'Резервирай',
      find_availability: 'Запази дата',
      availability_description: 'Моля, въведете датата за която желаете да направите резервация.',
      check_in_date: 'Дата на пристигане',
      check_out_date: 'Дата на напускане',
      adults: 'Възрастни',
      child: 'Деца',
    },
    en: {
      house_name: 'Grancharova Guest House',
      welcome: 'Welcome',
      home: 'Home',
      rooms: 'Rooms',
      services: 'Services',
      contacts: 'Contacts',
      book_now: 'Book Now',
      find_availability: 'Find availability',
      availability_description: 'Please enter the date you wish to make a reservation for.',
      tagline: 'A peaceful retreat in a cozy and beautiful house',
      book: 'Book now',
      check_in_date: 'Check-in date',
      check_out_date: 'Check-out date',
      adults: 'Adults',
      child: 'Children',
    },
  },
}))

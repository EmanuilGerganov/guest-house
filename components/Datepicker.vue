<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  id: String,
  placeholder: {
    type: String,
    default: 'Select a date',
  },
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD',
  },
})

const emit = defineEmits(['update:modelValue'])

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const showDatepicker = ref(false)
const datepickerValue = ref('')
const month = ref(0)
const year = ref(0)
const no_of_days = ref([])
const blankdays = ref([])

function initDate() {
  const today = props.modelValue
    ? new Date(Date.parse(props.modelValue))
    : new Date()
  month.value = today.getMonth()
  year.value = today.getFullYear()
  datepickerValue.value = formatDateForDisplay(today)
}

function isSelectedDate(date) {
  const d = new Date(year.value, month.value, date)
  return datepickerValue.value === formatDateForDisplay(d)
}

function isToday(date) {
  const today = new Date()
  const d = new Date(year.value, month.value, date)
  return today.toDateString() === d.toDateString()
}

function getDateValue(date) {
  const selectedDate = new Date(year.value, month.value, date)
  datepickerValue.value = formatDateForDisplay(selectedDate)
  emit('update:modelValue', formatDateForDisplay(selectedDate))
  showDatepicker.value = false
}

function formatDateForDisplay(date) {
  const formattedDay = DAYS[date.getDay()]
  const formattedDate = (`0${date.getDate()}`).slice(-2)
  const formattedMonth = (`0${date.getMonth() + 1}`).slice(-2)
  const formattedYear = date.getFullYear()

  if (props.dateFormat === 'DD-MM-YYYY') {
    return `${formattedDate}-${formattedMonth}-${formattedYear}`
  }
  if (props.dateFormat === 'YYYY-MM-DD') {
    return `${formattedYear}-${formattedMonth}-${formattedDate}`
  }
  if (props.dateFormat === 'D d M, Y') {
    return `${formattedDay} ${formattedDate} ${MONTH_NAMES[
      date.getMonth()
    ].substring(0, 3)} ${formattedYear}`
  }
  return `${formattedDay} ${formattedDate} ${
    MONTH_NAMES[date.getMonth()]
  } ${formattedYear}`
}

function getNoOfDays() {
  const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
  const dayOfWeek = new Date(year.value, month.value).getDay()
  const blankdaysArray = []
  for (let i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i)
  }
  const daysArray = []
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i)
  }
  blankdays.value = blankdaysArray
  no_of_days.value = daysArray
}

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      initDate()
    }
  },
)

onMounted(() => {
  initDate()
  getNoOfDays()
})
</script>

<template>
  <div class="relative">
    <label
      :for="id"
      class="block text-sm font-medium text-gray-700 mb-1"
    >{{
      label
    }}</label>
    <div class="relative">
      <input
        :id="id"
        type="text"
        :value="modelValue"
        readonly
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="showDatepicker = true"
      >
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      v-show="showDatepicker"
      class="absolute z-10 w-64 mt-2 bg-white rounded-lg shadow-lg"
      @click="showDatepicker = false"
    >
      <div class="p-2">
        <div class="flex items-center justify-between mb-2">
          <div>
            <span class="text-lg font-bold text-gray-800">{{
              MONTH_NAMES[month]
            }}</span>
            <span class="ml-1 text-lg font-normal text-gray-600">{{
              year
            }}</span>
          </div>
          <div>
            <button
              type="button"
              class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
              :class="{ 'cursor-not-allowed opacity-25': month === 0 }"
              :disabled="month === 0"
              @click="
                month--;
                getNoOfDays();
              "
            >
              <svg
                class="h-6 w-6 text-gray-500 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
              :class="{ 'cursor-not-allowed opacity-25': month === 11 }"
              :disabled="month === 11"
              @click="
                month++;
                getNoOfDays();
              "
            >
              <svg
                class="h-6 w-6 text-gray-500 inline-flex"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap mb-3 -mx-1">
          <template
            v-for="(day, i) in DAYS"
            :key="i"
          >
            <div
              style="width: 14.26%"
              class="px-1"
            >
              <div class="text-gray-800 font-medium text-center text-xs">
                {{ day }}
              </div>
            </div>
          </template>
        </div>

        <div class="flex flex-wrap -mx-1">
          <template
            v-for="blankday in blankdays"
            :key="blankday"
          >
            <div
              style="width: 14.28%"
              class="text-center border p-1 border-transparent text-sm"
            />
          </template>
          <template
            v-for="date in no_of_days"
            :key="date"
          >
            <div
              style="width: 14.28%"
              class="px-1 mb-1"
            >
              <div
                class="cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100"
                :class="{
                  'bg-primary-200': isToday(date),
                  'text-gray-600 hover:bg-primary-200':
                    !isToday(date) && !isSelectedDate(date),
                  'bg-primary-500 text-white hover:bg-opacity-75':
                    isSelectedDate(date),
                }"
                @click="getDateValue(date)"
              >
                {{ date }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

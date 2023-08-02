<template>
  <div class="">
    <div class="text-[40px] font-serif font-bold text-gray-600">
      Info
    </div>

    <div class="w-[50px] h-[10px] bg-blue-600 mt-5" />

    <div class="flex flex-col text-[20px] mt-7 space-y-3 divide-y-2 divide-gray-400">
      <div
        v-for="{ name, value } in INFO_ITEMS"
        :key="name"
        class="flex justify-between font-light pt-2"
      >
        <span>
          {{ name }}
        </span>

        <span
          v-if="Array.isArray(value)"
          class="flex flex-col space-y-1 text-right"
        >
          <span
            v-for="text in value"
            :key="text"
          >
            {{ text }}
          </span>
        </span>

        <span v-else>
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>


<script
  setup
  lang="ts"
>

const INFO_ITEMS = [
  {
    name: 'Date of birth',
    value: '02/21/1999'
  },
  {
    name: 'Gender',
    value: 'male'
  },
  {
    name: 'Nationality',
    value: 'Russian'
  },
  {
    name: 'Languages',
    value: [
      'Russian (Native)',
      'English (Advanced)',
      'Spanish (Spoken)',
    ]
  },
]
</script>

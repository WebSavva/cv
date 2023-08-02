<template>
  <div class="">
    <div class="text-[40px] text-gray-600 font-semibold font-serif tracking-wider">
        Core Skills
    </div>

    <div class="w-[80px] h-[10px] bg-blue-500 mt-5"></div>

    <div class="flex justify-between mt-10 space-x-14">
      <div
        v-for="{ name, points } in SKILLS"
        :key="name"
        class="flex flex-col items-center"
      >
        <div
          class="s w-[170px] h-[170px] rounded-full flex items-center justify-center"
          :style="{
            background: `conic-gradient(rgb(92 154 255) 0% ${points * 10}%, #e6e5e5 0% 100%)`
          }"
        >
          <div class="w-[80%] h-[80%] rounded-full bg-white flex items-center justify-center text-[50px] text-gray-600 font-serif font-bold">
            {{  points }}
          </div>
        </div>

        <div class="self-center text-gray-600 text-[20px] mt-5 max-w-[150px] text-center">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

const SKILLS = [
  {
    name: 'Coding languages',
    points: 10
  },
  {
    name: 'Data structures and algorithms',
    points: 8
  },
  {
    name: 'Databases',
    points: 7
  },
  {
    name: 'Testing',
    points: 6
  },
  {
    name: 'CI/CD',
    points: 8
  },
]
</script>

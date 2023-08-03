<template>
  <div>
    <div
      class="text-[40px] text-gray-600 font-semibold font-serif tracking-wider"
    >
      Education & Career
    </div>

    <div class="w-[150px] h-[10px] bg-blue-500 mt-5"></div>

    <div
      class="ml-2 flex mt-[50px] pb-[50px] flex-col pl-12 border-l-4 border-blue-200 relative before:block before:absolute before:top-[-5px] before:left-[-15px] before:w-[30px] before:h-[30px] before:bg-blue-600 before:rounded-full before:border-[5px] before:border-white"
    >
      <div class="flex justify-between">
        <div class="font-serif text-[30px] font-semibold leading-none">
          Saint-Petersburg State University
        </div>

        <div class="text-[25px] font-serif font-light">2017 - 2021</div>
      </div>

      <div class="text-[23px] font-light mt-2">
        Bachelor of Business Informatics
      </div>

      <div class="mt-8 text-[23px] font-medium">Relevant coursework:</div>

      <ul class="pl-5 text-[18px] flex flex-col space-y-4 list-disc mt-3">
        <li v-for="course in COURSES" :key="course">
          {{ course }}
        </li>
      </ul>

      <div class="mt-10 text-[23px] font-medium">Graduation project:</div>

      <div class="text-[18px] text-gray-600 mt-3 max-w-[60%] leading-relaxed">
        Mathematical and instrumental methods of economic assessment of the
        consequences of COVID-19
      </div>

      <a
        href="https://websavva.github.io/thesis/"
        class="flex mt-3 text-[18px] text-blue-500 items-center space-x-2"
      >
        <Icon name="tabler:external-link" class="w-[1.5em] h-[1.5em]" />

        <span> Thesis presentation </span>
      </a>
    </div>

    <div
      class="ml-2 flex flex-col pl-12 border-l-4 border-blue-200 relative before:block before:absolute before:top-[-5px] before:left-[-15px] before:w-[30px] before:h-[30px] before:bg-blue-600 before:rounded-full before:border-[5px] before:border-white"
    >
      <div class="flex justify-between">
        <div class="font-serif text-[30px] font-semibold leading-none">
          Studwork
        </div>

        <div class="text-[25px] font-serif font-light">2021 - ongoing</div>
      </div>

      <div class="text-[23px] font-light mt-2">Middle Frontend Developer</div>

      <div class="text-[18px] leading-[1.8] text-gray-500 mt-3 max-w-[70%]">
        I have been employed at Studwork, the leading company in the Russian
        education services market, for 2 years. Starting my journey in a junior
        role, I demonstrated a remarkable commitment to my work, propelling me
        to achieve a mid-level position within a relatively short period of
        time. Over the last two years, I have acquired diverse skills ranging
        from constructing user interfaces to CI/CD implementation. Besides,
        recently my company has launched the second project Work24, a
        cutting-edge freelance platform that aims to take a substantial share of
        the freelance market.
      </div>

      <div class="mt-10 text-[23px] font-medium">Company's projects:</div>

      <div class="mt-5 flex items-baseline space-x-5">
        <a
          href="https://studwork.ru"
          class="flex text-[18px] text-blue-500 items-center"
        >
          <Icon name="Studwork" class="w-[170px] h-[30px] fill-current" />
        </a>

        <a
          href="https://work24.ru"
          class="flex text-[18px] text-blue-500 items-center"
        >
          <Icon name="Work24" class="w-[200px] ml-[-28px] h-[23px] fill-current" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const COURSES = [
  "Information Systems",
  "Information Security",
  "Object-Oriented Programming",
  "Operating Environments, Systems and Shells",
  "Data Processing and Storage Technologies",
  "Creating of JAVA-applications",
  "Websіte Development",
];
</script>

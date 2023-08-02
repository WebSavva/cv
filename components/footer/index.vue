<template>
  <div class="flex justify-between">
    <div class="space-y-[80px] bg-white py-[50px] pl-[100px] pr-[50px]">
      <Skills />

      <Education />
    </div>

    <div class="w-[500px] space-y-[80px] flex-none py-[50px] bg-blue-200 pr-[100px] pl-[50px]">
      <Info />

      <Diploma />

      <Technologies />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import Skills from './components/skills.vue';
import Info from './components/info.vue';
import Education from './components/education.vue';
import Diploma from './components/diploma.vue';
import Technologies from './components/technologies.vue'
</script>

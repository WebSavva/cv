<template>
  <div class="w-full bg-blue-100 flex">
    <div class="space-y-4 py-[40px]">
      <div class="text-[40px] text-gray-600 font-semibold font-serif tracking-wider">
        Profile
      </div>

      <div class="w-[80px] h-[10px] bg-blue-500"></div>

      <p
        class="w-4/5 text-[22px] text-gray-600 font-medium"
        :style="{
          lineHeight: 1.8
        }"
      >
        Holder of a Bachelor's degree in Business Informatics with a strong background in frontend development over a two-year period. Uninterrupted work history spanning two years underscores my dedication to projects. Adept at designing user-friendly web interfaces. Driven by a strong desire to pursue a Master's degree in a CS-related field, recognizing its relevance to my career. Motivated in staying up to date with the latest trends in software development.
      </p>
    </div>

    <div class="flex-none w-[500px] bg-blue-500 relative after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(4 7 16)] after:mix-blend-lighten max-h-[480px] overflow-hidden">

      <Me class="w-[90%] h-auto block mix-blend-multiply mx-auto" />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import Me from '@/components/me.vue'
</script>

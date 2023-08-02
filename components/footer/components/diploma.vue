<template>
  <div class="">
    <div class="text-[40px] font-serif font-bold text-gray-600">
      Diploma
    </div>

    <div class="w-[90px] h-[10px] bg-blue-600 mt-5" />

    <QrCode class="w-full h-auto mt-[50px]"/>

    <a
      class="mx-auto mt-5 block text-[25px] text-center text-blue-600"
      href="https://diploma.spbu.ru/s/?rn=2011114&bd=19990221&h=b4eec686154e479e9ca261c9c29010f5"
    >
      <span>
        See
      </span>

      <Icon name="mdi:arrow-right" class="w-[.9em] h-[.9em]"/>
    </a>
  </div>
</template>


<script
  setup
  lang="ts"
>
import QrCode from '@/components/diploma-qr-code/index.vue'
</script>

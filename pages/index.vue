<template>
    <main class="w-[1800px] mx-auto">
      <Head class="px-[100px]" />

      <Profile class="pl-[100px]"/>

      <Footer />

      <CvInfo />
    </main>
</template>

<script
  setup
  lang="ts"
>
import Head from '@/components/head/index.vue';
import Profile from '@/components/profile.vue';
import Footer from '@/components/footer/index.vue';
import CvInfo from '@/components/cv-info.vue';
</script>

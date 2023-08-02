<template>
  <header class="w-full h-[300px] bg-blue-900 text-white flex py-[50px] justify-between">
    <div class="font-serif">
      <h1 class="text-[55px] font-bold mb-5 tracking-wider leading-none">
        Savva Prokofev
      </h1>

      <div class="text-[35px] mb-5">
        Frontend developer
      </div>

      <div class="h-[15px] bg-blue-400 w-[150px]"></div>
    </div>

    <div class="text-[22px] font-thin tracking-wider space-y-7">
      <a
        href="https://github.com/WebSavva"
        class="flex items-center space-x-5 justify-end  text-slate-100"
      >
        <span>
          WebSavva
        </span>

        <Icon name="mdi:github" class="w-[1.3em] h-[1.3em]"/>
      </a>

      <a
        href="mailto:websavvap@gmail.com"
        class="flex items-center justify-end space-x-5 text-slate-100"
      >
        <span>
          websavvap@gmail.com
        </span>

        <Icon name="mdi:email" class="w-[1.3em] h-[1.3em]"/>
      </a>

      <a
        href="https://websavva.github.io"
        class="flex items-center justify-end space-x-5 text-slate-100"
      >
        <span>
          websavva.github.io
        </span>

        <Icon name="mdi:web" class="w-[1.3em] h-[1.3em]"/>
      </a>
    </div>
  </header>
</template>

<script
  setup
  lang="ts"
>
</script>

<template>
  <div class="">
    <div class="text-[40px] font-serif font-bold text-gray-600">
      Technologies
    </div>

    <div class="w-[130px] h-[10px] bg-blue-600 mt-5" />

    <div class="flex flex-col text-[22px] text-gray-600 mt-7 space-y-4 divide-y-2 divide-gray-400">
      <div
        v-for="{ name, icon } in TECH_ITEMS"
        :key="name"
        class="flex items-center font-light space-x-6 pt-4"
      >
        <Icon :name="`simple-icons:${icon}`" class="w-[1.5em] h-[1.5em]" />

        <span>
          {{ name }}
        </span>
      </div>
    </div>
  </div>
</template>


<script
  setup
  lang="ts"
>

const TECH_ITEMS = [
  {
    name: 'JavaScript',
    icon: 'javascript'
  },
  {
    name: 'TypeScript',
    icon: 'typescript'
  },
  {
    name: 'Node.js',
    icon: 'nodedotjs'
  },
  {
    name: 'Nuxt.js',
    icon: 'nuxtdotjs'
  },
  {
    name: 'CSS',
    icon: 'css3'
  },
  {
    name: 'Git',
    icon: 'git'
  },
  {
    name: 'Bash',
    icon: 'gnubash'
  },
  {
    name: 'Github Actions',
    icon: 'githubactions'
  },
]
</script>

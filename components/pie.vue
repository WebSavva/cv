<template>
  <svg class="donut" :width="size" :height="size" viewBox="0 0 42 42">
    <circle
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="none"
    ></circle>

    <circle
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="#e6e5e5"
      stroke-width="3"
      stroke-dasharray="0 100"
      stroke-dashoffset="25"
      :style="`
        transition: stroke-dasharray 0.5s ease-in-out 0s,
          stroke-dashoffset 0.5s ease-in-out 0s;
        stroke-dasharray: ${size}, ${size};
        stroke-dashoffset: 25;`
      "
    ></circle>

    <circle
      cx="21"
      cy="21"
      r="15.91549430918954"
      fill="transparent"
      stroke="rgb(92 154 255)"
      stroke-width="3"
      stroke-dasharray="0 100"
      stroke-dashoffset="25"
      :style="`
        transition: stroke-dasharray 0.5s ease-in-out 0s,
          stroke-dashoffset 0.5s ease-in-out 0s;
        stroke-dasharray: ${size * (percent - 26) / 1e2}, ${size * (percent - 26) / 1e2};
        stroke-dashoffset: 25;`
      "
    ></circle>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 20,
  },

  percent: {
    type: Number,
    default: 50,
  },
});
</script>

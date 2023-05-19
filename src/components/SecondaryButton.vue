<template>
  <a
    :href="href"
    class="p-3 block text-center cursor-pointer bg-slate-200 outline-offset-2 w-full hover:bg-slate-300 transition-colors text-slate-800 border-2 border-slate-800 rounded-md"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>

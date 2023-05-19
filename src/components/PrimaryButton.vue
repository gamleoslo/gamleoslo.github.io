<template>
  <a
    :href="href"
    class="p-3 block w-full text-center cursor-pointer bg-slate-800 outline-offset-2 hover:bg-slate-700 transition-colors text-slate-100 border-2 border-slate-400 rounded-md"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

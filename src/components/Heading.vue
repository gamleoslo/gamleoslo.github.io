<template>
  <component :is="sizes[size].component" :class="sizes[size].class">
    <slot />
  </component>
</template>

<script setup lang="ts">
const sizes = {
  sm: {
    component: "h3",
    class: "text-2xl",
  },
  md: {
    component: "h2",
    class: "text-3xl",
  },
  lg: {
    component: "h1",
    class: "text-4xl",
  },
} as const;

withDefaults(
  defineProps<{
    size?: keyof typeof sizes;
  }>(),
  {
    size: "lg",
  }
);
</script>

<template>
  <div class="my-5 text-lg text-gray-600 flex dark:text-white">
    <div class="mr-2">
      <span :class="{ iconfont: true, [`icon-${type}-fill`]: true }"></span>
    </div>
    <a v-if="path" :href="info" class="text-blue-400">Github</a>
    <span v-else>{{ info }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info: string;
  type: string;
  path?: boolean;
}>();
</script>

<style scoped></style>

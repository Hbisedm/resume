<template>
  <header class="mb-2 print:mb-2 dark:text-white">
    <nav
      class="hidden md:inline-block md:text-3xl text-white font-500 bg-gray-500 p-2 rounded-tl-2xl rounded-br-2xl print:inline-block print:text-white print:text-xl print:font-bold print:rounded-tl-none print:rounded-br-none print:rounded-tr-xl print:rounded-bl-none print:p-1"
    >
      {{ title }}
    </nav>
    <div class="inline-block md:hidden text-2xl font-500 print:hidden">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500"
      >
        {{ title }}
      </span>
    </div>
    <!-- <div class="">{{ title }}</div> -->
    <div
      class="print:mt-0 print:relative-top-1 mt-1 md:mt-0 h-1 bg-gray-500 rounded-md relative-top-1"
    ></div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

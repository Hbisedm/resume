<template>
  <div class="mx-4">
    <h1 class="mb-4 text-3xl md:text-4xl text-gray-900 font-bold">教育经历</h1>
    <section class="mb-4">
      <div class="flex justify-between items-center">
        <span class="md:text-2xl text-xl font-medium text-gray-800">
          {{ info.university }}
        </span>
        <div class="flex flex-col items-end">
          <span class="md:text-xl text-sm font-medium text-gray-700">{{
            info.major
          }}</span>
          <small class="text-sm text-gray-700">{{ info.universityTime }}</small>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { info } from "@/config/meta";
</script>

<style scoped></style>

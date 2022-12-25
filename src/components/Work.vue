<template>
  <div class="mx-4 mb-2 md:mb-6">
    <resume-title title="工作经历"></resume-title>
    <section class="mb-2" v-for="(item, index) in workExperience" :key="index">
      <div class="md:flex md:items-baseline md:justify-between">
        <h2
          class="text-xl md:text-2xl font-medium text-gray-800 dark:text-white"
        >
          {{ item.companyName }}
        </h2>
        <div class="mb-2">
          <span class="mr-4">{{ item.position }}</span>
          <small class="text-sm text-gray-600 dark:text-white">{{
            item.rangeTime
          }}</small>
        </div>
      </div>
      <div class="text-sm" v-html="item.workContent"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { info } from "@/config/meta";
import resumeTitle from "@/components/Title.vue";
const { workExperience } = info;
</script>

<style scoped></style>

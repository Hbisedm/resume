<template>
  <div class="mx-4 mb-2 md:mb-6">
    <resume-title title="教育背景"></resume-title>
    <section class="mb-2">
      <div class="flex justify-between items-center">
        <span
          class="md:text-2xl text-xl font-medium text-gray-800 dark:text-white"
        >
          {{ universityName }}
        </span>
        <div class="flex flex-col items-end">
          <span
            class="md:text-xl text-sm font-medium text-gray-700 dark:text-white"
            >{{ universityMajor }}</span
          >
          <small class="text-sm text-gray-700 dark:text-white">{{
            universityTime
          }}</small>
        </div>
      </div>
      <main v-if="universityExperience" v-html="universityExperience"></main>
    </section>
  </div>
</template>

<script setup lang="ts">
import resumeTitle from "@/components/Title.vue";
import { info } from "@/config/meta";

const {
  universityMajor,
  universityName,
  universityTime,
  universityExperience,
} = info.education;
</script>

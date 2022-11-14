<template>
  <div
    :class="{
      'text-white mr-6 mb-3 p-2 rounded-full': true,
      'bg-indigo-400': skill.level === Level.UNDERSTAND,
      'bg-blue-500': skill.level === Level.KNOW_ALL_ABOUT,
      'bg-green-600': skill.level === Level.MASTER,
      'bg-yellow-500': skill.level === Level.SKILLED,
      'bg-red-500': skill.level === Level.EXPERT,
    }"
  >
    {{ skill.name }}
  </div>
</template>

<script setup lang="ts">
import { Level } from "@/config/types";
import { ISkill } from "@/config/types";

defineProps<{
  skill: ISkill;
}>();
</script>

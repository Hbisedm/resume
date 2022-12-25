<template>
  <div class="md:w-1/3 p-2 relative">
    <div class="md:fixed">
      <div class="md:block print:flex print:items-center">
        <div class="flex justify-center">
          <img
            alt="头像"
            title="头像"
            class="h-32 w-32 rounded-full mx-auto mx-4"
            :src="info.avatar"
            @click="handleToGithub"
          />
        </div>
        <div
          class="mb-2 md:mb-12 text-center mt-4 justify-center items-center print:hidden"
        >
          <h1 class="text-2xl text-xl text-gray-800 font-bold dark:text-white">
            {{ info.name }}
          </h1>
          <div class="md:text-lg text-gray-600 dark:text-white">
            {{ info.job }}
          </div>
          <div class="md:text-lg text-gray-600 dark:text-white">
            {{ info.experience }}
          </div>
          <div
            class="text-gray-600 md:hidden mt-1 print:hidden dark:text-white"
          >
            (wx: {{ info.weChat }})
          </div>
        </div>
        <div
          class="hidden print:flex print:flex-col text-center items-start mx-8 text-lg font-bold"
        >
          <div class="md:text-lg text-gray-600">姓名: {{ info.name }}</div>
          <div class="md:text-lg text-gray-600">年龄: {{ info.age }}</div>
          <div class="md:text-lg text-gray-600">
            学历: {{ info.education.universityEducationalBackground }}
          </div>
        </div>
        <div
          class="hidden print:flex print:flex-col text-center items-start text-lg font-bold"
        >
          <div class="md:text-lg text-gray-600">手机: {{ info.mobile }}</div>
          <div class="md:text-lg text-gray-600">邮箱: {{ info.email }}</div>
          <div class="md:text-lg text-gray-600">微信: {{ info.weChat }}</div>
        </div>
      </div>
      <div class="mx-4 my-4 hidden md:block">
        <info-item :info="info.weChat" type="wechat" />
        <info-item :info="info.mobile" type="phone" />
        <info-item :info="info.email" type="mail" />
        <info-item :info="info.location" type="location" />
        <info-item :info="info.github" type="github" :path="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { info } from "@/config/meta";
import InfoItem from "./InfoItem.vue";

const handleToGithub = () => {
  window.open(info.github);
};
</script>

<style lang="scss" scoped></style>

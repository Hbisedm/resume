<template>
  <div class="md:w-1/3 p-2 relative">
    <div class="md:fixed">
      <div class="md:block">
        <div class="flex justify-center">
          <img
            class="h-32 w-32 rounded-full mx-auto mx-4"
            :src="info.avatar"
            @click="handleToGithub"
          />
        </div>
        <div class="mb-12 text-center mt-4 justify-center items-center">
          <h1 class="text-2xl text-xl text-gray-800 font-bold">
            {{ info.name }}
          </h1>
          <div class="md:text-lg text-gray-600">{{ info.job }}</div>
          <div class="md:text-lg text-gray-600">{{ info.experience }}</div>
          <div class="text-gray-600 md:hidden mt-1">
            (wx: {{ info.weChat }})
          </div>
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
  console.log("123");
  window.open(info.github);
};
</script>

<style lang="scss" scoped></style>

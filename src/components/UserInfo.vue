<template>
  <div class="md:w-1/3 p-2 relative">
    <div class="md:fixed">
      <div class="md:block">
        <div class="flex justify-center">
          <img class="h-32 w-32 rounded-full mx-auto mx-4" :src="user.avatar" />
        </div>
        <div class="mb-12 text-center mt-4 justify-center items-center">
          <h1 class="text-2xl text-xl text-gray-800 font-bold">
            {{ user.name }}
          </h1>
          <div class="md:text-lg text-gray-600">前端工程师</div>
          <div class="md:text-lg text-gray-600">二年工作经验</div>
          <div class="text-gray-600 md:hidden mt-1">(wx: SamWechat98)</div>
        </div>
      </div>
      <div class="mx-4 my-4 hidden md:block">
        <div class="my-5 text-lg text-gray-600 flex">
          <div class="mr-2">
            <span class="iconfont icon-wechat-fill"></span>
          </div>
          SamWechat98
        </div>
        <div class="my-5 text-lg text-gray-600 flex">
          <div class="mr-2">
            <span class="iconfont icon-phone-fill"></span>
          </div>
          134****8587
        </div>
        <div class="my-5 text-lg text-gray-600 flex">
          <div class="mr-2">
            <span class="iconfont icon-mail-fill"></span>
          </div>
          hbisedm666@163.com
        </div>
        <div class="my-5 text-lg text-gray-600 flex">
          <div class="mr-2">
            <span class="iconfont icon-location-fill"></span>
          </div>
          DongGuan
        </div>
        <a href="http://github.com/hbisedm" class="my-5 flex" target="_blank">
          <div class="mr-2">
            <span class="iconfont icon-github-fill"></span>
          </div>
          <span class="text-blue-500">GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { info } from "../../meta.config.js";
import { ref } from "vue";

const user = ref(info);


</script>

<style lang="scss" scoped></style>

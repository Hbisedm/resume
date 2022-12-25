<template>
  <div class="fixed top-10 right-10 print:hidden flex flex-col">
    <button
      class="inline-block bg-gray-600 hover:bg-gray-800 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-100 hover:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 dark:text-white"
      @click="handlePrint"
    >
      打印
    </button>
    <button
      class="mt-2 inline-block bg-gray-600 hover:bg-gray-800 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-100 hover:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 dark:text-white"
      @click="handleChangeTheme"
    >
      换肤
    </button>
  </div>
</template>

<script setup lang="ts">
const handlePrint = () => {
  window.print();
};
const handleChangeTheme = () => {
  document.body.classList.add("dark:bg-gray-900");

  const setTheme = (themeName) => {
    localStorage.setItem("theme", themeName);
  };
  if (!("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
    setTheme("dark");
    return;
  }
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    setTheme("light");
    return;
  }
  if (localStorage.theme === "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    setTheme("dark");
    return;
  }
};
</script>

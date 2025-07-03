<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosClient from "../axios";

const images = ref();

onMounted(() => {
  axiosClient.get("/api/images").then((response) => {
    console.log(response.data);
    images.value = response.data;
  });
});
</script>

<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">My Images</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div
        v-if="images"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="image in images.data"
          :key="image.id"
          class="bg-white overflow-hidden shadow rounded-lg"
        >
          <img
            :src="image.url"
            alt="Image"
            class="w-full h-48 object-contain"
          />
          <div class="px-4 py-4">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ image.label }}
            </h3>
            <p class="text-sm text-gray-500 mb-4">{{ image.label }}</p>
            <div class="flex justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

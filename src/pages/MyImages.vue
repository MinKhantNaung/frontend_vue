<script setup lang="ts">
import { onMounted, ref } from "vue";
import axiosClient from "../axios";

const images = ref();

interface PaginationMeta {
  current_page: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}

const pagination = ref<{
  meta: PaginationMeta;
}>({
  meta: {
    current_page: 1,
    last_page: 1,
    links: [],
  },
});

function fetchImages(url: string = "/api/images") {
  axiosClient.get(url).then((response) => {
    console.log(response.data);
    images.value = response.data;
    pagination.value.meta = response.data.meta;
  });
}

onMounted(() => {
  fetchImages();
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

    <!-- Pagination -->
    <div class="flex flex-wrap justify-center gap-1 text-sm">
      <div v-for="(link, index) in pagination.meta.links" :key="index">
        <button
          v-if="link.url !== null"
          :class="[
            'px-3 py-1 border rounded',
            link.active
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100',
          ]"
          @click="fetchImages(link.url)"
          v-html="link.label"
        ></button>
      </div>
    </div>
  </main>
</template>

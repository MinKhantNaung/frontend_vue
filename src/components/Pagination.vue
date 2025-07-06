<script setup lang="ts">
defineProps<{
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
}>();
defineEmits<{
  (e: "page-change", url: string): void;
}>();
</script>

<template>
  <div class="flex flex-wrap justify-center gap-1 text-sm">
    <div v-for="(link, index) in links" :key="index">
      <button
        v-if="link.url !== null"
        :class="[
          'px-3 py-1 border rounded',
          link.active
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100',
        ]"
        @click="$emit('page-change', link.url)"
        v-html="link.label"
      ></button>
    </div>
  </div>
</template>

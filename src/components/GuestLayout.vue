<script setup lang="ts"></script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="/src/assets/tailwind.svg"
        alt="Your Company"
      />
    </div>

    <slot></slot>
  </div>
</template>

<style scoped></style>

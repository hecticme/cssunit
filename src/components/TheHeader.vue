<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="flex items-center h-16">
    <div class="body-container w-full flex justify-between items-center">
      <h4 class="font-semibold text-sm italic">
        CSSUnitConverter
      </h4>

      <a
        class="p-2 rounded-lg hover:bg-gray-800 transition-colors"
        href="https://github.com/hecticme/cssunit"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon icon="mingcute:github-line" />
      </a>
    </div>
  </header>
</template>

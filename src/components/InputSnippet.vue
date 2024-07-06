<script setup lang="ts">
import { ref } from 'vue'

const inputSnippet = ref('')
</script>

<template>
  <div class="relative">
    <textarea
      id="input-snippet"
      v-model="inputSnippet"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      class="bg-gray-800 px-5 py-3 rounded-lg"
      name="input-snippet"
    />
  </div>
</template>

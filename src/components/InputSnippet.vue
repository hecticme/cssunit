<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const inputSnippet = ref('')
const html = ref('')

watch(inputSnippet, async () => {
  html.value = await codeToHtml(inputSnippet.value, {
    lang: 'css',
    theme: 'ayu-dark',
  })
})
</script>

<template>
  <div class="relative">
    <!-- eslint-disable-next-line -->
    <div v-html="html"></div>

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

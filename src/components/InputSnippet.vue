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
    <div class="font-mono" v-html="html"></div>

    <textarea
      id="input-snippet"
      v-model="inputSnippet"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      class="font-mono absolute inset-0 text-transparent bg-transparent rounded-lg caret-white resize-none focus:outline-none"
      name="input-snippet"
    />
  </div>
</template>

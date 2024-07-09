<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const emit = defineEmits([
  'updateCode',
])

const inputSnippet = ref('')
const html = ref('')

watch(inputSnippet, async () => {
  html.value = await codeToHtml(inputSnippet.value, {
    lang: 'css',
    theme: 'ayu-dark',
  })

  emit('updateCode', inputSnippet.value)
})
</script>

<template>
  <div
    class="relative min-h-96 p-4 rounded-lg overflow-hidden"
    :style="{
      backgroundColor: '#0b0e14',
    }"
  >
    <!-- eslint-disable-next-line -->
    <div class="font-mono" v-html="html"></div>

    <textarea
      id="input-snippet"
      v-model="inputSnippet"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      class="font-mono absolute inset-0 p-4 text-transparent bg-transparent rounded-lg caret-white resize-none focus:outline-none"
      name="input-snippet"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps<{
  code: string
}>()
const html = ref('')

watch(() => props.code, async () => {
  html.value = await codeToHtml(props.code, {
    lang: 'css',
    theme: 'ayu-dark',
  })
})
</script>

<template>
  <!-- eslint-disable-next-line -->
  <div v-html="html"></div>
</template>

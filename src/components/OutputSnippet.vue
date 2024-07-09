<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import { pxToRem } from '~/utils/pxToRem'

const props = defineProps<{
  code: string
}>()

const convertedCode = computed(() => {
  return props.code.replace(/(\d*\.?\d+)px/ug, (_, integer) => pxToRem(integer))
})

const html = ref('')

watch(() => props.code, async () => {
  html.value = await codeToHtml(convertedCode.value, {
    lang: 'css',
    theme: 'ayu-dark',
  })
})
</script>

<template>
  <!-- eslint-disable-next-line -->
  <div v-html="html"></div>
</template>

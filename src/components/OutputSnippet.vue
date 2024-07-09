<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'
import { pxToRem } from '~/utils/pxToRem'
import { Icon } from '@iconify/vue'

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
  <div class="relative group">
    <button
      aria-label="Copy converted code"
      class="absolute top-4 right-4 p-2 rounded bg-gray-700 hover:bg-gray-800 border border-gray-600 opacity-20 group-hover:opacity-80 transition-[background-color,opacity] duration-300"
    >
      <Icon icon="ph:copy-duotone" />
    </button>

    <div v-html="html" />
  </div>
</template>

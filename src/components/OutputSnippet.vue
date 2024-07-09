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

const copyIndicatorTimeout = ref<number | null>(null)
const showCopyIndicator = ref(false)

function copyOutput () {
  navigator.clipboard.writeText(convertedCode.value)

  if (copyIndicatorTimeout.value !== null) {
    clearTimeout(copyIndicatorTimeout.value)
    copyIndicatorTimeout.value = null
  }

  showCopyIndicator.value = true

  copyIndicatorTimeout.value = setTimeout(() => {
    showCopyIndicator.value = false
    copyIndicatorTimeout.value = null
  }, 2000)
}
</script>

<template>
  <div class="relative group">
    <button
      aria-label="Copy converted code"
      class="absolute flex justify-center top-2 right-2 p-2 rounded bg-gray-700 hover:bg-gray-800 border border-gray-600 opacity-20 group-hover:opacity-80 transition-[background-color,opacity] duration-300"
      @click="copyOutput"
    >
      <Transition>
        <div
          v-if="showCopyIndicator"
          class="absolute -top-[100%] bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs"
        >
          Copied!
        </div>
      </Transition>

      <Icon icon="ph:copy-duotone" />
    </button>

    <div v-html="html" />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(2px) scale(95%);
}
</style>

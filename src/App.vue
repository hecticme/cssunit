<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import InputSnippet from '~/components/InputSnippet.vue'
import OutputSnippet from '~/components/OutputSnippet.vue'

const codeInput = ref('')
</script>

<template>
  <TheHeader />

  <main class="flex-1">
    <div class="body-container grid grid-cols-1 md:grid-cols-2 gap-2">
      <InputSnippet @update-code="userInput => codeInput = userInput" />

      <OutputSnippet :code="codeInput" />
    </div>
  </main>

  <TheFooter />
</template>

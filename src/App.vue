<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import InputSnippet from '~/components/InputSnippet.vue'
import OutputSnippet from '~/components/OutputSnippet.vue'
</script>

<template>
  <TheHeader />

  <main class="flex-1">
    <div class="body-container">
      <InputSnippet />

      <OutputSnippet />
    </div>
  </main>

  <TheFooter />
</template>

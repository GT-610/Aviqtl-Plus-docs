<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

defineProps<{
  src: string
  alt: string
  caption?: string
  hint?: string
}>()

const imageFailed = ref(false)
const { lang } = useData()
const placeholderLabel = computed(() =>
  lang.value.toLowerCase().startsWith('zh') ? '截图占位' : 'Screenshot placeholder'
)
</script>

<template>
  <figure class="screenshot-frame">
    <img
      v-if="!imageFailed"
      :src="src"
      :alt="alt"
      loading="lazy"
      @error="imageFailed = true"
    >
    <div v-else class="screenshot-placeholder" role="img" :aria-label="alt">
      <strong>{{ placeholderLabel }}</strong>
      <code>{{ src }}</code>
      <span v-if="hint">{{ hint }}</span>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    required: false,
  },
  href: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'a'"
    v-bind="to ? { to } : { href, target }"
    class="link"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>

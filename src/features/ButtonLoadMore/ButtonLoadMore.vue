<script setup lang="ts">
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="$style.button"
    @click="$emit('clickToLoadMoreButton')"
    :disabled="isDisabled"
  >
    Загрузить ещё
  </button>
</template>

<style module lang="scss">
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  display: block;
  margin: 0 auto;
  background-color: #ffcd6d;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #ffde9d;
  }
}
</style>

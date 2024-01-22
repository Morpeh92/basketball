<script setup lang="ts">
const props = defineProps({
  wrapperClass: {
    type: String,
  },
});
</script>

<template>
  <footer :class="[$style.wrapper, props.wrapperClass]"></footer>
</template>

<style module lang="scss">
.wrapper {
  width: 100%;
  height: 90px;
  background-color: #3a3a3a;
}
</style>

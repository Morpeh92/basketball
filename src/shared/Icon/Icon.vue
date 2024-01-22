<script setup lang="ts">
import InlineSvg from 'vue-inline-svg';
import { PropType, computed } from 'vue';
import { IconsNames } from './types';
import SearchLoupe from '@/app/assets/icons/payments-search-loupe.svg';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  wrapperClass: {
    type: [String, Array] as PropType<string | string[]>,
  },
});

const iconSrc = computed(() => {
  switch (props.icon) {
    case IconsNames.SearchLoupe:
      return SearchLoupe;
  }
});
</script>

<template>
  <div
    :class="[$style.container, props.wrapperClass]"
    :style="{ width: `${props.width}px`, height: `${props.height}px` }"
  >
    <InlineSvg v-if="iconSrc" :src="iconSrc" />
  </div>
</template>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { debounce } from 'lodash';

const emit = defineEmits(['update:inputValue', 'clickToClearButton']);

defineProps({
  isShowClearButton: {
    type: Boolean,
  },
  value: {
    type: String,
  },
});

const updateValue = (e: Event) => {
  emit('update:inputValue', (e.target as HTMLInputElement).value);
};

const updateInputWithDebounce = debounce(updateValue, 250);
</script>

<template>
  <div :class="$style.inputWrapper">
    <input
      type="text"
      placeholder="Поиск"
      :class="$style.input"
      @input="updateInputWithDebounce"
      :value="value"
    />
    <button
      v-if="isShowClearButton"
      :class="$style.buttonContainer"
      @click="$emit('clickToClearButton')"
    >
      <div :class="$style.clear"></div>
    </button>
  </div>
</template>

<style module lang="scss">
.inputWrapper {
  width: 200px;
  height: 30px;
  position: relative;
}

.input {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  border: none;
  padding: 10px;
  outline: none;
}

.buttonContainer {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
}

.clear {
  position: relative;
  width: 100%;
  height: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 10px;
    background-color: black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>

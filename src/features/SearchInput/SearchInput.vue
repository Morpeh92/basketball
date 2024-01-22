<script setup lang="ts">
import { debounce } from 'lodash';


const emit = defineEmits([
  'update:inputValue',
]);

const updateValue = (e: Event) => {
  emit('update:inputValue', (e.target as HTMLInputElement).value);
};

const updateInputWithDebounce = debounce(updateValue, 250);

</script>

<template>
    <input :class="$style.wrapper" @input="updateInputWithDebounce"/>
</template>

<style module lang="scss">
.wrapper {
    width: 200px;
    height: 30px;
    border-radius: 18px;
    border: none;
    padding: 10px;
}
</style>
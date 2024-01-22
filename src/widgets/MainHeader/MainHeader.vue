<template>
  <header :class="$style.wrapper">
    <slot name="searchInput"></slot>
  </header>
</template>

<style module lang="scss">
.wrapper {
  width: 100%;
  height: 60px;
  background-color: #3a3a3a;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

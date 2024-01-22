<script setup lang="ts">
import { getDataApi } from '../../../api/getData';
import { API_URL } from '../../../api/const';
import { ref, watchEffect, computed } from 'vue';
import { MainHeader, MainFooter, PlayerCardsList } from '@/widgets';
import { Player } from 'api/types';
import { ButtonLoadMore, SearhInput } from '@/features';

const list = ref<Player[] | null>(null);
const value = ref<string>('');
const nextItems = ref(25);
const buttonDisable = ref<boolean>(false);
const is = ref<boolean>(false);

watchEffect(async () => {
  const data = await getDataApi.getData(API_URL, nextItems.value);
  list.value = data
  if (list.value?.length === 100) {
    buttonDisable.value = true;
  }
});

const handleLimit = () => {
  nextItems.value += 25;
};

const filetArr = computed(() => {
  const query = value.value.toLowerCase();

  return list.value?.filter((item) => {
    if (value.value === '') {
      return true
    }
    return item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      item.team.full_name.toLowerCase().includes(query) ||
      item.team.id.toString().includes(query);
  })
})


</script>

<template>
  <div :class="$style.wrapper">
    <MainHeader>
      <template #searchInput>
        <SearhInput v-model:input-value="value" />
      </template>
    </MainHeader>
    <main :class="$style.main">
      <div :class="$style.buttons">
      <button @click="is = true">true</button>
      <button @click="is = false">false</button>
    </div>
      <PlayerCardsList :is="is" :list="filetArr!" />
      <ButtonLoadMore v-if="!buttonDisable" @clickToLoadMoreButton="handleLimit()" :is-disabled="buttonDisable" />
    </main>
    <MainFooter :wrapper-class="$style.footer" />
  </div>
</template>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: max-content;
  min-height: 100vh;
}

.main {
  flex: auto;
  background-color: #FFFEFE;
  padding: 24px 32px;
}

.footer {
  flex-shrink: 0;
}

.list {
  display: grid;
  place-items: stretch stretch;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 34px 34px;
  max-width: 1440px;
  margin: 37px auto 62px;
}

.buttons {
  width: 100px;
  margin-left: auto;
}
</style>

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
const toggleView = ref<boolean>(false);

watchEffect(async () => {
  const data = await getDataApi.getData(API_URL, nextItems.value);
  list.value = data;
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
      return true;
    }
    return (
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      item.team.full_name.toLowerCase().includes(query) ||
      item.team.id.toString().includes(query)
    );
  });
});

const handleClearInputValue = () => {
  return (value.value = '');
};
</script>

<template>
  <div :class="$style.wrapper">
    <MainHeader>
      <template #searchInput>
        <SearhInput
          :value="value"
          :is-show-clear-button="Boolean(value)"
          v-model:input-value="value"
          @click-to-clear-button="handleClearInputValue()"
        />
      </template>
    </MainHeader>
    <main :class="$style.main">
      <div :class="$style.buttonsContainer">
        <button :class="$style.buttonView" @click="toggleView = true">
          Список
        </button>
        <button :class="$style.buttonView" @click="toggleView = false">
          Карточки
        </button>
      </div>
      <div :class="$style.plug" v-if="filetArr?.length === 0">
        По вашему запросу ничего не найдено, попробуйте еще!
      </div>
      <PlayerCardsList :is="toggleView" :list="filetArr!" />
      <ButtonLoadMore
        v-if="!buttonDisable"
        @clickToLoadMoreButton="handleLimit()"
        :is-disabled="buttonDisable"
      />
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
  background-color: #fffefe;
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

.buttonsContainer {
  width: 100px;

  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
}

.plug {
  font-size: 30px;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
}

.buttonView {
  background-color: #ffcd6d;
  border: none;
  padding: 3px 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffde9d;
  }
}
</style>

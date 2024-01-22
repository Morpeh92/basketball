<script setup lang="ts">
import { Player } from 'api/types';
import { PlayerCard } from '@/widgets';
import { ref, watchEffect } from 'vue';
import img from '@/app/assets/images/ball.png';

interface Props {
  list: Player[];
  is: boolean;
}

const props = defineProps<Props>();
const currentElement = ref<Player | null>(null);
const isShowModal = ref<Boolean>(false);

const handleOpenModal = (item: Player) => {
  currentElement.value = item;
  isShowModal.value = true;
  document.body.style.overflow = 'hidden';
};

const handleCloseModal = () => {
  isShowModal.value = false;
  document.body.style.overflow = 'visible';
};

watchEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      isShowModal.value = false;
      document.body.style.overflow = 'visible';
    }
  };
  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
});
</script>

<template>
  <div
    v-if="isShowModal"
    :class="$style.modalWrapper"
    @click.self="handleCloseModal"
  >
    <div :class="$style.modal">
      <button :class="$style.closeButton" @click="handleCloseModal">
        Закрыть
      </button>
      <div :class="$style.imgContainer">
        <img :class="$style.img" :src="img" />
        <img :class="$style.img" :src="img" />
        <img :class="$style.img" :src="img" />
      </div>
      <div :class="$style.textContainer">
        <p :class="$style.playerName">
          {{ currentElement?.first_name }} {{ currentElement?.last_name }}
        </p>
        <p :class="$style.playerTeam">{{ currentElement?.team.full_name }}</p>
        <p :class="$style.playerNumber">#{{ currentElement?.team.id }}</p>
      </div>
    </div>
  </div>
  <ul :class="[$style.list, props.is ? $style.is : '']">
    <PlayerCard
      @clickTo="handleOpenModal(item)"
      :is="props.is"
      v-for="item in props.list"
      :team-name="item.team.full_name"
      :player-number="item.team.id"
      :name="item.first_name"
      :last-name="item.last_name"
      :key="item.id"
    />
  </ul>
</template>

<style module lang="scss">
.list {
  display: grid;
  place-items: stretch stretch;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 34px 34px;
  margin: 37px auto 62px;
}

.is {
  display: flex;
  flex-direction: column;
}

.modalWrapper {
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  gap: 30px;
  position: relative;
}

.img {
  max-width: 100px;
  height: auto;
}

.imgContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.playerName {
  font-size: 25px;
  font-weight: 500;
}

.playerTeam {
  font-size: 18px;
}

.playerNumber {
  font-size: 140px;
  font-weight: 600;
}

.closeButton {
  position: absolute;
  right: 20px;
  background-color: #ffcd6d;
  border: none;
  padding: 3px 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffde9d;
  }
}

.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

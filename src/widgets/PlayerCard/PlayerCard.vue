<script setup lang="ts">
import img from '@/app/assets/images/ball.png';


defineProps({
    is: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    playerNumber: {
        type: Number
    },
    teamName: {
        type: String
    },
    test: {
        type: Function,
    }

})
</script>

<template>
    <article :class="[$style.wrapper, is ? $style.is : '']" @click="$emit('clickTo')">
        <p :class="$style.playerName">{{ name }} {{ lastName }}</p>
        <img :class="$style.img" :src="img">
        <p :class="$style.playerNumber">#{{ playerNumber }}</p>
        <p :class="$style.teamName">{{ teamName }}</p>
    </article>
</template>

<style module lang="scss">
.wrapper {
    width: 300px;
    height: 450px;
    background-color: $day_base;
    border-radius: 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

    &:hover {
        background-color: #4b4848;
        transform: scale(1.1);

        .playerNumber {
            color: #FFCD6D
        }

        .playerName {
            color: $white;
        }

        .teamName {
            color: $white;
        }

    }
}

.is {
 width: 100%;
 height: 200px;
 flex-direction: row;
 padding: 20px;
    .img {
        width: 100px;
        height: 100px;
    }
    &:hover {
        transform: scale(1.02);
    }
}

.img {
    width: 200px;
    height: 200px;
}

.playerName {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.playerNumber {
    font-size: 30px;
    line-height: 24px;
    font-weight: 700;
    transition: color 0.3s ease-in-out;
}

.teamName {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    transition: color 0.3s ease-in-out;
}
</style>
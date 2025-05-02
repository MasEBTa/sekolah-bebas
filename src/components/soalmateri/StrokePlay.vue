<!-- src/StrokePlay.vue -->
<script setup>
import { ref } from "vue";
import StrokeAnimation from "../vueWritter/practice/StrokeAnimate.vue";
const stroke = [
  "M7.53125 6 C9 6 13 5.5 15.5352 5",
  "M11.5306 3 C10.5 7 9.5 10.5 11.5306 19",
  "M15.4862 9 C15.5559 9.45126 15.5119 10.0367 15.3595 10.7008 M15.3595 10.7008 C14.647 13.8037 11.5647 18.6233 6.63251 19.4919 C6.63251 19.4919 5.28441 19.7802 4.54266 19.0227 C3.28198 17.7351 3.41266 14.3283 14.0208 11.0015 C14.456 10.865 14.9075 10.764 15.3595 10.7008",
  "M15.3595 10.7008 C19.6125 10.1058 23.899 12.8624 14.8758 21",
];

const writer1 = ref(null);

function startAnimationHandler() {
  writer1.value?.restartAnimation();
}
</script>

<template>
  <div class="box">
    <div class="button-top-container">
      <a class="ms-3" @click="startAnimationHandler" href="#">
        <i class="bi bi-repeat"></i>
      </a>
    </div>
    <StrokeAnimation
      class="stroke"
      ref="writer1"
      :strokesData="stroke"
      :size="'10rem'"
      strokeColor="blue"
      :delayBetweenStrokes="1"
      :animationDuration="5"
    />
    <div class="button-bottom-container">
      <div class="main-bg-col butt">Next</div>
    </div>
  </div>
</template>

<style scoped>
.stroke {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.button-bottom-container {
  justify-content: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.button-top-container,
.button-bottom-container {
  display: flex;
  flex: 1;
  align-items: center;
  max-height: 5rem;
}
.butt {
  min-width: 100px;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 35%;
  border-radius: 3rem;
  max-height: 5rem;
}
</style>

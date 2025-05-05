<!-- src/StrokePlay.vue -->
<script setup>
import { ref } from "vue";
import StrokeAnimation from "../vueWritter/practice/StrokeAnimate.vue";
//  const strokes: ["M12 20V4L9 7"],
// const stroke = ["M12  20V4L9  7"];
const stroke = [
  "M16 9C16 11.7614 13.7614 14 11 14C8.23858 14 6 11.7614 6 9C6 6.23858 8.23858 4 11 4C13.7614 4 16 6.23858 16 9L11 20",
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

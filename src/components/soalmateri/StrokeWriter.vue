<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import StrokeWritter from "../vueWritter/practice/StrokeWritter.vue";

// const stroke = ["M50,20 L50,90"];
const stroke = [
  "M16 9C16 11.7614 13.7614 14 11 14C8.23858 14 6 11.7614 6 9C6 6.23858 8.23858 4 11 4C13.7614 4 16 6.23858 16 9L11 20",
];

const size = ref(256);

function updateSize() {
  const width = window.innerWidth;

  if (width < 200) {
    size.value = 100;
  } else if (width < 210) {
    size.value = 150;
  } else if (width < 260) {
    size.value = 200;
  } else {
    size.value = 256;
  }
}

onMounted(() => {
  updateSize();
  window.addEventListener("resize", updateSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSize);
});
</script>

<template>
  <div class="box">
    <StrokeWritter
      class="stroke"
      :avgsdH="50"
      :avgsdL="20"
      :size="size"
      :strokesData="stroke"
      :defaultColor="'#ccc'"
      :successColor="'#000'"
      :funishColor="'green'"
      :canvasColor="'blue'"
      :strokeWidth="1"
      :lineJoin="'round'"
      :lineCap="'round'"
      :canvasStrokeWidth="5"
      :canvasLineCap="'round'"
      :canvasLineJoin="'round'"
      :trial="5"
    />
    <!-- @finished="handleFeedback" -->
    <div class="bullet-container">
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
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

/* Bullet slider */
.bullet-container {
  display: flex;
  flex: 1;
  max-height: 5rem;
  justify-content: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
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

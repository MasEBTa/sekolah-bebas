<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import StrokeWritter from "../vueWritter/practice/StrokeWritter.vue";

const props = defineProps({
  question: Object,
});

const emit = defineEmits(["answered"]); // Emit event for answered status

const isAnswered = ref(false);

const size = ref(256);

function handleLatihanSelesai(result) {
  console.log("Latihan selesai:", result);
  isAnswered.value = true; // Menandakan soal sudah dijawab
  emit("answered", isAnswered.value); // Emit event ke parent
}

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
  <h2 class="text-xl font-bold text">{{ question.soal }}</h2>

  <div class="box">
    <StrokeWritter
      class="stroke"
      :avgsdH="question.path.avgsdH"
      :avgsdL="question.path.avgsdL"
      :size="size"
      :strokesData="question.path.strokes"
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
      @finished="handleLatihanSelesai"
    />
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

.text {
  font-size: 1rem;
  margin-bottom: 3rem;
}
</style>

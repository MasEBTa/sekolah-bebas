<template>
  <div class="cov">
    <div class="uncov">
      <h2 class="text-xl font-bold mb-2 text">{{ question.soal }}</h2>

      <div class="box">
        <StrokeSvg
          class="stroke"
          :strokesData="question.path.strokes"
          viewBox="24"
        />
      </div>

      <div class="mt-4">
        <input
          v-model="userAnswer"
          type="text"
          placeholder="Jawaban kamu"
          class="border px-2 py-1 rounded w-full mb-2"
          :disabled="isAnswered"
        />

        <button
          @click="submitAnswer"
          class="bg-green-500 text-white px-4 py-2 rounded"
          :disabled="isAnswered"
        >
          Submit
        </button>
      </div>

      <div v-if="showResult" class="mt-4">
        <p :class="isCorrect ? 'text-green-600' : 'text-red-600'">
          {{
            "Jawaban " +
            (isCorrect
              ? "Benar!"
              : "Salah. Jawaban yang benar adalah " + question.jawaban)
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import StrokeSvg from "../vueWritter/StrokeSvg.vue";

const props = defineProps({
  question: Object,
});

const emit = defineEmits(["answered"]); // Emit event for answered status

const userAnswer = ref("");
const showResult = ref(false);
const isCorrect = ref(false);
const isAnswered = ref(false); // Menyimpan status apakah soal sudah dijawab

function submitAnswer() {
  showResult.value = true;
  isCorrect.value =
    userAnswer.value.trim().toLowerCase() ===
    props.question.jawaban.toLowerCase();
  isAnswered.value = true; // Menandakan soal sudah dijawab
  emit("answered", isAnswered.value); // Emit event ke parent
}
</script>

<style scoped>
button:focus {
  outline: none;
}
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
.cov {
  justify-items: center;
}
.uncov {
  padding-top: 4rem;
}
.text {
  font-size: 1rem;
  margin-bottom: 3rem;
}
</style>

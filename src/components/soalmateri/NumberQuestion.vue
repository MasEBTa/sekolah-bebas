<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">{{ question.question }}</h2>

    <div v-if="question.image" class="mb-4">
      <img :src="question.image" alt="Soal angka" class="w-24 mx-auto" />
    </div>

    <!-- Tipe Essay -->
    <div v-if="question.type === 'essay'">
      <input
        v-model="userAnswer"
        type="text"
        class="border rounded px-2 py-1 w-full"
        placeholder="Jawaban Anda..."
      />
    </div>

    <!-- Tipe Pilihan Ganda (teks) -->
    <div v-if="question.type === 'multiple_choice_text'">
      <div class="grid grid-cols-2 gap-2">
        <button
          v-for="(opt, idx) in question.options"
          :key="idx"
          @click="userAnswer = opt"
          :class="[
            'px-4 py-2 border rounded',
            userAnswer === opt ? 'bg-blue-200' : 'bg-white',
          ]"
        >
          {{ opt }}
        </button>
      </div>
    </div>

    <!-- Tipe Pilihan Ganda (gambar) -->
    <div v-if="question.type === 'multiple_choice_image'">
      <div class="grid grid-cols-2 gap-4">
        <button
          v-for="(opt, idx) in question.options"
          :key="idx"
          @click="userAnswer = opt.label"
          class="flex flex-col items-center border rounded p-2"
          :class="userAnswer === opt.label ? 'bg-blue-200' : 'bg-white'"
        >
          <img :src="opt.image" class="w-16 h-16" />
          <span class="mt-1">{{ opt.label }}</span>
        </button>
      </div>
    </div>

    <div class="mt-4">
      <button
        @click="submitAnswer"
        class="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>

    <div v-if="showResult" class="mt-4">
      <p :class="isCorrect ? 'text-green-600' : 'text-red-600'">
        {{
          isCorrect
            ? "Jawaban Benar!"
            : "Jawaban Salah. Jawaban yang benar adalah " + question.answer
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  question: Object,
});

const userAnswer = ref("");
const showResult = ref(false);
const isCorrect = ref(false);

function submitAnswer() {
  showResult.value = true;
  isCorrect.value = userAnswer.value.trim() === question.answer;
}
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>

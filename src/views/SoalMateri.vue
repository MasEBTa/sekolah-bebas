<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

import Header from "../components/soalmateri/header/Header.vue";
import PathEssayQuestion from "../components/soalmateri/PathEssayQuestion.vue";
import getSpecialData from "../service/soal/getSpecialData";
import NextButton from "../components/soalmateri/NextButton.vue"; // Tombol Next

const route = useRoute();
const path = computed(() => route.path.split("/").pop() || "");
console.log("📍 Path dari URL:", path.value);

const dataquery = JSON.parse(route.query.needData || "null");

const dataSoal = ref([]);
const currentSoalIndex = ref(0); // Menyimpan nomor soal aktif
const isAnswered = ref(false); // Menyimpan status apakah soal sudah dijawab

// Mendapatkan data soal jika dataquery tersedia
if (dataquery != null) {
  dataSoal.value = getSpecialData(dataquery);
  console.log("data soal", dataSoal.value);
}

// Fungsi untuk berpindah ke soal berikutnya
function nextSoal() {
  if (currentSoalIndex.value < dataSoal.value.length - 1) {
    currentSoalIndex.value++;
    isAnswered.value = false; // Reset status jawaban pada soal berikutnya
  }
}

// Fungsi untuk menerima event "answered" dari PathEssayQuestion
function handleAnswered(status) {
  isAnswered.value = status; // Update status isAnswered
}
</script>

<template>
  <div style="height: 15%">
    <Header />
  </div>

  <!-- Menampilkan soal aktif berdasarkan currentSoalIndex -->
  <div v-if="dataSoal.length > 0">
    <div
      v-for="(soal, index) in dataSoal"
      :key="soal.nomor"
      v-show="index === currentSoalIndex"
    >
      <!-- Komponen berdasarkan tipe -->
      <PathEssayQuestion
        v-if="soal.tipe === 'esay-singkat-stroke'"
        :question="soal"
        @answered="handleAnswered"
      />
      <!-- Tambah tipe lain jika ada -->
      <div v-else>
        <p class="text-red-500">Tipe soal belum didukung: {{ soal.tipe }}</p>
      </div>
    </div>

    <!-- Tombol Next untuk berpindah soal -->
    <NextButton
      v-if="isAnswered"
      @click="nextSoal"
      :disabled="currentSoalIndex === dataSoal.length - 1"
    />
  </div>
</template>

<style scoped>
/* Tambahan styling jika perlu */
</style>

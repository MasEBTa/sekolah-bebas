<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";

import Header from "../components/soalmateri/header/Header.vue";
import PathEssayQuestion from "../components/soalmateri/PathEssayQuestion.vue";
import AngkaStrokeWriter from "../components/soalmateri/AngkaStrokeWriter.vue";
import getSpecialData from "../service/soal/getSpecialData";
import NextButton from "../components/soalmateri/NextButton.vue"; // Tombol Next
import StrokePlayAngka from "@/components/soalmateri/StrokePlayAngka.vue";

const route = useRoute();
const router = useRouter();

function goBack() {
  router.go(-1);
}
const path = computed(() => route.path.split("/").pop() || "");
console.log("📍 Path dari URL:", path.value);

const dataquery = JSON.parse(route.query.needData || "null");

const dataSoal = ref([]);
// console.log("data semua soal :", dataSoal.value);

const currentSoalIndex = ref(0); // Menyimpan nomor soal aktif
const isAnswered = ref(false); // Menyimpan status apakah soal sudah dijawab

// Mendapatkan data soal jika dataquery tersedia
if (dataquery != null) {
  dataSoal.value = getSpecialData(dataquery);
  // console.log("data soal", dataSoal.value);
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
  <div
    v-if="dataSoal.length > 0"
    style="height: 85%; align-content: center; justify-items: center"
  >
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

      <AngkaStrokeWriter
        v-if="soal.tipe === 'menulis-stroke-angka'"
        :question="soal"
        @answered="handleAnswered"
      />

      <StrokePlayAngka
        v-if="soal.tipe === 'play-stroke-angka'"
        :question="soal"
        @answered="handleAnswered"
      />
      <!-- Tambah tipe lain jika ada -->
      <!-- <div v-else>
        <p class="text-red-500">Tipe soal belum didukung: {{ soal.tipe }}</p>
      </div> -->
    </div>

    <!-- Tombol Next untuk berpindah soal -->
    <NextButton
      text="Next"
      v-if="isAnswered && !(dataSoal.length - 1 == currentSoalIndex)"
      @click="nextSoal"
      :disabled="currentSoalIndex === dataSoal.length - 1"
    />
    <NextButton
      text="Finish"
      @click="goBack"
      v-else-if="dataSoal.length - 1 == currentSoalIndex"
      :disabled="currentSoalIndex === dataSoal.length - 1"
    />
  </div>
</template>

<style scoped>
/* Tambahan styling jika perlu */
</style>

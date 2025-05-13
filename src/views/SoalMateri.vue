<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, ref, onMounted } from "vue";

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

onMounted(() => {
  // cek dulu apakah ada soal di store
  if (!soalStore.adaSoal()) {
    console.warn("Belum ada soal, mungkin perlu ambil dari API.");
  } else {
    console.log("Soal tersedia:", soalStore.soal.length);
  }
});

/** Logic soal
 * --------------------------------------------------------------
 * Cek apakah user sudah mengerjakan soal ini
 * jika sudah mengerjakan maka ambil datanya masukkan ke store
 * ambil dari store dan tampilkan di halaman
 *---------------------------------------------------------------
 *
 * tiap kali user masuk ke halaman ini
 * cek dulu apakah ada soal di store
 * kalau ada cek apakah soalnya seperti yang dimaksud user (by id bundle soal)
 * jikas iya tampilkan. jika tidak cari soalnya dan ganti (ikuti logika berikutnya)
 *
 * Jika user belum mengerjakan soal
 * [x] cek apakah ini ada nilai data query khusus (berarti soal generate bukan soal yang disimpan di database)
 * Generate soalnya
 * setelah dapat dataSoal simpan ke store
 * ambil lagi, lalu tampilkan ke user (untuk tampilan ke user sudah lancar)(bisa dibuat satu persatu pengambilan soalnyaby number yg dikerjakan, sekarang tidak satu persatu tapi bisa ditampilkan)
 * Tiap kali user mengerjakan satu nomor soal perbarui Jawaban satu-persatu di store
 * Ketika jawaban terakhir sudah selesai user dan jawaban terakhir sudah disimpan maka baru tampilkan Tombol finish
 * Ketika tombol finish ditekan, maka simpan data soal dan jawaban yang ada to store ke database dan catata berdasar id user. (databasenya belum dibuat untuk ini)
 * dengan begitu user dianggap sudah mengerjakan bundle soal ini
 *
 * Jika user belum mengerjakan soal
 * [x] cek apakah ini ada nilai data query khusus, jika tidak ada
 * ambil datanya dari database berdasarkan id bundel soalnya (databasenya belum dibuat untuk ini)
 * setelah dapat data soalnya masukkan ke store
 * panggil lagi dari store untuk ditampilkan ke user (bisa satu persatu, sekarang tidak satu persatu tapi bisa ditampilkan)
 * simpan jawaban user ke store, jika sudah semuanya maka tampilkan tombol finish
 * ketika user menekan tombol finish simpan soal ke database sambil redirect.
 * Jika soal sudah disimpan ke database maka user dianggap sudah mengerjakan soal.
 *
 * antisipasi data jawaban user tidak tersimpan
 * Jika user memencek finish dan data tidak bisa tersimpan di database
 * buat tempat untuk menandai bahwa soal ini belum disimpan.
 * ketika data tidak tersimpan maka update ini menjadi false (atau ketika user masuk buat false jiks tersimpan jadikan true)
 * ketika ada error dari penyimpanan data jawaban user maka beri peringatan
 * ketika datanya masil false di store (berarti belum disimpan) dan user mau buka soal baru beri peringatan bahwa datanya belum disimpan dan buka data yang belum disimpan ini kepada user alih alih data yang diminta
 * ketika user mau keluar peringatkan untuk menyimpan data jawaban
 *
 * user menyimpan jawaban sebelum selesai (future fiture)
 * ketika user mau keluar saat mengerjakan soal kasih opsi mengimpan jawaban
 * ketika disimpan ke database tandai jadi true dipenanda storenya (otomatis buat juga di database)
 */

// Mendapatkan data soal jika dataquery tersedia (jika user emang belum mengerjakan soal)
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
  <div v-if="dataSoal.length > 0" style="height: 85%; justify-items: center">
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
      v-else-if="isAnswered && dataSoal.length - 1 == currentSoalIndex"
      :disabled="currentSoalIndex === dataSoal.length - 1"
    />
  </div>
</template>

<style scoped>
/* Tambahan styling jika perlu */
</style>

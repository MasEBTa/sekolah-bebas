<script setup>
import Header from "../components/Header.vue";
import MateriModal from "../components/MateriModal.vue";
import dummyData from "../mock/lesson.js";

// Ambil data untuk mapel Bahasa Arab
const data = dummyData.find((item) => item.mapel === "bahasa_arab");
</script>

<template>
  <div>
    <Header />
    <main>
      <div v-for="level in data.levels" :key="level.id">
        <MateriModal
          :judul="level.judul"
          :deskripsi="level.deskripsi"
          :status="level.status"
          :progres="level.progres"
          :gambar="`/src/assets/${level.gambar}`"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  background-color: #ffffff;
  padding: 1rem;
}
</style>

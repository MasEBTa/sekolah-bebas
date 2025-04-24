<script setup>
// header
import Header from "../components/levelDetailComponents/Header.vue";
import Hero from "../components/levelDetailComponents/HeroComponent.vue";
import ProgresBar from "../components/levelDetailComponents/ProgressBar.vue";

import { computed } from "vue";

// ambil data di router
import { useRoute } from "vue-router";
const route = useRoute();
const mapel = route.params.mapel;
const slug = route.params.idmateri;

// lesson store
import { useLessonStore } from "@/stores/LessonStore";
const store = useLessonStore();
const data = computed(() => store.getLesson(mapel, slug));
console.log("ini", data.value);
</script>

<template>
  <div>
    <Header :judul="data" />
    <Hero :data="data" />
    <ProgresBar :progres="90" />
  </div>
</template>

<style scoped></style>

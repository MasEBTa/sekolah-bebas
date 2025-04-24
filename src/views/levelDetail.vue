<script setup>
// header
import Header from "../components/levelDetailComponents/Header.vue";
import Hero from "../components/levelDetailComponents/HeroComponent.vue";
import ProgresBar from "../components/levelDetailComponents/ProgressBar.vue";
import card from "../components/levelDetailComponents/CardDetailLevel.vue";

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
</script>

<template>
  <div>
    <Header :judul="data" />
    <div class="container" style="padding-top: 0.5rem">
      <Hero :data="data" />
    </div>
    <div class="container mt-1 pt-1">
      <ProgresBar :progres="90" />
    </div>
    <div class="container">
      <card v-for="n in 4" :key="n" />
    </div>
  </div>
</template>

<style scoped></style>

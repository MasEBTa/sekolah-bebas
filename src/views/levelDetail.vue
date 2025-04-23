<script setup>
// header
import Header from "../components/levelDetailComponents/Header.vue";

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
  <div><Header :judul="data" /></div>
</template>

<style scoped></style>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const path = computed(() => route.path.split("/").pop() || "");
console.log("📍 Path dari URL:", path.value);

import Header from "../components/soalmateri/header/Header.vue";
import StrokeView from "../components/soalmateri/StrokeView.vue";
import StrokePlayer from "../components/soalmateri/StrokePlay.vue";
import StrokeWriter from "../components/soalmateri/StrokeWriter.vue";
</script>

<template>
  <div style="height: 15%">
    <Header />
  </div>
  <div style="height: 85%" v-if="path === '1'">
    <StrokeView />
  </div>
  <div style="height: 85%" v-else-if="path === '2'">
    <StrokePlayer />
  </div>
  <div style="height: 85%" v-else>
    <StrokeWriter />
  </div>
</template>

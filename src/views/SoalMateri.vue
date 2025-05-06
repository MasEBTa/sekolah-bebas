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
// import NumberQuestion from "../components/soalmateri/NumberQuestion.vue";
</script>

<template>
  <div style="height: 15%">
    <Header />
  </div>
  <div style="height: 85%" v-if="path === '3'">
    <StrokeWriter />
  </div>
  <div style="height: 85%" v-else-if="path === '2'">
    <StrokePlayer />
  </div>
  <div style="height: 85%" v-else>
    <StrokeView />
  </div>
  <!-- <div style="height: 85%" v-else>
    <NumberQuestion
      :question="{
        type: 'multiple_choice_image',
        question: 'Yang manakah angka satu?',
        options: [
          { label: '1', image: '/images/angka-1.svg' },
          { label: '2', image: '/images/angka-2.svg' },
        ],
        answer: '1',
      }"
    /> 
  </div>-->
</template>

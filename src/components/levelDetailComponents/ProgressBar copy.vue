<template>
  <div class="container mt-1 pt-1 d-flex">
    <div class="progress-logo">logo</div>
    <div class="progress-wrapper flex-grow-1">
      <div class="progress-bar main-bg-col" :style="{ width: progres + '%' }">
        {{ progres }}%
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  progres: Number,
});
</script>

<style scoped>
.progress-logo {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.3rem;
  border-radius: 50%;
  background-color: red;
}
.progress-wrapper {
  height: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f1f1f1;
  position: relative;
}

.progress-bar {
  height: 100%;
  line-height: 2.2rem;
  text-align: center;
  color: white;
  font-weight: bold;
  transition: width 0.5s ease;
}
.main-bg-col {
  background: linear-gradient(to right, #18175f, #3533cb);
}
</style>

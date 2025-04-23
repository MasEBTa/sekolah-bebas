<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  judul: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <header
    class="navbar custom-gradient d-flex justify-content-between align-items-center shadow"
  >
    <div class="row" style="width: 102%">
      <a href="#" class="col-2 navbar-brand" @click="goBack"
        ><i class="bi bi-arrow-bar-left" style="margin: 0"></i>III
      </a>
      <div
        class="col-8 navbar-brand d-flex justify-content-center"
        style="overflow: hidden"
      >
        <span style="width: 10%"> <i class="bi bi-geo-alt-fill"></i></span>
        <span
          style="
            width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
          "
          :title="judul.judul + ' : ' + judul.deskripsi"
        >
          {{ judul.judul }} : {{ judul.deskripsi }}</span
        >
      </div>

      <div
        class="col-2 navbar-brand d-flex justify-content-end align-items-center"
      >
        <!-- Button trigger modal -->
        <i type="button" class="bi bi-menu-button-fill"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.row {
  --bs-navbar-brand-margin-end: 0;
}
</style>

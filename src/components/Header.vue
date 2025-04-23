<script setup>
import { computed, toRef } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  mapelList: {
    type: Array,
    required: true,
  },
});

const mapelList = toRef(props, "mapelList");
console.log("mapel list", mapelList.value);

const route = useRoute();
const path = computed(() => route.path.split("/").pop());
console.log("path", path.value);

const currentImage = computed(() => {
  const found = mapelList.value.find((item) => item.path === path.value);
  return found ? found.img : "/img/default.png"; // fallback kalau tidak ditemukan
});
</script>

<template>
  <header
    class="navbar custom-gradient px-4 py-3 d-flex justify-content-between align-items-center shadow"
  >
    <div class="container">
      <a
        class="navbar-brand rounded-circle"
        href="#"
        style="
          background-color: white;
          width: 50px;
          height: 50px;
          padding: 0;
          overflow: hidden;
        "
      >
        <transition name="fade" mode="out-in">
          <img
            :src="currentImage"
            :key="currentImage"
            alt="Logo Mapel"
            width="100%"
            height="100%"
          />
        </transition>
      </a>
      <div class="nav justify-content-center text-white logofont">
        <span v-for="(item, index) in mapelList" :key="index"
          ><span v-if="path == item.path">{{ item.app }}</span></span
        >
      </div>

      <div>
        <!-- Button trigger modal -->
        <i
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="bi bi-menu-button-fill menu"
        ></i>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Pilih Pelajaran
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="list-group">
              <router-link
                v-for="(item, index) in mapelList"
                :key="index"
                class="list-group-item list-group-item-action"
                :to="`/${item.path}`"
              >
                {{ item.mapel }}
              </router-link>
            </div>

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    to right,
    black,
    #18175f,
    #3533cb
  ); /* Gradient dari hitam ke indigo */
}
.logofont {
  font-family: "woblofont", sans-serif;
  font-size: 2rem;
}
@font-face {
  font-family: "woblofont";
  src: url("../assets/fonts/logo-font/super-woobly-font/SuperWoobly-8MJlz.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

.menu {
  color: aliceblue;
}
/* Saat di-hover */
.menu:hover {
  color: #b56e3f;
}
</style>

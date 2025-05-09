<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();

onMounted(() => {
  auth.fetchUserAndProfile();
});
// console.log("Token:", await supabase.auth.getSession());
</script>

<template>
  <RouterView />
</template>

<style>
.main-bg-col {
  background: linear-gradient(to right, black, #18175f, #3533cb);
}
.main-color {
  color: #141361;
}
</style>

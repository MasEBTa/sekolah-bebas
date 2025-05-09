<template>
  <Header title="Verifikasi Email" />
  <div class="p-4 max-w-md mx-auto">
    <p class="mb-2">
      Kami telah memferifikasi email Anda. Silakan kembali login ke aplikasi dan
      eksplorasi segala hal yang anda nikmati dalam aplikasi/website kami.
    </p>
    <p>Terimakasih</p>
    <div>
      <router-link
        to="/login"
        @click="resendVerification"
        class="btn main-bg-col text-white w-full"
      >
        Login
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/auth/Header.vue";
const route = useRoute();
const email = ref("");
onMounted(() => {
  const emailParam = route.query.email;
  if (emailParam) {
    email.value = decodeURIComponent(emailParam);
  }
});
</script>

<template>
  <Header title="Verifikasi Email" />
  <div class="p-4 max-w-md mx-auto">
    <p class="mb-2">
      Kami telah mengirimkan email verifikasi ke <strong>{{ email }}</strong
      >. Silakan periksa inbox atau folder spam Anda.
    </p>
    <p v-if="success" class="text-success mb-2">
      Email verifikasi berhasil dikirim ulang.
    </p>
    <p v-if="error" class="text-danger mb-2">{{ error }}</p>
    <div>
      <button
        @click="resendVerification"
        :disabled="isDisabled"
        class="btn main-bg-col text-white w-full"
      >
        <span v-if="isDisabled">{{ countdown }} detik</span>
        <span v-else>Kirim Ulang Email Verifikasi</span>
      </button>
    </div>

    <div class="mt-2">
      <router-link
        to="/login"
        class="block mt-4 text-sm text-primary text-center"
      >
        Sudah verifikasi? Login di sini
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { supabase } from "@/lib/supabase"; // Pastikan Supabase sudah benar di-import
import Header from "@/components/auth/Header.vue";

const route = useRoute();
const router = useRouter();
const email = ref("");
const success = ref(false);
const error = ref("");
const countdown = ref(0); // Countdown timer
const isDisabled = ref(false); // Flag untuk disable tombol

onMounted(async () => {
  try {
    const emailParam = route.query.email;

    if (!emailParam) {
      // Jika tidak ada email, baru kita cek session
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        router.push("/login");
        return;
      }
    } else {
      email.value = decodeURIComponent(emailParam);
    }
  } catch (err) {
    console.error("Error checking session/email param:", err);
    router.push("/login");
  }
});
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>

<template>
  <Header title="Verifikasi Email" />
  <div class="p-4 max-w-md mx-auto">
    <p class="mb-2">
      Kami telah mengirimkan email verifikasi ke <strong>{{ email }}</strong
      >. Silakan periksa inbox atau folder spam Anda.
    </p>
    <p>php-template Copy Edit</p>
    <p v-if="success" class="text-success mb-2">
      Email verifikasi berhasil dikirim ulang.
    </p>
    <p v-if="error" class="text-text-danger mb-2">{{ error }}</p>
    <div>
      <button
        @click="resendVerification"
        class="btn main-bg-col text-white w-full"
      >
        Kirim Ulang Email Verifikasi
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
import { useRoute } from "vue-router";
import { supabase } from "@/lib/supabase";
import Header from "@/components/auth/Header.vue";
const route = useRoute();
const email = ref("");
const success = ref(false);
const error = ref("");
onMounted(() => {
  const emailParam = route.query.email;
  if (emailParam) {
    email.value = decodeURIComponent(emailParam);
  }
});
const resendVerification = async () => {
  success.value = false;
  error.value = "";
  try {
    const { error: resendError } = await supabase.auth.resend({
      type: "signup",
      email: email.value,
    });
    if (resendError) {
      throw resendError;
    }
    success.value = true;
  } catch (err) {
    error.value = err.message || "Gagal mengirim ulang email.";
  }
};
</script>

<template>
  <Header title="Daftar" />

  <div class="p-4 w-100 mx-auto ji-c">
    <form @submit.prevent="onSignup">
      <div class="mt-2 w-100">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="input mb-2 w-100"
        />
      </div>
      <div class="mt-1 w-100">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input mb-2 w-100"
        />
      </div>
      <button class="btn w-100 main-bg-col text-white">Sign Up</button>
    </form>
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    <div class="mt-2">
      Sudah punya akun?
      <router-link
        to="/login"
        class="block mt-4 text-sm text-primary text-center"
        >Login di sini
      </router-link>
    </div>
  </div>
</template>

<style scoped>
header {
  height: 10%;
  max-height: 5rem;
  min-height: 2rem;
}
.ji-c {
  justify-items: center;
  height: 90%;
}
form {
  width: 80%;
  max-width: 500px;
  min-width: 200px;
}
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Header from "@/components/auth/Header.vue";

const email = ref("");
const password = ref("");
const error = ref("");
const auth = useAuthStore();
const router = useRouter();
const onSignup = async () => {
  error.value = "";
  try {
    await auth.signup(email.value, password.value);
    router.push(`/email-verification?email=${encodeURIComponent(email.value)}`);
  } catch (err) {
    error.value = err.message;
  }
};
</script>

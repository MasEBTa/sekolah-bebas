<template>
  <div class="p-4 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="onLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input mb-2 w-full"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input mb-2 w-full"
      />
      <button class="btn w-full bg-blue-600 text-white">Login</button>
    </form>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const auth = useAuthStore();

const onLogin = async () => {
  error.value = "";
  try {
    await auth.login(email.value, password.value);
    router.push("/");
  } catch (err) {
    error.value = err.message;
  }
};
</script>

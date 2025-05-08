<template>
  <div class="p-4 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
    <form @submit.prevent="onSignup">
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
      <button class="btn w-full bg-green-600 text-black">Sign Up</button>
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

const onSignup = async () => {
  error.value = "";
  try {
    await auth.signup(email.value, password.value);
    router.push("/");
  } catch (err) {
    error.value = err.message;
  }
};
</script>

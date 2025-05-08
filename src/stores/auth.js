import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    profile: null,
  }),

  actions: {
    async fetchUserAndProfile() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      this.user = session?.user;

      if (this.user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", this.user.id)
          .single();

        if (!error) this.profile = data;
      }
    },

    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      await this.fetchUserAndProfile();
    },

    async logout() {
      await supabase.auth.signOut();
      this.user = null;
      this.profile = null;
    },

    async signup(email, password, role = "user") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      // Setelah user dibuat, insert data profil
      const user = data.user;

      if (user) {
        const { error: insertError } = await supabase.from("profiles").insert([
          {
            id: user.id, // id Supabase auth
            email: user.email,
            role: role,
            created_at: new Date(),
          },
        ]);

        if (insertError) throw insertError;
      }

      await this.fetchUserAndProfile();
    },
  },
});

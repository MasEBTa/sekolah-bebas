import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    profile: null,
  }),

  actions: {
    async fetchUserAndProfile() {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      console.log("📦 Session:", sessionData);

      if (!sessionData.session) {
        console.warn("⚠️ No session found, user not logged in.");
        this.user = null;
        this.profile = null;
        return;
      }

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("❌ Error fetching user:", error);
        return;
      }

      this.user = user;
      console.log("✅ Current user:", user);

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("❌ Error fetching profile:", profileError);
        } else {
          this.profile = profile;
        }
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

      const user = data.user;

      if (user && !data.session) {
        return data; // Email perlu dikonfirmasi, stop di sini
      }

      if (user) {
        const { error: insertError } = await supabase.from("profiles").insert([
          {
            id: user.id,
            email: user.email,
            role,
            created_at: new Date(),
          },
        ]);

        cpp;
        Copy;
        Edit;
        if (insertError) throw insertError;
      }

      await this.fetchUserAndProfile();
      return data;
    },
  },
});

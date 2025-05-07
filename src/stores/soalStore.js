import { defineStore } from "pinia";

export const useSoalStore = defineStore("soal", {
  state: () => ({
    id: "20afdaf8-f8ec-4e86-a929-3ef99fd1988f",
    soal: [],
    jawabanUser: {},
  }),

  getters: {
    getSoalByNomor: (state) => (nomor) => {
      return state.soal.filter((item) => item.nomor === nomor);
    },
    getJawabanUser: (state) => (nomor) => {
      return state.jawabanUser[nomor] || null;
    },
    jumlahSoalUnik: (state) => {
      const unik = new Set(state.soal.map((item) => item.nomor));
      return unik.size;
    },
  },

  actions: {
    setJawabanUser(nomor, jawaban) {
      const soalExist = this.soal.some((item) => item.nomor === nomor);
      const isValid = typeof jawaban === "string" && jawaban.trim().length > 0;

      if (!soalExist) {
        console.error(`Nomor soal ${nomor} tidak ditemukan.`);
        return;
      }

      if (!isValid) {
        console.error(`Struktur jawaban untuk nomor ${nomor} tidak valid.`);
        return;
      }

      this.jawabanUser[nomor] = jawaban;
    },

    resetJawabanUser() {
      this.jawabanUser = {};
    },
  },
});

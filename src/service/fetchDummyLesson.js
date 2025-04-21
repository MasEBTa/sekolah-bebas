// src/services/fetchLessons.js
import { supabase } from "@/lib/supabase.js";
import { useLessonStore } from "@/stores/lessonStore.js";

export async function loadLessonsFromSupabase() {
  const store = useLessonStore();
  store.setLoading(true);

  try {
    // ambil daftar pelajaran beserta mapel-nya (join)
    const { data, error } = await supabase
      .from("lessons")
      .select(
        "id, title, description, status, progress, subject_id, mapel (id, nama_mapel, path, nama_app)"
      );
    console.log(data);

    if (error) {
      throw error;
    }

    // bentuk ulang data supaya cocok dengan bentuk lessonStore kamu
    const grouped = {};

    data.forEach((lesson) => {
      const { mapel } = lesson;

      if (!grouped[mapel.path]) {
        grouped[mapel.path] = {
          mapel: mapel.nama_mapel,
          path: mapel.path,
          levels: [],
        };
      }

      grouped[mapel.path].levels.push({
        id: lesson.id,
        judul: lesson.title,
        deskripsi: lesson.description,
        status: lesson.status,
        progres: lesson.progres,
        // gambar: null (tidak dimasukkan karena belum ada)
      });
    });

    // Ubah dari objek ke array
    const result = Object.values(grouped);
    console.log(result);

    store.setLessons(result);
  } catch (err) {
    console.error("❌ Gagal mengambil data dari Supabase:", err.message);
    store.setError("Gagal mengambil data dari Supabase");
  } finally {
    store.setLoading(false);
  }
}

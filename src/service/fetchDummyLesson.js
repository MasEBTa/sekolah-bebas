// src/services/fetchDummyLessons.js

import dummyData from "../mock/lesson.js";
import { isValidLessonData } from "../helpers/validateLesson.js";
import { useLessonStore } from "../stores/lessonStore.js";

export function loadDummyLessons() {
  const store = useLessonStore();

  store.setLoading(true);

  try {
    // validasi data dummy sebelum dimasukkan ke store
    if (isValidLessonData(dummyData)) {
      store.setLessons(dummyData);
    } else {
      store.setError("Data dummy tidak valid");
    }
  } catch (err) {
    store.setError("Terjadi kesalahan saat memuat data");
  } finally {
    store.setLoading(false);
  }
}

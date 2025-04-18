// src/helpers/validateLesson.js

export function isValidLessonData(data) {
  if (!Array.isArray(data)) return false;

  return data.every(
    (item) =>
      item &&
      typeof item.mapel === "string" &&
      typeof item.path === "string" &&
      Array.isArray(item.levels) &&
      item.levels.every(
        (level) =>
          level &&
          typeof level.id === "number" &&
          typeof level.judul === "string" &&
          typeof level.deskripsi === "string" &&
          typeof level.status === "string" &&
          typeof level.progres === "number" &&
          typeof level.gambar === "string"
      )
  );
}

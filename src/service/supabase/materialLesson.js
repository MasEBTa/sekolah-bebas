// src/supabase/materialLesson.js
import { supabase } from "@/lib/supabase.js";

export async function getMaterialLessonByLessonId(lessonId) {
  const { data, error } = await supabase
    .from("materiallesson")
    .select("*")
    .eq("lessons_id", lessonId)
    .order("order", { ascending: true });
  // console.log("data", data);
  // console.log("eror", error);

  if (error) throw error;
  return data;
}

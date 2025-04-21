// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://glemakqayxssgdecpvor.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsZW1ha3FheXhzc2dkZWNwdm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDU1NDIsImV4cCI6MjA2MDcyMTU0Mn0.PZPl2rq3IJfnLSXlUM0zZ_K2a3XUMjQIO73ceyhSPVw"; // gantikan dengan anon public key kamu
export const supabase = createClient(supabaseUrl, supabaseKey);

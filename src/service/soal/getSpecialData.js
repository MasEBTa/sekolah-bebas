import { generateNumberPathEssaySoal } from "../soalGenerate";
import numberPath from "../../assets/path/numberPath";

function specialData(name) {
  if (name === "mengenal-angka") {
    return generateAllMengenalAngka();
  } else {
    return null;
  }
}

function generateAllMengenalAngka() {
  const usedAnswers = new Set();
  const results = [];

  while (
    results.length < 10 &&
    usedAnswers.size < Object.keys(numberPath).length
  ) {
    const soal = generateNumberPathEssaySoal(numberPath);
    if (!usedAnswers.has(soal.jawaban)) {
      usedAnswers.add(soal.jawaban);
      results.push({
        nomor: results.length + 1,
        ...soal,
      });
    }
  }

  return results;
}

export default specialData;

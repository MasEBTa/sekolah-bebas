/**
 *
 * @param {*} key
 * @param {object} path
 * @returns
 */
export function generateNumberPathEssaySoal(path, key = null) {
  const keys = Object.keys(path);
  let randomKey = keys[Math.floor(Math.random() * keys.length)];
  if (key != null) {
    randomKey = key;
  }
  // console.log(key);

  const selectedPath = path[randomKey];
  // console.log("selectedPath", selectedPath);

  return {
    tipe: "esay-singkat-stroke",
    soal: "Angka berapakah ini?",
    path: {
      strokes: selectedPath.strokes,
    },
    jawaban: selectedPath.nama,
  };
}

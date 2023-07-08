function hari(tgl) {
  switch (tgl) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
    default:
      break;
  }
}

function teuingDate(jmlHari, bulan, tglHari, hariLibur = []) {
  let array = []; // untuk menampung data tanggal
  let tgl = tglHari; // tgl untuk menampilkan nama hari
  for (let i = 1; i <= jmlHari; i++) {
    /*
        mengecek jika hari libur maka perulangan di skip 
        dan jmlHari akan bertambah 1 dan nama harinya akan di reset menjadi Senin
    */
    if (hari(tgl) === "Sabtu") {
      tgl = 1;
      i++;
      continue;
    }
    if (hari(tgl) === "Minggu") {
      tgl = 1;
      i++;
      continue;
    }

    if (hariLibur.includes(i)) {
      tgl++;
      continue;
    }

    // Memasukan data tanggal ke dalam array
    array.push(`${hari(tgl)}/${i} ${bulan} 2023 `); // format tgl
    tgl++; // menambahkan 1 hari

    // jika tgl lebih dari 7 maka akan di reset menjadi 1
    if (tgl > 7) {
      tgl = 1;
    }
  }

  // Mengembalikan data array dalam bentuk string
  return array.join("\n");
}

// Contoh kalo ada hari libur
// console.log(teuingDate(31, "Januari", 7, [1, 2, 29, 27]));

console.log("\n------JANUARI--------");
console.log(teuingDate(31, "Januari", 7));

console.log("\n------FEBRUARI--------");
console.table(teuingDate(27, "Februari", 3));

console.log("\n------MARET--------");
console.table(teuingDate(31, "Maret", 3));

console.log("\n------APRIL--------");
console.table(teuingDate(30, "April", 6));

console.log("\n------MEI--------");
console.table(teuingDate(31, "Mei", 1));

console.log("\n------JUNI--------");
console.table(teuingDate(30, "Juni", 5));

console.log("\n------JULI--------");
console.table(teuingDate(31, "Juli", 6));

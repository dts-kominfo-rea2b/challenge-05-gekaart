const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, nextStep)=>{
  // let namesSort = nextStep(names)
  let namesSort = nextStep(names)
  let sort = [];
  for (let i = 0; i < namesSort.length; i++) {
    sort.push(`${i+1}. ${namesSort[i]}`)
  }
  // console.log(namesSort)
  return sort;
};
// sorter(names)
// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names)=>{
  return names.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names)=>{
  return names.reverse();
  
};
// console.log(sorter(names, sortAscending));

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

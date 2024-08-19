// Minggu 1: Menghitung Total dan Rata-Rata dari Array Angka
const numbers = [80, 90, 70, 85, 60, 75, 95, 88];

// Menghitung total nilai
const total = numbers.reduce((acc, curr) => acc + curr, 0);

// Menghitung rata-rata
const average = total / numbers.length;

console.log(`Total Nilai: ${total}`);
console.log(`Rata-rata Nilai: ${average.toFixed(2)}`);

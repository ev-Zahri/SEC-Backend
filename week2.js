// Minggu 2: Mengelompokkan Siswa Berdasarkan Kelulusan
const students = [
    { name: "Budi", score: 80 },
    { name: "Ani", score: 90 },
    { name: "Siti", score: 70 },
    { name: "Asep", score: 65 },
    { name: "Joko", score: 55 },
    { name: "Dewi", score: 85 },
];
const passingScore = 75;

// Mengelompokkan siswa berdasarkan kelulusan
const passedStudents = students.filter(student => student.score >= passingScore);
const failedStudents = students.filter(student => student.score < passingScore);

console.log("Siswa Lulus:");
passedStudents.forEach(student => console.log(`- ${student.name} (${student.score})`));

console.log("\nSiswa Tidak Lulus:");
failedStudents.forEach(student => console.log(`- ${student.name} (${student.score})`));

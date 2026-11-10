function ganjilGenap(angka) {
    if (angka % 2 === 0){
        return "Genap";
    } else {
        return "Ganjil";
    }
}

function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`);
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`);
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`);

const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

console.log("Soal 2: mengubah suhu Celsius ke Fahrenheit");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`);
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`);
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`);

function nilaiTerbesar(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Soal 3: Mengembalikan angka terbesar dari tiga angka");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 50, 70) = ${nilaiTerbesar(80, 50, 70)}`);
console.log(`nilaiTerbesar(-1, -5, -3) = ${nilaiTerbesar(-1, -5, -3)}`);

function tahunKabisat(tahun) {
    return (tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0);
}

console.log("Soal 4: Tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2023) = ${tahunKabisat(2023)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`);

function hargaSetelahDiskon(harga, diskon) {
    return harga - (harga * diskon / 100);
}

console.log("Soal 5: Harga setelah diskon");
console.log(`hargaSetelahDiskon(250000, 20) = ${hargaSetelahDiskon(250000, 20)}`);
console.log(`hargaSetelahDiskon(150000, 40) = ${hargaSetelahDiskon(150000, 40)}`);
console.log(`hargaSetelahDiskon(100000, 25) = ${hargaSetelahDiskon(100000, 25)}`);

console.log(ganjilGenap(4));
console.log(ganjilGenap(7));
console.log(ganjilGenap(10));

const celciusFahrenheit = (celcius) => {
    return celcius * 9 / 5 + 32;
};

console.log(celciusFahrenheit(0));
console.log(celciusFahrenheit(25));
console.log(celciusFahrenheit(100));

function nilaiTerbesar (a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(nilaiTerbesar(5, 8, 3));
console.log(nilaiTerbesar(10, 4, 7));
console.log(nilaiTerbesar(2, 6, 9));


function Tahunkabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return "Tahun Kabisat";
    } else {
        return "Bukan Tahun Kabisat"
    }
}

console.log (Tahunkabisat(2024));
console.log (Tahunkabisat(1900));
console.log (Tahunkabisat(2000));

function HargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}

console.log(HargaSetelahDiskon(250000));
console.log(HargaSetelahDiskon(150000));
console.log(HargaSetelahDiskon(50000));

    
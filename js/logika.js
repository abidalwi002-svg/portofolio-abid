function ganjilGenap(angka) {
    if (angka % 2 === 0){
        return "Genap";
    } else {
        return "Ganjil";
    }
}

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

    
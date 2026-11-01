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

    
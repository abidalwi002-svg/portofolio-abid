const tombolhitung = document.getElementById("btnHitung");

tombolhitung.addEventListener("click", function() {
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    const rata = hitungRataRata(tugas, uts, uas);
    const hasilPredikat = predikat(rata);

    document.getElementById("hasil").textContent =
        `Rata-rata: ${rata.toFixed(2)}, Predikat: ${hasilPredikat}`;

}); 
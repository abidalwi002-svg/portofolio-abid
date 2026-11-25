
let skills = [];

const daftarSkills = document.querySelector("#daftar-skill");
const jumlahSkills = document.querySelector("#jumlah-skill");

async function muatSkills() {
  daftarSkills.innerHTML = "<li>Memuat skills...</li>";

try {
  const response = await fetch("data/keahlian.json");

  if(!response.ok) {
    throw new Error(`status ${response.status}`);
  }

  skills = await response.json();

  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkills.appendChild(item);
  });

  if (jumlahSkills) {
    jumlahSkills.textContent = 
    `ada ${skills.length} keahlian yang sedang saya kembangkan`;
  } 
}catch (error) {
  daftarSkills.innerHTML = "<li>daftar keahlian gagal dimuat.</li>";
  console.error("Gagal memuat keahliain:", error);
 }
}

 if (daftarSkills) {
  muatSkills();
}


// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");
if (tombolTema) {
  if (localStorage.getItem("tema") === "gelap") {
    document.body.classList.add("gelap");
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    if (document.body.classList.contains("gelap")) {
      localStorage.setItem("tema", "gelap");
      tombolTema.textContent = "Mode Terang";
    } else {
      localStorage.setItem("tema", "terang");
      tombolTema.textContent = "Mode Gelap";
    }
  });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");
if (kotakPesan && hitungKarakter) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
let proyek = [];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
<article class="kartu">
<span class="label">${item.kategori}</span>
<h3>${item.judul}</h3>
<img src="${item.gambar}" alt="${item.alt}" width="640" height="480">
<p>${item.deskripsi}</p>
</article>`;
}

function tampilkanProyek(daftar) {
  if (!daftarProyek) return;
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  if (jumlahProyek) {
    jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
  }
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  if (!tombol) return;

  tombol.addEventListener("click", () => {
    const tombolLama = document.querySelector(".tombol-filter.aktif");
    if (tombolLama) {
      tombolLama.classList.remove("aktif");
    }
    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }
  });
}
async function muatProyek() {
  daftarProyek.innerHTML = "<p>Memuat proyek...</p>";

  try {
    const response = await fetch("data/proyek.json");

    if (!response.ok) {
      throw new Error(`status ${response.status}`); 
    }

    proyek = await response.json();
    tampilkanProyek(proyek);
  } catch (error) {
    daftarProyek.innerHTML = "<p>Gagal memuat proyek. Silakan coba lagi nanti.</p>";
    console.error("Terjadi kesalahan saat memuat proyek:", error);
  }
}
if (daftarProyek) {
  muatProyek();
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-js", "JavaScript");
}
const username ="abidalwi002-svg";
const alamatRepo = `https://api.github.com/users/${username}/repos`;
const pilihan = "?sort=updated&per_page=6";
const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");

async function ambilRepo() {
  statusRepo.textContent = "Memuat repositori...";

  try {
    const response = await fetch(alamatRepo + pilihan);

    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }

    const repos = await response.json();
   
    repos.forEach((repo) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      
      link.href =repo.html_url; 
      link.target = "_blank";
      link.textContent = repo.name;

      item.appendChild(link); 
      daftarRepo.appendChild(item);
    });

    statusRepo.textContent = 
    `${repos.length} repositori terakhir yang diperbarui:`;
  } catch (error) {
    statusRepo.textContent = 
    "Gagal memuat repositori. Silakan coba lagi nanti.";
    console.error("Terjadi kesalahan saat memuat repositori:", error);
  }
}

if(daftarRepo) {
  ambilRepo();
}
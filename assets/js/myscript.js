const tanggalTujuan = new Date("Feb 20, 2025 09:00:00").getTime();
let hitungMundur = setInterval(() => {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const day = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const hour = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((selisih % (1000 * 60)) / 1000);

  let hari = document.querySelector(".hari");
  let jam = document.querySelector(".jam");
  let menit = document.querySelector(".menit");
  let detik = document.querySelector(".detik");

  hari.innerHTML = day;
  jam.innerHTML = hour;
  menit.innerHTML = minute;
  detik.innerHTML = second;

  if (selisih < 0) {
    clearInterval(hitungMundur);
    hari.innerHTML = "00";
    jam.innerHTML = "00";
    menit.innerHTML = "00";
    detik.innerHTML = "00";
  }
}, 1000);

// clipboad function
document.querySelector(".btn-salin").addEventListener("click", function () {
  let noRekElement = document.querySelector(".no-rek"); // Ambil elemen no-rek
  let noRek = noRekElement.innerText.trim(); // Ambil teksnya
  let message = document.getElementById("messagegift");
  playAudio();
  navigator.clipboard
    .writeText(noRek)
    .then(function () {
      message.innerText = "No. rekening berhasil disalin!";
    })
    .catch(function () {
      message.innerText = "Gagal menyalin!";
    });
});

const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.getElementById("song");
let iconWrapper = document.querySelector(".audio-icon-wrapper");
let isPlaying = false;

function playAudio() {
  song.play();
  iconWrapper.style.display = "flex";
  isPlaying = true;
}

iconWrapper.addEventListener("click", () => {
  if (isPlaying === true) {
    song.pause();
    audioIcon.classList.remove("fa-compact-disc");
    audioIcon.classList.add("fa-pause");
  } else {
    song.play();
    audioIcon.classList.add("fa-compact-disc");
    audioIcon.classList.remove("fa-pause");
  }

  isPlaying = !isPlaying;
});

// nama tamu

const urlParams = new URLSearchParams(window.location.search);
const namaTamuUndangan = document.querySelector(".nama-tamu-undangan");
const nama = urlParams.get("to") || "-";

namaTamuUndangan.innerHTML = nama;

const namaTamuUndanganThumbnail = document.querySelector(
  ".nama-tamu-undangan-thumbnail"
);
const namathumbnail = urlParams.get("to") || "-";

namaTamuUndanganThumbnail.innerHTML = namathumbnail;

// lihat undangan

const btnLihatUndangan = document.querySelector(".btn-lihat-undangan");

btnLihatUndangan.addEventListener("click", () => {
  const lihatUndangan = document.querySelector(".lihat-undangan");
  const body = document.querySelector("body");
  lihatUndangan.classList.add("invisible", "opacity-0");
  body.classList.remove("overflow-hidden");
  AOS.init({
    once: true
  })
  playAudio()
});



setTimeout(() => {
  document.querySelector(".lihat-undangan").classList.remove("hidden");
  document.querySelector(".lihat-undangan").classList.add("bg-[rgba(0,0,0,.5)]");
  document.querySelector(".btn-lihat-undangan").classList.add("bg-[#7384a1]");
}, 700);

setTimeout(() => {
  document.querySelector(".hero").classList.remove("hidden");
}, 3000);
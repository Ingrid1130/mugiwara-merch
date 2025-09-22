let produkSementara = {};

function openPopup(nama, gambar, harga) {
  produkSementara = { nama, gambar, harga };

  document.getElementById("popupGambar").src = gambar;
  document.getElementById("popupNama").textContent = nama;
  document.getElementById("popupHarga").textContent = harga;

  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

function beli() {
  let jumlah = document.getElementById("jumlah").value;
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

  for (let i = 0; i < jumlah; i++) {
    keranjang.push(produkSementara);
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  document.getElementById("cartCount").textContent = keranjang.length;

  alert(jumlah + " " + produkSementara.nama + " berhasil dimasukkan ke keranjang!");
  closePopup();
}

// Update badge keranjang saat halaman dibuka
window.onload = function() {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  if (document.getElementById("cartCount")) {
    document.getElementById("cartCount").textContent = keranjang.length;
  }
};
let totalItem = 0;
let totalHarga = 0;

function tambahPesanan(nama, harga) {
  harga = parseInt(harga);
  totalItem++;
  totalHarga += harga;

  document.getElementById("jumlahItem").value = totalItem;
  document.getElementById("totalHarga").value = "Rp " + totalHarga.toLocaleString("id-ID");
}

function hitungKembalian() {
  const uangBayar = parseInt(document.getElementById("uangBayar").value);
  if (isNaN(uangBayar) || document.getElementById("uangBayar").value === "") {
    document.getElementById("hasilKembalian").innerText = "Masukkan nominal uang yang valid.";
    return;
  }
  const kembali = uangBayar - totalHarga;
  if (kembali < 0) {
    document.getElementById("hasilKembalian").innerText = "Uang tidak cukup. Kurang Rp " + Math.abs(kembali).toLocaleString("id-ID");
  } else {
    document.getElementById("hasilKembalian").innerText = "Kembalian Anda: Rp " + kembali.toLocaleString("id-ID");
  }
}

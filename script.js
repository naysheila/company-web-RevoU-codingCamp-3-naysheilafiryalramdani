document.addEventListener("DOMContentLoaded", function () {
  // PROMPT SAPAAN
  let userName = prompt("Masukkan nama Anda:");
  if (!userName || userName.trim() === "") userName = "Pengunjung";
  document.getElementById("greeting").textContent = `Hi, ${userName}! Welcome to our website!`;

  const hasilDiv = document.getElementById("output");

  // 🧠 Saat halaman dimuat, cek apakah ada hasil yang disimpan
  const savedResult = localStorage.getItem("hasilKirim");
  if (savedResult) {
    hasilDiv.innerHTML = savedResult;
  }

  // EVENT KIRIM FORM
  const kirimBtn = document.getElementById("kirimBtn");
  kirimBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const kelamin = document.getElementById("kelamin").value;
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !tanggal || !kelamin || !pesan) {
      alert("Mohon isi semua kolom sebelum mengirim.");
      return;
    }

    // Ambil waktu kirim
    const now = new Date();
    const waktuKirim = now.toLocaleString("id-ID", {
      dateStyle: "long",
      timeStyle: "short",
    });

    // Buat tampilan hasil
    const hasilHTML = `
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
      <p><strong>Jenis Kelamin:</strong> ${kelamin}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
      <p><em>Dikirim pada: ${waktuKirim}</em></p>
    `;

    // Tampilkan hasil & simpan ke localStorage
    hasilDiv.innerHTML = hasilHTML;
    localStorage.setItem("hasilKirim", hasilHTML);

    // Kosongkan form setelah kirim
    document.getElementById("messageForm").reset();
  });
});

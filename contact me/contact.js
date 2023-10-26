document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();

  // Ambil nilai dari input dan textarea menggunakan .value
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#nomorTelepon").value;
  const message = document.querySelector("#message").value;

  // Menampilkan alert "Email sedang dikirim"
  alert("Email sedang dikirim...");

  // Kirim email menggunakan Email.js
  emailjs
    .send("service_hzhl96a", "template_owy8zoy", {
      from_name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(
      function (response) {
        // Menampilkan alert ketika email berhasil terkirim
        alert("Email sent successfully");

        // Merefresh halaman secara otomatis setelah menekan OK pada alert
        window.location.reload();
      },
      function (error) {
        // Menampilkan alert ketika email tidak dapat terkirim
        alert("Email could not be sent. Error: " + error);
      }
    );
});

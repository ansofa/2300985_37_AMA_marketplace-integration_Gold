$("#registration-form").submit(function (event) {
  event.preventDefault();

  const user_name = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const repassword = $("#repassword").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai");
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/v1/users/register", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ user_name, email, password }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman login
        alert("Registrasi berhasil! Silakan masuk.");
        window.location.href = "/";
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal mendaftar. Silakan coba lagi.");
      },
    });
  }
});

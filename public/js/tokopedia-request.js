// Fungsi untuk melakukan permintaan GET dengan bearer menggunakan Fetch
const fetchDataByBearer = (bearer) => {
  return fetch("/api/v1/tokopedia/profile?authorization=" + bearer).then(
    (response) => {
      return response.json();
    }
  );
};

$(document).ready(function () {
  // Temukan semua baris dalam tabel
  const rows = $("table tbody tr");

  // Lakukan iterasi melalui setiap baris
  rows.each(function (index, row) {
    // Ambil nilai data-bearer dari atribut data
    const bearer = $(row).data("bearer");

    // Lakukan permintaan GET ke endpoint dengan bearer yang sesuai
    fetchDataByBearer(bearer)
      .then((data) => {
        // Pastikan respons telah diterima dengan benar
        if (data.status === "SUCCESS") {
          const profileData = data.data;

          // Isi kolom nomor dengan nomor berurutan
          $(row)
            .find("td:eq(0)")
            .text(index + 1);

          // Isi data ke dalam baris yang sesuai
          $(row).find("td:eq(1)").text(profileData.name); // Nama Akun
          $(row).find("td:eq(2)").text(profileData.phone); // Nomor HP
          $(row).find("td:eq(3)").text(profileData.saldoTokopedia); // Saldo Gopay
          $(row).find("td:eq(4)").text(profileData.ovoCash); // Saldo Tokopedia
          $(row).find("td:eq(5)").text(profileData.statusMember); // Level Member

          // Tambahkan tautan "Hapus" ke dalam kolom "Action"
          const deleteButton = $("<button>")
            .addClass("badge badge-danger deleteProfile")
            .attr("type", "button")
            .text("Hapus");

          const updateButton = $("<button>")
            .addClass("badge badge-primary updateButton")
            .attr("type", "button")
            .attr("data-toggle", "modal")
            .attr("data-target", "#modalUpdateTokopedia")
            .text("Update");

          $(row).find("td:eq(6)").empty().append(updateButton, deleteButton);

          // Tambahkan efek fadeIn
          $(row).hide().fadeIn(200);
        } else {
          $(row)
            .find("td:eq(0)")
            .text(index + 1);
          $(row).find("td:eq(1)").text("Silahkan Reload Halaman.");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
});

// Event handler saat tombol "Simpan" ditekan
$("#simpanBearer").click(function () {
  // Ambil nilai Bearer dari input
  const bearerValue = $("#Bearer").val();

  // Ambil nama dari profil data

  // Siapkan data untuk POST request
  const postData = {
    authorization: bearerValue,
  };

  // Lakukan permintaan POST ke endpoint /api/v1/profiles menggunakan Fetch
  fetch("/api/v1/profiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((response) => {
      // Pastikan respons POST berhasil
      // Pastikan respons telah diterima dengan benar
      if (response.status === "SUCCESS") {
        // Bearer yang dimasukkan benar
        location.reload();
        console.log(response);
      } else {
        // Bearer tidak valid
        console.log(response.error);
        $("#error-message-tambah").text(response.error + " Silakan coba lagi.");
        $("#error-message-tambah").show();
        // Hapus pesan kesalahan secara otomatis
        setTimeout(function () {
          $("#error-message-tambah").hide();
        }, 1000);
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
});

$(document).on("click", ".deleteProfile", function () {
  const row = $(this).closest("tr"); // Temukan baris yang berisi tautan "Hapus"
  const id = row.attr("id"); // Ambil ID dari baris tersebut
  console.log(this);

  // Kirim permintaan HTTP DELETE ke endpoint sesuai dengan URL
  if (confirm("Anda yakin ingin menghapus item ini?")) {
    // Kirim permintaan DELETE ke endpoint dengan ID tertentu menggunakan fetch
    fetch("/api/v1/tokopedia/profile/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Hapus baris dari tabel jika penghapusan berhasil
          $(this).closest("tr").remove();
        } else {
          alert("Gagal menghapus item.");
        }
      })
      .catch((error) => {
        alert("Terjadi kesalahan saat menghapus item: " + error.message);
      });
  }
});

$(document).on("click", ".updateButton", function () {
  var bearerValue = $(this).closest("tr").data("bearer");
  // Mengisi nilai input modal dengan nilai data-bearer
  $("#updateBearerTokopedia").val(bearerValue);
  $("#updateBearerTokopedia").attr(
    "data-profile-id",
    $(this).closest("tr").attr("id")
  );
});

$(document).on("click", "#updateBearer", function () {
  const dataProfileId = $("#updateBearerTokopedia").data("profile-id");

  // Ambil nilai Bearer dari input
  const bearerValue = $("#updateBearerTokopedia").val();

  // Ambil nama dari profil data

  // Siapkan data untuk POST request
  const postData = {
    authorization: bearerValue,
  };

  // Lakukan permintaan POST ke endpoint /api/v1/profiles menggunakan Fetch
  fetch("/api/v1/profile/" + dataProfileId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((response) => {
      // Pastikan respons POST berhasil
      // Pastikan respons telah diterima dengan benar
      if (response.status === "SUCCESS") {
        // Bearer yang dimasukkan benar
        location.reload();
        console.log(response);
      } else {
        // Bearer tidak valid
        console.log(response.error);
        $("#error-message-update").text(response.error + " Silakan coba lagi.");
        $("#error-message-update").show();
        // Hapus pesan kesalahan secara otomatis
        setTimeout(function () {
          $("#error-message-update").hide();
        }, 1000);
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
});

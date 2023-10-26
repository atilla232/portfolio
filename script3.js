// Ambil elemen tombol "tombol-20" dan "tombol-21" serta elemen div "tool" dan "lg"
var tombol20 = document.getElementById("tombol-20");
var tombol21 = document.getElementById("tombol-21");
var toolDiv = document.getElementById("tool");
var lgDiv = document.getElementById("lg");

// Cek apakah ada keadaan sebelumnya tersimpan di localStorage
var currentState = localStorage.getItem("buttonState");

// Jika ada keadaan sebelumnya, terapkan sesuai dengan nilai yang disimpan
if (currentState === "tombol-20") {
  toolDiv.style.display = "none";
  lgDiv.style.display = "flex";
  tombol20.classList.remove("btn-outline-primary");
  tombol20.classList.add("btn-primary");
  tombol21.classList.remove("btn-primary");
  tombol21.classList.add("btn-outline-primary");
} else if (currentState === "tombol-21") {
  toolDiv.style.display = "flex";
  lgDiv.style.display = "none";
  tombol20.classList.remove("btn-primary");
  tombol20.classList.add("btn-outline-primary");
  tombol21.classList.remove("btn-outline-primary");
  tombol21.classList.add("btn-primary");
}

// Tambahkan event listener untuk tombol "tombol-20"
tombol20.addEventListener("click", function () {
  toolDiv.style.display = "none";
  lgDiv.style.display = "flex";
  localStorage.setItem("buttonState", "tombol-20");
  tombol20.classList.remove("btn-outline-primary");
  tombol20.classList.add("btn-primary");
  tombol21.classList.remove("btn-primary");
  tombol21.classList.add("btn-outline-primary");
  // ...
});

// Tambahkan event listener untuk tombol "tombol-21"
tombol21.addEventListener("click", function () {
  toolDiv.style.display = "flex";
  lgDiv.style.display = "none";
  localStorage.setItem("buttonState", "tombol-21");
  tombol20.classList.remove("btn-primary");
  tombol20.classList.add("btn-outline-primary");
  tombol21.classList.remove("btn-outline-primary");
  tombol21.classList.add("btn-primary");
  // ...
});

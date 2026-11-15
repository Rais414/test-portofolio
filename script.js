
/* =================================
   JAVASCRIPT PORTOFOLIO
================================= */

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. MENU NAVIGASI MOBILE
    // =================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Membuka dan menutup menu navigasi
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // Mengganti icon menu
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

    // Menutup menu setelah link diklik
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.innerHTML = "☰";

        });

    });

    // =================================
    // 2. VALIDASI FORM KONTAK
    // =================================

    const contactForm = document.getElementById("contactForm");

    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {

        // Mencegah halaman reload
        event.preventDefault();

        // Mengambil nilai input
        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        // =================================
        // VALIDASI NAMA
        // =================================

        if (name === "") {

            showMessage("Nama wajib diisi!", "error");

            return;

        }

        // =================================
        // VALIDASI EMAIL
        // =================================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            showMessage("Email wajib diisi!", "error");

            return;

        }

        if (!emailPattern.test(email)) {

            showMessage("Format email tidak valid!", "error");

            return;

        }

        // =================================
        // VALIDASI PESAN
        // =================================

        if (message === "") {

            showMessage("Pesan wajib diisi!", "error");

            return;

        }

        // =================================
        // JIKA SEMUA VALIDASI BERHASIL
        // =================================

        showMessage(
            "Validasi berhasil! Terima kasih telah mengisi formulir.",
            "success"
        );

        // Mengosongkan form
        contactForm.reset();

    });

    // =================================
    // 3. FUNGSI MENAMPILKAN PESAN
    // =================================

    function showMessage(text, type) {

        formMessage.textContent = text;

        formMessage.className = type;

    }

    // =================================
    // 4. TAHUN FOOTER OTOMATIS
    // =================================

    const yearElement = document.getElementById("year");

    yearElement.textContent = new Date().getFullYear();

});
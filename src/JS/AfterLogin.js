document.querySelectorAll(".exercise-box").forEach(function (box) {
    box.addEventListener("click", function () {
        const imageUrl = box.style.backgroundImage;
        const selectedImage = document.getElementById("selectedImage");
        selectedImage.src = imageUrl.substring(5, imageUrl.length - 2);

        // Mendapatkan ukuran gambar yang dipilih
        const img = new Image();
        img.src = selectedImage.src;
        img.onload = function () {
            // Mengatur ukuran border sesuai dengan ukuran gambar
            const borderSize = Math.max(img.width, img.height) * 0.9; // Sesuaikan angka 0.1 sesuai kebutuhan
            document.getElementById(
                "selectedImageContainer"
            ).style.borderWidth = borderSize + "px";
        };
    });
});

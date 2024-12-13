document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const galleries = document.querySelectorAll(".gallery");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const caption = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Toggle gallery display
    dropdowns.forEach((dropdown, index) => {
        dropdown.addEventListener("click", () => {
            const gallery = galleries[index];
            const isVisible = gallery.style.display === "grid";
            gallery.style.display = isVisible ? "none" : "grid";
        });
    });

    // Open modal
    const images = document.querySelectorAll(".gallery-item img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            caption.textContent = img.alt;
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

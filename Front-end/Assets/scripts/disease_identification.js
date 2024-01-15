document.addEventListener("DOMContentLoaded", function()
{
    const form = document.getElementById("disease-identification-form");
    const plantDropdown = document.getElementById("plants");
    const fileInput = document.getElementById('file-input');

    form.addEventListener("submit", (event) => {
        if (plantDropdown.value === "default") {
            alert("Please select a plant.");
            event.preventDefault();
        }

        if (fileInput.files.length === 0) {
            alert("Please upload an image.");
            event.preventDefault();
        }
    });
});
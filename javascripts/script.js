document.addEventListener("DOMContentLoaded", () => {
    const $drake = document.getElementById("drake");

    $drake.addEventListener("click", () => {
        const url = new URL($drake.dataset.redirect)
        window.open(url, "_blank").focus();
    })
})
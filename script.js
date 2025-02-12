document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const errorIcon = document.querySelector(".erro-de-icon");
    const errorMessage = document.querySelector(".erro-mensagem");
    const submitButton = document.getElementById("button");

    submitButton.addEventListener("click", function () {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add("erro");
            errorIcon.style.display = "block";
            errorMessage.style.display = "block";
        } else {
            emailInput.classList.remove("erro");
            errorIcon.style.display = "none";
            errorMessage.style.display = "none";
            alert("Email válido!");
        }
    });
});
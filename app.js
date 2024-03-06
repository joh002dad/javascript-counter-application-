document.addEventListener("DOMContentLoaded", () => {
    const counterValue = document.getElementById("counter-value");
    const incrementBtn = document.getElementById("increment-btn");

    incrementBtn.addEventListener('click', () => {
        let currentValue = parseInt(counterValue.textContent, 10);
        counterValue.textContent = currentValue + 1;
    });
});
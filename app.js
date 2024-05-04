document.addEventListener("DOMContentLoaded", function() {
    // Обработчик нажатия на кнопку открытия майнера
    document.getElementById("open-miner-button").addEventListener("click", function() {
        // Показываем форму для ввода пароля при нажатии на кнопку
        document.getElementById("password-form").style.display = "block";
    });

    // Обработчик нажатия на кнопку отправки пароля
    document.getElementById("submit-button").addEventListener("click", function() {
        const password = document.getElementById("password-input").value;
        // Здесь можно добавить логику отправки пароля на сервер для проверки или выполнения других действий
        console.log("Password:", password);
        // Ваш код для отправки пароля и выполнения дальнейших действий
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const loginForm = document.getElementById("loginForm")

    // localstorageからデータを取得して自動入力
    emailField.value = localStorage.getItem("email") || "";
    passwordField.value = localStorage.getItem("password") || "";

    // フォームの送信イベント
    loginForm.addEventListener("submit", function(event) {
        // フォームのデフォルト送信を防ぐ
        event.preventDefault();

        const email = emailField.value;
        const password = passwordField.value;

        if (email && password) {
            // localstorageにデータを保存
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Your login details have been saved!");
        } else {
            alert("Please enter both email and password.");
        }
    });
});
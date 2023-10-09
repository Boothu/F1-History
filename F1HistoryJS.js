document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.href;
    if (currentPage.includes("F1HistoryHomepage.html")) {
        var userName = prompt("Please enter your name:");

        if (userName) {
            var welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome to F1 History, " + userName + "!";
        }
    }
});
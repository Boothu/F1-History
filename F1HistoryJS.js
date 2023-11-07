document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.href;
    if (currentPage.includes("F1HistoryHomepage.html")) {
        var name = localStorage.getItem('name');
        if (name == "" || name == null) {
            var userName = prompt("Please enter your name:");
            localStorage.setItem('name', userName)
            var welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome to F1 History, " + name + "!";
            location.reload();
        }
        else {
            var welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome to F1 History, " + name + "!";
            // localStorage.clear();
            // Used for testing purposes
        }
    }
});
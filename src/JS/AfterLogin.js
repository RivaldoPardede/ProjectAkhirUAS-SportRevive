const profileContainer = document.querySelector("#profile_settings .container")
const profile = document.querySelector(".profile")
const iconClose = document.querySelector(".icon-close")

profile.addEventListener("click", () => {
    profileContainer.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    profileContainer.classList.remove("active-popup");
});


const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let currentDate = new Date();
function displayDates() {
    document.getElementById("month-year").innerText =
       dayNames[currentDate.getDay()] + ", " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();
    for (let i = 1; i <= 5; i++) {
        const circle = document.getElementById("circle" + i);
        let date = new Date(currentDate.getTime());
        date.setDate(date.getDate() + i - 1);
        circle.innerText = date.getDate();
    }
}
function nextDates() {
    currentDate.setDate(currentDate.getDate() + 5);
    displayDates();
}
function prevDates() {
    currentDate.setDate(currentDate.getDate() - 5);
    displayDates();
}
displayDates();

const profileContainer = document.querySelector("#profile_settings .container");
const profile = document.querySelector(".profile");
const iconClose = document.querySelector(".icon-close");
const genderOption = document.querySelectorAll(".btn-gender");
const genderWrapper = document.getElementById("gender")
const manPic = [
    "../Assets/Media/Leg/leg.jpg",
    "../Assets/Media/Abs/abs.jpg",
    "../Assets/Media/Arm/arm.jpg",
    "../Assets/Media/Chest/chest.jpg",
    "../Assets/Media/Shoulder_Back/shoulder.jpg",
];
let gender;

for (let i = 0; i < 2; i++) {
    genderOption[i].addEventListener("click", () => {
        gender = genderOption[i].value
        genderWrapper.style.display = "none"
    })
}

for (let i = 0; i < 5; i++) {
    const exercise = document.querySelector(".exercise-" + (i + 1));
    console.log(exercise.innerText);
}

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
        dayNames[currentDate.getDay()] +
        ", " +
        monthNames[currentDate.getMonth()] +
        " " +
        currentDate.getFullYear();
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

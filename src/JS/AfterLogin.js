const profileContainer = document.querySelector("#profile_settings .container");
const profile = document.querySelector(".profile");
const iconClose = document.querySelector(".icon-close");
const genderOption = document.querySelectorAll(".btn-gender");
const genderWrapper = document.getElementById("gender");
const manPict = [
    "../Assets/Media/Leg/man_leg.jpg",
    "../Assets/Media/Abs/man_abs.jpg",
    "../Assets/Media/Arm/man_arm.jpg",
    "../Assets/Media/Chest/man_chest.jpg",
    "../Assets/Media/Shoulder_Back/man_shoulder.jpg",
];
const womanPict = [
    "../Assets/Media/Leg/woman_leg.jpg",
    "../Assets/Media/Abs/woman_abs.jpg",
    "../Assets/Media/Arm/woman_arm.jpeg",
    "../Assets/Media/Chest/woman_chest.jpeg",
    "../Assets/Media/Shoulder_Back/woman_back.jpg",
];

let gender;

for (let i = 0; i < 2; i++) {
    genderOption[i].addEventListener("click", () => {
        gender = genderOption[i].value;
        genderWrapper.style.display = "none";
        updateBackground();
        setGenderDropdown();
    });
}

function updateBackground() {
    for (let i = 0; i < 5; i++) {
        const exercise_box = document.getElementById("box-" + (i + 1));
        if (gender == "man") {
            exercise_box.style.backgroundImage = `url(${manPict[i]})`;
        } else if (gender == "woman") {
            exercise_box.style.backgroundImage = `url(${womanPict[i]})`;
        }
    }
}

const genderSettings = document.getElementById("gender-option");
genderSettings.addEventListener("change", () => {
    gender = genderSettings.value;
    updateBackground();
});

function setGenderDropdown() {
    genderSettings.value = gender;
}

gender = "Male";

updateBackground();
setGenderDropdown();

profile.addEventListener("click", () => {
    profileContainer.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
    profileContainer.classList.remove("active-popup");
});

const settingsIcon = document.querySelector("#profile");
settingsIcon.addEventListener("click", (event) => {
    event.preventDefault();
});

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const body = ["leg", "abs", "arm", "chest", "shoulder_back"];
for (let i = 0; i < 5; i++) {
    const exercise_box = document.getElementById("box-" + (i + 1));
    exercise_box.addEventListener("click", () => {
        const selectedBody = body[i];
        window.location.href = `../html/Exercise.html?gender=${gender}&body=${selectedBody}`;
    });
}

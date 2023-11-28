if (window.location.href.includes("AfterLogin.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const profileContainer = document.querySelector(
            "#profile_settings .container"
        );
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

        for (let i = 0; i < 5; i++) {
            const exercise_box = document.getElementById("box-" + (i + 1));

            if (exercise_box) {
                exercise_box.addEventListener("click", () => {
                    const exerciseType = exercise_box.dataset.exerciseType;
                    fetchExerciseData(gender,exerciseType); // Menghapus parameter gender di sini
                });
            } else {
                console.error(
                    "Exercise box not found for ID:",
                    "box-" + (i + 1)
                );
            }
        }
    });
}

    function fetchExerciseData(gender,exerciseType) {
        // Menghapus parameter gender di sini
        const url = `http://localhost:8080/Exercise/${gender}/${exerciseType}`; // Menyertakan "man" secara langsung, bisa diubah sesuai kebutuhan
    
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                updateExerciseView(data);
            })
            .catch((error) => {
                console.error(`Error fetching exercise data: ${error.message}`);
            });
    }
function updateExerciseView(data) {
    const container = document.querySelector(".exerciseStep");
    container.innerHTML = ""; // Mengosongkan container
    
    data.video.forEach((videoSrc, index) => {
        const videoElement = document.createElement("video");
        videoElement.src = videoSrc;
        videoElement.width = 200;
        videoElement.controls = true;
        
        const nameElement = document.createElement("p");
        nameElement.textContent = data.nama[index];
        
        const repetitionElement = document.createElement("p");
        repetitionElement.textContent = data.repetisi[index];

        const stepElement = document.createElement("div");
        stepElement.classList.add("step");
        stepElement.appendChild(videoElement);
        stepElement.appendChild(nameElement);
        stepElement.appendChild(repetitionElement);
        
        container.appendChild(stepElement);
    });
    
    // Jika ingin menambahkan elemen HTML lain atau logika lainnya, bisa ditempatkan di sini
    window.location.href = `exercise.html?data=${JSON.stringify(data)}`;
}

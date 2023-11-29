
// Exercise-Step-Start

// Exercse-Step-End

const urlParams = new URLSearchParams(window.location.search);

const selectedGender = urlParams.get("gender");
const selectedBody = urlParams.get("body");

console.log(selectedGender);
console.log(selectedBody);

const man = {
    abs: [
        {
            video: [
                "../Assets/Media/Abs/Man/airback.mp4",
                "../Assets/Media/Abs/Man/boll_sit_up.mp4",
                "../Assets/Media/Abs/Man/heel_kick.mp4",
                "../Assets/Media/Abs/Man/lying_down_leg_raises.mp4",
                "../Assets/Media/Abs/Man/mountain_climbers.mp4",
                "../Assets/Media/Abs/Man/plank_jump_ins.mp4",
                "../Assets/Media/Abs/Man/plank_one_leg_raise.mp4",
                "../Assets/Media/Abs/Man/plank_with_arm_raise.mp4",
                "../Assets/Media/Abs/Man/reverse_hip_raise.mp4",
                "../Assets/Media/Abs/Man/seated_leg_pull_ins.mp4",
                "../Assets/Media/Abs/Man/spider_push_up.mp4",
            ],
            nama_latihan: [
                "Airback",
                "Boll Sit Up",
                "Hell Kick",
                "Lying Down Leg Raises",
                "Mountain Climbers",
                "Plank Jump Ins",
                "Plank One Leg Raise",
                "Plank With Arm Raise",
                "Reverse Hip Raise",
                "Seated Leg Pull Ins",
                "Spider Push Up",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Abs/man_abs.jpg",
        },
    ],
    arm: [
        {
            video: [
                "../Assets/Media/Arm/Man/battle_rope.mp4",
                "../Assets/Media/Arm/Man/front_plank.mp4",
                "../Assets/Media/Arm/Man/hindu_push_up.mp4",
                "../Assets/Media/Arm/Man/incline_push_up.mp4",
                "../Assets/Media/Arm/Man/kb_swing.mp4",
                "../Assets/Media/Arm/Man/over_head_pass.mp4",
                "../Assets/Media/Arm/Man/plank_jump_ins.mp4",
                "../Assets/Media/Arm/Man/plank_with_arm_raise.mp4",
                "../Assets/Media/Arm/Man/pull_up.mp4",
                "../Assets/Media/Arm/Man/side_plank.mp4",
                "../Assets/Media/Arm/Man/spider_push_up.mp4",
            ],
            nama_latihan: [
                "Battle Rope",
                "Front Plank",
                "Hindu Push Up",
                "Incline Push Up",
                "KB Swing",
                "Over Head Pass",
                "Plank Jump Ins",
                "Plank With Arm Raise",
                "Pull Up",
                "Side Plank",
                "Spider Push Up",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Arm/man_arm.jpg",
        },
    ],
    chest: [
        {
            video: [
                "../Assets/Media/Chest/Man/burpe_with_push_up.mp4",
                "../Assets/Media/Chest/Man/Cable_Crossovers.mp4",
                "../Assets/Media/Chest/Man/dumble_sholder_press.mp4",
                "../Assets/Media/Chest/Man/hindu_push_up.mp4",
                "../Assets/Media/Chest/Man/hummer_curl_squad.mp4",
                "../Assets/Media/Chest/Man/kb_swing.mp4",
                "../Assets/Media/Chest/Man/push_up_dumble.mp4",
                "../Assets/Media/Chest/Man/push_up.mp4",
                "../Assets/Media/Chest/Man/swing_boll_up_and_down.mp4",
                "../Assets/Media/Chest/Man/swing_boll.mp4",
                "../Assets/Media/Chest/Man/Triceps_Dips.mp4",
            ],
            nama_latihan: [
                "Burpe with Push Up",
                "Cable Crossovers",
                "Dumble Shoulder Press",
                "Hindu Push Up",
                "Hammer Curl Squad",
                "KB Swing",
                "Push Up Dumble",
                "Push Up",
                "Swing Boll Up and Down",
                "Swing Boll",
                "Triceps Dips",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Chest/man_chest.jpg",
        },
    ],
    leg: [
        {
            video: [
                "../Assets/Media/Leg/Man/butt_kickers.mp4",
                "../Assets/Media/Leg/Man/front_jumping_jack.mp4",
                "../Assets/Media/Leg/Man/front_kick.mp4",
                "../Assets/Media/Leg/Man/jumping_in_place.mp4",
                "../Assets/Media/Leg/Man/jumping_jack.mp4",
                "../Assets/Media/Leg/Man/plank_one_leg_raise.mp4",
                "../Assets/Media/Leg/Man/plie_squad_with_knee_to_elbow.mp4",
                "../Assets/Media/Leg/Man/side_lunge_floor_touch.mp4",
                "../Assets/Media/Leg/Man/sprint_in_place.mp4",
                "../Assets/Media/Leg/Man/step_on_chair_with_dumble.mp4",
                "../Assets/Media/Leg/Man/step_side.mp4",
            ],
            nama_latihan: [
                "Butt Kickers",
                "Front Jumping Jack",
                "Front Kick",
                "Jumping In Place",
                "Jumping Jack",
                "Plank One Leg Raise",
                "Plie Squad with Knee to Elbow",
                "Side Lungke Floor Touch",
                "Sprint In Place",
                "Step On Chair with Dumble",
                "Step Side",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Leg/man_leg.jpg",
        },
    ],
    shoulder_back: [
        {
            video: [
                "../Assets/Media/Shoulder_Back/Man/Arm_and_Leg_Raise.mp4",
                "../Assets/Media/Shoulder_Back/Man/dumbbell_lateral_raise.mp4",
                "../Assets/Media/Shoulder_Back/Man/good_morning.mp4",
                "../Assets/Media/Shoulder_Back/Man/hindu_push_up.mp4",
                "../Assets/Media/Shoulder_Back/Man/hummer_curl_squad.mp4",
                "../Assets/Media/Shoulder_Back/Man/pull_up.mp4",
                "../Assets/Media/Shoulder_Back/Man/side_rise_back.mp4",
                "../Assets/Media/Shoulder_Back/Man/standing_row.mp4",
                "../Assets/Media/Shoulder_Back/Man/superman.mp4",
                "../Assets/Media/Shoulder_Back/Man/Triceps_Dips.mp4",
                "../Assets/Media/Shoulder_Back/Man/Urdhva_Dhanurasana.mp4",
            ],
            nama_latihan: [
                "Arm and Leg Raise",
                "Dumbell Lateral Raise",
                "Good Morning",
                "Hindu Push Up",
                "Hammer Curl Squad",
                "Pull Up",
                "Side Rise Back",
                "Standing Row",
                "Superman",
                "Triceps Dips",
                "Urdhva_Dhanurasana",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Shoulder_Back/man_shoulder.jpg",
        },
    ],
};

const woman = {
    abs: [
        {
            video: [
                "../Assets/Media/Abs/Woman/back_leg_rise.mp4",
                "../Assets/Media/Abs/Woman/back_stand.mp4",
                "../Assets/Media/Abs/Woman/half_sit_up.mp4",
                "../Assets/Media/Abs/Woman/leg_lift.mp4",
                "../Assets/Media/Abs/Woman/prone_cobra.mp4",
                "../Assets/Media/Abs/Woman/push_up_and_jump.mp4",
                "../Assets/Media/Abs/Woman/roll_back_to_stand.mp4",
                "../Assets/Media/Abs/Woman/side_leg_raise.mp4",
                "../Assets/Media/Abs/Woman/sit_up_boll.mp4",
                "../Assets/Media/Abs/Woman/stability_ball_reverse_crunch.mp4",
                "../Assets/Media/Abs/Woman/stability_boll_leg_and_hand.mp4",
            ],
            nama_latihan: [
                "Back Leg Rise",
                "Back Stand",
                "Half Sit Up",
                "Leg Lift",
                "Prone Cobra",
                "Push Up And Jump",
                "Roll Back to Stand",
                "Side Leg Rise",
                "Sit Up Ball",
                "Stability Ball Reverse Crunch",
                "Stability Ball Leg and Hand",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Abs/woman_abs.jpg",
        },
    ],
    arm: [
        {
            video: [
                "../Assets/Media/Arm/Woman/bicep_curl.MOV",
                "../Assets/Media/Arm/Woman/front_incline_push_up.mp4",
                "../Assets/Media/Arm/Woman/incline_boll_push_up.mp4",
                "../Assets/Media/Arm/Woman/one_hand_push_up.MOV",
                "../Assets/Media/Arm/Woman/pike_push_up.MOV",
                "../Assets/Media/Arm/Woman/pull_up.MOV",
                "../Assets/Media/Arm/Woman/push_up_and_jump.mp4",
                "../Assets/Media/Arm/Woman/push_up_with_dumble.MOV",
                "../Assets/Media/Arm/Woman/site_step_with_punch.MOV",
                "../Assets/Media/Arm/Woman/spider_push_up.MOV",
                "../Assets/Media/Arm/Woman/Split_lunge_front_rise.mp4",
            ],
            nama_latihan: [
                "Bicep Curl",
                "Front Incline Push Up",
                "Incline Ball Push Up",
                "One Hard Push Up",
                "Pike Push Up",
                "Pull Up",
                "Push Up and Jump",
                "Push Up with Dumble",
                "Site Step with Punch",
                "Spider Push Up",
                "Split Lunge Front Rise",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Arm/woman_arm.jpeg",
        },
    ],
    chest: [
        {
            video: [
                "../Assets/Media/Chest/Woman/back_dumble_curle.MOV",
                "../Assets/Media/Chest/Woman/bijekpas.MOV",
                "../Assets/Media/Chest/Woman/bijtekpas_side.MOV",
                "../Assets/Media/Chest/Woman/dumble_press.MOV",
                "../Assets/Media/Chest/Woman/knee_push_up.MOV",
                "../Assets/Media/Chest/Woman/one_hand_push_up.MOV",
                "../Assets/Media/Chest/Woman/Pike_Push-Up.MOV",
                "../Assets/Media/Chest/Woman/press_shoulder_squad.mp4",
                "../Assets/Media/Chest/Woman/pull_up.MOV",
                "../Assets/Media/Chest/Woman/push_up.MOV",
                "../Assets/Media/Chest/Woman/tricep_dips_dumble.MOV",
            ],
            nama_latihan: [
                "Back Dumble Curle",
                "Bijekpas",
                "Bijekpas Side",
                "Dumble Press",
                "Knee Push Up",
                "One Hand Push Up",
                "Pike Push Up",
                "Press Shoulder Squad",
                "Pull Up",
                "Push Up",
                "Tricep Dips Dumble",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Chest/woman_chest.jpeg",
        },
    ],
    leg: [
        {
            video: [
                "../Assets/Media/Leg/Woman/airwalk.MOV",
                "../Assets/Media/Leg/Woman/chair_step.MOV",
                "../Assets/Media/Leg/Woman/front_squad.MOV",
                "../Assets/Media/Leg/Woman/hindu_squad.mp4",
                "../Assets/Media/Leg/Woman/jumping_jack.mp4",
                "../Assets/Media/Leg/Woman/jumping_side_jack.MOV",
                "../Assets/Media/Leg/Woman/roll_back_and_stand_up.mp4",
                "../Assets/Media/Leg/Woman/side_one_leg_raise.mp4",
                "../Assets/Media/Leg/Woman/side_punch.MOV",
                "../Assets/Media/Leg/Woman/side_to_side_step_up.mp4",
                "../Assets/Media/Leg/Woman/squad_with_alternating_reverse_lunge.mp4",
            ],
            nama_latihan: [
                "AirwalK",
                "Chair Step",
                "Front Squad",
                "Hindu Squad",
                "Jumping Jack",
                "Jumping Side Jack",
                "Roll Back and Stand Up",
                "Side One Leg Raise",
                "Side Punch",
                "Side to Side Step Up",
                "Squad With alternating Reverse Lunge",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Leg/woman_leg.jpg",
        },
    ],
    shoulder_back: [
        {
            video: [
                "../Assets/Media/Shoulder_Back/Woman/arm_and_leg_raise.MOV",
                "../Assets/Media/Shoulder_Back/Woman/de_pullover.mp4",
                "../Assets/Media/Shoulder_Back/Woman/dumbbell_reterall_side.MOV",
                "../Assets/Media/Shoulder_Back/Woman/heel_kick.mp4",
                "../Assets/Media/Shoulder_Back/Woman/jumping_jack.mp4",
                "../Assets/Media/Shoulder_Back/Woman/lunge_tuch_foot.MOV",
                "../Assets/Media/Shoulder_Back/Woman/one_leg_raise.mp4",
                "../Assets/Media/Shoulder_Back/Woman/prone_cobra.mp4",
                "../Assets/Media/Shoulder_Back/Woman/pull_up.MOV",
                "../Assets/Media/Shoulder_Back/Woman/superman.MOV",
                "../Assets/Media/Shoulder_Back/Woman/tricep_dips_dumble.mp4",
            ],
            nama_latihan: [
                "Arm and Leg Rise",
                "De Pullover",
                "Dumble Lateral side",
                "Heel Kick",
                "Jumping Jack",
                "Lunge Touch Foot",
                "One Leg Rise",
                "Prone Cobra",
                "Pull Up",
                "Superman",
                "Tricep Dips Dumble",
            ],
            repetisi: "2 x 10",
            picture: "../Assets/Media/Shoulder_Back/woman_back.jpg",
        },
    ],
};

const exerciseData = selectedGender === "man" ? man : woman;

const data = exerciseData[selectedBody][0];

document.addEventListener("DOMContentLoaded", () => {
    const exerciseContainer = document.querySelector(".exerciseStep");
    const chosenExerciseTitle = document.querySelector(".ChoosenExercise h1");

    chosenExerciseTitle.textContent = selectedBody.toUpperCase();

    const backgroundImageUrl = data.picture;
    document.querySelector(
        ".ChoosenExercise"
    ).style.backgroundImage = `url('${backgroundImageUrl}')`;

    data.video.forEach((videoSrc, index) => {
        const stepDiv = document.createElement("div");
        stepDiv.classList.add("step");

        const videoElement = document.createElement("video");
        videoElement.src = videoSrc;
        videoElement.width = 200;
        videoElement.controls = true;

        const nameElement = document.createElement("p");
        nameElement.textContent = data.nama_latihan[index];

        const repetitionElement = document.createElement("p");
        repetitionElement.textContent = data.repetisi;

        stepDiv.appendChild(videoElement);
        stepDiv.appendChild(nameElement);
        stepDiv.appendChild(repetitionElement);

        exerciseContainer.appendChild(stepDiv);
    });
});
isExerciseStarted = false;
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".btn-start");
    const finishButton = document.querySelector(".btn-finish");

    startButton.addEventListener("click", () => {
        alert("Words of encouragement for your exercise!");
        isExerciseStarted = true;
    });

    finishButton.addEventListener("click", () => {
        if (isExerciseStarted) {
            alert("Congratulations! You've completed the exercise.");
        } else {
            alert("Please start the exercise first.");
        }
    });
});

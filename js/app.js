console.log("working");

// ******************************************************************************

// // timer
// let seconds = 1
// let minutes = 0
// let hours = 0


// let startButton = document.getElementById("start")
// startButton.addEventListener("click", (event) => {
//     let modalWindow = document.getElementById("modal");
//     timerIncrement();
//     if (modalWindow.style.display = "block") {
//         modalWindow.style.display = "none";
//     }
// })


// function timerIncrement() {
    
    
//         // increment timer function every second
//         window.setTimeout(timerIncrement, 1000)
//         if (seconds <= 59) {
//             // display time in .timer (display clock in top right corner)
//             document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + convertTimerDisplay(minutes) + ":" + convertTimerDisplay(seconds);
//             seconds++
//             // increment minutes once time is above 59
//         } else if (seconds = 59) {
//             minutes++
//             // displays seconds as zero instead of 60
//             seconds = 0;
//             document.querySelector(".timer").innerHTML = hours + ":" + convertTimerDisplay(minutes) + ":" + seconds;
//             // sets new value of seconds to 1 to begin incrementation again
//             seconds = 1;
//         } else if (minutes = 59) {
//             hours++
//             // displays minutes as 0, instead of 60
//             minutes = 0;
//             document.querySelector(".timer").innerHTML = convertTimerDisplay(hours) + ":" + minutes + ":" + seconds;
//         }
// }

// // add "0" infront of numbers <= 9
// function convertTimerDisplay(num) {
//     if (num <= 9) {
//         return ("0" + num);
//     } else {
//         return num;
//     }
// }

// ****************************************************************************

console.log("working");
// Question and answer choices appear on click
// click .points (any square with a points value) to make question appear
let pointsAmount = 0;
function clickQuestion() {
    // declare .points
    let pointsQuestions = document.querySelectorAll(".points");
    // create array for .points
    for (let i = 0; i < pointsQuestions.length; i++) {
        // add event listener to all .points
        pointsQuestions[i].addEventListener("click", (event) => {
            // create new div

            // create div inside new div for questions

            // create 4 divs inside new div for answers (needs id)
        })
    }
}
clickQuestion();
// let totalPoints = 0;
// check if answer is correct or incorrect
function checkAnswer(pointsAmount, cQA, questionDisplay) {
    //let pointsAmount = event.target.innerText;
    let answers = document.querySelectorAll(".answers");
    let totalPoints = 0;
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", (event) => {
            // uses id of event  to grab second index of same array in object
            if (cQA[event.target.id][1] === true) {
                totalPoints += pointsAmount;
                questionDisplay.style.display = "none"
                console.log(totalPoints)
            } else {
                totalPoints -= pointsAmount;
                console.log(totalPoints)
                questionDisplay.style.display = "none"
            }
        })
    }
}
// checkAnswer();
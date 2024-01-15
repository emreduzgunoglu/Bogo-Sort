let button = document.getElementById("testLuckBtn");

let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")

let showArrayP = document.getElementById("displayArray")
let asd = "naber"
showArrayP.innerText = asd

button.addEventListener("click", calculate);

function calculate() {

    console.clear();
    const startTime = new Date();
    let array = [];
    let correctArray = [];
    if (option1.checked) {
        array.length = 4
        correctArray = [0, 1, 2, 3]
    }

    if (option2.checked) {
        array.length = 5
        correctArray = [0, 1, 2, 3, 4]
    }

    if (option3.checked) {
        array.length = 6
        correctArray = [0, 1, 2, 3, 4, 5]
    }

    let run = true;
    while (run) {
        let random = [array.length]

        for (let i = 0; i < array.length; i++) {
            random[i] = Math.floor(Math.random() * array.length);
        }

        showArrayP.innerText = random

        console.log("Random = " + random)

        if (correctArray.toString() == random.toString()) {
            const finishTime = new Date();
            const diffInMs = finishTime.getTime() - startTime.getTime();
            run = false;
            console.log("----- FOUND ------")
            console.log("Time Diff: " + diffInMs + " ms.");
            console.log("Correct Array = " + correctArray + " || Found Array = " + random)
        }
    }

}
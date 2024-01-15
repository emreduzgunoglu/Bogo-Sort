let button = document.getElementById("testLuckBtn");

let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")

let showArrayP = document.getElementById("displayArray")
let showTimeDiff = document.getElementById("timeDiff")

let sortingList = document.getElementById("sortingList").querySelectorAll('li')
let resultList = document.getElementById("resultList").querySelectorAll('li')

option1.addEventListener("click", display);
option2.addEventListener("click", display2);
option3.addEventListener("click", display3);

function display() {
    showArrayP.innerText = "- - - -"
}

function display2() {
    showArrayP.innerText = "- - - - -"
}

function display3() {
    showArrayP.innerText = "- - - - - -"
}

button.addEventListener("click", calculate);

function calculate() {

    console.clear();
    const startTime = new Date();

    let correctArray = [];
    if (option1.checked) {
        correctArray = [1, 2, 3, 4]
    }

    if (option2.checked) {
        correctArray = [1, 2, 3, 4, 5]
    }

    if (option3.checked) {
        correctArray = [1, 2, 3, 4, 5, 6]
    }

    let run = true;
    let text = new String;
    while (run) {
        let random = [correctArray.length]

        for (let i = 0; i < correctArray.length; i++) {
            random[i] = Math.floor(Math.random() * correctArray.length + 1);
        }

        /* sortingList.forEach((item, index) => {

            item.innerText = "selam"
            console.log(index);
        }); */

        changeInnerText(random)

        console.log("Random = " + random)

        if (correctArray.toString() == random.toString()) {
            const finishTime = new Date();
            const diffInMs = finishTime.getTime() - startTime.getTime();
            run = false;

            setTimeout(() => {
                showTimeDiff.innerText = "Sorted in: " + diffInMs + " ms"
            }, diffInMs / 2);

            console.log("----- FOUND ------")
            console.log("Time Diff: " + diffInMs + " ms.");
            console.log("Correct Array = " + correctArray + " || Found Array = " + random)
        }
    }

}

function changeInnerText(array) {

    setTimeout(() => {
        let text = new String;
        for (let i = 0; i < array.length; i++) {
            text = text + array[i] + " "
        }
        showArrayP.innerText = text
    }, 1);
}
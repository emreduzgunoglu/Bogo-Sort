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
button.addEventListener("click", calculate);

let correctArray = [1, 2, 3, 4];
let resultArray = [];

function display() {
    showArrayP.innerText = "- - - -"
    sortingList.forEach((item, index) => {
        item.innerText = "- - - -"
    });
    correctArray = [1, 2, 3, 4]
    clearColor()
}

function display2() {
    showArrayP.innerText = "- - - - -"
    sortingList.forEach((item, index) => {
        item.innerText = "- - - - -"
    });
    correctArray = [1, 2, 3, 4, 5]
    clearColor()
}

function display3() {
    showArrayP.innerText = "- - - - - -"
    sortingList.forEach((item, index) => {
        item.innerText = "- - - - - -"
    });
    correctArray = [1, 2, 3, 4, 5, 6]
    clearColor()
}

function calculate() {
    clearColor()
    const startTime = new Date();

    let run = true;
    let counter = 0;
    let allArrays = []
    while (run) {
        let random = [correctArray.length]

        for (let i = 0; i < correctArray.length; i++) {
            random[i] = Math.floor(Math.random() * correctArray.length + 1);
        }

        allArrays[counter] = random;
        counter++

        if (counter == 10) {
            counter = 0;
        }

        changeInnerText(random)

        if (correctArray.toString() == random.toString()) {
            const finishTime = new Date();
            const diffInMs = finishTime.getTime() - startTime.getTime();
            run = false;

            setTimeout(() => {
                sortingList[9].innerHTML = arrayToText(random);
            }, 30);

            setTimeout(() => {
                showTimeDiff.innerText = "Sorted in: " + diffInMs + " ms"
                displayBestResult(diffInMs);
                setColorToRGB();
            }, diffInMs / 2);

        }
        else {
            displaySortingProcess(random, counter)
        }
    }
}

function setColorToRGB() {
    for (let i = 0; i < 6; i++)
        sortingList[i].style.color = "red"
    for (let i = 6; i < 9; i++)
        sortingList[i].style.color = "#ff9500" // turuncu
    sortingList[9].style.color = "#4caf50" // #4caf50 güzel yeşil
}

function clearColor() {
    for (let i = 0; i <= 9; i++)
        sortingList[i].style.color = "#ffffff"
}

function displaySortingProcess(random, counter) {
    setTimeout(() => {
        sortingList[counter].innerText = arrayToText(random)
    }, 1);
}

function arrayToText(array) {
    let text = new String;
    for (let i = 0; i < array.length; i++) {
        text = text + array[i] + " "
    }
    return text;
}

function changeInnerText(array) {
    setTimeout(() => {
        showArrayP.innerText = arrayToText(array)
    }, 1);
}

function displayBestResult(result) {
    setTimeout(() => {
        resultArray.push(result)
        resultArray.sort(function (a, b) { return a - b });

        for (let i = 0; i < resultArray.length; i++) {
            if (i < 10) {
                resultList[i].innerText = resultArray[i] + " ms";
            }
        }
    }, result);
}


let timeRemainingFixed = 30;
let timeRemaining = 0;
let score = 0;

//What if you needed to manipulate a lot of DOM elements, is there a better way than declaring all of these
let currentQuestion = 0;
let questionDiv = document.getElementById("questionDiv");
let startingPageContainer = document.getElementById("starting-page-container");
let goToLeaderboard = document.getElementById("high-score-button");
let questionPage = document.getElementById("question-page");
let scorePage = document.getElementById("score-page");
let timerEl = document.getElementById("timer");
let scoreEl = document.getElementById("score");
let startButtonEl = document.getElementById("start-button");
let gameOverMessage = document.getElementById("over-message");
let highScores = document.getElementById("high-scores-page");
let scoreSubmitButton = document.getElementById("score-submit");
let scoreTable = document.getElementById("score-table");
let answerShadow = document.getElementById("time-score-quit");
let timePenalty = 4;
let startTimer; //declaring this here so that I can access it globally, and stop the timer from anywhere



let answer = 0;
let buttonToPick = 0;

let questionEl = document.getElementById("question");

//using this to randomly assign correct answer to a button via children[]
let buttonEl = document.querySelector(".buttons").children; //do not use childNodes, as this will select things other than just the buttons' textContent

function clearScreen() {


    console.log("ClearScreen called");
    startingPageContainer.setAttribute("class", "starting-page-hidden");
    questionPage.setAttribute("class", "question-page-hidden");
    scorePage.setAttribute("class", "score-page-hidden");
    highScores.setAttribute("class", "high-scores-hidden");


}



//having to using this function as a sort of hack as cannot find another easier way to trigger animations
function checkAnswer() {
    setTimeout(function () {

        answerShadow.style.animation = "";

    }, 800);



    //add onClick events to each of the buttons. 
    //when activated, get attribute and check what the class is. if it has correct or false

    //
    // buttonEl[buttonToPick].onclick = () => {

    //     console.log("buttonToPick = " + buttonToPick);
    //     console.log("correct!");
    //}

    // y.onclick = () => {
    //     y.setAttribute("style", "background-color: green");
    //     console.log("correct answer");
    //     // startGame();

    // }

    button1El = document.getElementById("button1");
    button2El = document.getElementById("button2");
    button3El = document.getElementById("button3");
    button4El = document.getElementById("button4");

    // use preventDefault(); to stop the timer from acting weird?


    //how to combine these four below into one function

    button1El.onclick = () => {


        //why can't I just use button1El.getAttribute?
        if (document.getElementById("button1").getAttribute("class") !== "correctAnswer") {

            console.log("Wrong Answer");
            timeRemaining -= timePenalty;
            timerEl.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(startTimer);
                console.log("button 1 triggering game over");
                gameOver();
            }
            else {
                answerShadow.style.animation = "wrongAnswerAnimation 1s";
                startGame();
            }
        }
        else {
            answerShadow.style.animation = "correctAnswerAnimation 1s";
            console.log("Correct Answer");
            score++;
            scoreEl.textContent = "Score: " + score;
            // answerShadow.style.animation = "";
            startGame();

        }
        // startGame();//placing  this here means it will still get called no matter what. once any other functions that were called have finished executing, it will go back to checkAnswer() and this will get executed.

    }


    button2El.onclick = () => {

        if (document.getElementById("button2").getAttribute("class") !== "correctAnswer") {

            console.log("Wrong Answer");
            timeRemaining -= timePenalty;
            timerEl.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(startTimer);
                gameOver();
            }
            else {
                answerShadow.style.animation = "wrongAnswerAnimation 1s";
                startGame();
            }
        }
        else {
            answerShadow.style.animation = "correctAnswerAnimation 1s";
            console.log("Correct Answer");
            score++;
            scoreEl.textContent = "Score: " + score;
            // answerShadow.style.animation = "";
            startGame();
        }

    }

    button3El.onclick = () => {

        if (document.getElementById("button3").getAttribute("class") !== "correctAnswer") {

            console.log("Wrong Answer");
            timeRemaining -= timePenalty;
            timerEl.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(startTimer);
                gameOver();
            }
            else {
                answerShadow.style.animation = "wrongAnswerAnimation 1s";
                startGame();
            }
        }
        else {
            answerShadow.style.animation = "correctAnswerAnimation 1s";
            console.log("Correct Answer");
            score++;
            scoreEl.textContent = "Score: " + score;
            // answerShadow.style.animation = "";
            startGame();
        }

    }

    button4El.onclick = () => {

        if (document.getElementById("button4").getAttribute("class") !== "correctAnswer") {

            // console.log("Wrong Answer");
            timeRemaining -= timePenalty;
            timerEl.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(startTimer);
                gameOver();
            }
            else {
                answerShadow.style.animation = "wrongAnswerAnimation 1s";
                startGame();
            }
        }
        else {
            answerShadow.style.animation = "correctAnswerAnimation 1s";
            // console.log("Correct Answer");
            score++;
            scoreEl.textContent = "Score: " + score;
            // answerShadow.style.animation = "";
            startGame();
        }

    }
    document.getElementById("quit").onclick = () => {

        clearInterval(startTimer);
        questionPage.setAttribute("class", "hidden");
        startingPageContainer.setAttribute("class", "starting-page");

    }



}

// let buttonAnswer = document.querySelectorAll(".wrongAnswer").forEach(item => {

//     item.addEventListener("click", event => {
//         console.log("wrong answer");
//         // startGame();

//     })
// })







//is there a better way of select a lot of elements?
// let buttonOneEl = document.getElementById("button-1");
// let buttonTwoEl = document.getElementById("button-2");
// let buttonThreeEl = document.getElementById("button-3");
// let buttonFourEl = document.getElementById("button-4");


startButtonEl.onclick = () => {

    startInitiated();
}

goToLeaderboard.onclick = () => {

    startingPageContainer.setAttribute("class", "hidden");
    getHighScores();
}

function startInitiated() {

    clearScreen();
    score = 0;
    timeRemaining = timeRemainingFixed;
    // highScores.setAttribute("class", "score-page-hidden");

    scoreEl.textContent = "Score: " + score;

    timerEl.textContent = "Time: " + timeRemaining; //using timeRemaining-- here was both unnecessary, and doesn't do anything anyway
    startTimer = setInterval(() => {   //because I was declaring startTimer here, that's why I can't clear it from the other function(s)

        if (timeRemaining <= 1) {   //use 1 here instead of 0 otherwise it will wait an extra second on 0 before clearing screen

            clearInterval(startTimer);
            gameOver();

        }
        //updating score here will only occur at every second, not in real time
        // scoreEl.textContent = "Score: " + score;
        timeRemaining--;
        //if I use timeRemaining-- below, isntead of separately above, it makes the time display deduct an extra second and pause when a question is answered incorrectly
        timerEl.textContent = "Time: " + timeRemaining;

    }, 1000);
    // prepareNewQuestion();
    startGame();


}

//this function is being called twice... *solved* Because it was being called when timer either went below zero or clock ran out of time.
function gameOver() {

    console.log("game over function called");
    //  document.getElementById("fname").value = ""; //this produces some weird results with duplication of results in scoreboard
    questionPage.setAttribute("class", "hidden");
    scorePage.setAttribute("class", "score-page");

    (score === 1) ? gameOverMessage.textContent = "You scored 1 point." : gameOverMessage.textContent = `You scored ${score} points.`;

    if (score > 35) {

    }
    if (score > 25 && score < 35) {

    }


    scoreSubmitButton.onclick = () => { //using the "add event listener (event)"" thing in order to use prevent default made it run twice on the button click....
        console.log("Score submit function");
        //event.preventDefault(); //need to prevent default button/input action somehow which is appending stuff to the url... use preventdefault?
        let userScore = {
            name: document.getElementById("fname").value,
            score: score
        }
        let userScsoreString = JSON.stringify(userScore);


        // localStorage.setItem(JSON.stringify(localStorage.length), userScsoreString);
        console.log("Adding local storage");
        localStorage.setItem(localStorage.length, userScsoreString);
        console.log("Local storage added");

        scorePage.setAttribute("class", "score-page-hidden");
        getHighScores();
    };


    // scoreSubmitButton.addEventListener("click", function (event) {
    //     event.preventDefault();

    //     console.log("Score submit function");
    //     //event.preventDefault(); //need to prevent default button/input action somehow which is appending stuff to the url... use preventdefault?
    //     let userScore = {
    //         name: document.getElementById("fname").value,
    //         score: score
    //     }
    //     let userScsoreString = JSON.stringify(userScore);


    //     // localStorage.setItem(JSON.stringify(localStorage.length), userScsoreString);
    //     console.log("Adding local storage");
    //     localStorage.setItem(localStorage.length, userScsoreString);
    //     console.log("Local storage added");

    //     scorePage.setAttribute("class", "score-page-hidden");
    //     getHighScores();
    // });

}


function getHighScores() {

    document.getElementById("fname").value = "";
    console.log("setting high scores");

    //need to delete the table elements that are already there first, either that or add to beneath them. probably easier to delete the entire table and reinsert

    // while (document.getElementsByTagName("tbody")) {

    //     document.getElementsByTagName("tbody").removeChild;
    // }

    //delete all children from table    
    while (scoreTable.firstElementChild) {
        //console.log("Removed: " + scoreTable.children[0].children[1]);
        scoreTable.firstElementChild.remove();
    }


    //add table headers
    // let tableHeader = scoreTable.createTHead();
    // let headerRow = tableHeader.insertRow(0);
    // let headerCell1 = headerRow.insertCell(0);
    // let headerCell2 = headerRow.insertCell(1);
    // headerCell1.textContent = "Name";
    // headerCell2.textContent = "Score";


    highScores.setAttribute("class", "high-scores");
    for (let i = 0; i < localStorage.length; i++) {

        // console.log("storage length is" + localStorage.length);
        let userScore = JSON.parse(localStorage[i]);
        // console.log(userScore);

        //insert row and two columns
        let tablebody = scoreTable.create;
        let row = scoreTable.insertRow(-1);
        // if (score === 0) {
        //     row.setAttribute("style", "order: 100");
        // } else {
        row.setAttribute("style", "order:" + (userScore.score + 1));
        //}
        row.setAttribute("class", "inserted-row");
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);


        if (userScore.name === "") {

            cell1.textContent = "Anonymous"
        } else {

            cell1.textContent = userScore.name;
        }
        cell2.textContent = userScore.score;
    }

    var header = scoreTable.createTHead();

    // Create an empty <tr> element and add it to the first position of <thead>:
    var row = header.insertRow(0);

    // Insert a new cell (<td>) at the first position of the "new" <tr> element:
    var cell = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell.textContent = "Name";
    cell2.textContent = "Score";

    document.getElementById("play-again").onclick = () => {


        console.log("play again clicked");
        startInitiated();

    }
    document.getElementById("clear-scores").onclick = () => {


        for (let i = localStorage.length; i > 0; i--) {
            scoreTable.deleteRow(i);
        }

        localStorage.clear();
        getHighScores();

    }


}


// function prepareNewQuestion() {
//     //remove main page
//     // .remove() could also be used here. It worked only after I used getElementByID, it didn't work with getElementsByClass
//     startingPageContainer.setAttribute("class", "starting-page-hidden");
//     questionPage.setAttribute("class", "question-page");

//     //render new elements

//     startGame();

// }


function startGame() {
    // answerShadow.style.animation = "clearAnimation 0.1s";


    // answer = 0;

    // 1 = addition, 2 = subtraction, 3 = multiplication, 4 = division
    let operations = getRandom(1, 3);
    // console.log("random number is: " + operations);

    //addition
    if (operations === 1) {
        let firstNumber = getRandom(-5, 10);
        let secondNumber = getRandom(-25, 25);
        answer = firstNumber + secondNumber;
        questionEl.textContent = `${firstNumber} + ${secondNumber} = ?`;
    }
    //subtraction
    if (operations === 2) {
        let firstNumber = getRandom(-5, 10);
        let secondNumber = getRandom(-10, 25);
        answer = firstNumber - secondNumber;

        questionEl.textContent = `${firstNumber} - ${secondNumber} = ?`;
    }
    //multiplication
    if (operations === 3) {
        let firstNumber = getRandom(-5, 10);
        let secondNumber = getRandom(-10, 25);
        answer = firstNumber * secondNumber;

        questionEl.textContent = `${firstNumber} x ${secondNumber} = ?`;
    }
    //division
    if (operations === 4) {
        let firstNumber = getRandom(-5, 10);
        let secondNumber = getRandom(-10, 25);
        answer = firstNumber / secondNumber;

        questionEl.textContent = `${firstNumber} ÷ ${secondNumber} = ?`;
    }

    populateAnswers(answer);

};



function populateAnswers(x) {
    questionPage.setAttribute("class", "question-page");
    //could flex order be used to randomise the buttons?

    //pick which button holds the correct answer...
    let buttons = [0, 1, 2, 3];
    buttonToPick = getRandom(0, 3);


    buttonEl[buttonToPick].textContent = x;
    buttonEl[buttonToPick].setAttribute("class", "correctAnswer");
    //...and then remove this button option from the pool
    buttons.splice(buttonToPick, 1);

    //how many buttons are to the left and right of the one with the correct answer?
    let itemsRight = (3 - buttonToPick);
    let itemsLeft = buttonToPick;
    //make copies for the loops
    let iR = itemsRight;
    let iL = itemsLeft;


    // console.log("Answer was inserted into button: " + buttonToPick);
    // console.log("Buttons array is: " + buttons);
    // console.log("The number of buttons to the left is: " + itemsLeft);
    // console.log("The number of buttons to the right is: " + itemsRight);


    //fill the other buttons with answers in sequential order, incremented by 1

    //fill in answers from left to right, up until correct button
    for (let j = 0; j < itemsLeft; j++) {

        buttonEl[buttons[j]].textContent = (x - iL--);
        buttonEl[buttons[j]].setAttribute("class", "wrongAnswer");
    }
    //fill in answers from right to left, up to correct button
    for (let j = 0; j < itemsRight; j++) {

        buttonEl[buttons[2 - j]].textContent = (x + iR--);
        buttonEl[buttons[2 - j]].setAttribute("class", "wrongAnswer");
    }



    // while (buttons.length > 0) {

    //     //this doesn't seem to work
    //     // let correctButton = document.querySelector(".buttons:nth-child(" + buttonToPick + ")");

    //     let correctButton = document.querySelector(".buttons").childNodes;
    //     correctButton[buttonToPick].textContent = "hello"
    //     buttons[buttonToPick].pop();

    // }


    // console.log("Answer received is: " + x);
    //only way to get this to work was to pass value to a function
    checkAnswer();

}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


// generateQuestion();

//multiple scenarios where timer ends
//maybe do console log at start of every function call to make sure it's only being called once

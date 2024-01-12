// General Quiz Logic
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const questionTitle = document.getElementById("question-title");
    const choicesContainer = document.getElementById("choices");
    const endScreen = document.getElementById("end-screen");
    const finalScore = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedbackDiv = document.getElementById("feedback");
    let currentIndex = 0;
    let score = 0;
    let timeLeft = 60;
  
    startButton.addEventListener("click", startQuiz);
    choicesContainer.addEventListener("click", checkAnswer);
    submitButton.addEventListener("click", saveScore);

// Function StartQuiz
    function startQuiz() {
      startButton.parentElement.classList.add("hide");
      endScreen.classList.add("hide");
      choicesContainer.innerHTML = "";
      currentIndex = 0;
      score = 0;
      timeLeft = 60;
      updateTimer();
      showQuestion();
      startTimer();
    }

// Function Show Question
function showQuestion() {
    if (currentIndex < questions.length && timeLeft > 0) {
      const currentQuestion = questions[currentIndex];
      questionTitle.textContent = currentQuestion.question;
      choicesContainer.innerHTML = "";
      currentQuestion.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        choicesContainer.appendChild(button);
      });
      document.getElementById("questions").classList.remove("hide");
      currentIndex++;
    } else {
      endQuiz();
    }
  }
  
// Function Check Answer
function checkAnswer(event) {
    if (event.target.tagName === "BUTTON") {
      const selectedAnswer = event.target.textContent;
      const currentQuestion = questions[currentIndex - 1];
  
      // Logic Play Sound and Display Message
      if (selectedAnswer === currentQuestion.correctAnswer) {
        playSound("correctSound");
        score++;
        feedbackDiv.textContent = "Correct!";
      } else {
        playSound("incorrectSound");
        timeLeft -= 10;
        updateTimer();
        feedbackDiv.textContent = "Incorrect!";
      }
  
      feedbackDiv.classList.remove("hide");
      setTimeout(() => {
        feedbackDiv.classList.add("hide");
        showQuestion();
      }, 1000);
    }
  }
  
  
  // Function Play Sound
  function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
      sound.play();
    }
  }  
  
// Function End Quiz
function endQuiz() {
    document.getElementById("questions").classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = score;
  
    // Check Existence of Restart Button 
    const existingRestartButton = document.getElementById("restart-button");
    if (!existingRestartButton) {
      // Create Restart Button
      const restartButton = document.createElement("button");
      restartButton.id = "restart-button";
      restartButton.textContent = "Restart Quiz";
      restartButton.addEventListener("click", startQuiz);
      endScreen.appendChild(restartButton);
    }
  
    clearInterval(timerInterval);
  }
  
 // Function Save Score
 function saveScore() {
    const initials = initialsInput.value.trim();
    if (initials !== "") {
      const newScore = { initials, score };
      console.log("Initials: " + initials + ", Score: " + score);
      const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      highscores.push(newScore);
      localStorage.setItem("highscores", JSON.stringify(highscores));
      // Reset Initials Input
      initialsInput.value = "";
    }
  }
  
// Function Update Timer
    function updateTimer() {
      document.getElementById("time").textContent = timeLeft;
    }
  
// Timer logic
    let timerInterval;
    function startTimer() {
      timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
          endQuiz();
        }
      }, 1000);
    }
  });
  
  // The script uses an array of questions, where each question has a question, choices, and a correct answer. The questions are displayed one by one, and the user's score is updated based on their answers. The quiz ends when there are no more questions or time has run out. The user's score is saved in local storage when they submit their initials.

  // This script controls the logic for a quiz application. Here's a breakdown of the script:

// Event Listeners: Adds event listeners to the start button, choices, and submit button.
// startQuiz(): Initializes the quiz by hiding the start screen, resetting the current index, score, and time left. It also displays the first question and starts the timer.
// showQuestion(): Displays the current question and choices. If there are no more questions or time has run out, it calls the endQuiz() function.
// checkAnswer(): Checks if the selected answer is correct. If correct, it increments the score and displays a correct message. If incorrect, it deducts 10 seconds from the time left and displays an incorrect message.
// playSound(): Plays a sound based on the provided soundId.
// endQuiz(): Displays the end screen with the final score. If the restart button doesn't exist, it creates one. It also clears the timer interval.
// saveScore(): Saves the user's initials and score in local storage.
// updateTimer(): Updates the time left displayed on the screen.
// startTimer(): Starts the timer by decrementing the time left every second and calling the updateTimer() function. If time left is 0 or less, it calls the endQuiz() function.
// Load scores on DOM load
window.addEventListener("DOMContentLoaded", function () {
    console.log("Scores.js loaded");
  
    const highscoresList = document.getElementById("highscores");
  
    // Retrieve High Scores From Local Storage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
    console.log("Retrieved highscores:", highscores);
  
    // High Scores Sorting
    highscores.sort((a, b) => b.score - a.score);
  
    // Display High Scores
    highscores.forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry.initials}: ${entry.score}`;
      highscoresList.appendChild(li);
    });
  
    // Clear High Scores Button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
      // Clear High Scores From Local Storage
      localStorage.removeItem("highscores");
      console.log("Highscores cleared");
      // Clear Displayed High Scores
      highscoresList.innerHTML = "";
    });
  });
  
  // This code initializes the highscores list, retrieves highscores from local storage, sorts them, displays them, and adds a click event listener to the clear button to clear highscores from local storage and the displayed list.
// Initialize the player's score
let score = 0;

// Function to create and append the score element
function createScoreElement() {
  const scoreBox = document.createElement('div');
  scoreBox.id = 'score-box';
  scoreBox.className = 'flex-centered';
  document.body.appendChild(scoreBox);
}

// Function to update the score display
function updateScore() {
  document.getElementById('score-box').textContent = 'Score: ' + score;
}

// Call the createScoreElement function to create the score element
createScoreElement();

// Function to increase or decrease the score based on the result
function updateScoreBasedOnResult(result) {
  // Adjust the score based on the result
  if (result) {
    // Correct operator selected, increase the score
    score += 5; // You can adjust the increase as needed
  } else {
    // Incorrect operator selected, decrease the score
    score -= 1; // You can adjust the decrease as needed
  }
 

  // Update the score display
  updateScore();
}

// Example: Call updateScoreBasedOnResult with a result (true for correct, false for incorrect)
// For demonstration purposes, let's assume the result is true
let result = true; // Change this based on your actual game logic
updateScoreBasedOnResult(result);

// Function to handle the "Play Again" button click
function handlePlayAgainClick() {
  // Redirect to the game page
  window.location.href = 'game.html';
}

// Attach the handlePlayAgainClick function to the "Play Again" button
document.getElementById('play-again-button').addEventListener('click', handlePlayAgainClick);

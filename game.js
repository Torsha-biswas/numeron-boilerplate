// Iteration 2: Generate 2 random number and display it on the screen
// game.js

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to update the displayed numbers
  function updateNumbers() {
    const number1 = getRandomNumber(1, 100); // Adjust the range as needed
    const number2 = getRandomNumber(1, 100); // Adjust the range as needed
  
    // Update the HTML content of the number holders
    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
  }
  
  // Call the updateNumbers function to display initial numbers
  updateNumbers();
  

// Iteration 3: Make the options button functional
// game.js (continued)

// Function to handle button clicks
function handleButtonClick(relation) {
    // Get the values of the displayed numbers
    const number1 = parseInt(document.getElementById('number1').textContent);
    const number2 = parseInt(document.getElementById('number2').textContent);
  
    // Compare the numbers based on the selected relation
    let result;
    if (relation === 'greater-than') {
      result = number1 > number2;
    } else if (relation === 'equal-to') {
      result = number1 === number2;
    } else if (relation === 'lesser-than') {
      result = number1 < number2;
    }
  
    // Call a function to handle the result (you can define this function later)
    handleResult(result);
    updateScoreBasedOnResult(result);

  
    // Update the displayed numbers for the next round
    updateNumbers();
  }
  
  // Attach click event listeners to the buttons
  document.getElementById('greater-than').addEventListener('click', () => handleButtonClick('greater-than'));
  document.getElementById('equal-to').addEventListener('click', () => handleButtonClick('equal-to'));
  document.getElementById('lesser-than').addEventListener('click', () => handleButtonClick('lesser-than'));
  

// Iteration 4: Build a timer for the game
// game.js (continued)

// Set the initial time (in seconds)
let score=0;
let timeRemaining = 10; // You can adjust the time as needed


// Function to update the timer display
function updateTimer() {
  document.getElementById('timer').textContent = timeRemaining;
}

// Function to handle the game over scenario
// Initialize the player's score

// Rest of your existing code...

// Function to handle the game over scenario
function handleGameOver() {
  // Display game over text
  //document.getElementById('instructions').textContent = 'Game Over';

  // Display the final score on the game over screen
  //document.getElementById('score-board').textContent = score;

  // Optionally, you can display the final score or perform other actions
  // For now, let's alert the user with a simple message
 // alert('Game Over! Your final score is: ' + score);

  // Redirect to a game over or result page if needed
  window.location.href = 'gameover.html';
}

// Rest of your existing code...


// Function to start the game timer
function startTimer() {
  // Update the timer display initially
  updateTimer();

  // Update the timer every second
  const timerInterval = setInterval(() => {
    timeRemaining--;

    // Update the timer display
    updateTimer();

    // Check if time has run out
    if (timeRemaining <= 0) {
      // Stop the timer
      clearInterval(timerInterval);

      // Call the function to handle the game over scenario
      handleGameOver();
    }
  }, 1000); // Update every 1000 milliseconds (1 second)
}
function handleResult(result) {
    // Placeholder function
    console.log('Result:', result);
    // Add any logic you want to handle the result
  }
  

// Call the startTimer function to begin the game
startTimer();


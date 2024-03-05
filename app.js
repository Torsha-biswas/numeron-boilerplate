// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
// app.js

// Function to handle the click event when the Play button is clicked
function handlePlayButtonClick() {
    // Redirect to the game page
    window.location.href = 'game.html';
  }
  
  // Add event listener to the Play button
  document.getElementById('play-button').addEventListener('click', handlePlayButtonClick);
  

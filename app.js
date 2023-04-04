
//  For this assignment, reference the last two articles. Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

//  **Extra credit:** Put a countdown timer (10-30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.





// Get the necessary elements from the HTML
// Get the necessary elements from the HTML
const clickBtn = document.getElementById('clickBtn');
const clickCount = document.getElementById('clickCount');
const timer = document.getElementById('timer');

// Set the initial count
let count = 0;

// Set the initial time
let timeLeft = 30;

// Check if the count is already stored in local storage
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
  clickCount.textContent = count;
}

// Create the timer function
function startTimer() {
  // Set the interval to 1 second
  const interval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    // If the timer reaches 0, clear the interval
    if (timeLeft === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// Add an event listener to the button
clickBtn.addEventListener('click', () => {
  // If the timer has not started, start it
  if (timeLeft === 30) {
    startTimer();
  }
  // If the timer has ended, reset the time and count
  if (timeLeft === 0) {
    timeLeft = 30;
    count = 0;
    localStorage.setItem('count', count);
    clickCount.textContent = count;
    startTimer();
  }
  // If the timer is still running, increment the count and update the display
  if (timeLeft > 0) {
    count++;
    localStorage.setItem('count', count);
    clickCount.textContent = count;
  }
});

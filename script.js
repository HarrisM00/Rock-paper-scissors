// Global variables
let userName = '';
let userWins = 0;
let computerWins = 0;
const choices = ['rock', 'paper', 'scissors'];

// Function to get random choice for computer
function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner for a single round
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

// Function to update round outcome display
function updateRoundOutcome(userChoice, computerChoice, winner) {
    // Update user choice display
    document.getElementById('userChoice').textContent = `User Choice: ${userChoice}`;
    // Update computer choice display
    document.getElementById('computerChoice').textContent = `Computer Choice: ${computerChoice}`;
    // Update winner announcement
    let message;
    if (winner === 'tie') {
        message = 'It\'s a tie!';
    } else if (winner === 'user') {
        message = `${userName} wins this round!`;
        userWins++;
    } else {
        message = 'Computer wins this round!';
        computerWins++;
    }
    document.getElementById('winnerAnnouncement').textContent = message;
}

// Function to update rounds won tracker
function updateRoundsTracker() {
    document.getElementById('userWins').textContent = `User Wins: ${userWins}`;
    document.getElementById('computerWins').textContent = `Computer Wins: ${computerWins}`;
}

// Function to handle form submission and start game
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    userName = document.getElementById('userName').value;
    // Hide the name input form
    document.getElementById('nameForm').style.display = 'none';
    // Show the game elements
    document.getElementById('gameElements').style.display = 'block';
});

// Function to handle user choice selection
function userChoiceHandler(choice) {
    const computerChoice = getRandomChoice();
    const winner = determineWinner(choice, computerChoice);
    updateRoundOutcome(choice, computerChoice, winner);
    updateRoundsTracker();
}

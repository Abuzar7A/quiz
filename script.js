const startButton = document.getElementById('start-button');
const welcomeScreen = document.querySelector('.welcome-screen');
const quizContainer = document.querySelector('.quiz-container');

startButton.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    // Load questions here
});

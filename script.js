function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Child')) || speechSynthesis.getVoices()[0];
        utterance.rate = 0.9; // Slightly slower for clarity
        speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support text-to-speech. Please use Google Chrome or Firefox.');
    }
}

let answers = JSON.parse(localStorage.getItem('answers')) || [];

function checkAnswer(userAnswer, correct) {
    const questionText = document.querySelector('h2').textContent;
    const result = correct === 'correct' ? 'Great job, Peyton! That\'s right!' : 'Oops, try again!';
    alert(result);
    speak(result);
    answers.push({ question: questionText, answer: userAnswer, correct: correct === 'correct' });
    localStorage.setItem('answers', JSON.stringify(answers));
}

function downloadProgress() {
    const data = JSON.stringify(answers, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'peyton-learning-progress.json';
    a.click();
    URL.revokeObjectURL(url);
}

window.onload = () => {
    speak('Welcome, Peyton! Let\'s learn about God\'s world today!');
};

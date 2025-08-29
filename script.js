// Updated speak for biblical emphasis
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Child')) || speechSynthesis.getVoices()[0];
        speechSynthesis.speak(utterance);
    }
}

// Rest same; add optional video play tracking if desired

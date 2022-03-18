function parrotRepeat(){
    let userInput = getPhrase();
    fullPhrase = `Haha!, ${userInput}, haha! ${userInput}!`;
    let synth = window.speechSynthesis;
    let utter = new SpeechSynthesisUtterance();
    utter.pitch = 10;
    utter.rate = 2;
    utter.text = fullPhrase;
    return window.speechSynthesis.speak(utter);
}

function getPhrase(){
    return prompt("Enter the phrase", "Add a phrase here and end with punctuation.");
}

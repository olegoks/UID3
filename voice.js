const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();

var speechRecognitionList = new SpeechGrammarList();
recognition.grammars = speechRecognitionList;
recognition.continuous = false;

//if (localStorage.getItem('language') === '1') recognition.lang = 'en-US';
//else 
//if (localStorage.getItem('language') === '2')
recognition.lang = 'ru';

recognition.interimResults = true;
recognition.maxAlternatives = 1;

voice = document.querySelector('.search-input__voice-button');

search = document.querySelector('.search-input__button');

input = document.querySelector('.search-input');
input.placeholder = 'wsdcsdc';



// начало речи
voice.onclick = function() {
    recognition.start();
    voice.style.borderRadius = '20px';
    voice.style.backgroundColor = 'red';
    voice.disabled = true;
}

// результат речи
recognition.onresult = function(event) {
    var city = event.results[0][0].transcript;
    input.placeholder = city;
    search.click();
}

// окончание речи
recognition.onspeechend = function() {
    recognition.stop();
    voice.style.borderRadius = '0';
    voice.style.backgroundColor = 'rgba(0,0,0,0)';
    voice.disabled = false;
}
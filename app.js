const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Şimdi Konuşabilirsin!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" şimdi";
    else if(text.includes('dogum gunum'))
    speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';
    else if(text.includes('love me'))
    speech.text = 'Of course, not! You piece of junk!';
    window.speechSynthesis.speak(speech);
}

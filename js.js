/* Frequencies of notes:

C4 - 262
C#4 - 277
D4 - 294
D#4 - 311
E4 - 330
F4 - 349
F#4 - 370
G4 - 392
G#4 - 415
A4 - 440
A#4 - 466
B4 - 494
c5 - 523
c#5 - 554
d5 - 587
d#5 - 622
e5 - 659
f5 - 698
f#5 - 740
g5 - 784
g#5 - 831
a5 - 880
a#5 - 932
b5 - 988
C6 - 1047

*/

//https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

function beep(frequency, duration = 250, volume, type, callback) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume) { gainNode.gain.value = volume; }
    if (frequency) { oscillator.frequency.value = frequency; }
    if (type) { oscillator.type = type; }
    if (callback) { oscillator.onended = callback; }

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
};


// for keydown / keyup response, not used yet
/*
function beepStart(frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start(audioCtx.currentTime);
};
*/



document.addEventListener('DOMContentLoaded', () => {
    let notebox = document.getElementById('noteDisplayBox');

    let keys = document.querySelectorAll('.keys');
    keys.forEach(k => {
        k.addEventListener('mousedown', (event) => {
            let frequency = setFrequency(event.target.id);
            beep(frequency);
            event.target.classList.add('played');

            let noteName = event.target.lastElementChild.innerHTML;
            notebox.innerHTML = noteName;
        });

        k.addEventListener('mouseup', (event) => {
            event.target.classList.remove('played');
            notebox.innerHTML = "";
        });
    });


    //let keyMapBox = document.getElementById('keymap');

    document.addEventListener('keydown', function (event) {
        let note = setKeyToNote(event.key); // returns id of the Div
        let frequency = setFrequency(note);
        let notePlayed = document.getElementById(note); // actual Div
        let keyboardLetter;
        let noteName;
        //event.key <- actual key I am pressing

        if (frequency) {
            keyboardLetter = notePlayed.firstElementChild
            noteName = notePlayed.lastElementChild.innerHTML // references hidden notes
            beep(frequency);
            keyboardLetter.classList.toggle('hiddenNotes');
            notePlayed.classList.add('played');
            notebox.innerHTML = noteName;

            // if (notePlayed.classList.contains('blackKeys')) {
            //     notePlayed.innerText = `${note[0]}#`
            // } else {
            //     notePlayed.innerText = `${note[0]}`
            // }
        }
    })

    document.addEventListener('keyup', function (event) {
        let note = setKeyToNote(event.key);
        let frequency = setFrequency(note);
        let notePlayed = document.getElementById(note);
        let keyboardLetter;
        let noteName;
        if (frequency) {
            keyboardLetter = notePlayed.firstElementChild
            noteName = notePlayed.lastElementChild.innerHTML
            keyboardLetter.classList.toggle('hiddenNotes');
            notePlayed.classList.remove('played');

            setTimeout(() => { notebox.innerHTML = ''; }, 200);
        }
    })

    let inputSelector = document.getElementById('keyboard-yn');
    let keyboardNotes = document.querySelectorAll('.keyboardNotes');
    let extraKeys = document.querySelectorAll('.extraKeys');
    keyboardNotes.forEach(k => k.classList.add('invisible'));

    inputSelector.addEventListener('change', function () {
        keyboardNotes.forEach(k => k.classList.toggle('invisible'));
        extraKeys.forEach(k => k.classList.toggle('invisible'));
    })


});


function setFrequency(target) {

    switch (target) {
        case "c4":
            return 262;
        case "c4s":
            return 277;
        case "d4":
            return 294;
        case "d4s":
            return 311;
        case "e4":
            return 330;
        case "f4":
            return 349;
        case "f4s":
            return 370;
        case "g4":
            return 392;
        case "g4s":
            return 415;
        case "a4":
            return 440;
        case "a4s":
            return 466;
        case "b4":
            return 494;
        case "c5":
            return 523;
        case "c5s":
            return 554;
        case "d5":
            return 587;
        case "d5s":
            return 622;
        case "e5":
            return 659;
        case "f5":
            return 698;
        case "f5s":
            return 740;
        case "g5":
            return 784;
        case "g5s":
            return 831;
        case "a5":
            return 880;
        case "a5s":
            return 932;
        case "b5":
            return 988;
        case "c6":
            return 1047;
    };
}


function setKeyToNote(key) {
    switch (key) {
        case "a":
            return "c4";
        case "w":
            return "c4s";
        case "s":
            return "d4";
        case "e":
            return "d4s";
        case "d":
            return "e4";
        case "f":
            return "f4";
        case "t":
            return "f4s";
        case "g":
            return "g4";
        case "y":
            return "g4s";
        case "h":
            return "a4";
        case "u":
            return "a4s";
        case "j":
            return "b4";
        case "k":
            return "c5";
        case "o":
            return "c5s";
        case "l":
            return "d5";
        case "p":
            return "d5s";
        case ";":
            return "e5"
    }
}






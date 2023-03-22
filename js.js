const c4 = document.querySelector('#c4');
const c4s = document.querySelector('#c4s');
const d4 = document.querySelector('#d4');
const d4s = document.querySelector('#d4s');
const e4 = document.querySelector('#e4');
const f4 = document.querySelector('#f4');
const f4s = document.querySelector('#f4s');
const g4 = document.querySelector('#g4');
const g4s = document.querySelector('#g4s');
const a4 = document.querySelector('#a4');
const a4s = document.querySelector('#a4s');
const b4 = document.querySelector('#b4');
const c5 = document.querySelector('#c5');
const c5s = document.querySelector('#c5s');
const d5 = document.querySelector('#d5');
const d5s = document.querySelector('#d5s');
const e5 = document.querySelector('#e5');
const f5 = document.querySelector('#f5');
const f5s = document.querySelector('#f5s');
const g5 = document.querySelector('#g5');
const g5s = document.querySelector('#g5s');
const a5 = document.querySelector('#a5');
const a5s = document.querySelector('#a5s');
const b5 = document.querySelector('#b5');
const c6 = document.querySelector('#c6');
// write a function that defines these variables?


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

// for keydown / keyup response
function beepStart(frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start(audioCtx.currentTime);
};





// C4 - 262
// C#4 - 277
// D4 - 294
// D#4 - 311
// E4 - 330
// F4 - 349
// F#4 - 370
// G4 - 392
// G#4 - 415
// A4 - 440
// A#4 - 466
// B4 - 494
// c5 - 523
// c#5 - 554
// d5 - 587
// d#5 - 622
// e5 - 659
// f5 - 698
// f#5 - 740
// g5 - 784
// g#5 - 831
// a5 - 880
// a#5 - 932
// b5 - 988
// C6 - 1047


document.addEventListener('DOMContentLoaded', () => {
    // When the DOM Content has loaded attach a click listener
    let keys = document.querySelectorAll('.keys');
    keys.forEach(k => {
        k.addEventListener('click', (event) => {
            let target = event.target;
            let frequency = setFrequency(target.id);
            console.log(target.id);
            beep(frequency);
        });
    });

    document.addEventListener('keydown', function (event) {
        console.log(event.key);
        let note = setKeyToNote(event.key);
        let frequency = setFrequency(note);
        beep(frequency);
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












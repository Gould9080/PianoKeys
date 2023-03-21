const c4 = document.querySelector('#c4');
const d4 = document.querySelector('#d4');
const e4 = document.querySelector('#e4');
const f4 = document.querySelector('#f4');
const g4 = document.querySelector('#g4');
const a4 = document.querySelector('#a4');
const b4 = document.querySelector('#b4');
const c5 = document.querySelector('#c5');
const d5 = document.querySelector('#d5');
const e5 = document.querySelector('#e5');
const f5 = document.querySelector('#f5');
const g5 = document.querySelector('#g5');
const a5 = document.querySelector('#a5');
const b5 = document.querySelector('#b5');
const c6 = document.querySelector('#c6');


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

function beepStart(frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start(audioCtx.currentTime);
};

function beepStop(frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.stop(audioCtx.currentTime);
};


// beep(500, 262); - C4
// beep(500, 277); - C#4
// beep(500, 294); - D4
// beep(500, 311); - D#4
// beep(500, 330); - E4
// beep(500, 349); - F4
// beep(500, 370); - F#4
// beep(500, 392); - G4
// beep(500, 415); - G#4
// beep(500, 440); - A4
// beep(500, 466); - A#4
// beep(500, 494); - B4
// beep(500, 523); - c5
// beep(500, 554); - c#5
// beep(500, 587); - d5
// beep(500, 622); - d#5
// beep(500, 659); - e5 
// beep(500, 698); - f5 
// beep(500, 740); - f#5 
// beep(500, 784); - g5 
// beep(500, 831); - g#5 
// beep(500, 880); - a5 
// beep(500, 932); - a#5 
// beep(500, 988); - b5 
// beep(500, 1047); - C6 


document.addEventListener('DOMContentLoaded', () => {
    // When the DOM Content has loaded attach a click listener

    c4.addEventListener('click', function () {
        beep(262);  // should default to 250ms
    });

    d4.addEventListener('click', function () {
        beep(294);
    });
    e4.addEventListener('click', function () {
        beep(330);
    });
    f4.addEventListener('click', function () {
        beep(349);
    });
    g4.addEventListener('click', function () {
        beep(392);
    });
    a4.addEventListener('click', function () {
        beep(440);
    });
    b4.addEventListener('click', function () {
        beep(494);
    });
    c5.addEventListener('click', function () {
        beep(523);
    });
    d5.addEventListener('click', function () {
        beep(587);
    });
    e5.addEventListener('click', function () {
        beep(659);
    });
    f5.addEventListener('click', function () {
        beep(698);
    });
    g5.addEventListener('click', function () {
        beep(784);
    });
    a5.addEventListener('click', function () {
        beep(880);
    });
    b5.addEventListener('click', function () {
        beep(988);
    });
    c6.addEventListener('click', function () {
        beep(1047);
    });

    document.addEventListener('keydown', function (event) {
        playSound(event.key)
    })

});


function playSound(key) {
    switch (key) {
        case "a":
            beep(262);
            break;

        case "s":
            beep(294);
            break;

        case "d":
            beep(330);
            break;

        case "f":
            beep(349);
            break;

        case "g":
            beep(392);
            break;

        case "h":
            beep(440);
            break;

        case "j":
            beep(494);
            break;

        case "k":
            beep(523);
            break;

        case "l":
            beep(587);
            break;

        case ";":
            beep(659);
            break;

    }
}
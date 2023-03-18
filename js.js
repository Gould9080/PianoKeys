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

var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

// Close Encounters Notes
// beep(500, 587); - d5
// beep(500, 659); - e5 
// beep(500, 523); - c5
// beep(500, 262); - C4
// beep(500, 392); - G4


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


//https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
function beep(duration, frequency, volume, type, callback) {
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


c4.addEventListener('click', function () {
    beep(500, 262);
});
d4.addEventListener('click', function () {
    beep(500, 294);
});
e4.addEventListener('click', function () {
    beep(500, 330);
});
f4.addEventListener('click', function () {
    beep(500, 349);
});
g4.addEventListener('click', function () {
    beep(500, 392);
});
a4.addEventListener('click', function () {
    beep(500, 440);
});
b4.addEventListener('click', function () {
    beep(500, 494);
});
c5.addEventListener('click', function () {
    beep(500, 523);
});
d5.addEventListener('click', function () {
    beep(500, 587);
});
e5.addEventListener('click', function () {
    beep(500, 659);
});
f5.addEventListener('click', function () {
    beep(500, 698);
});
g5.addEventListener('click', function () {
    beep(500, 784);
});
a5.addEventListener('click', function () {
    beep(500, 880);
});
b5.addEventListener('click', function () {
    beep(500, 988);
});
c6.addEventListener('click', function () {
    beep(500, 1047);
});


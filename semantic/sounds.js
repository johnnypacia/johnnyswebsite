console.log('Greetings from Sounds-Script, TX!');

// INDIVIDUAL TRACKS

var piano = new Howl({
  urls: ['piano.m4a'],
  buffer: false
});

var guitar = new Howl({
  urls: ['guitar.m4a'],
  buffer: false
});

var bass = new Howl({
  urls: ['bass.m4a'],
  buffer: false
});


var drums = new Howl({
  urls: ['drums.m4a'],
  buffer: false
});


//GLOBAL BUTTONS 
var playButton = document.querySelector('#play-all');
var pauseButton = document.querySelector('#pause-all');
var stopButton = document.querySelector('#reset-all');
var fadeOutButton = document.querySelector('#fade-out')
//INDIVIDUAL TRACK BUTTONS


var muteGuitarButton = document.querySelector('#mute-guitar');
var mutePianoButton = document.querySelector('#mute-piano');
var muteDrumsButton = document.querySelector('#mute-drums');
var muteBassButton = document.querySelector('#mute-bass');


// GLOBAL CONTROLS 
var playBack = function(){
	guitar.unmute();
	guitar.play();
	bass.unmute();
	bass.play();
	piano.unmute();
	piano.play();
	drums.unmute();
	drums.play();
    overdrive.setDrive(0);
	overdrive.setTone(0);
	overdrive.setLevel(0);
	volume.setLevel(1);
};

var pausePlayBack = function (){
	guitar.pause();
	bass.pause();
	piano.pause();
	drums.pause();
};

var stopPlayBack = function(){
	guitar.stop();
	bass.stop();
	piano.stop();
	drums.stop();
};

var fadeOut = function (){
	guitar.fadeOut(0, 5000, stopPlayBack);
	bass.fadeOut(0, 5000, stopPlayBack);
	piano.fadeOut(0, 5000, stopPlayBack);
	drums.fadeOut(0, 5000, stopPlayBack);
};

playButton.addEventListener("click", playBack);
stopButton.addEventListener("click", stopPlayBack);
pauseButton.addEventListener("click", pausePlayBack);
fadeOutButton.addEventListener("click", fadeOut);


// GUITAR CONTROLS 
	// mute & unmute

var muteGuitar = function(){
	// !overdrive.bypassSwitch.getState() && overdrive.bypassSwitch.toggle();
	// overdrive.setDrive(0);
	// overdrive.setTone(0);
	// overdrive.setLevel(0);
	// volume.setLevel(0);
	guitar.mute();
	removeMuteGuitarListener();
}

var unmuteGuitar = function(){
	guitar.unmute();
	removeUnmuteGuitarListener();

}

var removeMuteGuitarListener = function () {
	muteGuitarButton.removeEventListener('click',muteGuitar);
	muteGuitarButton.addEventListener('click', unmuteGuitar);
}

var removeUnmuteGuitarListener = function () {
	muteGuitarButton.removeEventListener('click',unmuteGuitar);
	muteGuitarButton.addEventListener('click', muteGuitar);
}

muteGuitarButton.addEventListener("click", muteGuitar);

// PIANO CONTROLS
	// mute & unmute

var mutePiano = function(){
	piano.mute();
	removeMutePianoListener();
}

var unmutePiano = function(){
	piano.unmute();
	removeUnmutePianoListener();
}

var removeMutePianoListener = function () {
	mutePianoButton.removeEventListener('click',mutePiano);
	mutePianoButton.addEventListener('click', unmutePiano);
}

var removeUnmutePianoListener = function () {
	mutePianoButton.removeEventListener('click',unmutePiano);
	mutePianoButton.addEventListener('click', mutePiano);
}

mutePianoButton.addEventListener("click", mutePiano);

// DRUM CONTROLS 
	// mute & unmute

var muteDrums = function(){
	drums.mute();
	removeMuteDrumsListener();
}

var unmuteDrums = function(){
	drums.unmute();
	removeUnmuteDrumsListener();
}

var removeMuteDrumsListener = function () {
	muteDrumsButton.removeEventListener('click',muteDrums);
	muteDrumsButton.addEventListener('click', unmuteDrums);
}

var removeUnmuteDrumsListener = function () {
	muteDrumsButton.removeEventListener('click',unmuteDrums);
	muteDrumsButton.addEventListener('click', muteDrums);
}

muteDrumsButton.addEventListener("click", muteDrums);

// BASS CONTROLS  
	//mute & unmute

var muteBass = function(){
	bass.mute();
	removeMuteBassListener();
}

var unmuteBass = function(){
	bass.unmute();
	removeUnmuteBassListener();
}

var removeMuteBassListener = function () {
	muteBassButton.removeEventListener('click',muteBass);
	muteBassButton.addEventListener('click', unmuteBass);
}

var removeUnmuteBassListener = function () {
	muteBassButton.removeEventListener('click',unmuteBass);
	muteBassButton.addEventListener('click', muteBass);
}

muteBassButton.addEventListener("click", muteBass);



// var audio = document.getElementById("webAudio");
// audio.volume = 0.03

let audio_iframe = document.querySelector('iframe');

widget = SC.Widget(audio_iframe);
widget.setVolume(0.3)
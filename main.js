var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition(); 

var Textbox = document.getElementById("textbox"); 
function start(){ 
    Textbox.innerHTML = ""; recognition.start();
 }
 recognition.onresult = function(event) { 
     console.log(event);
     var Content = event.results[0][0].transcript;
     Textbox.innerHTML = Content; 
     console.log(Content);
 }
function speak(){
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90,
})



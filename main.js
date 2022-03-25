document.getElementById('jserror').style.display = "none";
var video = document.querySelector("#videoElement");
var error = document.getElementById('videoError')
var text = document.getElementById('funnyText')
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        video.style.display = "block";
        text.style.display = "block";
        error.style.display = "none";
        })
    .catch((error) => {
        });
}
/*
const webcamElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
*/
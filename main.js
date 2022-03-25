
var video = document.querySelector("#videoElement");
var vidiv = document.getElementById('videoFeed')
var text = document.getElementById('funnyText')
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        video.style.display = "block";
        text.style.display = "block";
        })
    .catch((error) => {
            vidiv.innerHTML += '<p class="bg-danger p-3 rounded-pill">Error showing your stupid face 😥<br>Please allow camera access 🥺</p>';
        });
}

/*
const webcamElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
*/
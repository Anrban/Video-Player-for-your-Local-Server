var myVideo = document.getElementById("video1");

myVideo.play();

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}


var video = document.querySelector("#player1");
var volumeDisplay = document.querySelector("#volume");
var slider = document.querySelector("#slider");

window.addEventListener("load", function() {
    video.autoplay = false;
    video.loop = false;
    video.preload = true;
    video.volume = slider.value / 100;
    volumeDisplay.innerHTML = `${video.volume*100}%`;
});

video.addEventListener("volumechange", function() {
    volumeDisplay.innerHTML = `${Math.round(video.volume * 100)}%`;
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    volumeDisplay.innerHTML = `${Math.round(video.volume * 100)}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log(video.playbackRate);
    video.playbackRate *= 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate *= 1.1;
    console.log(`New speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 < video.duration){
        video.currentTime += 10;
    }
    else{
        video.currentTime = 0;
        console.log("Going back to beginning");
    }
    console.log(`New location ${video.currentTime}`);
});

var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
    if (video.muted){
        video.muted = false;
        muteButton.innerHTML = "Mute";
    }
    else{
        video.muted = true;
        muteButton.innerHTML = "Unmute";
    }
});

slider.addEventListener("input", function() {
    video.volume = slider.value / 100;
    console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
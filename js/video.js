var video = document.querySelector("#player1");
var volumeDisplay = document.querySelector("#volume")

window.addEventListener("load", () => {
	video.autoplay = false
	video.loop = false
	video.preload = true
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
	video.volume = 1
	volumeDisplay.innerHTML = `${video.volume*100}%`
});

document.querySelector("#pause").addEventListener("click", () => {
	console.log("Pause Video")
	video.pause();
})

document.querySelector("#slower").addEventListener("click", () =>{
	console.log(video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9
})

document.querySelector("#faster").addEventListener("click", () =>{
	console.log(`New speed is ${video.playbackRate}`)
	video.playbackRate = video.playbackRate * 1.1
})

document.querySelector("#skip").addEventListener("click", () =>{
	console.log(`Original location ${video.currentTime}`)
	if (video.currentTime + 10 < 67.403333){
		video.currentTime += 10
	}
	else{
		video.currentTime = 0
		console.log("Going back to beginning")
	}
	console.log(`New location ${video.currentTime}`)
})

var muteButton = document.querySelector("#mute")
muteButton.addEventListener("click", () =>{
	if (video.muted === true){
		video.muted = false
		muteButton.innerHTML = "Mute"
	}
	else{
		video.muted = true
		muteButton.innerHTML = "Unmute"
	}
})

var slider = document.querySelector("#slider")
slider.addEventListener("input", () => {
	volumeDisplay.innerHTML = `${slider.value}%`
	video.volume = slider.value/100
	console.log(video.volume)
})

document.querySelector("#vintage").addEventListener("click", () =>{
	video.classList.add("OldSchool")
})

document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("OldSchool")
})

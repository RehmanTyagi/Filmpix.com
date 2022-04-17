
// Element Collection

const modelOpenBtn = document.querySelector(".open-model")
const modelPopupBox = document.querySelector(".popup-box")
const modelPopupCloseBtn = document.querySelector(".close-model")
const overlayDiv = document.querySelector(".overlay")
// opening Btn


// repetetive function start
function ModelOpenFunc(){
  modelPopupBox.classList.add("active")
  overlayDiv.classList.add("active")
}

function overlayBoxOff() {
  modelPopupBox.classList.remove("active")
  overlayDiv.classList.remove("active")
  videoPlayer.classList.remove("active")
  videoSample.pause()
}

function VideoPlayerFuncOn() {
  videoPlayer.classList.add("active")
  overlayDiv.classList.add("active")
}
// repetetive function end

modelOpenBtn.addEventListener("click", ModelOpenFunc)

overlayDiv.addEventListener("click", overlayBoxOff)


let navBarLinks = document.querySelector(".navbar-links")
let FirstLinkChild = document.querySelector(".first-link")

navBarLinks.addEventListener("focus", () => {
  FirstLinkChild.classList.remove("link-first-active")
})

// video sample player
const videoPlayer = document.querySelector(".player-container")
const VideoPlayBtn = document.querySelector(".play-btn")
const VideoPauseBtn = document.querySelector(".pause-btn")
const OpenVideoPlayerBtn = document.querySelector(".watch-btn-container")
const CloseVideoPlayerBtn = document.querySelector(".player-close-btn")
let = videoSample = document.querySelector("#sample-player")

OpenVideoPlayerBtn.addEventListener("click", VideoPlayerFuncOn)


CloseVideoPlayerBtn.addEventListener("click", () => {
  videoPlayer.classList.remove("active")
  overlayDiv.classList.remove("active")
  videoSample.pause()
})

// play pause buttons

VideoPlayBtn.addEventListener("click", () => {
  videoSample.play()
})

VideoPauseBtn.addEventListener("click", () => {
  videoSample.pause()
})
// play pause buttons
// video sample player

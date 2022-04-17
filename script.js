
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


// sliider show start
document.addEventListener("click", e => {
  let handle
  if (e.target.matches(".handle")) {
    handle = e.target
  } else {
    handle = e.target.closest(".handle")
  }
  if (handle != null) onHandleClick(handle)
})

const throttleProgressBar = throttle(() => {
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
}, 250)
window.addEventListener("resize", throttleProgressBar)

document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

function calculateProgressBar(progressBar) {
  progressBar.innerHTML = ""
  const slider = progressBar.closest(".row").querySelector(".slider")
  const itemCount = slider.children.length
  const itemsPerScreen = parseInt(
    getComputedStyle(slider).getPropertyValue("--items-per-screen")
  )
  let sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  )
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

  if (sliderIndex >= progressBarItemCount) {
    slider.style.setProperty("--slider-index", progressBarItemCount - 1)
    sliderIndex = progressBarItemCount - 1
  }

  for (let i = 0; i < progressBarItemCount; i++) {
    const barItem = document.createElement("div")
    barItem.classList.add("progress-item")
    if (i === sliderIndex) {
      barItem.classList.add("active")
    }
    progressBar.append(barItem)
  }
}

function onHandleClick(handle) {
  const progressBar = handle.closest(".row").querySelector(".progress-bar")
  const slider = handle.closest(".container").querySelector(".slider")
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  )
  const progressBarItemCount = progressBar.children.length
  if (handle.classList.contains("left-handle")) {
    if (sliderIndex - 1 < 0) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      progressBar.children[sliderIndex].classList.remove("active")
      progressBar.children[progressBarItemCount - 1].classList.add("active")
    } else {
      slider.style.setProperty("--slider-index", sliderIndex - 1)
      progressBar.children[sliderIndex].classList.remove("active")
      progressBar.children[sliderIndex - 1].classList.add("active")
    }
  }

  if (handle.classList.contains("right-handle")) {
    if (sliderIndex + 1 >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", 0)
      progressBar.children[sliderIndex].classList.remove("active")
      progressBar.children[0].classList.add("active")
    } else {
      slider.style.setProperty("--slider-index", sliderIndex + 1)
      progressBar.children[sliderIndex].classList.remove("active")
      progressBar.children[sliderIndex + 1].classList.add("active")
    }
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true
    setTimeout(timeoutFunc, delay)
  }
}

// sliider show end
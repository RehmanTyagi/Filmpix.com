// function shoyaib() {
//   let b = 19

//   return function printout() {
//     console.log(b)
//   }
// }

// let contain = shoyaib()

// contain()

// function print(variable) {
//   let c = 3;

//   return function func(variable2) {
//     console.log(variable);
//     console.log(variable2);
//     console.log(c);
//   };
// }

// let a = print(1);
// a(2);

// const products = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ]

// console.log(products[1][4])

// let book = {
//   Title: "dust till down",
//   Author: {
//     authorName: "rehman",
//     authorAge: 19,
//   },
// }

// console.log(book.Title)

// const product = [{ price: 10 }, { price: 40 }, { price: 10 }, { price: 40 }]

// const totalAmount = product.reduce((sum, item) => {
//   return sum + item.price
// }, 0)

// console.log(totalAmount)

// let userName = "rehman"
// let userSurname = "tyagi"
// userSurname = "khan"

// console.log(`${userName} ${userSurname}`)

// const youtubeLink = document.querySelector("[youtube-link]")

// youtubeLink.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("link clicked")
// })

// Element Collection

const modelOpenBtn = document.querySelector(".open-model")
const modelPopupBox = document.querySelector(".popup-box")
const modelPopupCloseBtn = document.querySelector(".close-model")
const overlayDiv = document.querySelector(".overlay")
// opening Btn

modelOpenBtn.addEventListener("click", () => {
  modelPopupBox.classList.add("active")
  overlayDiv.classList.add("active")
})

// closing Btn
// modelPopupCloseBtn.addEventListener("click", () => {
//   modelPopupBox.classList.remove("active")
//   overlayDiv.classList.remove("active")
// })

overlayDiv.addEventListener("click", () => {
  modelPopupBox.classList.remove("active")
  overlayDiv.classList.remove("active")
})

// arrayContainer = [1, 2, 3, 4, 56, 7, 8, 9, 10, 11]

// if (arrayContainer === 0) {
//   console.log("array is empty")
// } else if (arrayContainer.length < 5) {
//   console.log("array is small")
// } else if (arrayContainer.length < 10) {
//   console.log("array is medium")
// } else {
//   console.log("arry is not small. it is very large")
// }

// let numberDice = 0

// switch (numberDice) {
//   case 0:
//     console.log("it is zero")
//     break
//   case 1:
//   case 2:
//     console.log("it is small")
//     break
//   case 3:
//   case 4:
//     console.log("it is medium")
//     break
//   case 5:
//     console.log("it is large")
//     break

//   default:
//     console.log("try again")
//     break
// }

// for (numberList = 0; numberList <= 10; ) {
//   console.log(numberList++)
// }

// let person = {
//   name: "rehman",
//   secondname: "mannan",
//   friend: {
//     name: "firoz",
//     friend: {
//       name: "manish",
//     },
//   },
// }

// function printname(currentperson) {
//   if (currentperson == null) return
//   console.log(currentperson.name)
//   printname(currentperson.friend)
// }

// printname(person)

let navBarLinks = document.querySelector(".navbar-links")
let FirstLinkChild = document.querySelector(".first-link")
// let clicked = false

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

OpenVideoPlayerBtn.addEventListener("click", () => {
  videoPlayer.classList.add("active")
  overlayDiv.classList.add("active")
})

overlayDiv.addEventListener("click", () => {
  videoPlayer.classList.remove("active")
  videoSample.pause()
})
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

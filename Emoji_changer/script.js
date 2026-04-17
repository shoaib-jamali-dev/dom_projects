const emoji = document.querySelector("#emoji")

const emojis = [
    "😊",
    "🤣",
    "😍",
    "😘",
    "😉",
    "😎",
    "😜",
    "😁",
    "😒",
    "😢",
    "😆",
    "🤢",
    "🤔",
]

emoji.addEventListener("mouseenter",()=>{
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
})
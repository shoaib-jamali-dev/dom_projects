const rating = document.querySelectorAll(".rating")
const ratingContainer = document.querySelector(".ratings-container")
const sendBtn = document.querySelector(".btn")
const panel = document.querySelector(".panel-container")

let selectedRating = "Satisfied"

ratingContainer.addEventListener("click", (e)=>{
    if(e.target.parentNode.classList.contains("rating")){
        removeActive();
        e.target.parentNode.classList.add("active")
        selectedRating = e.target.nextElementSibling.innerHTML;
    }    
})

sendBtn.addEventListener("click", ()=>{
    panel.innerHTML = `
    <p class="heart">❤</p>
    <strong> Thank You </strong>
    <br>
    <strong> Feedback: ${selectedRating} </strong>
    `
})

function removeActive(){
    for(let i = 0; i<rating.length;i++){
        rating[i].classList.remove("active")
    }
}
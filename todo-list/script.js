let input = document.querySelector("input")
let output = document.querySelector(".outbox")





input.addEventListener("keydown", e =>{
    if(e.key=="Enter" && input.value != ""){
        const out = document.createElement("div")
        out.classList.add("output")
        const cross = document.createElement("div")
        cross.classList.add("cross")
        cross.innerText = "x"

        const valuer = document.createElement("p")
        valuer.classList.add("valuer")
        valuer.innerText = input.value;

        out.appendChild(cross)
        out.appendChild(valuer)

        output.appendChild(out)
        input.value = ""
    }

})

output.addEventListener("click", e =>{
    if (e.target.classList.contains("cross")){
        e.target.parentNode.remove();
    }
})
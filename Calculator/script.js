const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    let num1 = document.querySelector(".num1").value
    let num2 = document.querySelector(".num2").value
    let result = document.querySelector(".result")
    let operator = document.querySelector("select").value

    switch(operator){
        case "plus":
            result.textContent = Number(num1)+Number(num2);
            break;
        case "multi":
            result.textContent = Number(num1)*Number(num2);
            break;
        case "min":
            result.textContent = Number(num1)-Number(num2);
            break;
        case "dev":
            result.textContent = Number(num1)/Number(num2);
            break;
        default:
            break;
    }


})
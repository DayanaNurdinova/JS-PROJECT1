const checkBtn = document.querySelector("#gmail_button")
const input = document.querySelector("#gmail_input")
const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function checkGmail() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = "green"
    } else {
        input.style.borderColor = "red"
    }
}


checkBtn.addEventListener("click", checkGmail);

function isEmailValid(value){
    return regExp.test(value)
}




let box = document.querySelector(".child_block")

let posX = 0
let posY = 0

function moveBox () {
    if (posX <= 434 && posY === 0) {
        posX += 16
        box.style.left = `${posX}px`
        setTimeout(moveBox, 20)
    } else {
        console.log("error")
    }
}

requestAnimationFrame(moveBox)



let heart = document.querySelector(".heart")
let heartLeft1 = document.querySelector(".heartClick-left1")
let heartLeft2 = document.querySelector(".heartClick-left2")
let heartLeft3 = document.querySelector(".heartClick-left3")

let heartRight1 = document.querySelector(".heartClick-right1")
let heartRight2 = document.querySelector(".heartClick-right2")
let heartRight3 = document.querySelector(".heartClick-right3")

function displayBlock(){
    setTimeout(displayNone, 3000)
    heartLeft1.style = "display: block;"
    heartLeft2.style = "display: block;"
    heartLeft3.style = "display: block;"

    heartRight1.style = "display: block;"
    heartRight2.style = "display: block;"
    heartRight3.style = "display: block;"
    heart.removeEventListener("click", displayBlock)
}

function displayNone(){
    heartLeft1.style = "display: none;"
    heartLeft2.style = "display: none;"
    heartLeft3.style = "display: none;"

    heartRight1.style = "display: none;"
    heartRight2.style = "display: none;"
    heartRight3.style = "display: none;"

    heart.addEventListener("click",displayBlock)


}

heart.addEventListener("click", displayBlock)
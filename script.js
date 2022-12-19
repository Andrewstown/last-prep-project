let posUnder = true
let count = 0

const h2 = document.createElement("h2")
const photo = document.createElement("img")

document.querySelector("body").appendChild(h2)
document.querySelector("body").appendChild(photo)

h2.textContent = "V This content added by this guy V"
photo.src = "./face.png"

photo.addEventListener('mouseover', (event) => {
    if (count < 20) {
        photo.src = "./facewhen.png"
    }
});

photo.addEventListener('mouseleave', (event) => {
    if (count < 20) {
        photo.src = "./face.png"
    }
});

photo.addEventListener('click', (event) => {
    if (count < 20) {
        if (posUnder) {
            photo.style.marginLeft = "400px"
            photo.style.marginTop = "-100px"
            h2.textContent = "> This content added by this guy >"
            posUnder = false
        } else {
            Reset()
            posUnder = true
        }
    }
    
    count++
    if (count == 10) {
        const stop = document.createElement("p")
        document.querySelector("body").appendChild(stop)
        stop.textContent = "Stop Clicking Me."
        stop.style.marginLeft = "550px"
    }

    if (count == 20) {
        photo.src = "./gomba.png"
        photo.style.scale = 0.25
        Reset()
        h2.textContent = "He did say stop"
    }
});

function Reset(){
    photo.style.marginLeft = "0"
    photo.style.marginTop = "0"
    h2.textContent = "V This content added by this guy V"
}
let home = document.getElementById("home")
let guest = document.getElementById("guest")
home.textContent = 0
guest.textContent = 0
let scoreHome = 0
let scoreGuest = 0
function home1() {
    scoreHome += 1
    home.textContent = scoreHome
}

function home2() {
    scoreHome += 2
    home.textContent = scoreHome
}

function home3() {
    scoreHome += 3
    home.textContent = scoreHome
}

function guest1() {
    scoreGuest += 1
    guest.textContent = scoreGuest
}

function guest2() {
    scoreGuest += 2
    guest.textContent = scoreGuest
}

function guest3() {
    scoreGuest += 3
    guest.textContent = scoreGuest
}

function newGame() {
    home.textContent = 0
    guest.textContent = 0
    scoreHome = 0
    scoreGuest = 0
}
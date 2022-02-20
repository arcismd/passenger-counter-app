let passEl = document.getElementById("pass-el-1")
let passEl2 = document.getElementById("pass-el-2")
let passEl3 = document.getElementById("pass-el-3")
let passEl4 = document.getElementById("pass-el-4")

let pass = ["1234567890", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%^&*()_+", "abcdefghijklmnopqrstuvwxyz"]

function generateRandomPass() {
    renderRandomPasswords() 
}

function renderRandomPasswords() {
    let passLength
    passEl.textContent = ' '
    passEl2.textContent = ' '
    passEl3.textContent = ' '
    passEl4.textContent = ' '
    for (let i = 0; i < 15; i++) {
        setLength()
        let randomPass = pass[Math.floor( Math.random() * pass.length )][Math.floor( Math.random() * passLength )] 
        passEl.textContent += randomPass
    } 
    for (let i = 0; i < 15; i++) {
        setLength()
        let randomPass = pass[Math.floor( Math.random() * pass.length )][Math.floor( Math.random() * passLength )] 
        passEl2.textContent += randomPass
    } 
    for (let i = 0; i < 15; i++) {
        setLength()
        let randomPass = pass[Math.floor( Math.random() * pass.length )][Math.floor( Math.random() * passLength )] 
        passEl3.textContent += randomPass
    } 
    for (let i = 0; i < 15; i++) {
        setLength()
        let randomPass = pass[Math.floor( Math.random() * pass.length )][Math.floor( Math.random() * passLength )] 
        passEl4.textContent += randomPass
    } 
    document.documentElement.style.setProperty('--js-background-image', 'none')

function setLength() {
        if (pass[0] === pass[0]) {
            passLength = 10
        } else if (pass[1] === pass[1]) {
            passLength = 26
        } else if (pass[2] === pas[2]) {
            passLength = 12
        } else if (pass[3] === pass[3]) {
            passLength = 26
        }
    }
}
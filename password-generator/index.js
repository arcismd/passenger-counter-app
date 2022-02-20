let passEl = document.getElementById("pass-el")

let passGenerator = ["1234567890", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%^&*()_+", "abcdefghijklmnopqrstuvwxyz"]

function generateRandomPass() {
let randomGenerate = Math.floor( Math.random() * 4 )
return passEl.textContent = passGenerator[randomGenerate]
}


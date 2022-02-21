const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
let textBox = document.getElementById("textbox")
let totalAmount = document.getElementById("total-amount").value
const sendBtn = document.getElementById("send-btn")

btnClick(washBtn, 10, textbox)
btnClick(mowBtn, 20, textbox)
btnClick(pullBtn, 30, textbox)

sendBtn.addEventListener("click", function() {
    textbox.textContent = ""
})

function addCost(price, element) {
    let myServices = []
    let amountOfMoney = 0
    amountOfMoney += price
    myServices.push(element.innerHTML  = `
    <div class="alignleft">
        <p>WashCar</p>
    </div>
    <div class="alignright">
        <p>${amountOfMoney}</p>
    </div>
`)
}

function btnClick(btn, priceEl, el) {
    btn.addEventListener( "click", function() {
        addCost(priceEl, el)
    })
}




var btnone = document.querySelector("#one")
var body = document.querySelector("body")

function clickerone() {
	return body.style.backgroundColor = "black"
}

btnone.addEventListener("click", clickerone)


var btntwo = document.querySelector("#two")
var two = document.querySelector(".two")

function clickertwo() {
	return two.classList.toggle("hide")
}

btntwo.addEventListener("click", clickertwo)
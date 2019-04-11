/**
 * File Name: addlavaclay.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Lava Clay item to the cart
 */

// Instantiate an object of Product type
var clay = new Product("Lava Clay", 14.99, 0, "clay");

/*
* This function loads after the page finishes loading
*/
function start() {

	// Retrieve the addarganoil element amd add an event listner when it is clicked
	var addLavaClayButton = document.getElementById("addlavaclay");
	addLavaClayButton.addEventListener("click", addLavaClay, false);

}

/*
* Add lava clay item to the localStorage
*/
function addLavaClay() {
	var myCart = new Cart();
	myCart.loadCart(JSON.parse(localStorage.getItem("mycart")));

	myCart.addProduct(clay);
}

window.addEventListener("load", start, false);
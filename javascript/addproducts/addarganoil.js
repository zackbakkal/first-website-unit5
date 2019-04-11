/**
 * File Name: addarganoil.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Argan Oil item to the cart
 */

// Instantiate an object of Product type
var arganOil = new Product("Argan Oil", 24.99);

/*
* This function loads after the page finishes loading
*/
function start() {

	if (localStorage.getItem("mycart") == null) {
		localStorage.setItem("mycart", JSON.stringify((new Cart()).data));
	}

	// Retrieve the addarganoil element amd add an event listner when it is clicked
	var addArganButton = document.getElementById("addarganoil");
	addArganButton.addEventListener("click", addArganOil, false);

}

/*
* Add arganoil item to the localStorage
*/
function addArganOil() {
	var myCart = new Cart();
	myCart.loadCart(JSON.parse(localStorage.getItem("mycart")));

	myCart.addProduct(arganOil);
}

window.addEventListener("load", start, false);
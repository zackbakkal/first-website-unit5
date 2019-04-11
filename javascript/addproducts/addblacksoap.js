/**
 * File Name: addblacksoap.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Black Soap item to the cart
 */

// Instantiate an object of Product type
var soap = new Product("Exfoliating Soap", 19.99);

/*
* This function loads after the page finishes loading
*/
function start() {

	// Retrieve the addarganoil element amd add an event listner when it is clicked
	var addBlackSoapButton = document.getElementById("addblacksoap");
	addBlackSoapButton.addEventListener("click", addBlackSoap, false);

}

/*
* Add black soap item to the localStorage
*/
function addBlackSoap() {
	var myCart = new Cart();
	myCart.loadCart(JSON.parse(localStorage.getItem("mycart")));

	myCart.addProduct(soap);
}

window.addEventListener("load", start, false);
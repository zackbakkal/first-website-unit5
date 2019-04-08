/**
 * File Name: addblacksoap.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Black Soap item to the cart
 */

// Instantiate an object of Product type
let soap = new Product("Exfoliating Soap", 19.99, 0, "soap");

/*
* This function loads after the page finishes loading
*/
function start() {

	// Check if the item is already in the localStorage, if not
	// we add it to the storage with key stored in the variable
	// _storageName of the object and value of the object stringified
	if (JSON.parse(localStorage.getItem(soap._storageName) == null)) {
		localStorage.setItem(soap._storageName, JSON.stringify(soap));
	}

	// Retrieve the addblacksoap element amd add an event listner when it is clicked
	var addSoapButton = document.getElementById("addblacksoap");
	addSoapButton.addEventListener("click", addBlackSoap, false);
}

/*
* Add blacksoap item to the localStorage
*/
function addBlackSoap() {
	soap.addMe();
}

window.addEventListener("load", start, false);
/**
 * File Name: addarganoil.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Argan Oil item to the cart
 */

// Instantiate an object of Product type
let arganOil = new Product("Argan Oil", 24.99, 0, "arganOil");

/*
* This function loads after the page finishes loading
*/
function start() {

	// Check if the item is already in the localStorage, if not
	// we add it to the storage with key stored in the variable
	// _storageName of the object and value of the object stringified
	if (JSON.parse(localStorage.getItem(arganOil._storageName) == null)) {
		localStorage.setItem(arganOil._storageName, JSON.stringify(arganOil));
	}

	// Retrieve the addarganoil element amd add an event listner when it is clicked
	var addArganButton = document.getElementById("addarganoil");
	addArganButton.addEventListener("click", addArganOil, false);

}

/*
* Add arganoil item to the localStorage
*/
function addArganOil() {
	arganOil.addMe();
}

window.addEventListener("load", start, false);
/**
 * File Name: addlavaclay.js
 * Author: Zakaria Bakkal
 * Version: 3
 * Date: April 07, 2019
 * Description: This script handles adding Lava Clay item to the cart
 */

// Instantiate an object of Product type
let clay = new Product("Lava Clay", 14.99, 0, "clay");

/*
* This function loads after the page finishes loading
*/
function start() {

	// Check if the item is already in the localStorage, if not
	// we add it to the storage with key stored in the variable
	// _storageName of the object and value of the object stringified
	if (JSON.parse(localStorage.getItem(clay._storageName) == null)) {
		localStorage.setItem(clay._storageName, JSON.stringify(clay));
	}

	// Retrieve the addlavaclay element amd add an event listner when it is clicked
	var addClayButton = document.getElementById("addlavaclay");
	addClayButton.addEventListener("click", addLavaClay, false);

}

/*
* Add lavaclay item to the localStorage
*/
function addLavaClay() {
	clay.addMe();
}



window.addEventListener("load", start, false);
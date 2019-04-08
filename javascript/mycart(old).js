/**
 * File Name: mycart.js
 * Author: Zakaria Bakkal
 * Version: 4
 * Date: April 07, 2019
 * Description: This script handles adding displaying and removing item 
 * 				on the shoppint cart, 
 */

var tableBody;		// tbale body
var tQty;           // Total quantity
var tPrice;         // total price

/*
* This function is fired when the page finishes loading.
*/
function start() {

	// Retrieve the tableBody element
	tableBody = document.getElementById("tablebody");

	// Retrive the totalqty element and set it to 0
	tQty = document.getElementById("totalqty");
	tQty.innerHTML = 0;

	// Retrieve the totalprice element and set it to 0.00
	tPrice = document.getElementById("totalprice");
	tPrice.innerHTML = (0.00).toFixed(2);

	// Retrieve the clear button element and add an event listner when clicked
	var clear = document.getElementById("clear");
	clear.addEventListener("click", clearCart, false);

	// Display added items to the cart
	displayItems();

}

/*
* Displays the added items to the cart
*/
function displayItems() {

	//Retrieve the stored item from local storage
	var arganOil = JSON.parse(localStorage.getItem("arganOil"));
	var soap = JSON.parse(localStorage.getItem("soap"));
	var clay = JSON.parse(localStorage.getItem("clay"));

	// Display the added item
	display(arganOil);
	display(soap);
	display(clay);
}

/*
* Displays the item passed as an argument
*/
function display(item) {

	// The remove button added on each row
	var removeMe = document.createElement("td");
	// Set its class attribute to removeMe, helps with the hover event
	removeMe.setAttribute("class", "removeMe");

	// The remove button will look like an X
	var x = document.createTextNode("X");
	// Add the X button to the removeMe element
	removeMe.appendChild(x);
	// Change the style to center text and the cursor to pointer
	removeMe.style.textAlign = "center";
	removeMe.style.cursor = "pointer";

	// Check if the item exists in the local storage and if
	// the item quantity is at least 1
	if (item && item._qty > 0) {

		// Create a table row
		var row = document.createElement("tr");

		// create a table data cell for item name, and add
		// the name to the innerHtml, then append the cell to the row
		var name = document.createElement("td");
		name.innerHTML = item._name;
		row.appendChild(name);

		// create a table data cell for item price, and add
		// the price to the innerHtml, then append the cell to the row
		var price = document.createElement("td");
		price.innerHTML = item._price;
		row.appendChild(price);

		// create a table data cell for item qty, and add
		// the qty to the innerHtml, then append the cell to the row
		var qty = document.createElement("td");
		qty.innerHTML = item._qty;
		row.appendChild(qty);

		// create a table data cell for item total price, and add
		// the total price to the innerHtml, then append the cell to the row
		var total = document.createElement("td");
		total.innerHTML = (item._price * item._qty).toFixed(2);
		row.appendChild(total);

		// Add the removeMe button to the row
		row.appendChild(removeMe);

		// Add the row to the tableBody
		tableBody.appendChild(row);

		//add an event listner to the removeMe button
		removeMe.addEventListener("click", function () {
			removeItem(row, item);
		}, false);

		// Calculate the shopping cart total qty of items
		tQty.innerHTML = parseInt(tQty.innerHTML) + item._qty;

		// Calculate the shopping cart total price of items
		tPrice.innerHTML = (parseFloat(tPrice.innerHTML)
			+ parseFloat(total.innerHTML)).toFixed(2);
	}
}

/*
* Removes an item from the table and localStorage
*/
function removeItem(row, item) {

	// First we update the total in the table
	updateTotal(item);

	// Then, Remove the the item from the storage
	localStorage.removeItem(item['_storageName']);

	// Finnaly, remove the row from the table
	tableBody.removeChild(row);
}

/*
* Updates the totalqty and price in the tables
*/
function updateTotal(item) {

	// Update the total qty in the table
	tQty.innerHTML = parseInt(tQty.innerHTML) - item['_qty'];
	// update the total price in the table
	tPrice.innerHTML = (parseFloat(tPrice.innerHTML)
		- (item['_qty'] * item['_price'])).toFixed(2);
}

/*
* Clears the shopping cart
*/
function clearCart() {
	// Clear the localStorage
	localStorage.clear();
	// Clear the tableBody
	tableBody.innerHTML = "";
	// Reset the total qty
	tQty.innerHTML = 0;
	// reset the total price
	tPrice.innerHTML = (0.00).toFixed(2);
}

window.addEventListener("load", start, false);
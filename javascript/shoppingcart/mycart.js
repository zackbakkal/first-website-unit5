var myCart;
var tableBody;
var totalQty;
var totalPrice;

function start() {
    // Retrieve the tableBody element
    tableBody = document.getElementById("tablebody");

    // Retrive the totalqty element and set it to 0
    totalQty = document.getElementById("totalqty");
    totalQty.innerHTML = 0;

    // Retrieve the totalprice element and set it to 0.00
    totalPrice = document.getElementById("totalprice");
    totalPrice.innerHTML = (0).toFixed(2);

    // retrieve the cart from the local storage
    myCart = new Cart();
    myCart.loadCart(JSON.parse(localStorage.getItem("mycart")));
    console.log(JSON.parse(localStorage.getItem("mycart")));

    // Retrieve the clear button element and add an event listner when clicked
    var clear = document.getElementById("clear");
    clear.addEventListener("click", clearCart, false);

    console.log(myCart);

    displayItems();
}

function displayItems() {
    // remove any children of tableBody element
    while (tableBody.firstElementChild) {
        tableBody.removeChild(tableBody.firstElementChild);
    }

    // reset totals
    totalQty.innerHTML = 0;
    totalPrice.innerHTML = (0).toFixed(2);

    // check if the cart has any products added to it
    if (myCart._totalQty > 0) {
        // used to assign class names and ids to table rows
        var rowNumber = 0;
        // Display added items on the cart
        myCart._rows.forEach(row => {
            displayItem(row, rowNumber);
            rowNumber++;
        });

        // Display the shopping cart total qty of items
        totalQty.innerHTML = myCart._totalQty;

        // Display the shopping cart total price of items
        totalPrice.innerHTML = parseFloat((myCart._totalPrice).toFixed(2));
    }
}

/*
* Displays the item passed as an argument
*/
function displayItem(row, rowNumber) {

    // create two elements representing minus and plus
    // that helps adding and removing products by one
    var minus = document.createElement("span");
    minus.setAttribute("class", "minus" + rowNumber);
    minus.setAttribute("id", "minus" + rowNumber);
    var minusSymbol = document.createTextNode("-");
    minus.appendChild(minusSymbol);

    var plus = document.createElement("span");
    plus.setAttribute("class", "plus" + rowNumber);
    plus.setAttribute("id", "plus" + rowNumber);
    var plusSymbol = document.createTextNode("+");
    plus.appendChild(plusSymbol);

    // The remove button added on each row
    var removeMe = document.createElement("td");
    // Set its class attribute to removeMe, helps with the hover event
    removeMe.setAttribute("class", "removeMe" + rowNumber);
    removeMe.setAttribute("id", "removeMe" + rowNumber);

    // The remove button will look like an X
    var x = document.createTextNode("X");
    // Add the X button to the removeMe element
    removeMe.appendChild(x);
    // Change the style to center text and the cursor to pointer
    removeMe.style.textAlign = "center";
    removeMe.style.cursor = "pointer";

    // Check if the item exists in the local storage and if
    // the item quantity is at least 1
    //if (item && item._qty > 0) {

    // Create a table row
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("id", rowNumber);

    // create a table data cell for item name, and add
    // the name to the innerHtml, then append the cell to the row
    var name = document.createElement("td");
    name.innerHTML = row._product._name;
    tableRow.appendChild(name);

    // create a table data cell for item price, and add
    // the price to the innerHtml, then append the cell to the row
    var price = document.createElement("td");
    price.innerHTML = row._product._price;
    tableRow.appendChild(price);

    // create a table data cell for item qty, and add
    // the qty to the innerHtml, then append the cell to the row
    var qty = document.createElement("td");
    // append the minusSymbol
    qty.appendChild(minus);
    // create a text node to hold the quantity value
    var p = document.createElement("p");
    var qtyValue = document.createTextNode(row._qty);
    p.appendChild(qtyValue);
    p.setAttribute("id", "qtyValue");
    qty.appendChild(p);
    // append the plusSymbol
    qty.appendChild(plus);
    // append the data cell to the table row
    tableRow.appendChild(qty);

    // create a table data cell for item total price, and add
    // the total price to the innerHtml, then append the cell to the row
    var total = document.createElement("td");
    total.innerHTML = row._totalPrice;
    tableRow.appendChild(total);

    // Add the removeMe button to the row
    tableRow.appendChild(removeMe);

    // Add the row to the tableBody
    tableBody.appendChild(tableRow);

    //add an event listner to the removeMe button
    removeMe.addEventListener("click", function () {
        removeRow(rowNumber);

        console.log(myCart);

        localStorage.setItem("mycart", JSON.stringify(myCart.data));

        // Display the shopping cart total qty of items
        totalQty.innerHTML = myCart._totalQty;

        // Display the shopping cart total price of items
        totalPrice.innerHTML = parseFloat((myCart._totalPrice).toFixed(2));

        displayItems();

    }, false);

    // add an event listner to the minus and plus buttons
    minus.addEventListener("click", function () {
        minusProduct(rowNumber);
        displayItems();
    }, false);
    plus.addEventListener("click", function () {
        plusProduct(rowNumber);
        displayItems();
    }, false);
}

function removeRow(rowNumber) {
    myCart.removeRow(rowNumber);
}

function minusProduct(rowNumber) {
    myCart.minusProduct(rowNumber);
}

function plusProduct(rowNumber) {
    myCart.plusProduct(rowNumber);
}

function clearCart() {
    myCart.clear();
    tableBody.innerHTML = "";
    totalQty.innerHTML = 0;
    totalPrice.innerHTML = parseFloat((0).toFixed(2));
}

window.addEventListener("load", start, false);
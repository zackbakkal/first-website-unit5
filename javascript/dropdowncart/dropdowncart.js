var iconCartImg
var dropDownCart;
var totalQty;
var totalPrice;


function start() {
    iconCartImg = document.getElementById("carticonimg");
    dropDownCart = document.getElementById("dropdowncart");
    iconCartImg.addEventListener("mouseover", mouseOver, false);
    iconCartImg.addEventListener("mouseout", mouseOut, false);
}

function mouseOver() {
    dropDownCart.style.display = "block";

    // retrieve the cart from the local storage
    myCart = new Cart();
    myCart.loadCart(JSON.parse(localStorage.getItem("mycart")));

    displayItems();
}

function mouseOut() {
    dropDownCart.style.display = "none";
}

function displayItems() {
    // remove any children of tableBody element
    while (dropDownCart.firstElementChild) {
        dropDownCart.removeChild(dropDownCart.firstElementChild);
    }

    // check if the cart has any products added to it
    if (myCart._totalQty > 0) {
        // Display added items on the cart
        myCart._rows.forEach(row => {
            displayItem(row);
        });

        var total = document.createElement("p");
        totalQty = document.createElement("span");
        totalPrice = document.createElement("span");

        // reset totals
        totalQty.innerHTML = 0;
        totalPrice.innerHTML = (0).toFixed(2);

        total.appendChild(totalQty);
        total.appendChild(totalPrice);

        // Display the shopping cart total qty of items
        totalQty.innerHTML = myCart._totalQty;

        // Display the shopping cart total price of items
        totalPrice.innerHTML = parseFloat((myCart._totalPrice).toFixed(2));
    }

    /*
* Displays the item passed as an argument
*/
    function displayItem(cartRow) {

        // Check if the item exists in the local storage and if
        // the item quantity is at least 1
        //if (item && item._qty > 0) {

        // Create a table row
        var row = document.createElement("p");

        // create a table data cell for item name, and add
        // the name to the innerHtml, then append the cell to the row
        var name = document.createElement("span");
        var text = document.createTextNode(cartRow._product._name);
        name.append(text);
        row.appendChild(name);

        // create a table data cell for item price, and add
        // the price to the innerHtml, then append the cell to the row
        var price = document.createElement("span");
        price.innerHTML = cartRow._product._price;
        row.appendChild(price);

        // create a table data cell for item qty, and add
        // the qty to the innerHtml, then append the cell to the row
        var qty = document.createElement("span");
        qty.innerHTML = cartRow._qty;

        // append the data cell to the table row
        row.appendChild(qty);

        // create a table data cell for item total price, and add
        // the total price to the innerHtml, then append the cell to the row
        var total = document.createElement("span");
        total.innerHTML = parseFloat((cartRow._totalPrice).toFixed(2));
        row.appendChild(total);

        // Add the row to the tableBody
        dropDownCart.appendChild(row);

        //dropDownCart.appendChild(total);
    }
}

window.addEventListener("load", start, false);
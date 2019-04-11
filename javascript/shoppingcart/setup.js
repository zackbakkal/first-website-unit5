
function start() {
    /* localStorage.clear();*/

    console.log(localStorage.getItem("mycart") == null);
    // Check if a shopping cart already exists if not add
    // one to the local storage
    if (localStorage.getItem("mycart") == null) {
        var myCart = new Cart();
        localStorage.setItem("mycart", JSON.stringify(myCart));
    }

    console.log(JSON.parse(localStorage.getItem("mycart")));
}

window.addEventListener("load", start, false);

/**
 * File Name: Product.js
 * Class Name: Product
 * Author: Zakaria Bakkal
 * Version: 1
 * Date: April 07, 2019
 * Description: This class represents the items that users are
 *              interested in adding to their carts.
 */

class Product {

    /*
    * Class Constructor used to instantiate objects.
    * 
    * name: product name
    * price: product price
    * qty: qty user is buying
    * storageName: name used on localStorage
    */
    constructor(name, price, qty, storageName) {
        // invokes the setters
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.storageName = storageName;
    }

    // getters
    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get qty() {
        return this._qty;
    }

    get storageNAme() {
        return this._storageName;
    }

    // setters
    set name(name) {
        this._name = name;
    }

    set price(price) {
        this._price = price;
    }

    set qty(qty) {
        this._qty = qty;
    }

    set storageName(storageName) {
        this._storageName = storageName;
    }

    // The product adds itself to the localStorage
    addMe() {

        // Retrieve the item from the localStorage
        var item = JSON.parse(localStorage.getItem(this._storageName));
        // increment the quantity by one
        item._qty = item._qty + 1;
        // store the item on the localstorage
        localStorage.setItem(this._storageName, JSON.stringify(item));
    }
}
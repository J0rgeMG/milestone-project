function addCartItem(req, res) {
    res.locals.cart.addItem();
}

module.exports = {
    addCartItem: addCartItem
};
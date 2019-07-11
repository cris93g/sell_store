const {
	getTvs,
	getCart,
	addToCart,
	getProduct
} = require("../controllers/itemCtrl/itemCtrl");
//state each route
module.exports = app => {
	app.get("/api/tv", getTvs);
	app.get("/api/cart", getCart);
	app.post("/api/cart", addToCart);
	app.post("/api/item", getProduct);
};

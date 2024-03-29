const {
	getTvs,
	getCart,
	addToCart,
	getProduct,
	getPhone,
	getGame,
	getItem,
	checkout,
	getAcessorys
} = require("../controllers/itemCtrl/itemCtrl");
//state each route
module.exports = app => {
	app.get("/api/tv", getTvs);
	app.get("/api/phone", getPhone);
	app.get("/api/acessory", getAcessorys);
	app.get("/api/game", getGame);
	app.get("/api/cart", getCart);
	app.post("/api/cart", addToCart);
	app.post("/api/item", getProduct);
	app.get("/api/products", getItem);
	app.post("/api/checkout", checkout);
};

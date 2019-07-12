module.exports = {
	getTvs(req, res) {
		const db = req.app.get("db");
		db.getAllTvs()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	getPhone(req, res) {
		const db = req.app.get("db");
		db.getAllPhones()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	getGame(req, res) {
		const db = req.app.get("db");
		db.getAllGames()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	addToCart(req, res) {
		req.session.cart.push(req.body);
		res.status(200).send(req.session.cart);
	},

	getCart(req, res) {
		res.status(200).send(req.session.cart);
	},
	getProduct(req, res) {
		const { id } = req.body;
		const db = req.app.get("db");
		db.getItem([id])
			.then(response => res.status(200).json(response))
			.catch(console.log);
	}
};

var stripe = require("stripe")("sk_test_eROE1pkR0utGcbnT8VWLRPtW");
module.exports = {
	getTvs(req, res) {
		const db = req.app.get("db");
		db.getAllTvs()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	getItem(req, res) {
		const db = req.app.get("db");
		db.getAll()
			.then(results => res.status(200).json(results))
			.catch(console.log);
	},
	getPhone(req, res) {
		const db = req.app.get("db");
		db.getAllPhones()
			.then(response => res.status(200).json(response))
			.catch(console.log);
	},
	getAcessorys(req, res) {
		const db = req.app.get("db");
		db.getAllAccesory()
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
	},
	checkout(req, res) {
		const { token, total } = req.body;
		const stripePayload = {
			amount: Math.round(Number(total) * 100),
			currency: "usd",
			description: "Deliveroo Charge",
			source: token,
			statement_descriptor: "Somehting somehting"
		};
		const charge = stripe.charges.create(stripePayload);
		charge
			.then(data => {
				res.sendStatus(200);
			})
			.catch(e => {
				res.status(e.statusCode).send(e.message);
			});
	}
};

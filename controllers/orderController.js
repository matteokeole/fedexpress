const Bar = require("../models/Bar");
const {Order} = require("../models/Order");

const orderController = {
	async read(request, response) {
		const orderId = request.params.orderId;
		const order = await Order.findByPk(orderId);

		if (!order) {
			return response
				.status(404)
				.json("No order found with the given ID.");
		}

		return response
			.status(200)
			.json(order);
	},
	async readByBar(request, response) {
		//
	},
	async create(request, response) {
		if (!request.form.isValid) {
			return response
				.status(400)
				.json("Invalid form.");
		}

		const order = await Order.create(request.form);

		return response
			.status(201)
			.json(order);
	},
	async update(request, response) {
		if (!request.form.isValid) {
			return response
				.status(400)
				.json("Invalid form.");
		}

		const orderId = request.params.orderId;

		try {
			const order = await Order.update(request.form, {
				where: {
					id: orderId,
				},
			});

			return response
				.status(200)
				.json(order);
		} catch {
			return response
				.status(404)
				.json("No order found with the given ID.");
		}
	},
	async delete(request, response) {
		const orderId = request.params.orderId;
		const order = await Order.findByPk(orderId);

		if (!order) {
			return response
				.status(404)
				.json("No order found with the given ID.");
		}

		Order.destroy({
			where: {
				id: orderId,
			},
		});

		return response
			.status(200)
			.json("The order has been deleted.");
	},
};

module.exports = orderController;
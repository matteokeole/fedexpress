const Bar = require("../models/Bar");

const barController = {
	async readAll(req, res) {
		try {
			const result = await Bar.findAll()
			return res.status(200).send(result)
		} catch (error) {
			return res.status(500).send({ message: 'Error retrieve bar: ', error })
		}
	},

	async read(req, res) {
		const id = req.params.barId
		const result = await Bar.findByPk(id)
		try {
			return res.status(200).send(result)
		} catch (error) {
			return res.status(500).send({ message: 'Error retrieve bar: ', error })
		}
	},
	
	async create(req, res) {
			const bar = { name, address, tel, email, description } = req.body
			try {
				const result = await Bar.create(bar)
				return res.status(200).send(result)
			} catch (error) {
				return res.status(500).send({ message: 'Error create bar: ', error })
			}
		},

	async update(req, res) {
			const id = req.params.barId
			const bar = { name, address, tel, email, description } = req.body
			try {
				const result = await Bar.update(bar, { where: { id: id } })
				return res.status(200).send(result)
			} catch (error) {
				return res.status(500).send({ message: 'Error update bar: ', error })
			}

		},
	async delete (req, res) {
			const id = req.params.barId
			try {
				const result = await Bar.destroy({ where: { id: id } })
				if (result === 0) {
					return res.status(404).send({ message: 'Bar missing' });
				}
				return res.status(200).send({ message: 'Bar delete with success' });

			} catch (error) {
				return res.status(500).send({ message: 'Error update bar: ', error })
			}
		},
	};

	module.exports = barController;
const Tale = require('../models/Tale');
// const axios = require('axios');

module.exports = {
    async store(req, res) {
		const { title, description } = req.body;
		const tale = await Tale.create({
			title,
			description
		});

		return res.json({ ok: tale});
	},
	
	async getTales(req, res) {
		const tales = await Tale.find((err, tales)=>{
			return tales;
		});
		return res.json({ ok: tales});
    }
}
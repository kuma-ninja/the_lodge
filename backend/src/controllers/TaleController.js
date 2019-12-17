const Tale = require('../models/Tale');
// const axios = require('axios');

module.exports = {
    async store(req, res) {
		const { title, description, image1, image2 } = req.body;
		const tale = await Tale.create({
			title, description,
			image1, image2
		});

		return res.json({ "tale": tale});
	},
	
	async getTales(req, res) {
		const tales = await Tale.find((err, tales)=>{
			return tales;
		});
		return res.json({ "tales": tales});
	},
	
	async getTale(req, res){
		const {id} = req.query;
		const tale = await Tale.find({_id:id},(err, tale)=>{
			return tale;
		});
		return res.json({ "tale": tale});
	},
}
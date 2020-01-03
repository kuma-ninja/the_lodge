const Image = require('../models/Image');

module.exports = {
	async store(req, res) {
		const { image_name, image_data } = req.body;
		let image = await Image.find({image_name:image_name},(err, image)=>{
			return image;
		});
		if(image.length == 0){
			image = await Image.create({
				image_name, image_data
			});
		}
		return res.json({image});
	},

	async getImages(req, res) {
		const images = await Image.find((err, images)=>{
			return images;
		});
		return res.json({ "images": images});
	},
	
	async getImage(req, res){
		const image_name = req.originalUrl.split('/')[req.originalUrl.split('/').length - 1];
		// const tale = await Image.findByIdAndDelete({_id:id},(err, tale)=>{
		const image = await Image.find({image_name:image_name},(err, image)=>{
			return image;
		}).then((image)=>{
			const data = image[0].image_data.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
			const img = Buffer.from(data, 'base64');
			res.writeHead(200, {
				'Content-Type': 'image/png',
				'Content-Length': img.length
			});
			res.end(img);
		});
	},
}
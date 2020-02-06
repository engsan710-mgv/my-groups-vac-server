exports.home = function (req, res) {
  res.send('GET request to the homepage')
}


const ep1 = require('./ep1/ep1')
exports.ep1 = function (req, res) {
	ep1.main(req, res)
}
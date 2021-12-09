var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
}); */

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

function show(req, res) {
	res.render('skills/show', {
		skill: Skill.getOne(req.params.id),
	});
}

module.exports = router;

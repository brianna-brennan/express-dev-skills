var express = require('express');
var router = express.Router();

// Require the controller that exports
// the todo CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/todos"

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

// GET "/skills/:id" - Show Route
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

module.exports = router;

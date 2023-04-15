var express = require('express');
const { searchUsersController, getUserController } = require('../controllers/userController');
var router = express.Router();




/**GET single User */
router.get('/:name',getUserController)

/* GET users list matching any of the query params. */

router.get('/',searchUsersController)


module.exports = router;

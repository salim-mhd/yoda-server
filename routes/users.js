const express = require('express');
const router = express.Router();

const {register} = require('../Controller/usercontroller/userController')

/* Post users Details. */
router.post('/userRegister',register);

module.exports = router;

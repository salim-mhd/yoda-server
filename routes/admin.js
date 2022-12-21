const express = require('express');
const router = express.Router();

const { postadminlogin , getUserDetails , userStatusChange , userDelete , deleteAllUserDetails } = require('../Controller/admincontroller/admincontroller')

/* Post users Details. */
router.post('/adiminlogin', postadminlogin);

/* Get users Details. */
router.get('/userdetails', getUserDetails);

/* change users Status. */
router.put('/changeStatus', userStatusChange);

/* Delete one User. */
router.put('/userDelete', userDelete);

/* Delete All Users. */
router.put('/deleteAllUsers', deleteAllUserDetails);

module.exports = router;

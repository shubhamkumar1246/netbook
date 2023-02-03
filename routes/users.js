const express = require ('express');
const router = express.Router();
const homecontroller = require('../controllers/userscontroller');
//console.log("router loaded");
router.get('/',usercontroller.profile)
router.get('/user',require('./users'))


module.exports = router;
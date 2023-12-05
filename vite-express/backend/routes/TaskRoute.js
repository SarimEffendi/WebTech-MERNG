const { Router } = require('express');

const getTasks = require('../controllers/TaskController');

const router = Router();


router.get('/get', getTasks);

module.exports = router;
const treatmentController = require('../controllers/treatmentController');
const router = require('express').Router();
router.get('/allservice', treatmentController.getAllService)
module.exports = router;
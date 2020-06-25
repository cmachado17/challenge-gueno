const {Router} = require ('express');
const router = Router();

const {getInfo, getCuit} = require('../controllers/index.controllers');

router.get('/get-info/:id', getInfo);
router.get('/get-cuit/:id', getCuit);

module.exports = router;
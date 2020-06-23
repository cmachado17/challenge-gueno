const {Router} = require ('express');
const router = Router();

const {getInfo} = require('../controllers/index.controllers');

router.get('/', getInfo);

module.exports = router;
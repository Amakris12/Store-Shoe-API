const express = require('express')
const router = express.Router();

const {getAllShoes,updateShoe,deleteShoe,createShoe,singleShoe} = require('../controllers/shoe')

router.route('/').get(getAllShoes)
router.route('/:id').patch(updateShoe).get(singleShoe).delete(deleteShoe).post(createShoe)

module.exports = router;
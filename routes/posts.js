const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller')


router.post('/create', postsController.create)

console.log('Post router called')

module.exports = router

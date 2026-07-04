const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

// Fetch all products
router.get('/', (req, res) => {
    // Implement logic to fetch all products here
});

// Create a new product
router.post('/', (req, res) => {
    // Implement logic to create a new product here
});

module.exports = router;
javascript
const express = require('express');
const router = express.Router();
const CartService = require('../services/CartService');

// Assume the following is defined in services/CartService.js for demonstration purposes
const cartRepository = new CartService(); // Replace with actual service implementation if needed

/**
 * Handles GET requests to the cart endpoint.
 */
router.get('/cart', (req, res) => {
    res.send(cartRepository.getAll());
});

/**
 * Handles POST request to add a product to the user's cart.
 */
router.post('/add-product', (req, res) => {
    const productId = req.body.productId;
    cartRepository.addProductToCart(productId)
        .then(() => res.status(201).json({ message: 'Product added successfully' }))
        .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
});

/**
 * Handles DELETE request to remove a product from the user's cart.
 */
router.delete('/remove-product', (req, res) => {
    const productId = req.body.productId;
    cartRepository.removeProductFromCart(productId)
        .then(() => res.status(204).send())
        .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
});

module.exports = router;
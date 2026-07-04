const Product = require('../models/product');

module.exports = function (req, res) {
    const query = req.query.q || '';
    Product.find({ title: new RegExp(query, 'i') }, (err, results) => {
        if (!results.length)
            return res.status(404).send('No products found');
        return res.json(results);
    });
};
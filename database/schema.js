const mongoose = require('mongoose');

// Define the User schema with required fields
const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

// Define the Product schema with required fields
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
});

// Define the Order schema with required fields
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
});

// Define the CartItem schema with required fields
const cartItemSchema = new mongoose.Schema({
  orderId: { type: mongoose.Types.ObjectId, ref: 'Order', required: true },
  productId: { type: mongoose.Types.ObjectId, ref: 'Product' },
});

// Create the collection for Users
mongoose.model('User', userSchema);

// Create the collection for Products
mongoose.model('Product', productSchema);

// Create the collection for Orders
mongoose.model('Order', orderSchema);

// Create the collection for Cart Items
mongoose.model('CartItem', cartItemSchema);
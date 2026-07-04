const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Seed data for users
const users = [
  { name: 'Alice', username: 'alice' },
  { name: 'Bob', username: 'bob' }
];

users.forEach(user => {
  const newUser = mongoose.model('User').create(user);
  console.log(`Created user ${user.name}`);
});

// Seed data for products
const products = [
  { name: 'Product A', description: 'Description of Product A' },
  { name: 'Product B', description: 'Description of Product B' }
];

products.forEach(product => {
  const newProduct = mongoose.model('Product').create(product);
  console.log(`Created product ${product.name}`);
});

// Seed data for orders
const orders = [
  { user: 'alice', product: 'Product A', quantity: 1 },
  { user: 'bob', product: 'Product B', quantity: 2 }
];

orders.forEach(order => {
  const newOrder = mongoose.model('Order').create(order);
  console.log(`Created order ${order.product} for user ${order.user}`);
});

// Seed data for cart items
const cartItems = [
  { order: '1', product: 'Product A', quantity: 1 },
  { order: '2', product: 'Product B', quantity: 1 }
];

cartItems.forEach(item => {
  const newItem = mongoose.model('CartItem').create(item);
  console.log(`Created cart item ${item.product} for user ${item.order}`);
});